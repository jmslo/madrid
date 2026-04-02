'use client'

import { useEffect, useState } from 'react'
import type { SpendItem } from '@/lib/types'

type DaySpend = {
  day: number
  date: string
  items: SpendItem[]
}

const SEED_DATA: DaySpend[] = [
  {
    day: 1,
    date: 'Apr 1',
    items: [
      { label: 'Uber from bus',                            amount: 8.05,    category: 'transport' },
      { label: 'Uber to clinic',                           amount: 5.74,    category: 'transport' },
      { label: 'Blood tests · Clínica Tambre',             amount: 341.17,  category: 'medical'   },
      { label: 'Pharmacy meds (Pergoveris + Desogestrel)', amount: 1129.16, category: 'medical'   },
      { label: 'Manicure + brows',                         amount: 102.00,  category: 'personal'  },
      { label: 'Grocery store (~3 meals + snacks)',         amount: 46.33,   category: 'food'      },
    ],
  },
  {
    day: 2,
    date: 'Apr 2',
    items: [
      { label: 'Cortado + banana bread · Hola Coffee', amount: 8.26,  category: 'food'  },
      { label: 'jessicaslocum.com · Year 1 · Namecheap', amount: 6.99, category: 'build' },
    ],
  },
]

const CATEGORY_COLORS: Record<SpendItem['category'], { bg: string; text: string; label: string }> = {
  medical:   { bg: '#f0eef5', text: 'var(--recovery)',   label: 'Medical'   },
  food:      { bg: '#f5ede5', text: 'var(--terracotta)', label: 'Food'      },
  transport: { bg: '#e8f0f5', text: '#4a6a8a',           label: 'Transport' },
  build:     { bg: '#e8f0e4', text: 'var(--sage)',        label: 'Build'     },
  personal:  { bg: '#fdf5e6', text: 'var(--gold)',        label: 'Personal'  },
  culture:   { bg: '#f5ede5', text: 'var(--terracotta)', label: 'Culture'   },
}

const STORAGE_KEY = 'madrid_budget_v1'

function dayTotal(items: SpendItem[]) {
  return items.reduce((s, i) => s + i.amount, 0)
}

function fmt(n: number) {
  return `$${n.toFixed(2)}`
}

