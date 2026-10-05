import { certifications } from '../data/profile'
import Section from './Section'
import Media from './Media'

export default function Certification() {
  return (
    <Section id="certifications" title="Certificazioni">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((e) => (
          <li key={`${e.name}-${e.issuer}`} className="h-full">
            <article className="h-full group flex flex-col items-center gap-5 rounded-2xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:shadow-xl">
              <Media
                src={e.image}
                alt={e.imageAlt}
                fallback={e.name[0]}
                fit={e.imageFit}
                pad="p-2"
                fallbackSize="text-2xl"
                className="h-16 w-16 shrink-0 border border-line"
              />

              <div className="min-w-0 flex-2 flex flex-col gap-2 items-center">
                <h3 className="mt-1 text-xl font-semibold text-ink text-center">{e.name}</h3>
                <p className="text-sm font-medium text-accent">
                    {e.issuerUrl ? (
                    <a
                      href={e.issuerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline transition hover:text-accent"
                    >
                      {e.issuer}
                    </a>
                  ) : (
                    e.issuer
                  )}
                </p>

                <p className="text-muted">
                  {e.date && <span> {e.date}</span>}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}