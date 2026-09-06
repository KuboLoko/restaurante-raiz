import { useEffect, useState } from 'react'
import { navLinks, site } from '../lib/site'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out-soft ${
        solid
          ? 'bg-raiz-green/95 shadow-[0_1px_0_rgba(245,240,232,0.08)] backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="container-raiz flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.legalName} — início`}>
          <img
            src="/img/logo.jpg"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 rounded-full object-cover ring-1 ring-raiz-cream/30 sm:h-10 sm:w-10"
          />
          <span className="font-serif text-xl font-semibold tracking-widest2 text-raiz-cream sm:text-2xl">
            RAIZ
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-raiz-cream/80 transition-colors hover:text-raiz-gold"
            >
              {link.label}
            </a>
          ))}
          <a href="#reservas" className="btn-gold !px-6 !py-3 !text-xs">
            Reservar
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-raiz-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`fixed inset-0 z-40 bg-raiz-green transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <nav
            className="container-raiz flex h-full flex-col justify-center gap-2"
            aria-label="Navegação (telemóvel)"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-raiz-cream/10 py-4 font-serif text-2xl text-raiz-cream transition-colors hover:text-raiz-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setOpen(false)}
              className="btn-gold mt-6 w-full"
            >
              Reservar mesa
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
