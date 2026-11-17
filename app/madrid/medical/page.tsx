// ─── Types ───────────────────────────────────────────────────────────────────

type RowKind = 'preappt' | 'meds' | 'appt' | 'trigger' | 'antibiotic' | 'retrieval' | 'window' | 'empty'

type Follicle = { side: 'R' | 'L'; count: number | null; detail: string }

type Cell = {
  date: string
  kind: RowKind
  meds?: string
  medsNote?: string        // timing/context note for meds
  follicles?: Follicle[]
  notes?: string
  eggs?: string            // retrieval outcome
} | null                   // null = no data for this round on this day

type DayRow = {
  label: string            // left-column label e.g. "Day 1"
  r1: Cell
  r2: Cell
}

// ─── Data ────────────────────────────────────────────────────────────────────
// To update Round 2: find the '—' strings below and replace with real data.
// Each appointment cell is clearly marked with kind: 'appt'.

const MEDS_BASE = 'Gonal 150 IU · Meriofert 150 IU · Desogestrel 75mg'

const tableRows: DayRow[] = [
  // ── Pre-appointment (Round 2 only) ──────────────────────────────────────
  {
    label: 'Pre-Appt',
    r1: null,
    r2: {
      date: 'Apr 1',
      kind: 'preappt',
      notes: '—',   // ← update after appointment
    },
  },

  // ── Day 1 — Meds start + baseline scan ──────────────────────────────────
  {
    label: 'Day 1',
    r1: {
      date: 'Nov 21',
      kind: 'appt',
      meds: MEDS_BASE,
      follicles: [
        { side: 'R', count: null, detail: 'asleep from IUD · very small' },
        { side: 'L', count: null, detail: 'asleep from IUD · very small' },
      ],
      notes: 'IUD in place · uterus looks good',
    },
    r2: {
      date: 'Apr 3',
      kind: 'meds',
      meds: '—',   // ← meds TBD — update once confirmed
    },
  },

  // ── Day 2 ───────────────────────────────────────────────────────────────
  {
    label: 'Day 2',
    r1: { date: 'Nov 22', kind: 'meds', meds: MEDS_BASE },
    r2: { date: 'Apr 4',  kind: 'meds', meds: '—' },
  },

  // ── Day 3 ───────────────────────────────────────────────────────────────
  {
    label: 'Day 3',
    r1: { date: 'Nov 23', kind: 'meds', meds: MEDS_BASE },
    r2: { date: 'Apr 5',  kind: 'meds', meds: '—' },
  },

  // ── Day 4 ───────────────────────────────────────────────────────────────
  {
    label: 'Day 4',
    r1: { date: 'Nov 24', kind: 'meds', meds: MEDS_BASE },
    r2: { date: 'Apr 6',  kind: 'meds', meds: '—' },
  },

  // ── Day 5 — Appointment ─────────────────────────────────────────────────
  {
    label: 'Day 5',
    r1: {
      date: 'Nov 25',
      kind: 'appt',
      meds: MEDS_BASE,
      follicles: [
        { side: 'R', count: 6,  detail: '5× <10mm · 1× 10mm' },
        { side: 'L', count: 9,  detail: '8× <10mm · 1× 10mm' },
      ],
      notes: 'Follicles still small · expected at this stage',
    },
    r2: {
      date: 'Apr 7',
      kind: 'appt',
      follicles: [
        { side: 'R', count: null, detail: '—' },  // ← update after appointment
        { side: 'L', count: null, detail: '—' },  // ← update after appointment
      ],
      notes: '—',   // ← update after appointment
    },
  },

  // ── Day 6 ───────────────────────────────────────────────────────────────
  {
    label: 'Day 6',
    r1: { date: 'Nov 26', kind: 'meds', meds: MEDS_BASE },
    r2: { date: 'Apr 8',  kind: 'meds', meds: '—' },
  },

  // ── Day 7 — Appointment ─────────────────────────────────────────────────
  {
    label: 'Day 7',
    r1: {
      date: 'Nov 27',
      kind: 'appt',
      meds: MEDS_BASE,
      follicles: [
        { side: 'R', count: 7,  detail: '6× <10mm · 1× 13mm' },
        { side: 'L', count: 10, detail: '8× <10mm · 1× 11mm · 1× 13mm' },
      ],
    },
    r2: {
      date: 'Apr 9',
      kind: 'appt',
      follicles: [
        { side: 'R', count: null, detail: '—' },  // ← update after appointment
        { side: 'L', count: null, detail: '—' },  // ← update after appointment
      ],
      notes: '—',   // ← update after appointment
    },
  },

  // ── Day 8 ───────────────────────────────────────────────────────────────
  {
    label: 'Day 8',
    r1: { date: 'Nov 28', kind: 'meds', meds: MEDS_BASE },
    r2: { date: 'Apr 10', kind: 'meds', meds: '—' },
  },

  // ── Day 9 — Appointment ─────────────────────────────────────────────────
  {
    label: 'Day 9',
    r1: {
      date: 'Nov 29',
      kind: 'appt',
      meds: MEDS_BASE,
      follicles: [
        { side: 'R', count: 7,  detail: '4× <10mm · 1× 10mm · 2× 12mm · 1× 17mm' },
        { side: 'L', count: 10, detail: '6× <10mm · 1× 10mm · 1× 12mm · 1× 14mm · 1× 17mm' },
      ],
      notes: '8 small · 8 medium · 0 big',
    },
    r2: {
      date: 'Apr 11',
      kind: 'appt',
      follicles: [
        { side: 'R', count: null, detail: '—' },  // ← update after appointment
        { side: 'L', count: null, detail: '—' },  // ← update after appointment
      ],
      notes: '—',   // ← update after appointment
    },
  },

  // ── Day 10 ──────────────────────────────────────────────────────────────
  {
    label: 'Day 10',
    r1: { date: 'Nov 30', kind: 'empty' },
    r2: { date: 'Apr 12', kind: 'meds', meds: '—' },
  },

  // ── Day 11 ──────────────────────────────────────────────────────────────
  {
    label: 'Day 11',
    r1: { date: 'Dec 1', kind: 'empty' },
    r2: { date: 'Apr 13', kind: 'meds', meds: '—' },
  },

  // ── Day 12 — Appointment + meds change ──────────────────────────────────
  {
    label: 'Day 12',
    r1: {
      date: 'Dec 2',
      kind: 'appt',
      meds: 'Gonal 300 IU · Desogestrel 75mcg',
      medsNote: 'dose increase',
      follicles: [
        { side: 'R', count: null, detail: 'data not recorded' },
        { side: 'L', count: null, detail: 'data not recorded' },
      ],
      notes: '13 follicles total',
    },
    r2: { date: 'Apr 14', kind: 'meds', meds: '—' },
  },

  // ── Day 13 — Trigger shot ───────────────────────────────────────────────
  {
    label: 'Day 13',
    r1: {
      date: 'Dec 3',
      kind: 'trigger',
      meds: 'Ovitrelle 250mcg · Decapeptyl (2 powder + 1 liquid) · Desogestrel 75mcg',
      medsNote: 'at 9pm · 36h before retrieval',
    },
    r2: { date: 'Apr 15', kind: 'meds', meds: '—' },
  },

  // ── Day 14 — Pre-retrieval antibiotic ───────────────────────────────────
  {
    label: 'Day 14',
    r1: {
      date: 'Dec 4',
      kind: 'antibiotic',
      meds: 'Azithromycin 1g',
      medsNote: '2 hours after dinner',
    },
    r2: {
      date: 'Apr 16',
      kind: 'window',
      notes: 'Potential retrieval window begins',
    },
  },

  // ── Day 15 — Retrieval ──────────────────────────────────────────────────
  {
    label: 'Day 15',
    r1: {
      date: 'Dec 5',
      kind: 'retrieval',
      eggs: '12 eggs extracted · 5 viable',
    },
    r2: {
      date: 'Apr 17',
      kind: 'window',
      notes: 'Most likely retrieval day',
    },
  },

  // ── Days 16–18 (Round 2 window continues) ───────────────────────────────
  {
    label: 'Day 16',
    r1: null,
    r2: { date: 'Apr 18', kind: 'window', notes: 'Potential retrieval window' },
  },
  {
    label: 'Day 17',
    r1: null,
    r2: { date: 'Apr 19', kind: 'window', notes: 'Potential retrieval window' },
  },
  {
    label: 'Day 18',
    r1: null,
    r2: { date: 'Apr 20', kind: 'window', notes: 'Potential retrieval window' },
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function kindLabel(kind: RowKind): string {
  switch (kind) {
    case 'preappt':    return 'pre-appt'
    case 'appt':       return 'appt'
    case 'trigger':    return 'trigger shot'
    case 'antibiotic': return 'pre-op'
    case 'retrieval':  return '✦ retrieval'
    case 'window':     return 'retrieval window'
    default:           return ''
  }
}

const KIND_COLORS: Record<RowKind, { bg: string; tag: string; tagText: string }> = {
  preappt:    { bg: '#f5f2fb', tag: '#9b8bb4',            tagText: 'white' },
  meds:       { bg: 'transparent',      tag: 'transparent',         tagText: 'transparent' },
  appt:       { bg: '#f5f2fb', tag: '#9b8bb4',            tagText: 'white' },
  trigger:    { bg: '#fdf8ec', tag: 'var(--gold)',         tagText: 'white' },
  antibiotic: { bg: '#fdf2ee', tag: 'var(--terracotta)',   tagText: 'white' },
  retrieval:  { bg: '#edf4ea', tag: 'var(--sage)',         tagText: 'white' },
  window:     { bg: '#edf4ea', tag: '#aabf9e',             tagText: 'white' },
  empty:      { bg: 'transparent',      tag: 'transparent',         tagText: 'transparent' },
}

// Is this row a "compact" meds-only row (no appointment)?
function isCompact(r1: Cell, r2: Cell): boolean {
  const k1 = r1?.kind ?? 'empty'
  const k2 = r2?.kind ?? 'empty'
  const compact: RowKind[] = ['meds', 'empty']
  return compact.includes(k1) && compact.includes(k2)
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MedicalPage() {
  // April 1, 2026 = Wednesday (index 3, Sun=0)
  const calendarOffset = 3
  const calendarDays = Array.from({ length: 22 }, (_, i) => i + 1)

  const dayMeta: Record<number, { label: string; sub?: string; type: string }> = {
    1:  { label: 'Pre-Appt',   sub: 'Apr 1',  type: 'preappt' },
    3:  { label: 'Day 1',      sub: 'Meds ↑', type: 'meds' },
    7:  { label: 'Appt',       sub: 'Day 5',  type: 'appt' },
    9:  { label: 'Appt',       sub: 'Day 7',  type: 'appt' },
    11: { label: 'Appt',       sub: 'Day 9',  type: 'appt' },
    16: { label: 'Window',                    type: 'window' },
    17: { label: '★ Likely',                  type: 'likely' },
    18: { label: 'Window',                    type: 'window' },
    19: { label: 'Window',                    type: 'window' },
    20: { label: 'Window',                    type: 'window' },
  }

  const gridCells: Array<number | null> = [
    ...Array(calendarOffset).fill(null),
    ...calendarDays,
  ]
  while (gridCells.length % 7 !== 0) gridCells.push(null)

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20">

      {/* ── Header ────────────────────────────────────────────────────────── */}
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
            2.15{' '}
            <span style={{ color: 'var(--muted)', fontSize: '12px' }}>(January 2026)</span>
            <span style={{ color: 'var(--dust)', margin: '0 8px' }}>·</span>
            <span style={{ color: 'var(--muted)', fontSize: '12px', textDecoration: 'line-through' }}>
              previously 4.41 (October 2024)
            </span>
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

      {/* ── Round Comparison Table ─────────────────────────────────────────── */}
      <div className="mt-10 mb-14">
        <div
          className="text-[10px] tracking-[2px] uppercase mb-6 pb-2 border-b"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)', borderColor: 'var(--dust)' }}
        >
          Round Comparison
        </div>

        {/* Column headers */}
        <div className="grid mb-px" style={{ gridTemplateColumns: '68px 1fr 1fr' }}>
          <div />
          <div
            className="px-4 py-3 text-center"
            style={{ background: 'var(--ink)' }}
          >
            <div
              className="text-[10px] tracking-[2px] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--cream)' }}
            >
              Round 1
            </div>
            <div
              className="text-[9px] tracking-[1px] mt-0.5"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.4)' }}
            >
              Nov – Dec 2024
            </div>
          </div>
          <div
            className="px-4 py-3 text-center ml-px"
            style={{ background: '#3d2f5c' }}
          >
            <div
              className="text-[10px] tracking-[2px] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--cream)' }}
            >
              Round 2
            </div>
            <div
              className="text-[9px] tracking-[1px] mt-0.5"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.4)' }}
            >
              current · Apr 2026
            </div>
          </div>
        </div>

        {/* Rows */}
        {tableRows.map((row, i) => {
          const compact = isCompact(row.r1, row.r2)
          return (
            <div
              key={i}
              className="grid border-b"
              style={{
                gridTemplateColumns: '68px 1fr 1fr',
                borderColor: 'var(--dust)',
              }}
            >
              {/* Day label */}
              <div
                className="flex items-start pr-3"
                style={{ paddingTop: compact ? '10px' : '16px', paddingBottom: compact ? '10px' : '16px' }}
              >
                <span
                  className="text-[9px] tracking-[1px] uppercase"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
                >
                  {row.label}
                </span>
              </div>

              <TableCell cell={row.r1} compact={compact} side="r1" />
              <TableCell cell={row.r2} compact={compact} side="r2" />
            </div>
          )
        })}
      </div>

      {/* ── April 2026 Calendar ───────────────────────────────────────────── */}
      <div className="mb-12">
        <div
          className="text-[10px] tracking-[2px] uppercase mb-6 pb-2 border-b"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)', borderColor: 'var(--dust)' }}
        >
          April 2026 — Retrieval Cycle
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5">
          {[
            { color: '#f5f2fb', border: '#9b8bb4',          label: 'Pre-Appt / Appointment' },
            { color: '#fdf5e6', border: 'var(--gold)',       label: 'Meds Begin' },
            { color: '#edf4ea', border: 'var(--sage)',       label: 'Retrieval Window' },
            { color: 'var(--sage)', border: 'var(--sage)',   label: 'Most Likely Day' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ background: l.color, border: `1.5px solid ${l.border}` }} />
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

        {/* Calendar cells */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
          {gridCells.map((day, idx) => {
            if (day === null) {
              return <div key={idx} style={{ minHeight: '68px' }} />
            }

            const meta = dayMeta[day]
            const t = meta?.type

            let bg        = 'var(--cream)'
            let border    = 'var(--dust)'
            let textColor = 'var(--muted)'
            let numColor  = 'var(--ink)'

            if (t === 'likely')    { bg = 'var(--sage)';  border = 'var(--sage)'; textColor = 'white'; numColor = 'white' }
            else if (t === 'window')   { bg = '#edf4ea'; border = 'var(--sage)'; textColor = '#7a8c6e' }
            else if (t === 'appt')     { bg = '#f5f2fb'; border = '#9b8bb4';     textColor = '#9b8bb4' }
            else if (t === 'preappt')  { bg = '#f5f2fb'; border = '#9b8bb4';     textColor = '#9b8bb4' }
            else if (t === 'meds')     { bg = '#fdf5e6'; border = 'var(--gold)'; textColor = 'var(--gold)' }

            return (
              <div
                key={idx}
                className="p-2 flex flex-col"
                style={{ minHeight: '68px', background: bg, border: `1.5px solid ${border}` }}
              >
                <div
                  className="text-[11px] font-medium mb-1"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: numColor }}
                >
                  {day}
                </div>
                {meta && (
                  <>
                    <div
                      className="text-[10px] leading-tight"
                      style={{ fontFamily: 'var(--font-dm-mono), monospace', color: textColor }}
                    >
                      {meta.label}
                    </div>
                    {meta.sub && (
                      <div
                        className="text-[9px] mt-0.5 opacity-75"
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

// ─── TableCell component ──────────────────────────────────────────────────────

function TableCell({ cell, compact, side }: { cell: Cell; compact: boolean; side: 'r1' | 'r2' }) {
  const isR2 = side === 'r2'
  const borderLeft = isR2 ? '2px solid #9b8bb4' : '2px solid var(--dust)'

  const py = compact ? '10px' : '16px'
  const px = '16px'

  // Null = no data for this round on this day
  if (cell === null) {
    return (
      <div
        style={{
          borderLeft,
          paddingTop: py, paddingBottom: py, paddingLeft: px, paddingRight: px,
          color: 'var(--dust)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px' }}>—</span>
      </div>
    )
  }

  const colors = KIND_COLORS[cell.kind]
  const hasTag = cell.kind !== 'meds' && cell.kind !== 'empty'

  return (
    <div
      style={{
        borderLeft,
        paddingTop: py, paddingBottom: py, paddingLeft: px, paddingRight: px,
        background: colors.bg,
      }}
    >
      {/* Date + kind tag */}
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="text-[10px] tracking-[1px] uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono), monospace',
            color: isR2 ? 'var(--recovery)' : 'var(--muted)',
          }}
        >
          {cell.date}
        </span>
        {hasTag && (
          <span
            className="text-[8px] tracking-[1px] uppercase px-1.5 py-0.5"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              background: colors.tag,
              color: colors.tagText,
              borderRadius: '2px',
            }}
          >
            {kindLabel(cell.kind)}
          </span>
        )}
      </div>

      {/* Retrieval result */}
      {cell.eggs && (
        <div
          className="mb-2"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '17px',
            fontWeight: 300,
            color: 'var(--sage)',
          }}
        >
          {cell.eggs}
        </div>
      )}

      {/* Meds — split on · so each med sits on its own line */}
      {cell.meds && (
        <div className="mb-1">
          {cell.meds.split(' · ').map((med, mi) => (
            <div
              key={mi}
              className="text-[10px] leading-snug"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--ink)' }}
            >
              {med}
            </div>
          ))}
          {cell.medsNote && (
            <div
              className="mt-0.5 italic"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '12px', color: 'var(--muted)' }}
            >
              {cell.medsNote}
            </div>
          )}
        </div>
      )}

      {/* Follicles */}
      {cell.follicles && cell.follicles.length > 0 && (
        <div className="flex flex-col gap-0.5 mt-1.5 mb-1">
          {cell.follicles.map((f) => (
            <div key={f.side} className="flex items-baseline gap-2">
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '9px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  width: '10px',
                  flexShrink: 0,
                }}
              >
                {f.side}
              </span>
              {f.count !== null && (
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '15px',
                    fontWeight: 300,
                    color: 'var(--ink)',
                    lineHeight: 1,
                  }}
                >
                  {f.count}
                </span>
              )}
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '10px',
                  color: 'var(--muted)',
                }}
              >
                {f.detail}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Notes */}
      {cell.notes && (
        <div
          className="mt-1"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'var(--muted)',
            lineHeight: 1.5,
          }}
        >
          {cell.notes}
        </div>
      )}
    </div>
  )
}
