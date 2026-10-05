export function experienceId(e: { company: string; period: string }) {
  const text = `${e.company}-${e.period}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // toglie gli accenti
    .replace(/[^a-z0-9]+/g, '-') // tutto il resto diventa un trattino
    .replace(/^-|-$/g, '') // niente trattini a inizio e fine
  return `exp-${text}`
}