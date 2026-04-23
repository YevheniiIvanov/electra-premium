import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function MidServiceCTA() {
  return (
    <section
      className="border-y border-black/[0.05] bg-gradient-to-b from-white via-[#f5f5f7] to-white px-6 py-20 md:py-24"
      aria-labelledby="mid-cta-heading"
    >
      <div className="mx-auto max-w-[820px] text-center">
        <Reveal>
          <h2
            id="mid-cta-heading"
            className="text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[34px]"
          >
            Рішення для тих, хто цінує безпеку, точність і сучасний підхід
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] font-light leading-relaxed text-[#424245]">
            Залиште заявку — підготуємо прозорий кошторис і запропонуємо оптимальну
            конфігурацію під ваш інтер'єр та навантаження у Черкасах чи області.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <motion.button
            type="button"
            className="mt-10 rounded-full bg-ink px-9 py-3.5 text-[15px] font-medium text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToId('kontakt')}
          >
            Отримати консультацію
          </motion.button>
        </Reveal>
      </div>
    </section>
  )
}
