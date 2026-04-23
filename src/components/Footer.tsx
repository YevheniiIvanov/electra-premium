import { BRAND, CONTACT, NAV_LINKS } from '../constants/site'
import { useLegalModal } from '../context/LegalModalContext'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function Footer() {
  const year = new Date().getFullYear()
  const { open } = useLegalModal()

  return (
    <footer className="border-t border-black/[0.06] bg-white px-6 py-16 md:px-10">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[17px] font-semibold tracking-tight text-ink">{BRAND.name}</p>
          <p className="mt-3 max-w-[300px] text-[14px] leading-relaxed text-muted">
            Преміальний електромонтаж у Черкасах та Черкаській області: щити,
            розводка, освітлення та аварійний виїзд електрика Черкаси — без зайвого
            шуму, із повагою до вашого простору.
          </p>
        </div>

        <nav
          aria-label="Швидкі посилання"
          className="flex flex-wrap gap-x-10 gap-y-4 text-[13px] text-[#424245]"
        >
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
            href={`tel:${CONTACT.phoneHref}`}
            className="block font-medium text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25"
          >
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-1 block hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25"
          >
            {CONTACT.email}
          </a>
          <div className="mt-6 flex flex-col gap-2 border-t border-black/[0.06] pt-6">
            <button
              type="button"
              className="text-left hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25"
              onClick={() => open('privacy')}
            >
              Політика конфіденційності
            </button>
            <button
              type="button"
              className="text-left hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25"
              onClick={() => open('cookies')}
            >
              Політика cookies
            </button>
            <button
              type="button"
              className="text-left hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25"
              onClick={() => open('terms')}
            >
              Умови користування
            </button>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-[1120px] text-center text-[12px] leading-relaxed text-muted">
        © {year} {BRAND.name}. Електрик Черкаси · електромонтажні роботи Черкаси ·{' '}
        {CONTACT.city}.
      </p>
    </footer>
  )
}
