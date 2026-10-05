import { languages, profile } from '../data/profile'
import Status from './Status'

const buttonBase =
  'rounded-lg px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5'

export default function Hero() {
  return (
    <section
      id="top"
        className="mx-auto flex min-h-dvh max-w-5xl items-center px-6 pt-28 pb-12 md:pt-16 md:pb-0"
    >
      <div className="flex w-full flex-col-reverse items-center gap-10 md:flex-row md:justify-start md:gap-16">
        <div className="w-full md:max-w-xl">
          <p className="text-sm font-medium text-accent">Ciao, sono</p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-2xl text-muted sm:text-3xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.summary}
          </p>

          {languages.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-muted">
              {languages.map((l) => (
                <li key={l.language} title={l.note} className="rounded-full border border-line px-3 py-1">
                  {l.language} · {l.level}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={profile.links.cv}
              download
              className={`${buttonBase} bg-accent text-page`}
            >
              Scarica il CV
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-line text-ink hover:border-accent`}
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-line text-ink hover:border-accent`}
            >
              GitHub
            </a>
            {profile.email && (
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent('Contatto dal portfolio')}`}
                className={`${buttonBase} border border-line text-ink hover:border-accent`}
              >
                Invia una mail
              </a>
            )}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-5">
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            className="h-48 w-48 rounded-full object-cover ring-2 ring-accent ring-offset-4 ring-offset-page sm:h-64 sm:w-64"
          />
          <Status />
        </div>
      </div>
    </section>
  )
}