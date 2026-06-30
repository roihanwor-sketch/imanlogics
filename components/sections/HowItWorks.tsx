import { ProductConfig } from '@/types';
import { FadeIn } from '../shared/FadeIn';

interface HowItWorksSectionProps {
  howItWorks: NonNullable<ProductConfig['howItWorks']>;
}

export function HowItWorksSection({ howItWorks }: HowItWorksSectionProps) {
  return (
    <section id="cara-kerja" className="relative z-10 border-t border-white/5 pt-20 mb-20">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{howItWorks.title}</h2>
          <p className="text-slate-400 text-base">{howItWorks.subtitle}</p>
        </div>
      </FadeIn>
      
      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0"></div>

        {howItWorks.steps.map((step, i) => (
          <FadeIn key={step.id} delay={0.2 * (i + 1)}>
            <div className="text-center relative z-10 bg-[#0B0F19] p-8 rounded-3xl border border-white/5 shadow-xl flex flex-col items-center h-full">
              <div className="w-20 h-20 bg-[#0B0F19] border-2 border-emerald-500/30 rounded-full flex items-center justify-center text-3xl font-bold text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                {step.stepNumber}
              </div>
              <h4 className="text-lg text-white font-bold mb-4">{step.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
