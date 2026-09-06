import { Reveal } from './Reveal'
import { StarIcon, RootMark } from './Icons'
import { reviews, site } from '../lib/site'

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-raiz-green py-24 text-raiz-cream sm:py-32">
      <div className="container-raiz">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow-light">
              <RootMark className="text-raiz-gold-400" />
              Quem nos visita
            </p>
            <h2 className="section-title text-raiz-cream">
              {site.rating.value.toString().replace('.', ',')} estrelas, {site.rating.count} avaliações
            </h2>
          </div>
          <a
            href={site.rating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-widest2 text-raiz-gold-400 underline-offset-4 hover:underline"
          >
            Ver no Google
          </a>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              as="figure"
              delay={i * 100}
              className="flex h-full flex-col rounded-2xl bg-raiz-green-700/60 p-7 ring-1 ring-raiz-cream/10"
            >
              <div className="flex items-center gap-1 text-raiz-gold-400" aria-label="5 em 5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-raiz-cream/85">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-raiz-cream/10 pt-4">
                <span className="block font-serif text-lg text-raiz-cream">{review.name}</span>
                <span className="text-xs text-raiz-cream/55">{review.date}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
