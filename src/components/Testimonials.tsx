import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'

const reviews = [
  {
    quote:
      'Dyscyplina montażu na poziomie studia wykończeniowego. Dokumentacja jak z dobrego BIM — czytelna i kompletna.',
    name: 'Aleksandra M.',
    role: 'Apartament · Mokotów',
  },
  {
    quote:
      'Migracja biura bez wyłączeń zasilania. Komunikacja jak w firmie produktowej — krótko i na temat.',
    name: 'Tomasz K.',
    role: 'Biuro · centrum',
  },
] as const

export function Testimonials() {
  return (
    <section
      id="opinie"
      className="scroll-mt-24 bg-white px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
            Opinie
          </p>
          <h2
            id="testimonials-heading"
            className="mx-auto mt-6 max-w-[560px] text-balance text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Słowo ma znaczenie.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 md:mt-24 md:grid-cols-2 md:gap-12 lg:gap-16">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={0.08 * i}>
              <motion.figure
                className="h-full border-t border-black/[0.08] pt-12"
                initial={false}
                whileHover={{ opacity: 0.92 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="text-[19px] font-light leading-[1.45] tracking-[-0.015em] text-[#1d1d1f] md:text-[21px]">
                  „{r.quote}”
                </blockquote>
                <figcaption className="mt-10">
                  <p className="text-[15px] font-semibold text-ink">{r.name}</p>
                  <p className="mt-1 text-[14px] text-muted">{r.role}</p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
