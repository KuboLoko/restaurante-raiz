import { navSections, site } from '../lib/site'
import { useI18n } from '../lib/i18n'
import { InstagramIcon } from './Icons'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-raiz-green-800 text-raiz-cream/70">
      <div className="container-raiz py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <img
                src="/img/logo.jpg"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover ring-1 ring-raiz-cream/20"
              />
              <span className="font-serif text-xl font-semibold tracking-widest2 text-raiz-cream">
                RAIZ
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {t.hero.eyebrow}. {site.address.street}, {site.address.postal}.
            </p>
          </div>

          <nav aria-label="RAIZ" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {navSections.map((id) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-raiz-gold">
                {t.nav[id]}
              </a>
            ))}
            <a href="#reservas" className="transition-colors hover:text-raiz-gold">
              {t.footer.reservas}
            </a>
          </nav>

          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-raiz-cream/20 transition-colors hover:bg-raiz-cream/5 hover:text-raiz-gold"
            aria-label={`Instagram ${site.instagram.handle}`}
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-raiz-cream/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. {t.footer.rights}
          </p>
          <p>
            {t.footer.madeBy}{' '}
            <a
              href="https://kuboloko.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-raiz-cream/80 transition-colors hover:text-raiz-gold"
            >
              Kubo Loko
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
