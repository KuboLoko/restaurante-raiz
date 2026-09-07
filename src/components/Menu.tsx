import { Reveal } from './Reveal'
import { RootMark } from './Icons'
import { site } from '../lib/site'
import { useI18n, useMenu } from '../lib/i18n'

export function Menu() {
  const { t } = useI18n()
  const dishes = useMenu()

  return (
    <section id="menu" className="bg-raiz-green py-24 text-raiz-cream sm:py-32">
      <div className="container-raiz">
        <Reveal className="max-w-2xl">
          <p className="eyebrow-light">
            <RootMark className="text-raiz-gold-400" />
            {t.menu.eyebrow}
          </p>
          <h2 className="section-title text-raiz-cream">{t.menu.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-raiz-cream/75 sm:text-lg">
            {t.menu.intro.replace('{price}', site.priceRange)}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <Reveal
              key={dish.image}
              as="article"
              delay={(i % 3) * 90}
              className="group flex flex-col overflow-hidden rounded-2xl bg-raiz-green-700/60 ring-1 ring-raiz-cream/10 transition duration-300 ease-out-soft hover:-translate-y-1 hover:ring-raiz-gold/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-raiz-green/60 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl text-raiz-cream">{dish.name}</h3>
                  {dish.price && (
                    <span className="shrink-0 font-serif text-lg text-raiz-gold-400">
                      {dish.price}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-raiz-cream/70">{dish.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-start gap-4 border-t border-raiz-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-raiz-cream/60">{t.menu.takeaway}</p>
          <a href="#reservas" className="btn-gold">
            {t.header.reservarMesa}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
