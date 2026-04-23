import { motion } from 'framer-motion'
import { PORTFOLIO_IMAGES } from '../constants/media'
import { Reveal } from './ui/Reveal'
import { SmartImage } from './ui/SmartImage'

const projects = [
  {
    title: 'Квартира у новобудові',
    place: 'Черкаси, центр',
    scope:
      'Нова група живлення, розводка освітлення, LED-профілі, модульний щит із захистом.',
    outcome:
      'Стабільні групи без перевантажень, охайний монтаж точок під дизайн-проєкт.',
    sources: PORTFOLIO_IMAGES.apartment,
    alt: 'Сучасна квартира у Черкасах з трековим освітленням та чистими лініями стелі',
  },
  {
    title: 'Приватний будинок',
    place: 'Черкаський район',
    scope:
      'Ввідна група, заземлення, розподільчі щити, підготовка під генератор та хаб розумного дому.',
    outcome:
      'Запас потужності під кухню й клімат; логіка автоматики без «кабельного безладу».',
    sources: PORTFOLIO_IMAGES.house,
    alt: "Фасад та інтер'єр приватного будинку поблизу Черкас з великими вікнами",
  },
  {
    title: 'Офісний простір',
    place: 'Черкаси, БД',
    scope:
      'Підлога на опорах — розводка робочих місць, серверна група, аварійне освітлення.',
    outcome:
      'Чіткі групи й маркування для ІТ-команди; зручне обслуговування без простоїв.',
    sources: PORTFOLIO_IMAGES.office,
    alt: 'Сучасний офіс у Черкасах із відкритим простором і природним світлом',
  },
  {
    title: 'Комерційне приміщення',
    place: 'центр Черкас',
    scope:
      'Зовнішня група для вітрини, контурні світлові акценти, захист ліній для торговельного обладнання.',
    outcome:
      'Чистий монтаж під брендові вітрини; стабільне живлення без «просадок» під навантаженням.',
    sources: PORTFOLIO_IMAGES.retail,
    alt: 'Стильний комерційний простір із акцентним освітленням полиць та вітрини',
  },
] as const

export function Portfolio() {
  return (
    <section
      id="realizacii"
      className="scroll-mt-24 bg-surface px-0 py-28 md:scroll-mt-28 md:py-36"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <Reveal>
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.22em] text-muted">
            Реалізації у Черкасах та області
          </p>
          <h2
            id="portfolio-heading"
            className="mx-auto mt-6 max-w-[680px] text-balance text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Об'єкти, де видно наш підхід до деталей
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.05 * i}>
            <article
              className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 lg:gap-24 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                className="mx-6 w-full max-w-[560px] overflow-hidden rounded-2xl bg-white shadow-[0_28px_80px_-44px_rgba(0,0,0,0.35)] md:mx-0 md:max-w-none md:flex-1"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <SmartImage
                  sources={[...p.sources]}
                  alt={p.alt}
                  width={2400}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] h-auto w-full object-cover"
                />
              </motion.div>
              <div className="mx-auto max-w-[460px] flex-1 px-6 md:mx-0 md:px-0">
                <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted">
                  {p.place}
                </p>
                <h3 className="mt-4 text-[26px] font-semibold tracking-[-0.03em] text-ink md:text-[30px]">
                  {p.title}
                </h3>
                <p className="mt-6 text-[15px] leading-relaxed text-[#424245]">
                  <span className="font-medium text-ink">Задача: </span>
                  {p.scope}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-[#424245]">
                  <span className="font-medium text-ink">Результат: </span>
                  {p.outcome}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
