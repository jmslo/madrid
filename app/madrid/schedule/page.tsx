import DayCard from '@/components/DayCard'
import { schedule } from '@/lib/data/schedule'

const WEEKS = [
  { num: 1, dates: 'April 1 – 5',  title: 'Arrive, Settle, Launch',               color: 'var(--terracotta)', vibe: 'Your most focused week with a quiet city, less hormones, and no social obligations. Use it well. This is your setup week: apps deployed, routines established, enjoying Semana Santa, AI project brewing.', focus: ['Deploy both apps', 'Dental + skin appts', 'Semana Santa', 'Website architecture'] },
  { num: 2, dates: 'April 6 – 12', title: 'Appointments Begin · Build Momentum',          color: 'var(--sage)',       vibe: 'Tambre appointments every 2–3 days. Your most ambitious build week. Connections return from Easter. Best friend arrives Tuesday the 14th.',                                  focus: ['AI project format', 'Website first draft', 'Malasaña thrift day', 'Best friend arrives Apr 14'] },
  { num: 3, dates: 'April 13 – 17', title: 'Peak Stims · Friends Visit · Go Gentle', color: 'var(--gold)',       vibe: 'The hardest physical week — bloating and fatigue peak. But your best friend is here for most of it, which changes everything. Plan beautiful evenings together and a gentle Sunday morning before she flies home — which is also retrieval day.', focus: ['AI project artifact', 'Flamenco', 'Best friend week', 'Retrieval Apr 19'] },
  { num: 4, dates: 'April 18 – 22', title: 'Procedure · Rest, Reflect, Receive',               color: 'var(--recovery)',   vibe: 'Three gentle days. Don\'t think of this as dead time — think of it as integration. You\'ve built three things, read three books, seen Madrid slowly and well. This is the exhale.',               focus: ['Reflection', 'Finish books', 'Gentle walks', 'Depart proud'] },
]

export default function SchedulePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">

      {/* Page title */}
      <div className="py-10 border-b" style={{ borderColor: 'var(--dust)' }}>
        <div
          className="text-[10px] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          Day by Day
        </div>
        <h1
          className="text-4xl md:text-5xl font-light italic leading-tight"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Schedule
        </h1>
      </div>

      {WEEKS.map((week) => {
        const days = schedule.filter((d) => d.weekNumber === week.num)
        return (
          <div key={week.num}>
            {/* Week header */}
            <div
              className="grid gap-6 items-start pt-12 pb-6 border-b"
              style={{ gridTemplateColumns: 'auto 1fr', borderColor: 'var(--dust)' }}
            >
              <div
                className="text-[72px] font-light leading-none"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  color: week.color,
                  opacity: 0.15,
                }}
              >
                {week.num === 4 ? '↩' : String(week.num).padStart(2, '0')}
              </div>
              <div>
                <div
                  className="text-[11px] tracking-[2px] uppercase mb-1"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
                >
                  {week.dates}
                </div>
                <h2
                  className="text-3xl font-normal mb-2"
                  style={{ fontFamily: 'var(--font-cormorant), serif', color: week.color }}
                >
                  {week.title}
                </h2>
                <p
                  className="text-[15px] italic leading-relaxed max-w-xl"
                  style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--muted)' }}
                >
                  {week.vibe}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {week.focus.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 text-[10px] tracking-[1px] uppercase"
                      style={{
                        fontFamily: 'var(--font-dm-mono), monospace',
                        border: `1px solid ${week.color}`,
                        color: week.color,
                        borderRadius: '2px',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Day cards */}
            {days.map((day) => (
              <DayCard key={day.dayNumber} day={day} linkable />
            ))}
          </div>
        )
      })}
    </div>
  )
}
