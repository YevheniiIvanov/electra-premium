import { Reveal } from './ui/Reveal'

const IMG =
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'

const pillars = [
  {
    title: 'Normy i dokumentacja',
    text: 'Pełna zgodność z przepisami oraz protokoły przygotowane pod odbiór.',
  },
  {
    title: 'Estetyka montażu',
    text: 'Trasy i punkty jak w projekcie architektonicznym — bez kompromisów.',
  },
  {
    title: 'Partner na budowie',
    text: 'Jeden punkt kontaktu i przewidywalny harmonogram etapów.',
  },
] as const

export function About() {
  return (
    <section
      id="o-nas"
      className="scroll-mt-24 bg-surface px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1120px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-white">
            <img
              src={IMG}
              alt="Nowoczesna architektura — detal ściany i światła"
              width={1600}
              height={2133}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
              style={{ aspectRatio: '1600 / 2133', maxHeight: 'min(78vh, 920px)' }}
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
              O nas
            </p>
            <h2
              id="about-heading"
              className="mt-6 text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-ink md:text-[40px]"
            >
              Technologia w tle.
              <br />
              Komfort na pierwszym planie.
            </h2>
            <p className="mt-10 max-w-[460px] text-[17px] font-light leading-[1.6] text-[#424245]">
              Projektujemy instalacje dla domów, apartamentów i przestrzeni
              komercyjnych — z tym samym podejściem do detalu co do oświetlenia i
              wykończenia wnętrza.
            </p>
          </Reveal>

          <div className="mt-16 space-y-14">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * (i + 1)}>
                <div className="border-t border-black/[0.08] pt-10 first:border-0 first:pt-0">
                  <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
