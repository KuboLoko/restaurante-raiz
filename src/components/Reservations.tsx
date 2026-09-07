import { Reveal } from './Reveal'
import { WhatsappIcon, PhoneIcon, ArrowIcon } from './Icons'
import { site, waHref } from '../lib/site'
import { useI18n } from '../lib/i18n'

export function Reservations() {
  const { t } = useI18n()
  const whatsappHref = waHref(t.wa.prefill)

  return (
    <section id="reservas" className="relative overflow-hidden py-24 text-raiz-cream sm:py-32">
      <div className="absolute inset-0 -z-10">
        <img
          src="/img/reservas.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-raiz-green/90" />
      </div>

      <div className="container-raiz">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-light justify-center">{t.reservations.eyebrow}</p>
          <h2 className="section-title text-raiz-cream">{t.reservations.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-raiz-cream/80 sm:text-lg">
            {whatsappHref ? t.reservations.introWa : t.reservations.introNoWa}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group w-full sm:w-auto"
            >
              {t.reservations.reservarGoogle}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto"
              >
                <WhatsappIcon className="h-4 w-4" />
                {t.reservations.whatsapp}
              </a>
            )}
          </div>

          <a
            href={site.phone.href}
            className="mt-6 inline-flex items-center gap-2 text-sm text-raiz-cream/75 transition-colors hover:text-raiz-gold"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone.display}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
