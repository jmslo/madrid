export default function MedicalPage() {
  // ─── April 2026 calendar data ────────────────────────────────────────────
  // April 1, 2026 = Wednesday (index 3, Sun=0)
  const calendarOffset = 3
  const days = Array.from({ length: 22 }, (_, i) => i + 1)

  const dayMeta: Record<number, { label: string; sub?: string; type: string }> = {
    1:  { label: 'Pre-Appt', sub: 'Day 1',  type: 'appt' },
    3:  { label: 'Meds Begin',              type: 'meds' },
    7:  { label: 'Appt 2',   sub: 'Day 7',  type: 'appt' },
    9:  { label: 'Appt 3',   sub: 'Day 9',  type: 'appt' },
    11: { label: 'Appt 4',   sub: 'Day 11', type: 'appt' },
    16: { label: 'Window',                  type: 'window' },
    17: { label: '★ Likely',                type: 'likely' },
    18: { label: 'Window',                  type: 'window' },
    19: { label: 'Window',                  type: 'window' },
    20: { label: 'Window',                  type: 'window' },
  }

  // Build 7-column grid cells (blanks + days 1-22)
  const gridCells: Array<number | null> = [
    ...Array(calendarOffset).fill(null),
    ...days,
  ]
  // Pad to full rows
  while (gridCells.length % 7 !== 0) gridCells.push(null)

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="py-10 border-b" style={{ borderColor: 'var(--dust)' }}>
        <div
          className="text-[10px] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)' }}
        >
          Clínica Tambre · Madrid
        </div>
        <h1
          className="text-4xl md:text-5xl font-light italic leading-tight mb-5"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Medical
        </h1>

        {/* Header notes */}
        <div
          className="inline-grid gap-x-8 gap-y-2 text-[13px]"
          style={{ gridTemplateColumns: 'auto 1fr' }}
        >
          <span
            className="text-[10px] tracking-[1px] uppercase self-center"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
          >
            AMH
          </span>
          <span style={{ color: 'var(--ink)' }}>
            2.15 <span style={{ color: 'var(--muted)', fontSize: '12px' }}>(January 2026)</span>
            <span style={{ color: 'var(--dust)', margin: '0 8px' }}>·</span>
            <span style={{ color: 'var(--muted)', fontSize: '12px', textDecoration: 'line-through' }}>previously 4.41 (October 2024)</span>
          </span>
          <span
            className="text-[10px] tracking-[1px] uppercase self-center"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
          >
            Clinic
          </span>
          <span style={{ color: 'var(--ink)' }}>Clínica Tambre, Madrid</span>
        </div>
      </div>

      {/* ── Round Comparison Table ───────────────────────────────────────── */}
      <div className="mt-10 mb-12">
        <div
          className="text-[10px] tracking-[2px] uppercase mb-6 pb-2 border-b"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)', borderColor: 'var(--dust)' }}
        >
          Round Comparison
        </div>

        {/* Column headers */}
        <div
          className="grid mb-1"
          style={{ gridTemplateColumns: '90px 1fr 1fr' }}
        >
          <div />
          <div
            className="px-4 py-3 text-[10px] tracking-[2px] uppercase text-center"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              background: 'var(--ink)',
              color: 'var(--cream)',
            }}
          >
            Round 1<br />
            <span style={{ color: 'rgba(245,240,232,0.45)', fontSize: '9px', letterSpacing: '1px' }}>Nov – Dec 2024</span>
          </div>
          <div
            className="px-4 py-3 text-[10px] tracking-[2px] uppercase text-center ml-px"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              background: '#3d2f5c',
              color: 'var(--cream)',
            }}
          >
            Round 2 ·current<br />
            <span style={{ color: 'rgba(245,240,232,0.45)', fontSize: '9px', letterSpacing: '1px' }}>Apr 2026</span>
          </div>
        </div>

        {/* Rows */}
        {[
          {
            date: 'Day 1',
            r1: {
              date: 'Nov 21',
              meds: 'Gonal 150 · Meriofert 150 · Desogestrel 75mg',
              follicles: null,
              notes: 'Ovaries asleep from IUD, follicles very small. IUD in place, uterus looks good.',
            },
            r2: {
              date: 'Apr 1',
              meds: 'Meds TBD',
              follicles: null,
              notes: '—',
            },
          },
          {
            date: 'Day 5',
            r1: {
              date: 'Nov 25',
              meds: 'Gonal 150 · Meriofert 150 · Desogestrel 75mg',
              follicles: [
                { side: 'Right', count: 6,  detail: '5× <10mm · 1× 10mm' },
                { side: 'Left',  count: 9,  detail: '8× <10mm · 1× 10mm' },
              ],
              notes: 'Follicles still small, expected at this stage.',
            },
            r2: null,
          },
          {
            date: 'Day 7',
            r1: {
              date: 'Nov 27',
              meds: 'Gonal 150 · Meriofert 150 · Desogestrel 75mg',
              follicles: [
                { side: 'Right', count: 7,  detail: '6× <10mm · 1× 13mm' },
                { side: 'Left',  count: 10, detail: '8× <10mm · 1× 11mm · 1× 13mm' },
              ],
              notes: null,
            },
            r2: {
              date: 'Apr 7',
              meds: null,
              follicles: null,
              notes: '—',
            },
          },
          {
            date: 'Day 9',
            r1: {
              date: 'Nov 29',
              meds: 'Gonal 150 · Meriofert 150 · Desogestrel 75mg',
              follicles: [
                { side: 'Right', count: 7,  detail: '4× <10mm · 1× 10mm · 2× 12mm · 1× 17mm' },
                { side: 'Left',  count: 10, detail: '6× <10mm · 1× 10mm · 1× 12mm · 1× 14mm · 1× 17mm' },
              ],
              notes: '8 small · 8 medium · 0 big',
            },
            r2: {
              date: 'Apr 9',
              meds: null,
              follicles: null,
              notes: '—',
            },
          },
          {
            date: 'Day 11',
            r1: null,
            r2: {
              date: 'Apr 11',
              meds: null,
              follicles: null,
              notes: '—',
            },
          },
          {
            date: 'Day 12',
            r1: {
              date: 'Dec 2',
              meds: 'Trigger shot',
              follicles: null,
              notes: '13 follicles total',
            },
            r2: null,
          },
          {
            date: 'Day 15',
            r1: {
              date: 'Dec 5',
              meds: null,
              follicles: null,
              notes: null,
              retrieval: true,
              eggs: '5 eggs retrieved',
            },
            r2: null,
          },
          {
            date: 'Retrieval',
            r1: null,
            r2: {
              date: 'Apr 16–20',
              meds: null,
              follicles: null,
              notes: 'Potential retrieval window',
              retrieval: true,
            },
          },
        ].map((row, i) => (
          <div
            key={i}
            className="grid border-b"
            style={{ gridTemplateColumns: '90px 1fr 1fr', borderColor: 'var(--dust)' }}
          >
            {/* Day label */}
            <div
              className="py-4 pr-3 flex items-start pt-5"
            >
              <span
                className="text-[10px] tracking-[1px] uppercase"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                {row.date}
              </span>
            </div>

            {/* Round 1 cell */}
            <RoundCell data={row.r1} round={1} />

            {/* Round 2 cell */}
            <RoundCell data={row.r2} round={2} />
          </div>
        ))}
      </div>

      {/* ── April 2026 Calendar ──────────────────────────────────────────── */}
      <div className="mb-12">
        <div
          className="text-[10px] tracking-[2px] uppercase mb-6 pb-2 border-b"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)', borderColor: 'var(--dust)' }}
        >
          April 2026 — Retrieval Cycle
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-5">
          {[
            { color: '#f0eef5', border: 'var(--recovery)', label: 'Appointment' },
            { color: '#fdf5e6', border: 'var(--gold)',     label: 'Meds Begin' },
            { color: '#e8f0e4', border: 'var(--sage)',     label: 'Retrieval Window' },
            { color: '#7a8c6e', border: 'var(--sage)',     label: 'Most Likely Day', text: 'white' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ background: l.color, border: `1.5px solid ${l.border}` }}
              />
              <span
                className="text-[10px] tracking-[1px] uppercase"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                {l.label}
              </span>
            </div>
          ))}
        </div>

        {/* Day-of-week headers */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <div
              key={d}
              className="text-center py-2 text-[9px] tracking-[1px] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
          {gridCells.map((day, idx) => {
            if (day === null) {
              return <div key={idx} style={{ minHeight: '72px', background: 'transparent' }} />
            }

            const meta = dayMeta[day]
            const isWindow  = meta?.type === 'window' || meta?.type === 'likely'
            const isLikely  = meta?.type === 'likely'
            const isAppt    = meta?.type === 'appt'
            const isMeds    = meta?.type === 'meds'

            let bg     = 'var(--cream)'
            let border = 'transparent'
            let textColor = 'var(--muted)'
            let dayColor  = 'var(--ink)'

            if (isLikely) { bg = 'var(--sage)'; border = 'var(--sage)'; textColor = 'white'; dayColor = 'white' }
            else if (isWindow) { bg = '#e8f0e4'; border = 'var(--sage)'; textColor = 'var(--sage)' }
            else if (isAppt)   { bg = '#f0eef5'; border = 'var(--recovery)'; textColor = 'var(--recovery)' }
            else if (isMeds)   { bg = '#fdf5e6'; border = 'var(--gold)'; textColor = 'var(--gold)' }

            return (
              <div
                key={idx}
                className="p-2 flex flex-col"
                style={{
                  minHeight: '72px',
                  background: bg,
                  border: `1.5px solid ${meta ? border : 'var(--dust)'}`,
                }}
              >
                <div
                  className="text-[11px] font-medium mb-1"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: dayColor }}
                >
                  {day}
                </div>
                {meta && (
                  <>
                    <div
                      className="text-[10px] leading-tight font-medium"
                      style={{ fontFamily: 'var(--font-dm-mono), monospace', color: textColor }}
                    >
                      {meta.label}
                    </div>
                    {meta.sub && (
                      <div
                        className="text-[9px] mt-0.5 opacity-70"
                        style={{ fontFamily: 'var(--font-dm-mono), monospace', color: textColor }}
                      >
                        {meta.sub}
                      </div>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

// ── Sub-component for each round cell ────────────────────────────────────────

type FollicleRow = { side: string; count: number; detail: string }

type CellData = {
  date: string
  meds?: string | null
  follicles?: FollicleRow[] | null
  notes?: string | null
  retrieval?: boolean
  eggs?: string
} | null

function RoundCell({ data, round }: { data: CellData; round: number }) {
  const borderLeft = round === 1 ? '2px solid var(--dust)' : '2px solid #9b8bb4'
  const emptyBg    = round === 1 ? 'transparent' : 'rgba(155,139,180,0.04)'

  if (!data) {
    return (
      <div
        className="py-4 px-4"
        style={{ borderLeft, background: emptyBg, color: 'var(--dust)' }}
      >
        <span
          className="text-[11px]"
          style={{ fontFamily: 'var(--font-dm-mono), monospace' }}
        >
          —
        </span>
      </div>
    )
  }

  return (
    <div
      className="py-4 px-4"
      style={{ borderLeft, background: emptyBg }}
    >
      {/* Date */}
      <div
        className="text-[10px] tracking-[1px] uppercase mb-2"
        style={{
          fontFamily: 'var(--font-dm-mono), monospace',
          color: data.retrieval ? 'var(--sage)' : (round === 2 ? 'var(--recovery)' : 'var(--muted)'),
        }}
      >
        {data.date}
        {data.retrieval && (
          <span className="ml-2" style={{ color: 'var(--sage)' }}>✦ retrieval</span>
        )}
      </div>

      {/* Retrieval eggs */}
      {data.eggs && (
        <div
          className="text-[15px] font-light mb-1"
          style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--sage)' }}
        >
          {data.eggs}
        </div>
      )}

      {/* Meds */}
      {data.meds && (
        <div
          className="text-[11px] mb-2 leading-relaxed"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          {data.meds}
        </div>
      )}

      {/* Follicles */}
      {data.follicles && data.follicles.length > 0 && (
        <div className="flex flex-col gap-1 mb-2">
          {data.follicles.map((f) => (
            <div key={f.side} className="flex items-baseline gap-2">
              <span
                className="text-[9px] tracking-[1px] uppercase w-8 shrink-0"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                {f.side[0]}
              </span>
              <span
                className="text-[13px] font-light"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--ink)' }}
              >
                {f.count}
              </span>
              <span
                className="text-[10px]"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                {f.detail}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Notes */}
      {data.notes && (
        <div
          className="text-[11px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '13px', color: 'var(--muted)' }}
        >
          {data.notes}
        </div>
      )}
    </div>
  )
}
