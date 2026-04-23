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
    <section
      className="relative overflow-hidden bg-ink px-6 py-24 md:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-[90px]" />

      <div className="relative mx-auto max-w-[900px] text-center">
        <Reveal>
          <h2
            id="cta-heading"
            className="mx-auto max-w-[720px] text-balance text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-[44px]"
          >
            Виконуємо електромонтаж так, щоб результат працював роками
          </h2>
          <p className="mx-auto mt-8 max-w-[560px] text-[17px] font-light leading-relaxed text-white/78">
            Преміальний рівень виконання для квартир, будинків і бізнесу у Черкасах.
            Запросіть консультацію — відповімо швидко й конкретно щодо вашого об'єкта.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-5">
            <motion.button
              type="button"
              className="rounded-full bg-white px-9 py-3.5 text-[15px] font-medium text-ink hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('kontakt')}
            >
              Замовити прорахунок
            </motion.button>
            <motion.button
              type="button"
              className="rounded-full border border-white/35 px-9 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('kontakt')}
            >
              Отримати консультацію
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
