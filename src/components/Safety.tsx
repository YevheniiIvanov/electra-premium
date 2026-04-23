import { Reveal } from './ui/Reveal'

export function Safety() {
  return (
    <section
      id="bezpeka"
      className="scroll-mt-24 border-t border-black/[0.05] bg-white px-6 py-28 md:scroll-mt-28 md:px-10 md:py-36"
      aria-labelledby="safety-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-muted">
            Безпека та відповідність нормам
          </p>
          <h2
            id="safety-heading"
            className="mt-6 max-w-[720px] text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink md:text-[40px]"
          >
            Надійність починається з правильного монтажу
          </h2>
          <p className="mt-8 max-w-[680px] text-[17px] font-light leading-relaxed text-[#424245]">
            Ми дотримуємося технічних стандартів і правил безпечного виконання
            електромонтажних робіт у Черкасах та області. Відповідальний підхід до
            щитів, заземлення та підбору захисту — це не «опція», а базова умова
            якісної електрики під ключ.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Стандарти й ПУЕ',
              text: 'Проєктні рішення та монтаж із урахуванням актуальних вимог безпеки.',
            },
            {
              title: 'Безпека на об\'єкті',
              text: 'Фіксація зон робіт, перевірки та логіка підключень без «навантаження на випадок».',
            },
            {
              title: 'Деталі, що важливі',
              text: 'Якість клем, моментів затяжки й маркування — щоб обслуговування було передбачуваним.',
            },
          ].map((b, i) => (
            <Reveal key={b.title} delay={0.06 * i}>
              <div className="rounded-2xl border border-black/[0.06] bg-surface/70 p-7">
                <h3 className="text-[17px] font-semibold text-ink">{b.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
