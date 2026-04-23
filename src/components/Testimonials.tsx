import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'

const reviews = [
  {
    quote:
      'Впродовж ремонту було багато підрядників, але саме електромонтаж залишив відчуття системності: рівні лінії, охайний щит, маркування без «догадок» на монтажі освітлення.',
    name: 'Олександр Р.',
    role: 'Власник квартири · новобудова Черкаси',
  },
  {
    quote:
      'Бізнес не любить простоїв. Отримали чіткий план робіт для офісу, захист груп для серверної й прозорі терміни — без зайвих розмов «потім вирішимо».',
    name: 'Марія В.',
    role: 'Керівник офісу · Черкаси',
  },
  {
    quote:
      'Для приватного будинку потрібна була не лише заміна проводки Черкаси-поблизу, а підготовка під майбутні навантаження. Все зафіксували документально, працює стабільно.',
    name: 'Ігор П.',
    role: 'Власник будинку · Черкаський район',
  },
  {
    quote:
      'Комерційне приміщення у центрі потребує охайності — клієнти бачать якість навіть у точках живлення під касові зони й вітрину. Дякуємо за акуратність.',
    name: 'Катерина Л.',
    role: 'Власник комерційного приміщення · центр Черкас',
  },
] as const

export function Testimonials() {
  return (
    <section
      id="vidguki"
      className="scroll-mt-24 bg-white px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.22em] text-muted">
            Відгуки клієнтів Черкас
          </p>
          <h2
            id="reviews-heading"
            className="mx-auto mt-6 max-w-[560px] text-balance text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Довіра, яку будують результат і культура роботи
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-10">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={0.06 * i}>
              <motion.figure
                className="h-full rounded-2xl border border-black/[0.06] bg-surface/70 p-8 md:p-9"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="text-[17px] font-light leading-[1.5] tracking-[-0.015em] text-[#1d1d1f]">
                  «{r.quote}»
                </blockquote>
                <figcaption className="mt-8 border-t border-black/[0.06] pt-6">
                  <p className="text-[15px] font-semibold text-ink">{r.name}</p>
                  <p className="mt-1 text-[13px] text-muted">{r.role}</p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
