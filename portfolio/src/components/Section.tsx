import type { ReactNode } from 'react'

type Props = {
    id: string
    title: string
    children: ReactNode
}

export default function Section({ id, title, children }: Props) {
    return (
        <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
            <h2 className="mb-12 text-3xl font-bold text-ink">{title}</h2>
            {children}
        </section>
    )
}
