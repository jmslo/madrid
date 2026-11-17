'use client'

import { useState } from 'react'
import { places, type Place } from '@/lib/site/content'
import { LAND_PATH, MAP_H, MAP_W, project } from '@/lib/site/worldPath'

const KIND_LABEL = { hq: 'HQ', orbit: 'Regular orbit', list: 'I keep a list' } as const

const home = places.find((p) => p.kinds.includes('hq')) ?? places[0]
const [hx, hy] = project(home.lon, home.lat)

/** Dashed flight path from HQ, bowed away from the straight line. */
function arc(x: number, y: number) {
  const mx = (hx + x) / 2
  const my = (hy + y) / 2
  const dist = Math.hypot(x - hx, y - hy)
  const lift = Math.min(90, dist * 0.22)
  return `M${hx.toFixed(1)} ${hy.toFixed(1)}Q${mx.toFixed(1)} ${(my - lift).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`
}

const meridians = [-120, -100, -80, -60, -40, -20, 0, 20, 40]
const parallels = [-20, 0, 20, 40, 60]

function Pin({ place, active }: { place: Place; active: boolean }) {
  const isHq = place.kinds.includes('hq')
  const hasList = place.kinds.includes('list')
  return (
    <>
      {active && <circle className="pin-halo" r="15" />}
      {isHq ? (
        <>
          <circle className="pin-hq-ring" r="8.5" />
          <circle className="pin-hq" r="4.5" />
        </>
      ) : hasList ? (
        <circle className="pin-list" r="5.5" />
      ) : (
        <circle className="pin-orbit" r="4.5" />
      )}
    </>
  )
}

export default function PlacesMap() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="places-grid">
      <div className="map-plate">
        <svg
          className="map"
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          role="img"
          aria-label="Map of the places listed alongside, from San Francisco to Nairobi"
        >
          <g className="map-grid">
            {meridians.map((lon) => {
              const [x] = project(lon, 0)
              return <line key={lon} x1={x} x2={x} y1={0} y2={MAP_H} />
            })}
            {parallels.map((lat) => {
              const [, y] = project(0, lat)
              return <line key={lat} x1={0} x2={MAP_W} y1={y} y2={y} />
            })}
          </g>
          <path className="map-land" d={LAND_PATH} />
          <g className="map-ticks" aria-hidden="true">
            {parallels.map((lat) => {
              const [, y] = project(0, lat)
              return (
                <text key={lat} x={MAP_W - 8} y={y - 5} textAnchor="end">
                  {lat === 0 ? 'Equator' : `${Math.abs(lat)}°${lat > 0 ? 'N' : 'S'}`}
                </text>
              )
            })}
          </g>

          <g className="map-arcs" aria-hidden="true">
            {places
              .filter((p) => p.id !== home.id)
              .map((p) => {
                const [x, y] = project(p.lon, p.lat)
                return (
                  <path key={p.id} d={arc(x, y)} className={active === p.id ? 'is-active' : undefined} />
                )
              })}
          </g>

          {places.map((p) => {
            const [x, y] = project(p.lon, p.lat)
            const on = active === p.id
            return (
              <g
                key={p.id}
                className={`pin${on ? ' is-active' : ''}`}
                transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(p.id)}
              >
                <circle className="pin-hit" r="16" />
                <Pin place={p} active={on} />
                <text className="pin-label" x={p.label.dx} y={p.label.dy} textAnchor={p.label.anchor}>
                  {p.name}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <ol className="place-list">
        {places.map((p, i) => (
          <li
            key={p.id}
            className={active === p.id ? 'is-active' : undefined}
            onMouseEnter={() => setActive(p.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(p.id)}
            onBlur={() => setActive(null)}
          >
            <span className="place-no">{String(i + 1).padStart(2, '0')}</span>
            <span className="place-main">
              <span className="place-name">{p.name}</span>
              <span className="place-kind">{p.kinds.map((k) => KIND_LABEL[k]).join(' · ')}</span>
              {p.note && <span className="place-note">{p.note}</span>}
            </span>
            {p.mapsUrl && (
              <a className="place-link" href={p.mapsUrl} target="_blank" rel="noopener">
                Open in Maps<span className="sr-only">: {p.name}</span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
