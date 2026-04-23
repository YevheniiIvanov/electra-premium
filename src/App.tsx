import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Standard } from './components/Standard'
import { Process } from './components/Process'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { CTASection } from './components/CTASection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#start"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-white"
      >
        Przejdź do treści
      </a>
      <Navbar />
      <main className="bg-white">
        <Hero />
        <About />
        <Services />
        <Standard />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
