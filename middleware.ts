// Password-protects everything under /madrid with a styled password page.
// The rest of the site stays public.
// The password is set in Vercel: Project → Settings → Environment Variables → MADRID_PASSWORD.
// Locally it comes from .env.local (see .env.example).

import type { NextRequest } from 'next/server'

export const config = {
  matcher: ['/madrid', '/madrid/:path*'],
}

const COOKIE = 'madrid_access'
const THIRTY_DAYS = 60 * 60 * 24 * 30

// The cookie holds a hash of the password, so changing MADRID_PASSWORD signs everyone out.
async function accessToken(password: string) {
  const data = new TextEncoder().encode('jessicaslocum.com/madrid:' + password)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export default async function middleware(request: NextRequest) {
  const password = process.env.MADRID_PASSWORD

  // Fail closed: if no password is configured, don't show the pages.
  if (!password) {
    return new Response('Password not configured.', {
      status: 503,
      headers: { 'X-Robots-Tag': 'noindex', 'Cache-Control': 'no-store' },
    })
  }

  const token = await accessToken(password)
  const path = request.nextUrl.pathname

  if (request.method === 'POST') {
    const form = await request.formData()
    if (form.get('password') === password) {
      // Set the cookie, then let the browser reload the page it asked for. A redirect
      // header would need an absolute URL, which would name this project's own domain
      // when the app is reached through a rewrite from another project; a relative
      // refresh keeps the visitor on whichever domain they came in on.
      const to = safePath(path)
      return new Response(
        `<!DOCTYPE html><meta charset="UTF-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${to}"><title>Private</title><a href="${to}">Continue</a>`,
        {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Set-Cookie': `${COOKIE}=${token}; Path=/madrid; Max-Age=${THIRTY_DAYS}; HttpOnly; Secure; SameSite=Lax`,
            'Cache-Control': 'no-store',
            'X-Robots-Tag': 'noindex, nofollow',
          },
        },
      )
    }
    return passwordPage(path, true)
  }

  if (request.cookies.get(COOKIE)?.value === token) return // continue to the page

  return passwordPage(path, false)
}

// Only ever echo back a plain path under /madrid.
function safePath(path: string) {
  const clean = path.replace(/[^\w\-./]/g, '')
  return clean.startsWith('/madrid') && !clean.includes('//') ? clean : '/madrid'
}

function passwordPage(path: string, wrong: boolean) {
  const action = safePath(path)
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Private</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      background: #f4eee3; color: #221e19; padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    }
    main { max-width: 360px; width: 100%; text-align: center; }
    h1 { font-family: 'Iowan Old Style', Georgia, serif; font-weight: 400; font-style: italic; font-size: 2.5rem; line-height: 1.1; }
    .rule { width: 40px; height: 1px; background: #b8401f; margin: 20px auto; }
    p { color: #5c5448; margin-bottom: 26px; line-height: 1.5; }
    input {
      width: 100%; padding: 13px 16px; font: inherit; font-size: 1rem; text-align: center;
      background: #fbf8f2; color: inherit; border: 1px solid #d8ccb6; border-radius: 999px; outline: none;
    }
    input:focus { border-color: #b8401f; }
    button {
      margin-top: 12px; width: 100%; padding: 13px 16px; font: inherit; font-weight: 600; font-size: 0.8rem;
      letter-spacing: 0.14em; text-transform: uppercase;
      background: #221e19; color: #f4eee3; border: none; border-radius: 999px; cursor: pointer;
    }
    button:hover { background: #b8401f; }
    .error { margin: 14px 0 0; color: #b8401f; font-size: 0.9rem; }
  </style>
</head>
<body>
  <main>
    <h1>Private</h1>
    <div class="rule"></div>
    <p>This part of the site needs a password.</p>
    <form method="POST" action="${action}">
      <input type="password" name="password" placeholder="Password" aria-label="Password" autofocus required>
      <button type="submit">Enter</button>
    </form>
    ${wrong ? '<p class="error">That’s not quite right. Try again.</p>' : ''}
  </main>
</body>
</html>`
  return new Response(html, {
    status: wrong ? 401 : 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}
