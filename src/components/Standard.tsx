import { Reveal } from './ui/Reveal'

const standards = [
  {
    title: 'Proces',
    text: 'Jasny plan prac i etapy kontrolne — bez zgadywania na budowie.',
  },
  {
    title: 'Precyzja',
    text: 'Montaż punktowy, równo i spójnie z linią wnętrza.',
  },
  {
    title: 'Bezpieczeństwo',
    text: 'Normy, selekcja zabezpieczeń, dokumentacja pod odbiór.',
  },
  {
    title: 'Komunikacja',
    text: 'Jeden kierownik projektu i przewidywalny kontakt.',
  },
] as const

export function Standard() {
  return (
    <section
      id="standard"
      className="scroll-mt-24 bg-surface px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="standard-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <p className="text-center text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
            Standard
          </p>
          <h2
            id="standard-heading"
            className="mx-auto mt-6 max-w-[680px] text-balance text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Tak pracuje się z najlepszymi.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-20">
          {standards.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div>
                <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-[17px] font-light leading-relaxed text-[#424245]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
