import { experiences } from '../data/profile'
import Section from './Section'
import Media from './Media'
import { experienceId } from '../utils/ids'

const featured = experiences.filter((e) => e.featured)
const others = experiences.filter((e) => !e.featured)

export default function Experience() {
  return (
    <Section id="experience" title="Esperienza">
      <ol className="relative border-l-2 border-line">
        {featured.map((e) => {
          const hasExpandableContent = Boolean(
            e.highlights?.length || e.link || e.technologies?.length
          )

          return (
            <li 
              key={`${e.company}-${e.period}-${e.location}`} 
              id = {experienceId(e)}
              className="mb-8 ml-8 scroll-mt-24"
            >
              <span className="absolute -left-[7px] mt-[46px] h-3 w-3 rounded-full bg-accent ring-4 ring-page" />

              <article className="group flex gap-5 rounded-2xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:shadow-xl">
                <Media
                  src={e.image}
                  alt={e.imageAlt}
                  fallback={e.company[0]}
                  fit={e.imageFit}
                  pad="p-2"
                  fallbackSize="text-2xl"
                  className="h-16 w-16 shrink-0 border border-line"
                />

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-accent">{e.period}</p>
                  <h3 className="mt-1 text-xl font-semibold text-ink">
                    {e.role} · {e.company}
                  </h3>
                  {e.location && <p className="text-sm text-muted">{e.location}</p>}

                  {/* Contenuto visibile solo all'hover (highlights in poi) */}
                  {hasExpandableContent && (
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                      <div className="overflow-hidden">
                        {e.description && <p className="mt-3 text-muted">{e.description}</p>}

                        {e.highlights && e.highlights.length > 0 && (
                          <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                            {e.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                        )}

                        {e.link && (
                          <a
                            href={e.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block text-sm text-accent underline"
                          >
                            {e.link.label}
                          </a>
                        )}

                        {e.technologies && e.technologies.length > 0 && (
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {e.technologies.map((t) => (
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
                    </div>
                  )}
                </div>
              </article>
            </li>
          )
        })}
      </ol>

      <h3 className="mb-4 mt-16 text-xl font-semibold text-ink">Altre esperienze</h3>
      <ul className="divide-y divide-line border-y border-line">
        {others.map((e) => {
          const hasDetails = Boolean(
            e.location || e.description || e.highlights?.length || e.technologies?.length,
          )

          return (
            <li
              key={`${e.company}-${e.period}`}
              id = {experienceId(e)}
              tabIndex={hasDetails ? 0 : undefined}
              className="group scroll-mt-24 rounded-lg px-3 py-3 outline-none transition hover:bg-accent-soft/60"
            >
              <div className="flex items-center gap-4">
                <Media
                  src={e.image}
                  alt={e.imageAlt}
                  fallback={e.company[0]}
                  fit={e.imageFit}
                  pad="p-1.5"
                  fallbackSize="text-base"
                  className="h-10 w-10 shrink-0 border border-line"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="text-ink">
                    <strong className="font-medium">{e.role}</strong> · {e.company}
                  </span>
                  <span className="shrink-0 text-sm text-muted">{e.period}</span>
                </div>
              </div>

              {hasDetails && (
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-focus-within:grid-rows-[1fr] group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="ml-14 space-y-2 pt-3 text-sm text-muted">
                      {e.location && <p>{e.location}</p>}
                      {e.description && <p>{e.description}</p>}
                      {e.highlights && (
                        <ul className="list-disc space-y-1 pl-5">
                          {e.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      )}
                      {e.technologies && e.technologies.length > 0 && (
                        <ul className="flex flex-wrap gap-2 pt-1">
                          {e.technologies.map((t) => (
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