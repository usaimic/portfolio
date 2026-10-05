export type Experience = {
    role: string
    company: string
    location?: string
    period: string
    description?: string
    highlights?: string[]
    technologies: string[]
    link?: { label: string; url: string }
    featured?: boolean
    image?: string
    imageAlt?: string
    imageFit?: 'cover' | 'contain'
    current?: boolean
}

export type Education = {
    title: string
    institution: string
    location?: string
    period: string
    grade?: string
    url?: string
    image?: string
    imageAlt?: string
    imageFit?: 'cover' | 'contain'
}

export type Certification = {
    name: string
    issuer: string
    date?: string
    description?: string
    highlights?: string[]
    url?: string // link di verifica (badge, certificato)
    issuerUrl?: string // sito dell'ente
    image?: string
    imageAlt?: string
    imageFit?: 'cover' | 'contain'
}

export type Competition = {
    name: string
    period: string
    description?: string
    result?: string // es. "2° posto regionale"
    role?: string
    highlights?: string[]
    tech?: string[]
    links?: { label: string; url: string }[]
    featured?: boolean
    image?: string
    imageAlt?: string
    imageFit?: 'cover' | 'contain'
}

export type Activity = {
    title: string
    subtitle?: string
    period?: string
    description?: string
    result?: string
    url?: string
    image?: string
    imageAlt?: string
    imageFit?: 'cover' | 'contain'
}

export type Language = {
    language: string
    level: string
    note?: string
}

export type Project = {
    name: string
    description: string
    technologies: string[]
    repo?: string
    demo?: string
    details?: string
    todo?: string[]
}

export type Skill = {
    category: string
    items: string[]
}
