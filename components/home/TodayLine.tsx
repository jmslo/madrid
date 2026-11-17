'use client'

import { useEffect, useState } from 'react'

/** "You're reading this on Monday, November 16, 2026." Rendered on the client so it is always today. */
export default function TodayLine() {
  const [today, setToday] = useState('')

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    )
  }, [])

  return <p>{today ? `You’re reading this on ${today}.` : 'Thanks for reading.'}</p>
}
