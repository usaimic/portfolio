import { experiences, profile } from '../data/profile'
import Media from './Media'
import { experienceId } from '../utils/ids'

const currentJobs = experiences.filter((e) => e.current)

type BadgeProps = {
  label: string
  dot: string // classe Tailwind del colore, es. "bg-green-500"
  pulse?: boolean
}

function Badge({ label, dot, pulse = true }: BadgeProps) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm text-ink">
      <span className="relative flex h-2.5 w-2.5">
        {pulse && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dot}`}
          />
        )}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dot}`} />
      </span>
      {label}
    </p>
  )
}

export default function Status() {
  const { actuallyWorking, openToWork } = profile

  return (
    <div className="flex max-w-xs flex-col items-center gap-3 text-center">
      {actuallyWorking && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge label="Attualmente al lavoro" dot="bg-amber-500" />

          {currentJobs.length > 0 && (
            <ul className="flex items-center gap-2" aria-label="Occupazioni attuali">
              {currentJobs.map((e) => (
                <li key={`${e.company}-${e.period}`}>
                  <a
                    href={`#${experienceId(e)}`}
                    aria-label={`Vai all'esperienza: ${e.role}, ${e.company}`}
                    title={`${e.role} · ${e.company}`}
                    className="group block rounded-xl outline-none transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Media
                      src={e.image}
                      alt={e.imageAlt ?? e.company}
                      fallback={e.company[0]}
                      fit={e.imageFit}
                      pad="p-1.5"
                      fallbackSize="text-base"
                      className="h-10 w-10 border border-line"
                      />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {openToWork ? (
        <Badge label="Disponibile a nuove opportunità" dot="bg-green-500" />
      ) : (
        <Badge label="Non disponibile al momento" dot="bg-muted" pulse={false} />
      )}
    </div>
  )
}