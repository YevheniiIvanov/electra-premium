import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '../constants/site'
import { Reveal } from './ui/Reveal'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-surface px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-muted">
            Контакти
          </p>
          <h2
            id="contact-heading"
            className="mt-6 max-w-[620px] text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Заявка на виїзд та прорахунок у Черкасах
          </h2>
          <p className="mt-6 max-w-[620px] text-[17px] font-light leading-relaxed text-[#424245]">
            Опишіть задачу — передзвонимо у робочий час, запропонуємо час виїзду й
            орієнтовний формат робіт для об'єктів у Черкасах та Черкаській області.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.06}>
            <div className="space-y-10">
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-muted">
                  Телефон
                </p>
                <a
                  className="mt-2 block text-[22px] font-normal text-ink underline decoration-black/[0.15] underline-offset-[6px] transition-colors hover:decoration-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  href={`tel:${CONTACT.phoneHref}`}
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Email</p>
                <a
                  className="mt-2 block text-[22px] font-normal text-accent"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-muted">
                  Локація та зона робіт
                </p>
                <p className="mt-3 max-w-[340px] text-[17px] font-light leading-relaxed text-[#424245]">
                  {CONTACT.city} · {CONTACT.area}
                  <br />
                  <span className="text-muted">{CONTACT.hours}</span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.form
              onSubmit={onSubmit}
              className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.22)] md:p-10"
              layout
            >
              <div className="grid gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] uppercase tracking-[0.14em] text-muted">
                    Ім’я
                  </span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-muted/80 focus:border-black/25 focus:ring-2 focus:ring-black/10"
                    placeholder="Як до вас звертатись"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] uppercase tracking-[0.14em] text-muted">
                    Телефон
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-muted/80 focus:border-black/25 focus:ring-2 focus:ring-black/10"
                    placeholder="+380 ..."
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] uppercase tracking-[0.14em] text-muted">
                    Email
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-muted/80 focus:border-black/25 focus:ring-2 focus:ring-black/10"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] uppercase tracking-[0.14em] text-muted">
                    Опишіть ваше завдання
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="resize-y rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-muted/80 focus:border-black/25 focus:ring-2 focus:ring-black/10"
                    placeholder="Тип об'єкта, терміни, побажання щодо робіт"
                  />
                </label>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <motion.button
                  type="submit"
                  name="intent"
                  value="consult"
                  className="rounded-full bg-ink px-8 py-3.5 text-[15px] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
                  whileTap={{ scale: 0.98 }}
                >
                  Отримати консультацію
                </motion.button>
                <motion.button
                  type="submit"
                  name="intent"
                  value="estimate"
                  className="rounded-full border border-black/[0.15] px-8 py-3.5 text-[15px] font-medium text-ink hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2"
                  whileTap={{ scale: 0.98 }}
                >
                  Замовити прорахунок
                </motion.button>
              </div>

              <p className="mt-6 text-[13px] leading-relaxed text-muted">
                Натискаючи кнопку, ви погоджуєтеся з обробкою даних для зворотного
                зв'язку згідно з політикою конфіденційності. Відповідь — зазвичай
                протягом робочого дня.
              </p>

              {sent ? (
                <p className="mt-4 text-[14px] font-medium text-accent" role="status">
                  Дякуємо! Заявку отримано (демо-режим — підключіть API для продакшену).
                </p>
              ) : null}
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
