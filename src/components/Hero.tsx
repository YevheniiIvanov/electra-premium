import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { HERO_IMAGES } from '../constants/media'
import { CONTACT } from '../constants/site'
import { Reveal } from './ui/Reveal'
import { SmartImage } from './ui/SmartImage'

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
  const rawY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -40])
  const y = useSpring(rawY, { stiffness: 100, damping: 28 })

  return (
    <div ref={ref} className="relative mt-16 w-full px-6 md:mt-24 md:px-10">
      <motion.div
        style={{ y }}
        className="relative mx-auto max-w-[1120px] overflow-hidden rounded-2xl bg-surface shadow-[0_40px_100px_-48px_rgba(0,0,0,0.18)]"
      >
        <SmartImage
          sources={[...HERO_IMAGES]}
          alt="Сучасний інтер'єр у Черкасах — преміальне освітлення та електрика"
          width={2800}
          height={1867}
          fetchPriority="high"
          decoding="async"
          loading="eager"
          className="h-auto w-full scale-[1.02] object-cover object-center"
          style={{ aspectRatio: '2800 / 1867', maxHeight: 'min(68vh, 760px)' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.06] to-transparent" />
      </motion.div>
    </div>
  )
}

const stats = [
  { value: '12+', label: 'років досвіду' },
  { value: '380+', label: "об'єктів у Черкасах та області" },
  { value: '24/7', label: 'аварійна лінія для клієнтів' },
  { value: '100%', label: 'відповідність нормам і ПУЕ' },
] as const

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-white pb-20 pt-[88px] md:pb-28 md:pt-[104px]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[980px] px-6 text-center">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-muted">
            Електрик у Черкасах · електромонтаж преміум-класу
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1
            id="hero-heading"
            className="mt-6 text-balance text-[38px] font-semibold leading-[1.06] tracking-[-0.03em] text-ink md:text-[52px] lg:text-[56px]"
          >
            Преміальні електромонтажні роботи у Черкасах
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-[620px] text-[18px] font-light leading-relaxed tracking-[-0.02em] text-[#424245] md:text-[20px]">
            Електрика під ключ для квартир, будинків і бізнесу: точний монтаж,
            охайність і сучасні рішення.{' '}
            <span className="text-[#1d1d1f]/90">
              Електричні роботи Черкаси та монтаж освітлення Черкаси — з
              гарантією якості та прозорою комунікацією.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-5">
            <motion.button
              type="button"
              className="rounded-full bg-ink px-8 py-3.5 text-[15px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToId('kontakt')}
            >
              Отримати прорахунок
            </motion.button>
            <motion.a
              href={`tel:${CONTACT.phoneHref}`}
              className="rounded-full border border-black/[0.12] px-8 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Зателефонувати
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mx-auto mt-14 grid max-w-[880px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-black/[0.06] bg-surface/80 px-5 py-5 text-left"
              >
                <p className="text-[26px] font-semibold tracking-tight text-ink md:text-[28px]">
                  {s.value}
                </p>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-12 max-w-[640px] text-[14px] leading-relaxed text-muted">
            Послуги електрика у Черкасах: проєктування траси, заміна проводки
            Черкаси, щити та захист, підготовка під smart home — виконуємо
            електромонтажні роботи Черкаси як для приватних інтер'єрів, так і для
            комерційних просторів у центрі міста та області.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <HeroImage />
      </Reveal>
    </section>
  )
}
