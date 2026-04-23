import { BRAND, CONTACT, NAV_LINKS } from '../constants/site'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/[0.06] bg-white px-6 py-16 md:px-10">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[17px] font-semibold tracking-tight text-ink">{BRAND.name}</p>
          <p className="mt-3 max-w-[280px] text-[14px] leading-relaxed text-muted">
            Instalacje elektryczne dla wnętrz, w których liczy się detal.
          </p>
        </div>

        <nav aria-label="Stopka — nawigacja" className="flex flex-wrap gap-x-10 gap-y-4 text-[13px] text-[#424245]">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25 focus-visible:ring-offset-2"
              onClick={(e) => {
                e.preventDefault()
                scrollToId(l.id)
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-[13px] text-muted">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="block text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25"
          >
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-1 block hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-[1120px] text-center text-[12px] text-muted">
        © {year} {BRAND.name}
      </p>
    </footer>
  )
}
