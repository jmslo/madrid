'use client'

import { useEffect } from 'react'
import { READS_CSS, READS_HTML, READS_JS } from './content'

export default function ReadsShelf() {
  useEffect(() => {
    new Function(READS_JS)()
  }, [])

  return (
    <div id="reads-root">
      <style dangerouslySetInnerHTML={{ __html: READS_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: READS_HTML }} />
    </div>
  )
}
