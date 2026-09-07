import { site } from '../lib/site'
import { useI18n } from '../lib/i18n'
import { StarIcon, ArrowIcon } from './Icons'

export function Hero() {
  const { t } = useI18n()

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/img/hero.jpg"
          alt={t.hero.imgAlt}
          className="h-full w-full animate-kenburns object-cover object-center"
          decoding="async"
          {...{ fetchpriority: 'high' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-raiz-green/80 via-raiz-green/55 to-raiz-green/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-raiz-green/70 to-transparent" />
      </div>

      <div className="container-raiz w-full py-28 sm:py-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow-light">
            <span className="hidden h-px w-8 bg-raiz-gold-400 sm:block" />
            {t.hero.eyebrow}
          </p>

          <h1 className="mt-5 font-serif text-6xl leading-[0.95] text-raiz-cream text-shadow-hero sm:text-7xl md:text-8xl">
            RAIZ
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-raiz-cream/85 sm:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#reservas" className="btn-gold">
              {t.header.reservarMesa}
            </a>
            <a href="#menu" className="btn-outline group">
              {t.hero.verMenu}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-raiz-cream/75">
            <span className="flex items-center gap-1 text-raiz-gold-400" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span>
              <strong className="font-semibold text-raiz-cream">{t.ratingValue}</strong>{' '}
              · {site.rating.count} {t.hero.ratingSuffix}
            </span>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest2 text-raiz-cream/60 transition-colors hover:text-raiz-gold sm:flex"
      >
        {t.hero.descobrir}
        <span className="h-10 w-px bg-gradient-to-b from-raiz-cream/60 to-transparent" />
      </a>
    </section>
  )
}
