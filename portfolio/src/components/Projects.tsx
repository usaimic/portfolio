import { projects } from '../data/profile'
import Section from './Section'

// "Tetris - Unibo 1° anno" → titolo "Tetris", contesto "Unibo 1° anno"
function splitName(name: string) {
  const [title, ...rest] = name.split(' - ')
  return { title, context: rest.join(' - ') }
}

export default function Projects() {
  return (
    <Section id="projects" title="Progetti">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const { title, context } = splitName(p.name)

          return (
            <article
              key={p.name}
              className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {context && <p className="text-sm font-medium text-accent">{context}</p>}
              <h3 className="mt-1 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-muted">{p.description}</p>

              {p.todo && p.todo.length > 0 && (
                <div className="mt-4 rounded-lg bg-accent-soft/60 px-4 py-3 text-sm">
                  <p className="font-medium text-ink">Prossimi passi</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-muted">
                    {p.todo.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {p.technologies && p.technologies.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              {(p.repo || p.demo) && (
                <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm font-medium">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      Codice su GitHub →
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </Section>
  )
}