import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'

const services = [
  {
    title: 'Instalacje i modernizacje',
    description: 'Od nowej trasy po bezpieczną rozbudowę istniejącej sieci.',
  },
  {
    title: 'Oświetlenie i inteligentny dom',
    description: 'Punkty świetlne, przygotowanie pod automatyku i sceny światła.',
  },
  {
    title: 'Rozdzielnie oraz zasilanie',
    description: 'Tablice, zabezpieczenia, niezawodność bez nadmiaru wizualnego szumu.',
  },
  {
    title: 'Remonty premium i lokale',
    description: 'Współpraca z wykończeniem — czysto, cicho, terminowo.',
  },
] as const

export function Services() {
  return (
    <section
      id="uslugi"
      className="scroll-mt-24 bg-white px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
            Usługi
          </p>
          <h2
            id="services-heading"
            className="mx-auto mt-6 max-w-[720px] text-balance text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[44px]"
          >
            Wszystko, czego potrzebuje wnętrze.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * i}>
              <motion.article
                className="flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-8 md:min-h-[220px] md:p-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-6 text-[15px] leading-relaxed text-muted">{s.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
