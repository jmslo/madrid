import Link from 'next/link'
import { schedule } from '@/lib/data/schedule'
import { tambreAppointments } from '@/lib/data/medical'

type CalCell = { d: number; mark?: string; dot?: string; week: number; window?: boolean; procedureDay?: boolean }
type CalRow = (CalCell | null)[]

const CALENDAR_ROWS: CalRow[] = [
  // Row 1: Apr 1–4 (Wed–Sat), padded Sun–Tue
  [null, null, null,
    { d: 1,  mark: 'Arrival',      dot: 'var(--terracotta)', week: 1 },
    { d: 2,  week: 1 },
    { d: 3,  mark: 'Meds Begin',   dot: 'var(--recovery)',   week: 1 },
    { d: 4,  week: 1 },
  ],
  // Row 2: Apr 5–11
  [
    { d: 5,  week: 1 },
    { d: 6,  week: 1 },
    { d: 7,  mark: 'Appt 2',       dot: 'var(--recovery)',   week: 1 },
    { d: 8,  week: 2 },
    { d: 9,  mark: 'Appt 3',       dot: 'var(--recovery)',   week: 2 },
    { d: 10, week: 2 },
    { d: 11, mark: 'Appt 4',       dot: 'var(--recovery)',   week: 2 },
  ],
  // Row 3: Apr 12–18
  [
    { d: 12, week: 2 },
    { d: 13, week: 2 },
    { d: 14, mark: 'Alex Arrives', dot: 'var(--terracotta)', week: 2 },
    { d: 15, week: 3 },
    { d: 16, mark: 'Window',       dot: 'var(--gold)',       week: 3, window: true },
    { d: 17, mark: 'Procedure?',   dot: 'var(--gold)',       week: 3, window: true, procedureDay: true },
    { d: 18, week: 3, window: true },
  ],
  // Row 4: Apr 19–22, padded Thu–Sat
  [
    { d: 19, mark: 'Alex Departs', dot: 'var(--terracotta)', week: 3, window: true },
    { d: 20, week: 4, window: true },
    { d: 21, week: 4 },
    { d: 22, mark: 'Fly Home',     dot: 'var(--ink)',        week: 4 },
    null, null, null,
  ],
]

const NAV_CARDS = [
  { href: '/schedule',    label: 'Schedule',    subtitle: '22 days · 3 weeks',         color: 'var(--terracotta)' },
  { href: '/restaurants', label: 'Restaurants', subtitle: '25+ places to eat',          color: 'var(--sage)'       },
  { href: '/cafes',       label: 'Cafés',       subtitle: '8 coffee spots',             color: 'var(--gold)'       },
  { href: '/markets',     label: 'Markets',     subtitle: 'Rastro · Motores · Salesas', color: 'var(--terracotta)' },
  { href: '/shopping',    label: 'Shopping',    subtitle: 'Artisan · Thrift route',     color: 'var(--sage)'       },
  { href: '/budget',      label: 'Budget',      subtitle: 'Running total · Track spend', color: 'var(--gold)'      },
  { href: '/medical',     label: 'Medical',     subtitle: 'Tambre · Meds schedule',    color: 'var(--recovery)'   },
]

function getDaysElapsed() {
  const start = new Date('2026-04-01')
  const today = new Date()
  const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  return Math.max(0, Math.min(diff, 22))
}

function getNextTambre() {
  const today = new Date()
  for (const appt of tambreAppointments) {
    // Very simple parse — if date string contains today or future month/day
    const dateStr = appt.date + ' 2026'
    const d = new Date(dateStr)
    if (!isNaN(d.getTime()) && d >= today) return appt
  }
  return null
}

function getTripBudget() {
  const done = schedule.filter((d) => d.status === 'done')
  return done.flatMap((d) => d.spend ?? []).reduce((s, i) => s + i.amount, 0)
}

