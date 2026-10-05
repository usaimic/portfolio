import { competitions } from '../data/profile'
import type { Competition } from '../data/profileTypes'
import Section from './Section'
import Media from './Media'

const featured = competitions.filter((c) => c.featured)
const others = competitions.filter((c) => !c.featured)

function hasInfo(c: Competition) {
  return Boolean(
    c.result ||
      c.role ||
      c.description ||
      c.highlights?.length ||
      c.links?.length ||
      c.tech?.length,
  )
}

// Contenuto in comune tra card e lista compatta
function Details({ c }: { c: Competition }) {
  return (
    <div className="space-y-3 text-sm text-muted">
      {c.result && (
        <p className="inline-block rounded-full border border-accent px-3 py-1 text-xs font-semibold text-accent">
          {c.result}
        </p>
      )}

      {c.role && (
        <p>
          <span className="font-medium text-ink">Ruolo:</span> {c.role}
        </p>
      )}

      {c.description && <p>{c.description}</p>}

      {c.highlights && c.highlights.length > 0 && (
        <ul className="list-disc space-y-1 pl-5">
          {c.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      {c.links && c.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {c.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-page/60 px-3 py-1 text-xs font-medium text-ink transition hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              <span>{l.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 shrink-0 opacity-70"
              >
                <path d="M6 3h7v7" />
                <path d="M13 3L6 10" />
              </svg>
            </a>
          ))}
        </div>
      )}

      {c.tech && c.tech.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {c.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Competitions() {
  return (
    <Section id="competitions" title="Iniziative">
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((c) => (
          <article
            key={`${c.name}-${c.period}`}
            className="group flex gap-4 rounded-2xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Media
              src={c.image}
              alt={c.imageAlt}
              fallback={c.name[0]}
              fit={c.imageFit}
              pad="p-2"
              fallbackSize="text-xl"
              className="h-14 w-14 shrink-0 border border-line"
            />

            <div className="min-w-0 flex-1 space-y-3">
              <div>
                <p className="text-sm font-medium text-accent">{c.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{c.name}</h3>
              </div>
              <Details c={c} />
            </div>
          </article>
        ))}
      </div>

      <h3 className="mb-4 mt-16 text-xl font-semibold text-ink">Altre competizioni</h3>
      <ul className="divide-y divide-line border-y border-line">
        {others.map((c) => {
          const details = hasInfo(c)

          return (
            <li
              key={`${c.name}-${c.period}`}
              tabIndex={details ? 0 : undefined}
              className="group rounded-lg px-3 py-3 outline-none transition hover:bg-accent-soft/60 focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex items-center gap-4">
                <Media
                  src={c.image}
                  alt={c.imageAlt}
                  fallback={c.name[0]}
                  fit={c.imageFit}
                  pad="p-1.5"
                  fallbackSize="text-base"
                  className="h-10 w-10 shrink-0 border border-line"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="font-medium text-ink">{c.name}</span>
                  <span className="shrink-0 text-sm text-muted">{c.period}</span>
                </div>
              </div>

              {details && (
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-focus-within:grid-rows-[1fr] group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="ml-14 pt-3">
                      <Details c={c} />
                    </div>
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}