import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { MidServiceCTA } from './components/MidServiceCTA'
import { Standard } from './components/Standard'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { CTASection } from './components/CTASection'
import { Safety } from './components/Safety'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { PolicyModals } from './components/legal/PolicyModals'

export default function App() {
  return (
    <>
      <a
        href="#hero"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-white"
      >
        Перейти до контенту
      </a>
      <Navbar />
      <main className="bg-white">
        <Hero />
        <About />
        <Services />
        <MidServiceCTA />
        <Standard />
        <Portfolio />
        <Testimonials />
        <CTASection />
        <Safety />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <PolicyModals />
    </>
  )
}
