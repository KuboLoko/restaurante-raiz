import { Reveal } from './Reveal'
import { WhatsappIcon, PhoneIcon, ArrowIcon } from './Icons'
import { site, whatsappHref } from '../lib/site'

export function Reservations() {
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
          <p className="eyebrow-light justify-center">Reservas</p>
          <h2 className="section-title text-raiz-cream">Guarde a sua mesa no RAIZ</h2>
          <p className="mt-5 text-base leading-relaxed text-raiz-cream/80 sm:text-lg">
            Reserve em segundos pelo Google, ou fale connosco directamente por WhatsApp ou telefone.
            Para grupos grandes e eventos, contacte-nos e tratamos de tudo.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group w-full sm:w-auto"
            >
              Reservar pelo Google
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp
            </a>
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
