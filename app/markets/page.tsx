import PlaceCard from '@/components/PlaceCard'
import { markets } from '@/lib/data/markets'

const CALENDAR = [
  { date: 'Every Sunday', label: 'El Rastro · 9am–3pm' },
  { date: 'Every Sat (spring)', label: 'Malamarket · Plaza Dos de Mayo' },
  { date: 'Apr 11–12 (2nd weekend)', label: 'Mercado de Motores · 11am–9pm' },
  { date: 'Mon–Sat, daily', label: 'Mercadillo Felipe II · Your barrio' },
  { date: 'Mon–Sat 9am–8pm', label: 'Mercado de la Paz · Your street' },
  { date: 'Daily (best weekends)', label: 'Cuesta de Moyano books' },
]

export default function MarketsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      <div className="py-10 border-b" style={{ borderColor: 'var(--dust)' }}>
        <div
          className="text-[10px] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--sage)' }}
        >
          Markets
        </div>
        <h1
          className="text-4xl md:text-5xl font-light italic leading-tight mb-3"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Markets
        </h1>
        <p
          className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--muted)' }}
        >
          Farmers markets, flea markets, book stalls, vintage. Madrid has a strong market culture — these are the ones worth your Sundays and Saturdays.
        </p>
      </div>

      {/* April calendar */}
      <div className="ink-block my-6">
        <div
          className="text-[10px] tracking-[3px] uppercase mb-4"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
        >
          Market Calendar · April 2026
        </div>
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          {CALENDAR.map(({ date, label }) => (
            <div key={date}>
              <div
                className="text-[9px] tracking-[1px] uppercase mb-0.5"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.4)' }}
              >
                {date}
              </div>
              <div
                className="text-[12px] leading-relaxed"
                style={{ color: 'rgba(245,240,232,0.85)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-4 pt-4 text-[10px] tracking-[1px]"
          style={{
            fontFamily: 'var(--font-dm-mono), monospace',
            color: 'rgba(245,240,232,0.4)',
            borderTop: '1px solid rgba(245,240,232,0.1)',
          }}
        >
          Note: Apr 19 is retrieval day — skip Sunday Rastro that week.
        </div>
      </div>

      {/* Best market day callout */}
      <div
        className="border p-5 mb-6"
        style={{ borderColor: 'var(--gold)', borderLeft: '3px solid var(--gold)' }}
      >
        <div
          className="text-[9px] tracking-[2px] uppercase mb-1"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
        >
          Best Market Day
        </div>
        <div className="text-[14px]" style={{ color: 'var(--ink)' }}>
          Sat Apr 11: Salesas morning → Motores afternoon → Rastro Sun Apr 12
        </div>
      </div>

      {/* Cards */}
      <div>
        {markets.map((m) => (
          <PlaceCard key={m.id} place={m} />
        ))}
      </div>
    </div>
  )
}
