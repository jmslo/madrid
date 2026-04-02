import Link from 'next/link'
import type { DayEntry } from '@/lib/types'

const TAG_STYLES: Record<string, string> = {
  build:     'tag-build',
  culture:   'tag-culture',
  job:       'tag-job',
  medical:   'tag-medical',
  social:    'tag-social',
  reading:   'tag-reading',
  music:     'tag-music',
  personal:  'tag-personal',
  transport: 'tag-transport',
  together:  'tag-together',
}

const WEEK_COLORS: Record<number, string> = {
  1: 'var(--terracotta)',
  2: 'var(--sage)',
  3: 'var(--gold)',
  4: 'var(--recovery)',
}

function Tag({ label }: { label: string }) {
  const key = label.toLowerCase().replace(/[^a-z]/g, '')
  const cls = TAG_STYLES[key] ?? 'tag-personal'
  return (
    <span
      className={`inline-block px-2 py-0.5 text-[9px] tracking-[1px] uppercase ${cls}`}
      style={{ fontFamily: 'var(--font-dm-mono), monospace', borderRadius: '2px' }}
    >
      {label}
    </span>
  )
}

interface DayCardProps {
  day: DayEntry
  linkable?: boolean
}

export default function DayCard({ day, linkable = true }: DayCardProps) {
  const weekColor = WEEK_COLORS[day.weekNumber] ?? 'var(--dust)'
  const isDone = day.status === 'done'

  const inner = (
    <div
      className="grid gap-0 border-b py-6"
      style={{
        gridTemplateColumns: '80px 1fr',
        borderColor: 'var(--dust)',
        borderLeft: isDone ? `4px solid var(--sage)` : undefined,
        paddingLeft: isDone ? '16px' : undefined,
      }}
    >
      {/* Date column */}
      <div className="pt-0.5 pr-5">
        <div
          className="text-4xl font-light leading-none"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            color: isDone ? 'var(--sage)' : 'var(--ink)',
          }}
        >
          {String(day.dayNumber).padStart(2, '0')}
        </div>
        <div
          className="text-[9px] tracking-[2px] uppercase mt-0.5"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          {day.weekday}
        </div>
        <div
          className="text-[9px] tracking-[1px] uppercase mt-1"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: weekColor, opacity: 0.8 }}
        >
          {day.date}
        </div>
      </div>

      {/* Content column */}
      <div>
        <h3
          className="text-xl font-normal leading-tight mb-1"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          {day.title}
          {isDone && (
            <span
              className="ml-3 text-[11px] tracking-[1px] align-middle"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--sage)', fontWeight: 400 }}
            >
              ✓ DONE
            </span>
          )}
        </h3>
        <div
          className="text-[10px] tracking-[1px] uppercase mb-3"
          style={{
            fontFamily: 'var(--font-dm-mono), monospace',
            color: day.title.includes('Best Friend') || day.title.includes('Together') || day.title.includes('Retrieval')
              ? 'var(--terracotta)'
              : 'var(--muted)',
          }}
        >
          {day.subtitle}
        </div>

        {/* DONE view */}
        {isDone && day.happened && (
          <>
            <div className="done-panel mb-3">
              <div
                className="text-[9px] tracking-[2px] uppercase mb-2"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--sage)' }}
              >
                What happened
              </div>
              {day.happened.map((item, i) => (
                <div key={i} className="text-[12px] leading-[1.9]" style={{ color: 'var(--ink)' }}>
                  ✓ {item}
                </div>
              ))}
            </div>
            {day.didNotHappen && day.didNotHappen.length > 0 && (
              <div className="not-done-panel mb-3">
                <div
                  className="text-[9px] tracking-[2px] uppercase mb-2"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
                >
                  What did not happen
                </div>
                {day.didNotHappen.map((item, i) => (
                  <div key={i} className="text-[12px] leading-[1.9]" style={{ color: 'var(--muted)' }}>
                    ✗ {item}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* UPCOMING view — time blocks */}
        {!isDone && day.blocks && (
          <div className="flex flex-col gap-1.5 mb-3">
            {day.blocks.map((block, i) => (
              <div
                key={i}
                className="grid gap-3 items-baseline text-[13.5px]"
                style={{ gridTemplateColumns: '90px 1fr' }}
              >
                <div
                  className="text-[10px] tracking-[1px] uppercase pt-0.5 shrink-0"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
                >
                  {block.time}
                </div>
                <div className="leading-[1.5]" style={{ color: 'var(--ink)' }}>
                  {block.text}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Alerts */}
        {day.alerts?.map((a, i) => (
          <div key={i} className="alert-bar mt-2">
            {a}
          </div>
        ))}

        {/* Tags */}
        {day.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {day.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        )}

        {/* Milestones */}
        {day.milestones?.map((m, i) => (
          <div key={i} className="milestone-bar mt-3">
            {m}
          </div>
        ))}
      </div>
    </div>
  )

  if (!linkable) return inner

  return (
    <Link href={`/schedule/${day.dayNumber}`} className="block hover:opacity-90 transition-opacity">
      {inner}
    </Link>
  )
}
