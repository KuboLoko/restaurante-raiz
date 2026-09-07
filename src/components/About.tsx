import { Reveal } from './Reveal'
import { RootMark } from './Icons'
import { useI18n } from '../lib/i18n'

export function About() {
  const { t } = useI18n()

  return (
    <section id="sobre" className="bg-raiz-cream py-24 sm:py-32">
      <div className="container-raiz grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">
            <RootMark className="text-raiz-gold-600" />
            {t.about.eyebrow}
          </p>
          <h2 className="section-title text-raiz-green">{t.about.title}</h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-raiz-ink/80 sm:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="text-raiz-green">{t.about.p3}</p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-raiz-green/15 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-raiz-gold-600">
                {t.about.foundedLabel}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-raiz-green">{t.about.foundedValue}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-raiz-gold-600">
                {t.about.kitchenLabel}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-raiz-green">{t.about.kitchenValue}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-raiz-gold-600">
                {t.about.whereLabel}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-raiz-green">{t.about.whereValue}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(18,32,23,0.55)]">
            <img
              src="/img/about.jpg"
              alt={t.about.imgAlt}
              width={1080}
              height={1350}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[13rem] rounded-2xl bg-raiz-green px-6 py-5 text-raiz-cream shadow-xl sm:block">
            <p className="font-serif text-lg leading-tight">{t.about.quote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
