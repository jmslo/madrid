import BudgetTracker from '@/components/BudgetTracker'

export default function BudgetPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      <div className="py-10 border-b" style={{ borderColor: 'var(--dust)' }}>
        <div
          className="text-[10px] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
        >
          Spend Tracker
        </div>
        <h1
          className="text-4xl md:text-5xl font-light italic leading-tight mb-3"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Budget
        </h1>
        <p
          className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--muted)' }}
        >
          Tracked daily. Saved locally. Medical costs front-loaded — after Day 1 it gets cheaper.
        </p>
      </div>

      <div className="pt-8">
        <BudgetTracker />
      </div>
    </div>
  )
}
