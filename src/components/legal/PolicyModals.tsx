import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useLegalModal, type PolicyType } from '../../context/LegalModalContext'

const TITLES: Record<PolicyType, string> = {
  privacy: 'Політика конфіденційності',
  cookies: 'Політика cookies',
  terms: 'Умови користування',
}

const BODIES: Record<PolicyType, string[]> = {
  privacy: [
    'Ця Політика конфіденційності описує, як VOLTUM (надалі — «ми») обробляє персональні дані відвідувачів вебсайту та клієнтів, які звертаються з Черкас та Черкаської області з питань електромонтажу, консультацій і супроводу проєктів.',
    'Ми збираємо лише ті дані, які ви надаєте добровільно через форми зворотного зв’язку: ім’я, телефон, email, опис завдання. Підстава обробки — ваша згода та підготовка комерційної пропозиції за запитом (договірні переговори).',
    'Передача третім особам здійснюється виключно за наявності законних підстав (згода, договір, вимога закону). Ми не продаємо персональні дані. Хостинг і поштові сервіси обираються з урахуванням вимог безпеки.',
    'Ви маєте право на доступ, виправлення, обмеження обробки, видалення даних (у випадках, передбачених законом) та відкликання згоди. Для звернень використовуйте email, вказаний у футері сайту, з темою «Персональні дані».',
    'Ми застосовуємо технічні та організаційні заходи (шифрування каналу на сайті, обмеження доступу, мінімізація обсягу даних) для захисту інформації. Зберігання — у межах строку, необхідного для надання послуг і ведення обліку, якщо інше не погоджено окремо.',
  ],
  cookies: [
    'Сайт може використовувати cookies та схожі технології для стабільної роботи сторінок, аналітики відвідувань (за наявності увімкненого коду) і збереження вашого вибору щодо згоди на cookies.',
    'Ви можете керувати cookies у налаштуваннях браузера. Відмова від несуттєвих cookies не перешкоджає перегляду публічного контенту, однак деякі зручності (запам’ятовування вибору) можуть бути обмежені.',
    'Перелік категорій: (1) строго необхідні — для безпеки та сесій; (2) функціональні — для збереження налаштувань; (3) аналітичні — лише за вашою згодою, якщо такий модуль активований.',
    'Цей текст можна адаптувати вашому юристу під фактичні інтеграції (Google Analytics, мета-пікселі тощо). Наразі базовий баннер фіксує ваш вибір локально у браузері.',
  ],
  terms: [
    'Користуючись цим сайтом, ви погоджуєтеся з цими Умовами. Інформація на сторінках носить ознайомчий характер і не завжди відображає індивідуальний кошторис без виїзду та обміру.',
    'Замовлення послуг електромонтажу у Черкасах та області оформлюється окремим договором або підтвердженням замовлення з фіксацією обсягу, строків і вартості. Орієнтовні розрахунки на сайті не є публічною офертою, якщо інше прямо не зазначено.',
    'Відповідальність за безпеку об’єкта під час робіт регламентується договором і чинними нормами. Клієнт зобов’язаний надати достовірні дані про стан мережі та допуск до об’єкта.',
    'Посилання на сторонні ресурси надаються для зручності; ми не контролюємо їхній контент. З усіх питань щодо послуг звертайтеся через контактні канали VOLTUM.',
  ],
}

export function PolicyModals() {
  const { active, close } = useLegalModal()

  useEffect(() => {
    if (!active) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [active])

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-title"
          className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            aria-label="Закрити"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-black/[0.06] px-6 py-4">
              <h2 id="policy-title" className="text-lg font-semibold text-ink">
                {TITLES[active]}
              </h2>
              <button
                type="button"
                className="rounded-full p-2 text-muted hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                onClick={close}
                aria-label="Закрити вікно"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-6 text-[15px] leading-relaxed text-[#424245]">
              {BODIES[active].map((p, i) => (
                <p key={i} className={i === 0 ? '' : 'mt-4'}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
