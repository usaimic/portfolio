import { useState } from "react";
import { profile } from "../data/profile";

const links = [
    {href: '#experience', label: 'Esperienza' },
    {href: '#education', label: 'Formazione' },
    {href: '#certifications', label: 'Certificazioni' },
    {href: '#competitions', label: 'Iniziative' },
    {href: '#projects', label: 'Progetti' },
    {href: '#skills', label: 'Competenze' },
] 

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return(
        <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-page/80 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <a href="#top" className="font-semibold text-ink">
                    {profile.name}
                </a>

                {/* Menu desktop */}
                <ul className="hidden items-center gap-6 lg:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="text-sm text-muted transition hover:text-ink">
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Pulsante mobile */}
                <button
                    type="button"
                    className="rounded-lg border border-line px-3 py-1.5 text-s text-ink lg:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? 'Chiudi' : 'Menu'}
                </button>
            </nav>

            {/* Menu mobile */}
            {open && (
                <ul id="mobile-menu" className="border-t border-line bg-page px-6 py-2 lg:hidden">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a 
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="bloc py-3 text-muted hover:text-ink"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}