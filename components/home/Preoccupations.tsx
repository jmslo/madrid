'use client'

import { useState } from 'react'
import { preoccupations } from '@/lib/site/content'

export default function Preoccupations() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ol className="thoughts">
      {preoccupations.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={item.topic} className={isOpen ? 'is-open' : undefined}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`thought-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="thought-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="thought-topic">{item.topic}</span>
                <span className="thought-toggle" aria-hidden="true" />
              </button>
            </h3>
            <div className="thought-take" id={`thought-${i}`} hidden={!isOpen}>
              <p>{item.take}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
