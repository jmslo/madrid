import fs from 'node:fs'
import path from 'node:path'
import { Fraunces, Instrument_Sans } from 'next/font/google'
import './home.css'
import {
  facts,
  hq,
  pleasureReads,
  projects,
  roaming,
  roles,
  workFinished,
  workQueue,
  writings,
  writingsNote,
  type WorkRead,
} from '@/lib/site/content'
import { ProjectGlyph, ArchScene } from '@/components/home/Glyphs'
import PlacesMap from '@/components/home/PlacesMap'
import Preoccupations from '@/components/home/Preoccupations'
import RecForm from '@/components/home/RecForm'
import TodayLine from '@/components/home/TodayLine'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT', 'WONK'],
  variable: '--font-fraunces',
  display: 'swap',
})

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

/** Drop a photo at public/portrait.jpg (or .png / .webp) and it replaces the illustration. */
function findPortrait(): string | null {
  for (const name of ['portrait.jpg', 'portrait.jpeg', 'portrait.png', 'portrait.webp']) {
    if (fs.existsSync(path.join(process.cwd(), 'public', name))) return `/${name}`
  }
  return null
}

function isExternal(href: string) {
  return /^https?:\/\//.test(href)
}

function ext(href: string) {
  return isExternal(href) ? { target: '_blank', rel: 'noopener' } : {}
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5`}>
      <span aria-hidden="true">★</span> {rating % 1 ? rating.toFixed(1) : rating}
    </span>
  )
}

function SectionHead({
  no,
  eyebrow,
  children,
}: {
  no: string
  eyebrow: string
  children: React.ReactNode
}) {
  return (
    <header className="sec-head">
      <p className="sec-kicker">
        <span className="sec-no">{no}</span>
        <span>{eyebrow}</span>
      </p>
      <h2 className="sec-title">{children}</h2>
    </header>
  )
}

function WorkItem({ item }: { item: WorkRead }) {
  const body = (
    <>
      <span className="work-kind">{item.kind}</span>
      <span className="work-title">{item.title}</span>
      <span className="work-source">{item.source}</span>
    </>
  )
  return (
    <li className="work-item">
      {item.href ? (
        <a href={item.href} {...ext(item.href)}>
          {body}
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      ) : (
        <div>{body}</div>
      )}
    </li>
  )
}

export default function HomePage() {
  const portrait = findPortrait()
  const feature = pleasureReads[0]

  return (
    <div className={`jsl ${fraunces.variable} ${instrument.variable}`}>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="topbar wrap">
        <span className="topbar-mark">jessicaslocum.com</span>
        <nav aria-label="Sections">
          <a href="#building">Building</a>
          <a href="#reading">Reading</a>
          <a href="#places">Places</a>
          <a href="#thinking">Thinking</a>
          <a href="#writing">Writing</a>
        </nav>
      </header>

      <main id="main">
        {/* ── Hero ── */}
        <section className="hero wrap" aria-label="Introduction">
          <div className="hero-text">
            <h1 className="hero-name">
              <span>Jessica</span>
              <em>Slocum</em>
            </h1>
            <ul className="roles" aria-label="Roles">
              {roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>

          <figure className="hero-figure">
            <div className="arch">
              {portrait ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={portrait} alt="Jessica Slocum" />
              ) : (
                <ArchScene />
              )}
            </div>
          </figure>

          <dl className="whereabouts">
            <div>
              <dt>HQ</dt>
              <dd>{hq}</dd>
            </div>
            <div>
              <dt>Frequently found roaming</dt>
              <dd>{roaming.join(', ')}</dd>
            </div>
          </dl>
        </section>

        {/* ── 01 Rapid fire ── */}
        <section className="sec wrap" id="rapid-fire">
          <SectionHead no="01" eyebrow="Rapid fire">
            Rapid fire <em>bio</em>
          </SectionHead>
          <dl className="facts">
            {facts.map((fact) => (
              <div key={fact.label} className="fact">
                <dt>{fact.label}</dt>
                <dd>
                  {fact.href ? (
                    <a href={fact.href} {...ext(fact.href)}>
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                  {fact.detail && <small>{fact.detail}</small>}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── 02 Building ── */}
        <section className="sec wrap" id="building">
          <SectionHead no="02" eyebrow="Projects">
            Recent <em>projects</em>
          </SectionHead>
          <ol className="projects">
            {projects.map((project) => {
              const inner = (
                <>
                  <span className="project-glyph">
                    <ProjectGlyph id={project.id} />
                  </span>
                  <span className="project-main">
                    <span className="project-title">{project.title}</span>
                    <span className="project-blurb">{project.blurb}</span>
                  </span>
                  {project.href ? (
                    <span className="project-link">
                      {project.linkLabel}
                      <span className="arrow" aria-hidden="true">
                        {isExternal(project.href) ? '↗' : '→'}
                      </span>
                    </span>
                  ) : (
                    <span className="project-status">{project.status}</span>
                  )}
                </>
              )
              return (
                <li key={project.id}>
                  {project.href ? (
                    <a className="project" href={project.href} {...ext(project.href)}>
                      {inner}
                    </a>
                  ) : (
                    <div className="project">{inner}</div>
                  )}
                </li>
              )
            })}
          </ol>
        </section>

        {/* ── 03 Reading ── */}
        <section className="sec-reading" id="reading">
          <div className="wrap sec-grid">
            <SectionHead no="03" eyebrow="Inputs">
              My learning <em>loop</em>
            </SectionHead>
            <figure className="feature">
              <p className="sub-label">For pleasure, most recently</p>
              <blockquote>
                <p>{feature.quote}</p>
              </blockquote>
              <figcaption>
                <cite>{feature.title}</cite>, {feature.author} <Stars rating={feature.rating} />
              </figcaption>
            </figure>
          </div>

          <div className="wrap">
            <ul className="shelf" aria-label="Recently read for pleasure">
              {pleasureReads.map((book, i) => (
                <li key={book.title} className="book">
                  <div className={`cover tone-${book.tone} cover-${i % 3}`} aria-hidden="true">
                    <span className="cover-title">{book.title}</span>
                    <span className="cover-author">{book.author}</span>
                  </div>
                  <p className="book-meta">
                    <span className="book-title">{book.title}</span>
                    <Stars rating={book.rating} />
                  </p>
                  <p className="book-quote">“{book.shelfQuote ?? book.quote}”</p>
                </li>
              ))}
            </ul>
            <p className="shelf-more">
              <a href="/reads">All 300 reads, shelved by theme</a>
              <a href="/reads/recs">
                Ask Dewey for a rec
              </a>
            </p>
          </div>

          <div className="wrap work-row">
            <div className="work">
              <p className="sub-label">For work</p>
              <div className="work-cols">
                <div>
                  <h3>Just finished</h3>
                  <ul>
                    {workFinished.map((item) => (
                      <WorkItem key={item.title} item={item} />
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Also in the queue</h3>
                  <ul>
                    {workQueue.map((item) => (
                      <WorkItem key={item.title} item={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <RecForm />
          </div>
        </section>

        {/* ── 04 Places ── */}
        <section className="places" id="places">
          <div className="wrap">
            <div className="places-head">
              <SectionHead no="04" eyebrow="If you go">
                Travel <em>recs</em>
              </SectionHead>
              <ul className="legend" aria-label="Map key">
                <li>
                  <i className="key key-hq" /> HQ
                </li>
                <li>
                  <i className="key key-orbit" /> Regular orbit
                </li>
                <li>
                  <i className="key key-list" /> I keep a list
                </li>
              </ul>
            </div>
            <PlacesMap />
          </div>
        </section>

        {/* ── 05 Thinking ── */}
        <section className="sec wrap" id="thinking">
          <SectionHead no="05" eyebrow="Preoccupations">
            What I can’t stop <em>thinking about</em>
          </SectionHead>
          <Preoccupations />
        </section>

        {/* ── 06 Writing ── */}
        <section className="sec wrap" id="writing">
          <SectionHead no="06" eyebrow="Archive">
            Occasional <em>writings</em>
          </SectionHead>
          <div>
            <ol className="writings">
              {writings.map((piece, i) => (
                <li key={piece.title} className={piece.placeholder ? 'is-placeholder' : undefined}>
                  <span className="writing-no">{String(i + 1).padStart(2, '0')}</span>
                  <span className="writing-main">
                    {piece.href ? (
                      <a className="writing-title" href={piece.href} {...ext(piece.href)}>
                        {piece.title}
                      </a>
                    ) : (
                      <span className="writing-title">{piece.title}</span>
                    )}
                    {piece.dek && <span className="writing-dek">{piece.dek}</span>}
                  </span>
                </li>
              ))}
            </ol>
            <p className="writings-note">{writingsNote}</p>
          </div>
        </section>
      </main>

      <footer className="foot wrap">
        <TodayLine />
        <p>Brooklyn, N.Y.</p>
      </footer>
    </div>
  )
}
