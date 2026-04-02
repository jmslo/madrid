'use client'

import { useState } from 'react'
import PlaceCard from '@/components/PlaceCard'
import { restaurants } from '@/lib/data/restaurants'

const FILTERS = [
  'All',
  "Don't Miss",
  'Previously Loved',
  'New to Try',
  'Friend Rec',
  'Book Ahead',
  'Solo-friendly',
]

export default function RestaurantsPage() {
  const [active, setActive] = useState('All')

  const filtered = restaurants.filter((r) => {
    if (active === 'All') return true
    if (active === 'Book Ahead') return r.reservationNeeded === true
    return r.tags.some((t) => t.toLowerCase().includes(active.toLowerCase()))
  })

  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      <div className="py-10 border-b" style={{ borderColor: 'var(--dust)' }}>
        <div
          className="text-[10px] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          Where to Eat
        </div>
        <h1
          className="text-4xl md:text-5xl font-light italic leading-tight mb-3"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Restaurants
        </h1>
        <p
          className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--muted)' }}
        >
          Solo-friendly. Jamón, seafood, pintxos, cocido, and the occasional Chinese restaurant that will remind you why Madrid isn't just about Spanish food.
        </p>
        <div
          className="text-[10px] tracking-[1px] mt-2"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          $ = under €15 · $$ = €15–30 · $$$ = €30–50
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
              border: `1px solid ${active === f ? 'var(--terracotta)' : 'var(--dust)'}`,
              background: active === f ? 'var(--terracotta)' : 'transparent',
              color: active === f ? 'var(--cream)' : 'var(--muted)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Count */}
      <div
        className="py-4 text-[10px] tracking-[2px] uppercase"
        style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
      >
        {filtered.length} {filtered.length === 1 ? 'place' : 'places'}
      </div>

      {/* Cards */}
      <div>
        {filtered.map((r) => (
          <PlaceCard key={r.id} place={r} />
        ))}
      </div>
    </div>
  )
}
