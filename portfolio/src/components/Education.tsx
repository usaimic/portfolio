import { education } from '../data/profile'
import Section from './Section'
import Media from './Media'

export default function Education() {
  return (
    <Section id="education" title="Formazione">
      <ol className="relative border-l-2 border-line">
        {education.map((e) => (
          <li key={`${e.title}-${e.period}`} className="mb-8 ml-8">
            <span className="absolute -left-[7px] mt-[46px] h-3 w-3 rounded-full bg-accent ring-4 ring-page" />

            <article className="group flex items-center gap-5 rounded-2xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:shadow-xl">
              <Media
                src={e.image}
                alt={e.imageAlt}
                fallback={e.institution[0]}
                fit={e.imageFit}
                pad="p-2"
                fallbackSize="text-2xl"
                className="h-16 w-16 shrink-0 border border-line"
              />

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-accent">{e.period}</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{e.title}</h3>

                <p className="text-muted">
                  {e.url ? (
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline transition hover:text-accent"
                    >
                      {e.institution}
                    </a>
                  ) : (
                    e.institution
                  )}
                  {e.location && <span> · {e.location}</span>}
                </p>
              </div>
              <div className='w-1/5 flex justify-center items-center'>
                {e.grade && (
                  <p className="my-3 inline-block rounded-full bg-accent-soft px-3 py-1 text-m font-medium text-accent">
                    {e.grade}
                  </p>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}