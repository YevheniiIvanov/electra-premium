import { ABOUT_IMAGES } from '../constants/media'
import { Reveal } from './ui/Reveal'
import { SmartImage } from './ui/SmartImage'

export function About() {
  return (
    <section
      id="pro-kompaniyu"
      className="scroll-mt-24 bg-surface px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1120px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_32px_80px_-40px_rgba(0,0,0,0.2)]">
            <SmartImage
              sources={[...ABOUT_IMAGES]}
              alt="Монтаж електрики Черкаси — акуратне підключення та облік у розподільчій шафі"
              width={1800}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
              style={{ aspectRatio: '3 / 2' }}
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-muted">
              Про компанію
            </p>
            <h2
              id="about-heading"
              className="mt-6 text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-ink md:text-[40px]"
            >
              Електрика без компромісів для Черкас і області
            </h2>
            <p className="mt-8 text-[17px] font-light leading-[1.65] text-[#424245]">
              VOLTUM — це команда електромонтажників, яка працює для власників
              житла та бізнесу, які очікують не «якось», а правильно: безпечно,
              охайно і з повагою до архітектури простору. Монтаж електрики
              Черкаси ми виконуємо за документованими правилами, з чіткими
              термінами та відкритою комунікацією на кожному етапі.
            </p>
            <p className="mt-6 text-[17px] font-light leading-[1.65] text-[#424245]">
              Дотримуємося норм і ПУЕ, документуємо зміни по об'єкту й залишаємо
              після себе порядок — щоб ви могли спокійно експлуатувати мережу
              роками. Електрик у Черкасах має бути не лише швидким, а й
              передбачуваним: саме на цьому тримається наша репутація.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
