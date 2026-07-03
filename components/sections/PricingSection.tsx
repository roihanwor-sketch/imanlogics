import { ProductConfig } from '@/types'
import { ArrowRight, CheckCircle2, Gift } from 'lucide-react'
import { FadeIn } from '../shared/FadeIn'

// Render teks fitur dengan aman: menebalkan "Gratis update" jika ditemukan
function RenderFeature({ text }: { text: string }) {
  if (text.includes('Gratis update')) {
    const parts = text.split('Gratis update')
    return (
      <>
        {parts[0]}
        <strong>Gratis update</strong>
        {parts[1]}
      </>
    )
  }
  return <>{text}</>
}

// Render teks bonus dengan aman: menebalkan teks sebelum tanda kurung
function RenderBonus({ text }: { text: string }) {
  const parenIndex = text.indexOf('(')
  if (parenIndex > 0) {
    return (
      <>
        <strong>{text.slice(0, parenIndex)}</strong>
        {text.slice(parenIndex)}
      </>
    )
  }
  return <strong>{text}</strong>
}

interface PricingSectionProps {
  pricing: NonNullable<ProductConfig['pricing']>
}

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="relative z-10 border-t border-emerald-500/10 pt-20 mt-20 pb-4">
      <FadeIn>
        <div className="p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-b from-brand-card to-emerald-500/5 border border-emerald-500/30 text-center relative overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.15)] max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-amber-500/5 blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              {pricing.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              {pricing.subtitle}
            </p>

            {/* Value Stacking Centered Box */}
            <div className="bg-slate-500/5 dark:bg-black/30 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-white/5 mb-12 max-w-3xl mx-auto flex flex-col items-center">
              <p className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-6">
                Investasi Sekali, Gunakan Berkali-kali
              </p>

              <div className="mb-8">
                <span className="text-slate-500 dark:text-slate-400 line-through text-xl block mb-2">
                  {pricing.originalPrice}
                </span>
                <span className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white block mb-4">
                  {pricing.currentPrice}
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Sekali bayar. Akses selamanya. Tidak ada biaya bulanan.
                </p>
              </div>

              <div className="w-full border-t border-slate-200 dark:border-white/10 pt-8 mt-2 text-left sm:px-8">
                <h4 className="text-slate-800 dark:text-white font-bold mb-6 text-lg text-center">
                  Semua Ini Menjadi Milik Anda:
                </h4>

                <ul className="space-y-4 text-base text-slate-700 dark:text-slate-300">
                  {pricing.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 shrink-0 mt-0.5" />
                      <span>
                        <RenderFeature text={feature} />
                      </span>
                    </li>
                  ))}
                </ul>

                {pricing.bonuses && pricing.bonuses.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-dashed border-slate-200 dark:border-white/10">
                    <h4 className="text-amber-400 font-bold mb-6 text-base flex items-center justify-center sm:justify-start">
                      <Gift className="w-5 h-5 mr-2" />
                      BONUS EKSKLUSIF (Senilai Rp 250.000)
                    </h4>
                    <ul className="space-y-4 text-base text-amber-900/80 dark:text-amber-100/80">
                      {pricing.bonuses.map((bonus, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-500 mr-4 font-bold text-xl leading-none">
                            +
                          </span>
                          <span>
                            <RenderBonus text={bonus} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* FINAL CTA */}
            <a
              href={pricing.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl text-lg font-bold text-emerald-50 btn-primary inline-flex items-center justify-center shadow-xl shadow-emerald-500/20"
            >
              {pricing.cta.text}
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
