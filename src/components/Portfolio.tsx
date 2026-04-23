import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'

const projects = [
  {
    title: 'Rezydencja N',
    type: 'Dom jednorodzinny',
    line: 'Nowa instalacja · oświetlenie · EV',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85',
    alt: 'Jasne, minimalistyczne wnętrze domu z dużymi przeszkleniami',
  },
  {
    title: 'Skyline',
    type: 'Apartament',
    line: 'Trasy zasilania · szyny świetlne',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85',
    alt: 'Przestronny apartament z otwartym planem i delikatnym światłem',
  },
  {
    title: 'Northline',
    type: 'Biuro',
    line: 'Infrastruktura · podłoga techniczna',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85',
    alt: 'Nowoczesne biuro z dużymi oknami i czystą linią wnętrza',
  },
] as const

export function Portfolio() {
  return (
    <section
      id="realizacje"
      className="scroll-mt-24 bg-surface px-0 py-28 md:scroll-mt-28 md:py-36"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <Reveal>
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
            Realizacje
          </p>
          <h2
            id="portfolio-heading"
            className="mx-auto mt-6 max-w-[640px] text-balance text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Wybrane projekty.
          </h2>
        </Reveal>
      </div>

      <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.05 * i}>
            <article
              className={`flex flex-col items-stretch gap-10 md:flex-row md:items-center md:gap-16 lg:gap-24 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                className="overflow-hidden rounded-2xl bg-white"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  width={2400}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] h-auto w-full object-cover"
                />
              </motion.div>
              <div className="mx-auto max-w-[420px] px-6 md:mx-0 md:px-0">
                <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted">
                  {p.type}
                </p>
                <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-ink md:text-[34px]">
                  {p.title}
                </h3>
                <p className="mt-6 text-[17px] font-light leading-relaxed text-[#424245]">
                  {p.line}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
