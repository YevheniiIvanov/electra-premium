import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function CTASection() {
  return (
    <section className="bg-ink px-6 py-24 md:py-32" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-[980px] text-center">
        <Reveal>
          <h2
            id="cta-heading"
            className="mx-auto max-w-[720px] text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-[44px]"
          >
            Gotowy na instalację bez kompromisów?
          </h2>
          <p className="mx-auto mt-8 max-w-[520px] text-[17px] font-light leading-relaxed text-white/75">
            Jedna rozmowa. Jasny zakres. Spokojna realizacja.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <motion.button
              type="button"
              className="rounded-full bg-white px-9 py-3.5 text-[15px] font-medium text-ink transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToId('kontakt')}
            >
              Umów konsultację
            </motion.button>
            <motion.button
              type="button"
              className="rounded-full border border-white/35 px-9 py-3.5 text-[15px] font-medium text-white transition-[opacity,background-color] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToId('kontakt')}
            >
              Kontakt
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
