import { skills } from '../data/profile'
import Section from './Section'

const cardClass =
  'rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-1 hover:shadow-xl'

export default function Skills() {
  return (
    <Section id="skills" title="Competenze">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <article key={group.category} className={cardClass}>
            <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}