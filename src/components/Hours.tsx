import { useMemo } from 'react'
import { Reveal } from './Reveal'
import { ClockIcon, RootMark } from './Icons'
import { hours } from '../lib/site'

/** Rough "open now" check using the visitor's local clock (site is Europe/Lisbon). */
function useOpenState() {
  return useMemo(() => {
    const now = new Date()
    const day = now.getDay()
    const today = hours[day]
    if (!today || today.closed) return { open: false, label: 'Encerrado hoje' }

    const minutes = now.getHours() * 60 + now.getMinutes()
    const within = (range: string | null) => {
      if (!range) return false
      const [a, b] = range.split('–').map((s) => s.trim())
      const toMin = (t: string) => {
        const [h, m] = t.split(':').map(Number)
        return h * 60 + m
      }
      return minutes >= toMin(a) && minutes <= toMin(b)
    }

    if (within(today.lunch) || within(today.dinner)) {
      return { open: true, label: 'Aberto agora' }
    }
    return { open: false, label: 'Fechado neste momento' }
  }, [])
}

export function Hours() {
  const { open, label } = useOpenState()
  const todayIndex = new Date().getDay()
  const order = [1, 2, 3, 4, 5, 6, 0]

  return (
    <section id="horario" className="bg-raiz-cream py-24 sm:py-32">
      <div className="container-raiz grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">
            <RootMark className="text-raiz-gold-600" />
            Horário
          </p>
          <h2 className="section-title text-raiz-green">Quando estamos de portas abertas</h2>
          <p className="mt-5 text-base leading-relaxed text-raiz-ink/75 sm:text-lg">
            Servimos almoço e jantar de segunda a sábado. Ao domingo, descansamos para voltar
            melhores.
          </p>

          <div
            className={`mt-8 inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold ${
              open
                ? 'bg-raiz-green text-raiz-cream'
                : 'bg-raiz-cream-200 text-raiz-green ring-1 ring-raiz-green/15'
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${open ? 'bg-raiz-gold-400' : 'bg-raiz-green/40'}`}
              aria-hidden
            />
            {label}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-2xl bg-white/70 ring-1 ring-raiz-green/10">
            <div className="flex items-center gap-3 border-b border-raiz-green/10 bg-raiz-green px-6 py-4 text-raiz-cream">
              <ClockIcon className="h-5 w-5 text-raiz-gold-400" />
              <span className="text-sm font-semibold uppercase tracking-widest2">Semana</span>
            </div>
            <ul>
              {order.map((d) => {
                const day = hours[d]
                const isToday = d === todayIndex
                return (
                  <li
                    key={d}
                    className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-4 text-sm ${
                      isToday ? 'bg-raiz-gold/10' : ''
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        isToday ? 'text-raiz-gold-600' : 'text-raiz-green'
                      }`}
                    >
                      {day.label}
                      {isToday && <span className="ml-2 text-xs font-normal">(hoje)</span>}
                    </span>
                    {day.closed ? (
                      <span className="text-raiz-ink/50">Encerrado</span>
                    ) : (
                      <span className="tabular-nums text-raiz-ink/80">
                        {day.lunch} &nbsp;·&nbsp; {day.dinner}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
