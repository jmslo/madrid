import PlaceCard from '@/components/PlaceCard'
import { shopping } from '@/lib/data/shopping'

const THRIFT_SCHEDULE = [
  { week: 'Week 1 (Apr 1–7)',     action: 'Piel de Mariposa (your neighborhood) · warm-up' },
  { week: 'Week 2 (Apr 8–14)',    action: 'Calle Velarde full thrift afternoon + HanSo Café' },
  { week: 'Apr 11–12 (Motores)', action: 'Motores exterior market has second-hand/vintage section' },
  { week: 'Every Sunday (not Apr 19)', action: 'El Rastro La Latina — the original, for thrift energy' },
]

export default function ShoppingPage() {
  const artisan = shopping.filter((s) => s.tags.some((t) => t === 'On Your Street' || t === 'Artisan'))
  const thrift   = shopping.filter((s) => s.tags.includes('Thrift Route'))

  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      <div className="py-10 border-b" style={{ borderColor: 'var(--dust)' }}>
        <div
          className="text-[10px] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--sage)' }}
        >
          Shopping
        </div>
        <h1
          className="text-4xl md:text-5xl font-light italic leading-tight mb-3"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Shopping
        </h1>
        <p
          className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--muted)' }}
        >
          Artisan finds on your block. A full afternoon thrift route in Malasaña. Things you'll actually bring home.
        </p>
      </div>

      {/* On Your Street / Artisan */}
      <div className="mt-8">
        <div
          className="text-[10px] tracking-[2px] uppercase mb-4 pb-2 border-b"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--terracotta)', borderColor: 'var(--dust)' }}
        >
          On Your Street · Artisan
        </div>
        {artisan.map((s) => (
          <PlaceCard key={s.id} place={s} />
        ))}
      </div>

      {/* Thrift route */}
      <div className="mt-8">
        <div
          className="text-[10px] tracking-[2px] uppercase mb-4 pb-2 border-b"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--terracotta)', borderColor: 'var(--dust)' }}
        >
          Malasaña Thrift Route
        </div>

        {/* Weekly thrift schedule */}
        <div className="ink-block mb-6">
          <div
            className="text-[10px] tracking-[3px] uppercase mb-4"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
          >
            Weekly Thrift Schedule
          </div>
          <div className="flex flex-col gap-2">
            {THRIFT_SCHEDULE.map(({ week, action }) => (
              <div key={week} className="grid gap-4" style={{ gridTemplateColumns: '160px 1fr' }}>
                <div
                  className="text-[10px] tracking-[1px] uppercase pt-0.5"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.4)' }}
                >
                  {week}
                </div>
                <div
                  className="text-[12px] leading-relaxed"
                  style={{ color: 'rgba(245,240,232,0.85)' }}
                >
                  {action}
                </div>
              </div>
            ))}
          </div>
        </div>

        {thrift.map((s) => (
          <PlaceCard key={s.id} place={s} />
        ))}
      </div>
    </div>
  )
}
