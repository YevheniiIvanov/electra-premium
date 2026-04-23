import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Reveal } from './ui/Reveal'

const HERO_IMG =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2800&q=85'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

function HeroImage() {
  const ref = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -48])
  const y = useSpring(rawY, { stiffness: 100, damping: 28 })

  return (
    <div ref={ref} className="relative mt-20 w-full px-6 md:mt-28 md:px-10">
      <motion.div
        style={{ y }}
        className="relative mx-auto max-w-[1120px] overflow-hidden rounded-2xl bg-surface"
      >
        <img
          src={HERO_IMG}
          alt="Minimalistyczne, jasne wnętrze z kontrolowanym światłem"
          width={2800}
          height={1867}
          fetchPriority="high"
          decoding="async"
          className="h-auto w-full scale-[1.02] object-cover object-center"
          style={{ aspectRatio: '2800 / 1867', maxHeight: 'min(72vh, 820px)' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent" />
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="start"
      className="relative bg-white pb-24 pt-[88px] md:pb-32 md:pt-[104px]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[980px] px-6 text-center">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
            Instalacje elektryczne
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1
            id="hero-heading"
            className="mt-6 text-balance text-[42px] font-semibold leading-[1.07] tracking-[-0.03em] text-ink md:text-[56px] lg:text-[64px]"
          >
            Nowoczesne instalacje.
            <br />
            Bez kompromisów.
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-[540px] text-[19px] font-light leading-relaxed tracking-[-0.02em] text-[#424245] md:text-[21px]">
            Precyzji nie widać na co dzień. Efekt — tak.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-5">
            <motion.button
              type="button"
              className="rounded-full bg-ink px-8 py-3.5 text-[15px] font-medium text-white transition-[opacity,transform] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToId('kontakt')}
            >
              Bezpłatna konsultacja
            </motion.button>
            <motion.button
              type="button"
              className="rounded-full border border-black/[0.12] bg-transparent px-8 py-3.5 text-[15px] font-medium text-ink transition-[opacity,background-color] hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToId('realizacje')}
            >
              Realizacje
            </motion.button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <HeroImage />
      </Reveal>
    </section>
  )
}
