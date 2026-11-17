'use client'

import { useState } from 'react'
import PlaceCard from '@/components/PlaceCard'
import { cafes } from '@/lib/data/cafes'

const FILTERS = ['All', 'Salamanca Rotation', 'Worth the Walk', 'Near Botánico']

const QUICK_REF = [
  { label: 'Best cortado',          value: 'Hola Coffee Lagasca' },
  { label: 'Best 2-hour reading sit', value: 'Religion (upper window) · HanSo' },
  { label: 'Pre-Retiro walk stop',  value: 'BUNA (takeaway + cookie)' },
  { label: 'Pairs with IML appt',   value: 'East Crema (same street)' },
  { label: 'One special drink',     value: "Naji's pistachio latte" },
  { label: 'The OG — go once',      value: 'Toma Café, Malasaña' },
]

export default function CafesPage() {
  const [active, setActive] = useState('All')

  const filtered = cafes.filter((c) => {
    if (active === 'All') return true
    return c.tags.some((t) => t.toLowerCase().includes(active.toLowerCase()))
  })

  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      <div className="py-10 border-b" style={{ borderColor: 'var(--dust)' }}>
        <div
          className="text-[10px] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--sage)' }}
        >
          Your Café List
        </div>
        <h1
          className="text-4xl md:text-5xl font-light italic leading-tight mb-3"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Cafés
        </h1>
        <p
          className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--muted)' }}
        >
          Cortado, journal, book. In that order. Sources: Condé Nast Traveler, The Infatuation, Barista Magazine, European Coffee Trip, World's 100 Best Coffee Shops 2025.
        </p>
      </div>

      {/* Quick reference */}
      <div className="ink-block my-6">
        <div
          className="text-[10px] tracking-[3px] uppercase mb-4"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
        >
          Quick Reference
        </div>
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {QUICK_REF.map(({ label, value }) => (
            <div key={label}>
              <div
                className="text-[9px] tracking-[1px] uppercase mb-0.5"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.4)' }}
              >
                {label}
              </div>
              <div
                className="text-[12px] leading-relaxed"
                style={{ color: 'rgba(245,240,232,0.85)' }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 py-6 border-b" style={{ borderColor: 'var(--dust)' }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="px-3 py-1.5 text-[10px] tracking-[1px] uppercase transition-colors"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              borderRadius: '2px',
              border: `1px solid ${active === f ? 'var(--sage)' : 'var(--dust)'}`,
              background: active === f ? 'var(--sage)' : 'transparent',
              color: active === f ? 'var(--cream)' : 'var(--muted)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div>
        {filtered.map((c) => (
          <PlaceCard key={c.id} place={c} />
        ))}
      </div>
    </div>
  )
}
