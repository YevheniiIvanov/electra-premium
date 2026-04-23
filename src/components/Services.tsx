import {
  AlertTriangle,
  Building2,
  Cable,
  Cpu,
  Home,
  Lamp,
  Plug,
  Shield,
  Smartphone,
  Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'

const services = [
  {
    icon: Home,
    title: 'Електрика під ключ Черкаси',
    description:
      'Повний цикл: від розводки до фінального підключення — для квартир, будинків і комерції без хаосу на об\'єкті.',
  },
  {
    icon: Zap,
    title: 'Нові електричні інсталяції',
    description:
      'Проєктування груп, потужностей і траси з урахуванням майбутніх навантажень та зручності експлуатації.',
  },
  {
    icon: Cable,
    title: 'Заміна проводки Черкаси',
    description:
      'Акуратна заміна застарілих ліній із мінімальним втручанням у оздоблення — прозорі етапи й захист майна.',
  },
  {
    icon: Cpu,
    title: 'Модернізація електромереж',
    description:
      'Оновлення щитів, груп і кабельних траси під сучасні прилади та відповідність нормам безпеки.',
  },
  {
    icon: Lamp,
    title: 'Монтаж освітлення Черкаси',
    description:
      'Точкові і контурні рішення: LED, трекові системи, приховані профілі — стабільна робота без мерехтіння.',
  },
  {
    icon: Plug,
    title: 'Розетки та вимикачі преміум',
    description:
      'Ідеальна геометрія в площині стіни, рівні лінії й маркування — для інтер\'єрів, де видно деталі.',
  },
  {
    icon: Shield,
    title: 'Щити, автомати, захист',
    description:
      'Збірка розподільчих щитів, УЗО/дифавтоматів і селективність — щоб відключало саме те, що потрібно.',
  },
  {
    icon: Building2,
    title: 'Квартири, будинки, офіси',
    description:
      'Електричні роботи Черкаси для приватних і комерційних просторів: від новобудови до реконструкції.',
  },
  {
    icon: Smartphone,
    title: 'Підготовка під smart home',
    description:
      'Інфраструктура ліній і живлення для сценаріїв освітлення, клімату та інтеграцій без «переробок потім».',
  },
  {
    icon: AlertTriangle,
    title: 'Аварійний електрик Черкаси',
    description:
      'Швидкий виїзд при відключеннях, опорах і несправностях — з пріоритетом безпеки та діагностикою причин.',
  },
] as const

export function Services() {
  return (
    <section
      id="poslugy"
      className="scroll-mt-24 bg-white px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.22em] text-muted">
            Послуги електрика у Черкасах
          </p>
          <h2
            id="services-heading"
            className="mx-auto mt-6 max-w-[760px] text-balance text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[44px]"
          >
            Електромонтажні роботи Черкаси — під ваші задачі й стандарти якості
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-center text-[17px] font-light leading-relaxed text-[#424245]">
            Від точкового монтажу розетки до комплексної електрики під ключ — із
            фокусом на безпеку, охайність і передбачуваний результат у Черкасах
            та Черкаській області.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.04 * (i % 4)}>
              <motion.article
                className="flex h-full flex-col rounded-2xl border border-black/[0.06] bg-surface/60 p-7 md:p-8"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent shadow-sm ring-1 ring-black/[0.04]">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {s.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
