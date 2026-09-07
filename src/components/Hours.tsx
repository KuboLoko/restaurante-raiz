import { useMemo } from 'react'
import { Reveal } from './Reveal'
import { ClockIcon, RootMark } from './Icons'
import { hoursTimes, weekOrder } from '../lib/site'
import { useI18n } from '../lib/i18n'

type OpenState = 'open' | 'closedToday' | 'closedNow'

/** Rough "open now" check using the visitor's local clock (site is Europe/Lisbon). */
function useOpenState(): OpenState {
  return useMemo(() => {
    const now = new Date()
    const today = hoursTimes[now.getDay()]
    if (!today || today.closed) return 'closedToday'

    const minutes = now.getHours() * 60 + now.getMinutes()
    const within = (range: string | null) => {
      if (!range) return false
      const [a, b] = range.split('–').map((s) => s.trim())
      const toMin = (v: string) => {
        const [h, m] = v.split(':').map(Number)
        return h * 60 + m
      }
      return minutes >= toMin(a) && minutes <= toMin(b)
    }

    return within(today.lunch) || within(today.dinner) ? 'open' : 'closedNow'
  }, [])
}

export function Hours() {
  const { t } = useI18n()
  const state = useOpenState()
  const isOpen = state === 'open'
  const badge =
    state === 'open' ? t.hours.openNow : state === 'closedToday' ? t.hours.closedToday : t.hours.closedNow
  const todayIndex = new Date().getDay()

  return (
    <section id="horario" className="bg-raiz-cream py-24 sm:py-32">
      <div className="container-raiz grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">
            <RootMark className="text-raiz-gold-600" />
            {t.hours.eyebrow}
          </p>
          <h2 className="section-title text-raiz-green">{t.hours.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-raiz-ink/75 sm:text-lg">{t.hours.intro}</p>

          <div
            className={`mt-8 inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold ${
              isOpen
                ? 'bg-raiz-green text-raiz-cream'
                : 'bg-raiz-cream-200 text-raiz-green ring-1 ring-raiz-green/15'
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${isOpen ? 'bg-raiz-gold-400' : 'bg-raiz-green/40'}`}
              aria-hidden
            />
            {badge}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-2xl bg-white/70 ring-1 ring-raiz-green/10">
            <div className="flex items-center gap-3 border-b border-raiz-green/10 bg-raiz-green px-6 py-4 text-raiz-cream">
              <ClockIcon className="h-5 w-5 text-raiz-gold-400" />
              <span className="text-sm font-semibold uppercase tracking-widest2">
                {t.hours.weekHeader}
              </span>
            </div>
            <ul>
              {weekOrder.map((d) => {
                const day = hoursTimes[d]
                const isToday = d === todayIndex
                return (
                  <li
                    key={d}
                    className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-4 text-sm ${
                      isToday ? 'bg-raiz-gold/10' : ''
                    }`}
                  >
                    <span
                      className={`font-semibold ${isToday ? 'text-raiz-gold-600' : 'text-raiz-green'}`}
                    >
                      {t.hours.days[d]}
                      {isToday && <span className="ml-2 text-xs font-normal">{t.hours.today}</span>}
                    </span>
                    {day.closed ? (
                      <span className="text-raiz-ink/50">{t.hours.closed}</span>
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
