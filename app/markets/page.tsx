import { markets } from '@/lib/data/markets'
import MarketImage from './MarketImage'

// ─── Per-market metadata (image, type, your-dates) ───────────────────────────

type MarketType = 'Shopping' | 'Food' | 'Both'

const MARKET_META: Record<string, { image: string; type: MarketType; yourDates?: string }> = {
  'el-rastro': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/El_Rastro_-_Madrid_-_Spain_-_50520400062.jpg/1280px-El_Rastro_-_Madrid_-_Spain_-_50520400062.jpg',
    type: 'Shopping',
    yourDates: 'Sun Apr 5 · Sun Apr 12 · skip Apr 19 (retrieval day)',
  },
  'mercado-de-motores': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Museo_del_Ferrocarril_de_Madrid_%2814%29.jpg/1280px-Museo_del_Ferrocarril_de_Madrid_%2814%29.jpg',
    type: 'Both',
    yourDates: 'Sat Apr 11 · Sun Apr 12',
  },
  'malamarket': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Plaza_del_Dos_de_Mayo_-_Madrid_%2801%29.jpg/1280px-Plaza_del_Dos_de_Mayo_-_Madrid_%2801%29.jpg',
    type: 'Shopping',
  },
  'mercadillo-felipe-ii': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Barrio_de_Goya%2C_Madrid_%2801%29.jpg/1280px-Barrio_de_Goya%2C_Madrid_%2801%29.jpg',
    type: 'Both',
  },
  'cuesta-de-moyano': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cuesta_de_Moyano_-_02.jpg/1280px-Cuesta_de_Moyano_-_02.jpg',
    type: 'Shopping',
  },
  'mercado-de-la-paz': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mercado_de_la_Paz_%28Madrid%29_01.jpg/1280px-Mercado_de_la_Paz_%28Madrid%29_01.jpg',
    type: 'Food',
  },
  'festival-by-salesas': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Barrio_de_Salesas_%28Madrid%29_01.jpg/1280px-Barrio_de_Salesas_%28Madrid%29_01.jpg',
    type: 'Both',
    yourDates: 'Saturday April 11',
  },
}

// ─── Type badge ───────────────────────────────────────────────────────────────

const TYPE_STYLES: Record<MarketType, { bg: string; color: string; label: string }> = {
  Shopping: { bg: '#f5ede5', color: 'var(--terracotta)', label: 'Shopping' },
  Food:     { bg: '#e8f0e4', color: 'var(--sage)',       label: 'Food' },
  Both:     { bg: '#fdf5e6', color: 'var(--gold)',       label: 'Shopping + Food' },
}

function TypeBadge({ type }: { type: MarketType }) {
  const { bg, color, label } = TYPE_STYLES[type]
  return (
    <span
      className="shrink-0 text-[8px] tracking-[1.5px] uppercase px-2 py-1 self-start"
      style={{ fontFamily: 'var(--font-dm-mono), monospace', background: bg, color }}
    >
      {label}
    </span>
  )
}

// ─── Clock icon ───────────────────────────────────────────────────────────────

function ClockIcon() {
  return (
    <svg
      width="11" height="11" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px', marginTop: '-1px', flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

// ─── Calendar block ───────────────────────────────────────────────────────────

const CALENDAR = [
  { date: 'Every Sunday',           label: 'El Rastro · 9am–3pm' },
  { date: 'Every Sat (spring)',      label: 'Malamarket · Plaza Dos de Mayo' },
  { date: 'Apr 11–12 (2nd weekend)', label: 'Mercado de Motores · 11am–9pm' },
  { date: 'Mon–Sat, daily',          label: 'Mercadillo Felipe II · your barrio' },
  { date: 'Mon–Sat 9am–8pm',         label: 'Mercado de la Paz · your street' },
  { date: 'Daily (best weekends)',    label: 'Cuesta de Moyano books' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MarketsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-20">

      {/* Header */}
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
              <div className="text-[12px] leading-relaxed" style={{ color: 'rgba(245,240,232,0.85)' }}>
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
      <div className="alert-bar mb-8">
        <strong style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)' }}>
          Best Market Day
        </strong>
        <br />
        Sat Apr 11: Salesas morning → Motores afternoon → Rastro Sun Apr 12
      </div>

      {/* 2-column card grid */}
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
      >
        {markets.map((market) => {
          const meta = MARKET_META[market.id]
          if (!meta) return null

          const hoursParts = market.hours.split(' · ')

          return (
            <div
              key={market.id}
              style={{
                border: '1px solid var(--dust)',
                background: 'var(--cream)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Photo */}
              <MarketImage src={meta.image} name={market.name} />

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 gap-4">

                {/* Title + type badge */}
                <div className="flex items-start justify-between gap-3">
                  <h2
                    className="font-light leading-tight"
                    style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', color: 'var(--ink)' }}
                  >
                    {market.name}
                  </h2>
                  <TypeBadge type={meta.type} />
                </div>

                {/* Neighborhood + address */}
                <div
                  className="text-[10px] tracking-[1px] uppercase -mt-2"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
                >
                  {market.neighborhood}
                  <span style={{ color: 'var(--dust)', margin: '0 6px' }}>·</span>
                  {market.address}
                </div>

                {/* Hours */}
                <div
                  className="py-3 px-3"
                  style={{ background: '#f5f0e0', borderLeft: '2px solid var(--gold)' }}
                >
                  <div
                    className="flex items-center mb-1.5"
                    style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)' }}
                  >
                    <ClockIcon />
                    Hours
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {hoursParts.map((part, i) => (
                      <div
                        key={i}
                        className="text-[11px] leading-snug"
                        style={{
                          fontFamily: 'var(--font-dm-mono), monospace',
                          color: i === 0 ? 'var(--ink)' : 'var(--muted)',
                          fontWeight: i === 0 ? 400 : 300,
                        }}
                      >
                        {part}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-[13px] leading-relaxed flex-1"
                  style={{ color: 'var(--ink)' }}
                >
                  {market.description}
                </p>

                {/* Notes */}
                {market.notes && (
                  <p
                    className="text-[12px] italic leading-relaxed"
                    style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--muted)', fontSize: '13px' }}
                  >
                    {market.notes}
                  </p>
                )}

                {/* Your dates callout */}
                {meta.yourDates && (
                  <div
                    className="px-3 py-2.5"
                    style={{ background: '#fff8ee', borderLeft: '3px solid var(--gold)' }}
                  >
                    <div
                      className="text-[9px] tracking-[1.5px] uppercase mb-0.5"
                      style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
                    >
                      Your dates
                    </div>
                    <div
                      className="text-[12px]"
                      style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--ink)' }}
                    >
                      {meta.yourDates}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
