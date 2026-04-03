'use client'

import { useState } from 'react'

export default function MarketImage({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="w-full flex items-center justify-center"
        style={{ aspectRatio: '16/9', background: 'var(--dust)' }}
      >
        <span
          className="text-[10px] tracking-[2px] uppercase"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          {name}
        </span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
    />
  )
}
