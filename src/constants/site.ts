/** Локальний SEO та дані компанії — Черкаси */
export const BRAND = {
  name: 'VOLTUM',
  tagline: 'Преміальний електромонтаж у Черкасах',
} as const

export const SECTIONS = {
  hero: 'hero',
  about: 'pro-kompaniyu',
  services: 'poslugy',
  standard: 'standart',
  portfolio: 'realizacii',
  reviews: 'vidguki',
  safety: 'bezpeka',
  contact: 'kontakt',
} as const

export const NAV_LINKS = [
  { id: SECTIONS.hero, label: 'Головна' },
  { id: SECTIONS.about, label: 'Про нас' },
  { id: SECTIONS.services, label: 'Послуги' },
  { id: SECTIONS.standard, label: 'Стандарт' },
  { id: SECTIONS.portfolio, label: 'Реалізації' },
  { id: SECTIONS.reviews, label: 'Відгуки' },
  { id: SECTIONS.safety, label: 'Безпека' },
  { id: SECTIONS.contact, label: 'Контакти' },
] as const

export const CONTACT = {
  phone: '+380 (67) 123 45 67',
  phoneHref: '+380671234567',
  email: 'office@voltum.ck.ua',
  city: 'Черкаси',
  region: 'Черкаська область',
  area: 'Черкаси та Черкаська область',
  address: 'м. Черкаси',
  hours: 'Пн–Пт: 9:00–18:00 · Сб: за домовленістю',
} as const

/** Ключові фрази для природного використання в текстах */
export const SEO_PHRASES = [
  'електрик Черкаси',
  'електричні роботи Черкаси',
  'електромонтажні роботи Черкаси',
  'монтаж електрики Черкаси',
  'послуги електрика у Черкасах',
  'електрик у Черкасах',
  'електрика під ключ Черкаси',
  'заміна проводки Черкаси',
  'аварійний електрик Черкаси',
  'монтаж освітлення Черкаси',
] as const
