import type { Place } from '@/lib/types'

function TagBadge({ tag }: { tag: string }) {
  return (
    <span
      className="inline-block px-2 py-0.5 text-[9px] tracking-[1px] uppercase"
      style={{
        fontFamily: 'var(--font-dm-mono), monospace',
        background: 'var(--dust)',
        color: 'var(--muted)',
        borderRadius: '2px',
      }}
    >
      {tag}
    </span>
  )
}

interface PlaceCardProps {
  place: Place
  compact?: boolean
}

export default function PlaceCard({ place, compact = false }: PlaceCardProps) {
  const isHighlight =
    place.tags.includes("Don't Miss") ||
    place.tags.includes('Don\'t Miss') ||
    place.reservationNeeded

  return (
    <div
      className="border-b py-6"
      style={{
        borderColor: 'var(--dust)',
        borderLeft: isHighlight ? '3px solid var(--terracotta)' : undefined,
        paddingLeft: isHighlight ? '20px' : undefined,
      }}
    >
      {/* Name + price */}
      <div className="flex items-baseline gap-3 flex-wrap mb-1">
        <h3
          className="text-xl font-normal leading-tight"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          {place.name}
        </h3>
        {place.priceRange && (
          <span
            className="text-[10px] tracking-[1px]"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
          >
            {place.priceRange}
          </span>
        )}
        {place.reservationNeeded && (
          <span
            className="text-[9px] tracking-[1px] uppercase px-2 py-0.5"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              background: '#f5ede5',
              color: 'var(--terracotta)',
              borderRadius: '2px',
            }}
          >
            Book Ahead
          </span>
        )}
      </div>

      {/* Address + hours */}
      <div
        className="text-[10px] tracking-[1px] mb-3"
        style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
      >
        {place.address}
        {place.neighborhood && place.neighborhood !== place.address && (
          <span> · {place.neighborhood}</span>
        )}
        {place.hours && <span> · {place.hours}</span>}
      </div>

      {/* Description */}
      {!compact && (
        <p className="text-[13.5px] leading-relaxed mb-3" style={{ color: 'var(--ink)' }}>
          {place.description}
        </p>
      )}

      {/* Must try */}
      {place.mustTry && (
        <div className="mb-3">
          <span
            className="text-[9px] tracking-[2px] uppercase"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
          >
            Try:
          </span>{' '}
          <span className="text-[13px]" style={{ color: 'var(--ink)' }}>
            {place.mustTry}
          </span>
        </div>
      )}

      {/* Closed days */}
      {place.closedOn && place.closedOn.length > 0 && (
        <div className="mb-3">
          <span
            className="text-[9px] tracking-[2px] uppercase"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--terracotta)' }}
          >
            Closed:
          </span>{' '}
          <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
            {place.closedOn.join(', ')}
          </span>
        </div>
      )}

      {/* Tags */}
      {place.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {place.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}

      {/* Notes/alert */}
      {place.notes && (
        <div
          className="border-l-[3px] pl-3 text-[12px] italic leading-relaxed"
          style={{
            borderColor: 'var(--terracotta)',
            color: 'var(--muted)',
          }}
        >
          {place.notes}
        </div>
      )}
    </div>
  )
}
