'use client'

import { CSSProperties, useState } from 'react'

interface Props {
  src: string
  name: string
  containerStyle?: CSSProperties
}

export default function MarketImage({ src, name, containerStyle }: Props) {
  const [failed, setFailed] = useState(false)

  const baseContainer: CSSProperties = {
    overflow: 'hidden',
    flexShrink: 0,
    ...containerStyle,
  }

  if (failed) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ ...baseContainer, background: 'var(--dust)' }}
      >
        <span
          className="text-[10px] tracking-[2px] uppercase text-center px-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
        >
          {name}
        </span>
      </div>
    )
  }

  return (
    <div style={baseContainer}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  )
}
