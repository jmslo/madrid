import type { Project } from '@/lib/site/content'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Small line drawings, one per project. */
export function ProjectGlyph({ id }: { id: Project['id'] }) {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" {...stroke}>
      {id === 'recipes' && (
        <>
          <path d="M10 22h28v9a7 7 0 0 1-7 7H17a7 7 0 0 1-7-7z" />
          <path d="M6 24h4M38 24h4M8 22h32" />
          <path d="M18 15c-2-2 2-4 0-7M24 16c-2-2 2-4 0-7M30 15c-2-2 2-4 0-7" />
        </>
      )}
      {id === 'packing' && (
        <>
          <rect x="8" y="15" width="32" height="24" rx="3" />
          <path d="M18 15v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
          <path d="M16 15v24M32 15v24" />
          <path d="M21 26h6" />
        </>
      )}
      {id === 'forty' && (
        <>
          <circle cx="24" cy="24" r="17" />
          <path d="M24 7v3M24 38v3M7 24h3M38 24h3" />
          <path d="M24 24l-6-8M24 24l9 3" />
          <circle cx="24" cy="24" r="1.4" fill="currentColor" stroke="none" />
        </>
      )}
      {id === 'shelf' && (
        <>
          <path d="M6 40h36" />
          <rect x="9" y="14" width="6" height="26" />
          <rect x="15" y="20" width="5" height="20" />
          <rect x="20" y="10" width="7" height="30" />
          <path d="M30.5 17.5l5.6-1.6 6 21.4-5.6 1.6z" />
          <path d="M11 19h2M22 16h3M22 34h3" />
        </>
      )}
      {id === 'coat' && (
        <>
          <circle cx="24" cy="24" r="17" />
          <circle cx="24" cy="24" r="12.5" />
          <circle cx="20" cy="20" r="1.6" />
          <circle cx="28" cy="20" r="1.6" />
          <circle cx="20" cy="28" r="1.6" />
          <circle cx="28" cy="28" r="1.6" />
          <path d="M20 20l8 8M28 20l-8 8" />
        </>
      )}
    </svg>
  )
}

/** Illustration that fills the hero arch until a portrait is added. */
export function ArchScene() {
  return (
    <svg
      viewBox="0 0 300 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of a sun rising over hills"
    >
      <rect width="300" height="400" fill="var(--paper-2)" />
      <circle cx="190" cy="178" r="74" fill="var(--butter)" />
      <path d="M-10 268C40 214 96 204 150 240s110 40 170 4v170H-10z" fill="var(--accent)" />
      <path d="M-10 318c60-48 120-52 176-18s96 26 144-6v120H-10z" fill="var(--pine)" />
      <g fill="none" stroke="var(--paper)" strokeWidth="1.2" strokeLinecap="round" opacity=".55">
        <path d="M-10 344c58-40 116-44 170-14s92 24 150-6" />
        <path d="M-10 366c58-36 116-40 170-12s92 22 150-6" />
      </g>
    </svg>
  )
}
