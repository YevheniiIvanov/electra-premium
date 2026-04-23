import { Reveal } from './ui/Reveal'

const steps = [
  { n: '01', title: 'Konsultacja' },
  { n: '02', title: 'Analiza' },
  { n: '03', title: 'Wycena' },
  { n: '04', title: 'Realizacja' },
  { n: '05', title: 'Odbiór' },
] as const

export function Process() {
  return (
    <section
      className="scroll-mt-24 bg-white px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
            Jak pracujemy
          </p>
          <h2
            id="process-heading"
            className="mx-auto mt-6 max-w-[720px] text-balance text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Pięć kroków. Zero niejasności.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col divide-y divide-black/[0.06] border-y border-black/[0.06] md:mt-24">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.04 * i}>
              <div className="flex items-baseline justify-between gap-8 py-8 md:py-10">
                <span className="font-mono text-[13px] tabular-nums text-muted">{s.n}</span>
                <span className="flex-1 text-[24px] font-semibold tracking-[-0.02em] text-ink md:text-[28px]">
                  {s.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
