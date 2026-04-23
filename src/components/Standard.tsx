import { Reveal } from './ui/Reveal'

const items = [
  {
    title: 'Точний прорахунок',
    text: 'Без прихованих «сюрпризів» у процесі — спочатку фіксуємо обсяг і логіку робіт.',
  },
  {
    title: 'Прозора комунікація',
    text: 'Зрозумілі статуси на об\'єкті: що зроблено, що далі, які варіанти за потреби.',
  },
  {
    title: 'Акуратний монтаж',
    text: 'Лінії, підключення й маркування — щоб результат виглядав охайно навіть у технічних зонах.',
  },
  {
    title: 'Сучасні рішення',
    text: 'Підбір матеріалів і комплектації під надійність і комфорт експлуатації.',
  },
  {
    title: 'Робота за нормами',
    text: 'Відповідність вимогам безпеки та коректна збірка захисту й заземлення.',
  },
  {
    title: 'Пунктуальність',
    text: 'Поважаємо ваш час і графік ремонту — домовляємось і виконуємо узгоджені вікна.',
  },
  {
    title: 'Чистота після робіт',
    text: 'Прибираємо зону монтажу — залишаємо простір готовим для наступних етапів.',
  },
  {
    title: 'Індивідуальний підхід',
    text: 'Кожен об\'єкт у Черкасах та області — окремий сценарій навантажень і побажань.',
  },
] as const

export function Standard() {
  return (
    <section
      id="standart"
      className="scroll-mt-24 bg-white px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="standard-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.22em] text-muted">
            Чому нас обирають у Черкасах
          </p>
          <h2
            id="standard-heading"
            className="mx-auto mt-6 max-w-[760px] text-balance text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Стандарт, який цінують вимогливі клієнти
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-center text-[17px] font-light leading-relaxed text-[#424245]">
            Якість видно в дрібницях: від правильного згину жили до охайного щита.
            Саме так працює преміальний електромонтаж у Черкасах — без зайвого шуму,
            але з повагою до вашого простору.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * (i % 4)}>
              <div className="h-full rounded-2xl border border-black/[0.06] bg-surface/70 p-7 md:p-8">
                <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
