import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../constants/site'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass =
    'text-[13px] font-normal tracking-wide text-[#1d1d1f]/80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] ${
        scrolled
          ? 'border-black/[0.06] bg-white/72 backdrop-blur-xl backdrop-saturate-150'
          : 'border-transparent bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-6 lg:h-14 lg:px-8">
        <a
          href="#start"
          className="text-[17px] font-semibold tracking-tight text-[#1d1d1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('start')
            setOpen(false)
          }}
        >
          {BRAND.name}
        </a>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Główna nawigacja"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${linkClass} opacity-90`}
              onClick={(e) => {
                e.preventDefault()
                scrollToId(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            type="button"
            className="hidden rounded-full bg-accent px-5 py-2 text-[13px] font-medium text-white transition-[opacity,transform] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white md:inline-flex"
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToId('kontakt')}
          >
            Umów konsultację
          </motion.button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1d1d1f] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5 stroke-[1.5]" /> : <Menu className="h-5 w-5 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-black/[0.06] bg-white lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6" aria-label="Menu mobilne">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.03 * i }}
                  className="border-b border-black/[0.04] py-4 text-[17px] font-normal text-[#1d1d1f] last:border-0"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(link.id)
                    setOpen(false)
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 rounded-full bg-accent py-3.5 text-[15px] font-medium text-white"
                onClick={() => {
                  scrollToId('kontakt')
                  setOpen(false)
                }}
              >
                Umów konsultację
              </motion.button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
