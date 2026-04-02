'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',            label: 'Overview'   },
  { href: '/schedule',    label: 'Schedule'   },
  { href: '/restaurants', label: 'Restaurants'},
  { href: '/cafes',       label: 'Cafés'      },
  { href: '/markets',     label: 'Markets'    },
  { href: '/shopping',    label: 'Shopping'   },
  { href: '/budget',      label: 'Budget'     },
  { href: '/medical',     label: 'Medical'    },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav
      className="border-b"
      style={{ borderColor: 'var(--dust)', background: 'var(--cream)' }}
    >
      {/* Desktop nav */}
      <div className="hidden md:flex overflow-x-auto">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="px-5 py-4 text-[11px] tracking-[2px] uppercase whitespace-nowrap transition-colors"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              color: isActive(href) ? 'var(--terracotta)' : 'var(--muted)',
              borderBottom: isActive(href)
                ? '2px solid var(--terracotta)'
                : '2px solid transparent',
              marginBottom: '-1px',
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile nav */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4"
          style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
        >
          <span
            className="text-[11px] tracking-[2px] uppercase"
            style={{ color: 'var(--terracotta)' }}
          >
            {links.find((l) => isActive(l.href))?.label ?? 'Menu'}
          </span>
          <span
            className="text-[10px] tracking-[2px] uppercase"
            style={{ color: 'var(--muted)' }}
          >
            {open ? 'Close' : 'Nav ↓'}
          </span>
        </button>

        {open && (
          <div
            className="border-t"
            style={{ borderColor: 'var(--dust)' }}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center px-5 py-3 border-b text-[11px] tracking-[2px] uppercase"
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  borderColor: 'var(--dust)',
                  color: isActive(href) ? 'var(--terracotta)' : 'var(--muted)',
                  borderLeft: isActive(href)
                    ? '2px solid var(--terracotta)'
                    : '2px solid transparent',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
