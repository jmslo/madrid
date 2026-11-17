'use client'

import { useState, type FormEvent } from 'react'
import { REC_SUBMIT_URL } from '@/lib/site/content'

type Status = 'idle' | 'sending' | 'sent' | 'offline'

export default function RecForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const rec = String(data.get('rec') ?? '').trim()
    if (!rec) return
    // Honeypot: real visitors never see or fill this field.
    if (data.get('website')) {
      setStatus('sent')
      return
    }
    if (!REC_SUBMIT_URL) {
      setStatus('offline')
      return
    }

    setStatus('sending')
    try {
      // Same shape as /reads/recs: a no-cors POST to a Google Apps Script web app
      // that appends a row to a Google Sheet.
      await fetch(REC_SUBMIT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          rec,
          name: String(data.get('name') ?? '').trim(),
          page: 'home',
          timestamp: new Date().toISOString(),
        }),
      })
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('offline')
    }
  }

  return (
    <form className="rec" onSubmit={onSubmit}>
      <p className="sub-label">Your turn</p>
      <h3 className="rec-title">
        I have <em>a rec</em>
      </h3>
      <label htmlFor="rec-input" className="sr-only">
        Book recommendation
      </label>
      <input id="rec-input" name="rec" type="text" placeholder="Title, author" required autoComplete="off" />
      <div className="rec-row">
        <label htmlFor="rec-name" className="sr-only">
          Your name (optional)
        </label>
        <input id="rec-name" name="name" type="text" placeholder="From (optional)" autoComplete="off" />
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending' : 'Send'}
        </button>
      </div>
      <input className="rec-hp" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p className="rec-status" role="status">
        {status === 'sent' && 'Got it, thank you.'}
        {status === 'offline' && 'This form isn’t connected yet, so that didn’t send.'}
      </p>
    </form>
  )
}