export default function BudgetTracker() {
  const [data, setData] = useState<DaySpend[]>(SEED_DATA)
  const [form, setForm] = useState({
    day: '',
    date: '',
    label: '',
    amount: '',
    category: 'food' as SpendItem['category'],
  })
  const [showForm, setShowForm] = useState(false)

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setData(JSON.parse(stored))
    } catch {}
  }, [])

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch {}
  }, [data])

  const runningTotal = data.flatMap((d) => d.items).reduce((s, i) => s + i.amount, 0)

  // Category breakdown
  const byCategory = data
    .flatMap((d) => d.items)
    .reduce<Partial<Record<SpendItem['category'], number>>>((acc, item) => {
      acc[item.category] = (acc[item.category] ?? 0) + item.amount
      return acc
    }, {})

  function addExpense() {
    const amt = parseFloat(form.amount)
    if (!form.label || isNaN(amt) || amt <= 0) return

    const dayNum = parseInt(form.day) || 0
    const existing = data.find((d) => d.day === dayNum)

    const newItem: SpendItem = {
      label: form.label,
      amount: amt,
      category: form.category,
    }

    if (existing) {
      setData(data.map((d) => d.day === dayNum ? { ...d, items: [...d.items, newItem] } : d))
    } else {
      const newDay: DaySpend = {
        day: dayNum,
        date: form.date || `Apr ${dayNum}`,
        items: [newItem],
      }
      setData([...data, newDay].sort((a, b) => a.day - b.day))
    }

    setForm({ day: '', date: '', label: '', amount: '', category: 'food' })
    setShowForm(false)
  }

  function removeItem(dayNum: number, idx: number) {
    setData(
      data
        .map((d) =>
          d.day === dayNum
            ? { ...d, items: d.items.filter((_, i) => i !== idx) }
            : d
        )
        .filter((d) => d.items.length > 0)
    )
  }

  return (
    <div>
      {/* Running total */}
      <div className="ink-block mb-6">
        <div
          className="text-[10px] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
        >
          Trip Running Total
        </div>
        <div
          className="text-5xl font-light leading-none mb-4"
          style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--gold)' }}
        >
          {fmt(runningTotal)}
        </div>

        {/* Category breakdown */}
        <div
          className="grid gap-x-8 gap-y-2 mt-4 pt-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            borderTop: '1px solid rgba(245,240,232,0.1)',
          }}
        >
          {Object.entries(byCategory).map(([cat, total]) => {
            const style = CATEGORY_COLORS[cat as SpendItem['category']]
            return (
              <div key={cat}>
                <div
                  className="text-[9px] tracking-[1px] uppercase mb-0.5"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.4)' }}
                >
                  {style.label}
                </div>
                <div
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.85)' }}
                >
                  {fmt(total ?? 0)}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Add expense */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 px-4 py-2.5 text-[10px] tracking-[2px] uppercase transition-colors"
        style={{
          fontFamily: 'var(--font-dm-mono), monospace',
          border: '1px solid var(--terracotta)',
          color: showForm ? 'var(--cream)' : 'var(--terracotta)',
          background: showForm ? 'var(--terracotta)' : 'transparent',
          borderRadius: '2px',
        }}
      >
        {showForm ? '✕ Cancel' : '+ Add Expense'}
      </button>

      {showForm && (
        <div
          className="border p-5 mb-6"
          style={{ borderColor: 'var(--dust)' }}
        >
          <div
            className="text-[10px] tracking-[3px] uppercase mb-4"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--terracotta)' }}
          >
            New Expense
          </div>

          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
            <div>
              <label className="block text-[9px] tracking-[2px] uppercase mb-1" style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}>Day #</label>
              <input
                type="number"
                value={form.day}
                onChange={(e) => setForm({ ...form, day: e.target.value })}
                placeholder="2"
                className="w-full px-3 py-2 text-[13px] border"
                style={{ background: 'var(--cream)', borderColor: 'var(--dust)', borderRadius: '2px', color: 'var(--ink)' }}
              />
            </div>
            <div>
              <label className="block text-[9px] tracking-[2px] uppercase mb-1" style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}>Date</label>
              <input
                type="text"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                placeholder="Apr 3"
                className="w-full px-3 py-2 text-[13px] border"
                style={{ background: 'var(--cream)', borderColor: 'var(--dust)', borderRadius: '2px', color: 'var(--ink)' }}
              />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label className="block text-[9px] tracking-[2px] uppercase mb-1" style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}>Description</label>
              <input
                type="text"
                value={form.label}
                onChange={(e) => setForm({ ...form, label: e.target.value })}
                placeholder="Cortado + pastry"
                className="w-full px-3 py-2 text-[13px] border"
                style={{ background: 'var(--cream)', borderColor: 'var(--dust)', borderRadius: '2px', color: 'var(--ink)' }}
              />
            </div>
            <div>
              <label className="block text-[9px] tracking-[2px] uppercase mb-1" style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}>Amount (USD)</label>
              <input
                type="number"
                step="0.01"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                placeholder="12.50"
                className="w-full px-3 py-2 text-[13px] border"
                style={{ background: 'var(--cream)', borderColor: 'var(--dust)', borderRadius: '2px', color: 'var(--ink)', fontFamily: 'var(--font-dm-mono), monospace' }}
              />
            </div>
            <div>
              <label className="block text-[9px] tracking-[2px] uppercase mb-1" style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}>Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as SpendItem['category'] })}
                className="w-full px-3 py-2 text-[13px] border"
                style={{ background: 'var(--cream)', borderColor: 'var(--dust)', borderRadius: '2px', color: 'var(--ink)' }}
              >
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="medical">Medical</option>
                <option value="build">Build</option>
                <option value="personal">Personal</option>
                <option value="culture">Culture</option>
              </select>
            </div>
          </div>

          <button
            onClick={addExpense}
            className="mt-4 px-5 py-2.5 text-[10px] tracking-[2px] uppercase"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              background: 'var(--ink)',
              color: 'var(--cream)',
              borderRadius: '2px',
            }}
          >
            Add →
          </button>
        </div>
      )}

      {/* Day-by-day list */}
      <div className="flex flex-col gap-0">
        {data.map((daySpend) => (
          <div key={daySpend.day} className="border-b py-6" style={{ borderColor: 'var(--dust)' }}>
            <div className="flex items-baseline justify-between mb-3">
              <div className="flex items-baseline gap-3">
                <span
                  className="text-3xl font-light"
                  style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--ink)' }}
                >
                  {String(daySpend.day).padStart(2, '0')}
                </span>
                <span
                  className="text-[10px] tracking-[1px] uppercase"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
                >
                  {daySpend.date}
                </span>
              </div>
              <span
                className="text-[13px]"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
              >
                {fmt(dayTotal(daySpend.items))}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {daySpend.items.map((item, idx) => {
                const catStyle = CATEGORY_COLORS[item.category]
                return (
                  <div key={idx} className="flex items-center justify-between gap-4 py-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="inline-block px-1.5 py-0.5 text-[8px] tracking-[1px] uppercase shrink-0"
                        style={{
                          fontFamily: 'var(--font-dm-mono), monospace',
                          background: catStyle.bg,
                          color: catStyle.text,
                          borderRadius: '2px',
                        }}
                      >
                        {catStyle.label}
                      </span>
                      <span className="text-[13px] truncate" style={{ color: 'var(--ink)' }}>
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className="text-[13px]"
                        style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--ink)' }}
                      >
                        {fmt(item.amount)}
                      </span>
                      <button
                        onClick={() => removeItem(daySpend.day, idx)}
                        className="text-[10px] opacity-30 hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--muted)' }}
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