export default function HomePage() {
  const daysElapsed = getDaysElapsed()
  const nextTambre = getNextTambre()
  const runningTotal = getTripBudget()

  return (
    <div>
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden px-8 md:px-12 pt-14 pb-12"
        style={{ background: 'var(--ink)', color: 'var(--cream)' }}
      >
        {/* Watermark */}
        <div
          className="absolute pointer-events-none select-none"
          style={{
            right: '-20px',
            top: '-30px',
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(80px, 20vw, 180px)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.04)',
            letterSpacing: '-8px',
            lineHeight: 1,
          }}
          aria-hidden
        >
          MADRID
        </div>

        <div className="flex justify-between items-start flex-wrap gap-6 mb-8">
          <h1
            className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            The Madrid<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Residency</em>
          </h1>
          <div
            className="text-right text-[11px] tracking-[1px] uppercase leading-loose opacity-50"
            style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
          >
            April 1 – 22, 2026<br />
            Salamanca, Madrid<br />
            22 days · 3 weeks<br />
            Clínica Tambre
          </div>
        </div>

        <p
          className="text-lg italic opacity-60 max-w-lg leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Not a vacation. A deliberate month of building, reading, creating, and becoming.
        </p>
      </header>

      {/* ── Legend ─────────────────────────────────────────────────────── */}
      <div className="flex overflow-x-auto" style={{ borderBottom: '1px solid var(--dust)' }}>
        {[
          { color: 'var(--terracotta)', label: 'Week 1 — Arrive & Launch' },
          { color: 'var(--sage)',       label: 'Week 2 — Stims Begin'     },
          { color: 'var(--gold)',       label: 'Week 3 — Go Gentle'       },
          { color: 'var(--recovery)',   label: 'Recovery — Reflect'       },
        ].map(({ color, label }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 px-6 py-4 text-[11px] tracking-[1px] uppercase whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              color: 'var(--muted)',
              borderRight: '1px solid var(--dust)',
            }}
          >
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: color }}
            />
            {label}
          </div>
        ))}
      </div>

      {/* ── Goals strip ────────────────────────────────────────────────── */}
      <div
        className="px-8 md:px-12 py-8"
        style={{ background: 'var(--ink)', color: 'var(--cream)' }}
      >
        <div
          className="text-[10px] tracking-[3px] uppercase mb-5"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
        >
          Madrid Goals
        </div>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {[
            { num: '01', text: 'Successfully freeze your eggs. This is the whole reason you\'re here. Everything else is secondary.', primary: true },
            { num: '02', text: 'Deploy recipe app + clothing app publicly via GitHub / Vercel' },
            { num: '03', text: 'Build personal portfolio website — live before departure' },
            { num: '04', text: 'Shape the AI education project into a real artifact' },
            { num: '05', text: 'Active job search — apply to education-adjacent roles weekly' },
            { num: '06', text: 'Read 3 books, journal daily, 2+ hours of reading per day' },
          ].map(({ num, text, primary }) => (
            <div
              key={num}
              className="flex items-start gap-3 text-[13px] leading-relaxed"
              style={{
                color: 'rgba(245,240,232,0.8)',
                borderLeft: primary ? '3px solid var(--gold)' : undefined,
                paddingLeft: primary ? '12px' : undefined,
              }}
            >
              <span
                className="text-3xl font-light leading-none shrink-0 mt-[-4px]"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--gold)' }}
              >
                {num}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick stats ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div
          className="text-[10px] tracking-[3px] uppercase mb-6"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          Trip Status
        </div>
        <div className="grid grid-cols-3 gap-px" style={{ background: 'var(--dust)' }}>
          {[
            { value: `${daysElapsed} / 22`, label: 'Days elapsed' },
            { value: `$${runningTotal.toFixed(2)}`, label: 'Running total', mono: true },
            { value: nextTambre ? `${nextTambre.date} · ${nextTambre.time}` : 'All done', label: 'Next Tambre', small: true },
          ].map(({ value, label, mono, small }) => (
            <div
              key={label}
              className="px-6 py-5"
              style={{ background: 'var(--cream)' }}
            >
              <div
                className={`font-light leading-none mb-2 ${small ? 'text-xl' : 'text-4xl'}`}
                style={{
                  fontFamily: mono ? 'var(--font-dm-mono), monospace' : 'var(--font-cormorant), serif',
                  color: 'var(--gold)',
                  fontSize: small ? '16px' : undefined,
                }}
              >
                {value}
              </div>
              <div
                className="text-[9px] tracking-[2px] uppercase"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Weekly overview ────────────────────────────────────────── */}
        <div
          className="text-[10px] tracking-[3px] uppercase mt-14 mb-5"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          Weekly Overview
        </div>
        <div className="flex flex-col gap-px" style={{ background: 'var(--dust)' }}>
          {[
            { num: '01', dates: 'Apr 1 – 7',   title: 'Arrive, Settle, Launch',               color: 'var(--terracotta)', focus: 'Deploy both apps · Dental + skin appts · Semana Santa · Website architecture' },
            { num: '02', dates: 'Apr 8 – 14',  title: 'Stims Begin · Build Momentum',          color: 'var(--sage)',       focus: 'AI project format · Website first draft · Malasaña thrift day · Alex arrives Apr 14' },
            { num: '03', dates: 'Apr 15 – 19', title: 'Peak Stims · Alex Here · Go Gentle',    color: 'var(--gold)',       focus: 'AI project artifact · Flamenco · Best friend week · Retrieval Apr 19' },
            { num: '↩',  dates: 'Apr 20 – 22', title: 'Rest, Reflect, Receive',               color: 'var(--recovery)',   focus: 'Reflection · Finish books · Gentle walks · Depart proud' },
          ].map(({ num, dates, title, color, focus }) => (
            <div
              key={num}
              className="grid items-center gap-4 px-5 py-4"
              style={{ gridTemplateColumns: '36px 90px 1fr', background: 'var(--cream)' }}
            >
              <div
                className="text-2xl font-light leading-none"
                style={{ fontFamily: 'var(--font-cormorant), serif', color, opacity: 0.5 }}
              >
                {num}
              </div>
              <div
                className="text-[9px] tracking-[1px] uppercase leading-relaxed"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                {dates}
              </div>
              <div>
                <div
                  className="text-[14px] font-normal leading-tight mb-0.5"
                  style={{ fontFamily: 'var(--font-cormorant), serif', color }}
                >
                  {title}
                </div>
                <div
                  className="text-[10px] leading-relaxed"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
                >
                  {focus}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── April Calendar ─────────────────────────────────────────── */}
        <div
          className="text-[10px] tracking-[3px] uppercase mt-14 mb-5"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          April 2026
        </div>

        <div className="border" style={{ borderColor: 'var(--dust)' }}>

          {/* Calendar legend */}
          <div
            className="flex flex-wrap gap-x-5 gap-y-2 px-4 py-3 border-b"
            style={{ borderColor: 'var(--dust)', background: '#faf7f2' }}
          >
            {[
              { color: 'var(--recovery)', label: 'Tambre appt' },
              { color: 'var(--terracotta)', label: 'Key event' },
              { color: 'var(--gold)', label: 'Procedure window' },
              { color: 'var(--ink)', label: 'Departure' },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                <span
                  className="text-[9px] tracking-[1px] uppercase"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Day-of-week header */}
          <div className="grid grid-cols-7 border-b" style={{ borderColor: 'var(--dust)' }}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div
                key={d}
                className="py-2 text-center text-[9px] tracking-[1px] uppercase"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid — April 1 = Wednesday (index 3) */}
          {CALENDAR_ROWS.map((row, ri) => (
            <div
              key={ri}
              className="grid grid-cols-7 border-b last:border-b-0"
              style={{ borderColor: 'var(--dust)' }}
            >
              {row.map((cell, ci) => {
                if (!cell) {
                  return (
                    <div
                      key={ci}
                      className="border-r last:border-r-0 min-h-[72px] md:min-h-[84px]"
                      style={{ borderColor: 'var(--dust)', background: '#f0ece4' }}
                    />
                  )
                }

                const weekBg: Record<number, string> = {
                  1: 'rgba(184,92,56,0.04)',
                  2: 'rgba(122,140,110,0.05)',
                  3: 'rgba(201,150,58,0.05)',
                  4: 'rgba(155,139,180,0.05)',
                }

                const isToday = (() => {
                  const t = new Date()
                  return t.getFullYear() === 2026 && t.getMonth() === 3 && t.getDate() === cell.d
                })()

                return (
                  <div
                    key={ci}
                    className="border-r last:border-r-0 min-h-[72px] md:min-h-[84px] p-1.5 flex flex-col"
                    style={{
                      borderColor: 'var(--dust)',
                      background: cell.window
                        ? 'rgba(201,150,58,0.08)'
                        : weekBg[cell.week] ?? 'var(--cream)',
                      borderTop: cell.procedureDay
                        ? '2px solid var(--gold)'
                        : cell.window
                        ? `2px solid rgba(201,150,58,0.3)`
                        : undefined,
                    }}
                  >
                    {/* Day number */}
                    <div className="flex items-center justify-between mb-0.5">
                      <span
                        className="text-[13px] md:text-base font-light leading-none"
                        style={{
                          fontFamily: 'var(--font-cormorant), serif',
                          color: isToday ? 'var(--cream)' : cell.d > 22 || !cell.d ? 'var(--dust)' : 'var(--ink)',
                          background: isToday ? 'var(--ink)' : undefined,
                          width: isToday ? '20px' : undefined,
                          height: isToday ? '20px' : undefined,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '2px',
                        }}
                      >
                        {cell.d}
                      </span>
                      {cell.dot && (
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: cell.dot }}
                        />
                      )}
                    </div>
                    {/* Event label */}
                    {cell.mark && (
                      <div
                        className="text-[8px] md:text-[9px] leading-tight mt-auto"
                        style={{
                          fontFamily: 'var(--font-dm-mono), monospace',
                          color: cell.dot ?? 'var(--muted)',
                          fontWeight: cell.procedureDay ? 500 : 400,
                        }}
                      >
                        {cell.mark}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}

          {/* Procedure window note */}
          <div
            className="px-4 py-3 border-t flex items-start gap-3"
            style={{ borderColor: 'var(--dust)', background: 'rgba(201,150,58,0.06)' }}
          >
            <div className="w-2.5 h-2.5 rounded-full shrink-0 mt-0.5" style={{ background: 'var(--gold)' }} />
            <div>
              <span
                className="text-[10px] tracking-[1px] uppercase"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
              >
                Apr 16–20 · Potential Procedure Window
              </span>
              <span
                className="text-[10px] ml-2"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                · Apr 17 most likely · final timing set by Tambre
              </span>
            </div>
          </div>
        </div>

        {/* ── Nav cards ──────────────────────────────────────────────── */}
        <div
          className="text-[10px] tracking-[3px] uppercase mt-14 mb-6"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          Navigate
        </div>
        <div className="grid gap-px" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', background: 'var(--dust)' }}>
          {NAV_CARDS.map(({ href, label, subtitle, color }) => (
            <Link
              key={href}
              href={href}
              className="block px-6 py-5 transition-colors group"
              style={{ background: 'var(--cream)' }}
            >
              <div
                className="text-xl font-normal leading-tight mb-1 group-hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'var(--font-cormorant), serif', color }}
              >
                {label}
              </div>
              <div
                className="text-[10px] tracking-[1px] uppercase"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                {subtitle}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
