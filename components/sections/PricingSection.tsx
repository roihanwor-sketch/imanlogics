import { ProductConfig } from '@/types';
import { ArrowRight, CheckCircle2, Gift } from 'lucide-react';
import { FadeIn } from '../shared/FadeIn';

interface PricingSectionProps {
  pricing: NonNullable<ProductConfig['pricing']>;
}

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="relative z-10 border-t border-emerald-500/10 pt-20 mt-20 pb-4">
      <FadeIn>
        <div className="p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-b from-[#0B0F19] to-emerald-950/20 border border-emerald-500/30 text-center relative overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.15)] max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-amber-500/5 blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              {pricing.title}
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              {pricing.subtitle}
            </p>

            {/* Value Stacking Centered Box */}
            <div className="bg-black/30 rounded-3xl p-8 sm:p-12 border border-white/5 mb-12 max-w-3xl mx-auto flex flex-col items-center">
              <p className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-6">
                Investasi Sekali, Gunakan Berkali-kali
              </p>

              <div className="mb-8">
                <span className="text-slate-400 line-through text-xl block mb-2">{pricing.originalPrice}</span>
                <span className="text-5xl lg:text-6xl font-bold text-white block mb-4">{pricing.currentPrice}</span>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  Sekali bayar. Akses selamanya. Tidak ada biaya bulanan.
                </p>
              </div>

              <div className="w-full border-t border-white/10 pt-8 mt-2 text-left sm:px-8">
                <h4 className="text-white font-bold mb-6 text-lg text-center">Semua Ini Menjadi Milik Anda:</h4>

                <ul className="space-y-4 text-base text-slate-300">
                  {pricing.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: feature.replace("Gratis update", "<strong>Gratis update") + (feature.includes("Gratis update") ? "</strong>" : "") }} />
                    </li>
                  ))}
                </ul>

                {pricing.bonuses && pricing.bonuses.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-dashed border-white/10">
                    <h4 className="text-amber-400 font-bold mb-6 text-base flex items-center justify-center sm:justify-start">
                      <Gift className="w-5 h-5 mr-2" />
                      BONUS EKSKLUSIF (Senilai Rp 250.000)
                    </h4>
                    <ul className="space-y-4 text-base text-amber-100/80">
                      {pricing.bonuses.map((bonus, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-500 mr-4 font-bold text-xl leading-none">+</span>
                          <span dangerouslySetInnerHTML={{ __html: bonus.replace(/([^\(]+)/, "<strong>$1</strong>") }} />
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
  );
}
