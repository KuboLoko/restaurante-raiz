import { Reveal } from './Reveal'
import { MapPinIcon, PhoneIcon, ClockIcon, InstagramIcon, RootMark } from './Icons'
import { site } from '../lib/site'

export function Contact() {
  return (
    <section id="contactos" className="bg-raiz-green py-24 text-raiz-cream sm:py-32">
      <div className="container-raiz grid gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow-light">
            <RootMark className="text-raiz-gold-400" />
            Contactos &amp; morada
          </p>
          <h2 className="section-title text-raiz-cream">Encontre-nos no Barreiro</h2>

          <ul className="mt-8 space-y-6">
            <li className="flex gap-4">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-raiz-gold-400" />
              <div>
                <span className="block text-xs uppercase tracking-widest2 text-raiz-cream/50">
                  Morada
                </span>
                <a
                  href={site.maps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block leading-relaxed text-raiz-cream/90 transition-colors hover:text-raiz-gold"
                >
                  {site.address.street}
                  <br />
                  {site.address.postal}
                </a>
              </div>
            </li>

            <li className="flex gap-4">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-raiz-gold-400" />
              <div>
                <span className="block text-xs uppercase tracking-widest2 text-raiz-cream/50">
                  Telefone
                </span>
                <a
                  href={site.phone.href}
                  className="mt-1 block text-raiz-cream/90 transition-colors hover:text-raiz-gold"
                >
                  {site.phone.display}
                </a>
              </div>
            </li>

            <li className="flex gap-4">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-raiz-gold-400" />
              <div>
                <span className="block text-xs uppercase tracking-widest2 text-raiz-cream/50">
                  Horário
                </span>
                <p className="mt-1 leading-relaxed text-raiz-cream/90">
                  Seg&ndash;Qui 12:30&ndash;14:30 · 19:30&ndash;22:30
                  <br />
                  Sex&ndash;Sáb 12:30&ndash;15:00 · 19:30&ndash;23:00
                  <br />
                  Domingo encerrado
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-raiz-gold-400" />
              <div>
                <span className="block text-xs uppercase tracking-widest2 text-raiz-cream/50">
                  Instagram
                </span>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-raiz-cream/90 transition-colors hover:text-raiz-gold"
                >
                  {site.instagram.handle}
                </a>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full min-h-[340px] overflow-hidden rounded-2xl ring-1 ring-raiz-cream/15">
            <iframe
              title="Mapa — RAIZ Restaurante, Barreiro"
              src={site.maps.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              style={{ border: 0, minHeight: 340 }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
