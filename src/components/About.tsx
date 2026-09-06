import { Reveal } from './Reveal'
import { RootMark } from './Icons'
import { site } from '../lib/site'

export function About() {
  return (
    <section id="sobre" className="bg-raiz-cream py-24 sm:py-32">
      <div className="container-raiz grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">
            <RootMark className="text-raiz-gold-600" />
            A casa
          </p>
          <h2 className="section-title text-raiz-green">
            Voltámos às origens para abrir mesa no Barreiro
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-raiz-ink/80 sm:text-lg">
            <p>
              O <strong className="font-semibold text-raiz-green">RAIZ</strong> nasce de quatro
              amigos que decidiram regressar ao sítio onde tudo começou. Trouxemos na bagagem anos
              de cozinha por várias casas e uma ideia simples: servir comida portuguesa a sério,
              sem solenidade.
            </p>
            <p>
              Na cozinha, respeitamos o produto de época e os fornecedores da região, e deixamos a
              técnica trabalhar para o sabor — não para o espectáculo. O resultado é uma carta curta
              que muda com as estações, onde o clássico e o contemporâneo se sentam à mesma mesa.
            </p>
            <p className="text-raiz-green">
              {site.shortAbout}
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-raiz-green/15 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-raiz-gold-600">Fundado por</dt>
              <dd className="mt-1 font-serif text-2xl text-raiz-green">4 amigos</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-raiz-gold-600">Cozinha</dt>
              <dd className="mt-1 font-serif text-2xl text-raiz-green">De raiz</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-raiz-gold-600">Onde</dt>
              <dd className="mt-1 font-serif text-2xl text-raiz-green">Barreiro</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(18,32,23,0.55)]">
            <img
              src="/img/about.jpg"
              alt="Peito de pato fatiado com salada de laranja, servido à luz do dia numa mesa de madeira do RAIZ"
              width={1080}
              height={1350}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-raiz-green px-6 py-5 text-raiz-cream shadow-xl sm:block">
            <p className="font-serif text-lg leading-tight">
              &ldquo;Raiz&rdquo; é de onde
              <br />
              tudo cresce.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
