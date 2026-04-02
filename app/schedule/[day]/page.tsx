import { notFound } from 'next/navigation'
import Link from 'next/link'
import { schedule } from '@/lib/data/schedule'
import DayCard from '@/components/DayCard'

interface Props {
  params: { day: string }
}

export function generateStaticParams() {
  return schedule.map((d) => ({ day: String(d.dayNumber) }))
}

export default function DayPage({ params }: Props) {
  const dayNum = parseInt(params.day)
  const day = schedule.find((d) => d.dayNumber === dayNum)
  if (!day) notFound()

  const prev = schedule.find((d) => d.dayNumber === dayNum - 1)
  const next = schedule.find((d) => d.dayNumber === dayNum + 1)

  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      {/* Back */}
      <div className="py-6 border-b" style={{ borderColor: 'var(--dust)' }}>
        <Link
          href="/schedule"
          className="text-[10px] tracking-[2px] uppercase"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          ← All Days
        </Link>
      </div>

      {/* Day detail — full DayCard, not linkable */}
      <DayCard day={day} linkable={false} />

      {/* Spend block */}
      {day.spend && day.spend.length > 0 && (
        <div className="ink-block mt-6">
          <div
            className="text-[9px] tracking-[2px] uppercase mb-4"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
          >
            Day {day.dayNumber} Spend
          </div>
          <div
            className="grid gap-x-6 gap-y-1 max-w-md"
            style={{ gridTemplateColumns: '1fr auto' }}
          >
            {day.spend.map((item, i) => (
              <>
                <div key={`l-${i}`} className="text-[13px]" style={{ color: 'rgba(245,240,232,0.85)' }}>
                  {item.label}
                </div>
                <div
                  key={`v-${i}`}
                  className="text-right text-[13px]"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.85)' }}
                >
                  ${item.amount.toFixed(2)}
                </div>
              </>
            ))}
            <div
              className="pt-3 text-[10px] tracking-[1px] uppercase border-t mt-1"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)', borderColor: 'rgba(245,240,232,0.15)' }}
            >
              Day Total
            </div>
            <div
              className="pt-3 text-right text-[10px] border-t mt-1"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)', borderColor: 'rgba(245,240,232,0.15)' }}
            >
              ${day.spend.reduce((s, i) => s + i.amount, 0).toFixed(2)}
            </div>
          </div>
        </div>
      )}

      {/* Prev / Next navigation */}
      <div className="flex justify-between mt-10 pt-6 border-t" style={{ borderColor: 'var(--dust)' }}>
        {prev ? (
          <Link
            href={`/schedule/${prev.dayNumber}`}
            className="text-[10px] tracking-[2px] uppercase"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
          >
            ← Day {prev.dayNumber}
          </Link>
        ) : <span />}
        {next ? (
          <Link
            href={`/schedule/${next.dayNumber}`}
            className="text-[10px] tracking-[2px] uppercase"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
          >
            Day {next.dayNumber} →
          </Link>
        ) : <span />}
      </div>
    </div>
  )
}
