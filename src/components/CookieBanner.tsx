import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLegalModal } from '../context/LegalModalContext'

const STORAGE_KEY = 'voltum_cookie_consent_v1'

type Consent = 'unknown' | 'accepted' | 'rejected'

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'accepted' || v === 'rejected') return v
  } catch {
    /* ignore */
  }
  return 'unknown'
}

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>('unknown')
  const { open } = useLegalModal()

  useEffect(() => {
    setConsent(readConsent())
  }, [])

  function persist(next: Consent) {
    setConsent(next)
    try {
      if (next === 'unknown') localStorage.removeItem(STORAGE_KEY)
      else localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  const visible = consent === 'unknown'

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="region"
          aria-label="Повідомлення про cookies"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[150] mx-auto max-w-lg rounded-2xl border border-black/[0.08] bg-white/95 p-5 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl md:left-auto md:right-6 md:max-w-md"
        >
          <p className="text-[14px] leading-relaxed text-[#424245]">
            Ми використовуємо cookies для стабільної роботи сайту та збереження
            вашого вибору. Деталі — у{' '}
            <button
              type="button"
              className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:opacity-90"
              onClick={() => open('cookies')}
            >
              Політиці cookies
            </button>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white hover:opacity-90"
              onClick={() => persist('accepted')}
            >
              Прийняти
            </button>
            <button
              type="button"
              className="rounded-full border border-black/[0.12] px-5 py-2.5 text-[13px] font-medium text-ink hover:bg-black/[0.03]"
              onClick={() => open('cookies')}
            >
              Налаштування
            </button>
            <button
              type="button"
              className="rounded-full px-3 py-2.5 text-[13px] font-medium text-muted hover:text-ink"
              onClick={() => persist('rejected')}
            >
              Відхилити
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
