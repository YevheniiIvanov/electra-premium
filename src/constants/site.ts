export const BRAND = {
  name: 'VOLTÉRA',
  tagline: 'Instalacje premium',
} as const

export const SECTIONS = {
  start: 'start',
  about: 'o-nas',
  services: 'uslugi',
  portfolio: 'realizacje',
  standard: 'standard',
  testimonials: 'opinie',
  contact: 'kontakt',
} as const

export const NAV_LINKS = [
  { id: SECTIONS.start, label: 'Start' },
  { id: SECTIONS.about, label: 'O nas' },
  { id: SECTIONS.services, label: 'Usługi' },
  { id: SECTIONS.portfolio, label: 'Realizacje' },
  { id: SECTIONS.standard, label: 'Standard' },
  { id: SECTIONS.testimonials, label: 'Opinie' },
  { id: SECTIONS.contact, label: 'Kontakt' },
] as const

export const CONTACT = {
  phone: '+48 600 000 000',
  email: 'kontakt@voltera.pl',
  city: 'Warszawa i okolice',
  hours: 'Pon.–Pt. 8:00–18:00',
} as const
