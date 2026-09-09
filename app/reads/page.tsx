import type { Metadata } from 'next'
import ReadsShelf from './ReadsShelf'

export const metadata: Metadata = {
  title: 'The Slocum Stacks · Reads',
  description: 'A personal library, catalogued one book at a time.',
}

export default function ReadsPage() {
  return <ReadsShelf />
}
