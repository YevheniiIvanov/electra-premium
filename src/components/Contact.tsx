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
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
            Kontakt
          </p>
          <h2
            id="contact-heading"
            className="mt-6 max-w-[560px] text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Napisz kilka słów o projekcie.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-16 md:mt-20 lg:grid-cols-2 lg:gap-24">
          <Reveal delay={0.06}>
            <div className="space-y-10">
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Telefon</p>
                <a
                  className="mt-2 block text-[21px] font-normal text-ink underline decoration-black/[0.12] underline-offset-4 transition-[text-decoration-color] hover:decoration-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-muted">E-mail</p>
                <a
                  className="mt-2 block text-[21px] font-normal text-accent"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-muted">
                  Obszar · godziny
                </p>
                <p className="mt-3 max-w-[320px] text-[17px] font-light leading-relaxed text-[#424245]">
                  {CONTACT.city}
                  <br />
                  {CONTACT.hours}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.form
              onSubmit={onSubmit}
              className="rounded-2xl border border-black/[0.06] bg-white p-8 md:p-10"
              layout
            >
              <div className="grid gap-8">
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] uppercase tracking-[0.16em] text-muted">
                    Imię i nazwisko
                  </span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-black/25 focus:ring-2 focus:ring-black/10"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] uppercase tracking-[0.16em] text-muted">
                    Telefon
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-black/25 focus:ring-2 focus:ring-black/10"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] uppercase tracking-[0.16em] text-muted">
                    E-mail
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-black/25 focus:ring-2 focus:ring-black/10"
                    placeholder=""
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] uppercase tracking-[0.16em] text-muted">
                    Wiadomość
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="resize-y rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-black/25 focus:ring-2 focus:ring-black/10"
                    placeholder=""
                  />
                </label>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <motion.button
                  type="submit"
                  className="rounded-full bg-ink px-9 py-3.5 text-[15px] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
                  whileTap={{ scale: 0.98 }}
                >
                  Wyślij
                </motion.button>
                {sent ? (
                  <p className="text-[14px] text-muted" role="status">
                    Dziękujemy. To demo — podłącz backend, gdy będzie gotowy.
                  </p>
                ) : null}
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
