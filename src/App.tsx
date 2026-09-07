import { useI18n } from './lib/i18n'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Gallery } from './components/Gallery'
import { Reviews } from './components/Reviews'
import { Hours } from './components/Hours'
import { Reservations } from './components/Reservations'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const { t } = useI18n()

  return (
    <>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-raiz-gold focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-raiz-green"
      >
        {t.a11y.skip}
      </a>

      <Header />

      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Hours />
        <Reservations />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
