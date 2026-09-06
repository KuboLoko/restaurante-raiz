import { Reveal } from './Reveal'
import { RootMark } from './Icons'
import { galleryImages, site } from '../lib/site'

export function Gallery() {
  return (
    <section id="galeria" className="bg-raiz-cream py-24 sm:py-32">
      <div className="container-raiz">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <RootMark className="text-raiz-gold-600" />
            Galeria
          </p>
          <h2 className="section-title text-raiz-green">Um bocadinho da sala e da cozinha</h2>
          <p className="mt-5 text-base leading-relaxed text-raiz-ink/75 sm:text-lg">
            Pratos, produto e ambiente. Para ver o dia a dia do RAIZ, siga-nos em{' '}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-raiz-gold-600 underline-offset-4 hover:underline"
            >
              {site.instagram.handle}
            </a>
            .
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 80}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105 ${
                  i === 0 ? 'aspect-square lg:h-full' : 'aspect-square'
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-raiz-green/0 transition-colors duration-300 group-hover:bg-raiz-green/10" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
