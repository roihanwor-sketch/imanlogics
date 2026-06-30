import { ProductConfig } from '@/types';
import { Timer, LayoutList, Languages, BookOpen, Mic } from 'lucide-react';
import { FadeIn } from '../shared/FadeIn';

const iconMap: Record<string, React.ReactNode> = {
  'timer': <Timer className="w-6 h-6" />,
  'layout-list': <LayoutList className="w-6 h-6" />,
  'languages': <Languages className="w-6 h-6" />,
  'book-open': <BookOpen className="w-6 h-6" />,
  'mic': <Mic className="w-6 h-6" />,
};

interface BenefitsGridProps {
  benefits: NonNullable<ProductConfig['benefits']>;
}

export function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <section className="relative z-10 border-t border-white/5 pt-20 mt-12 mb-20">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">{benefits.title}</h2>
        </div>
      </FadeIn>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-12">
        {benefits.items.map((item, i) => (
          <FadeIn key={item.id} delay={0.1 * (i + 1)} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)]">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all text-center h-full flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 text-emerald-400">
                {iconMap[item.icon]}
              </div>
              <h4 className="text-lg font-bold text-emerald-400 mb-3">{item.title}</h4>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.5} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)]">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all text-center h-full flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 text-emerald-400">
              {iconMap[benefits.highlightedItem.icon]}
            </div>
            <h4 className="text-lg font-bold text-emerald-400 mb-3">{benefits.highlightedItem.title}</h4>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
              {benefits.highlightedItem.description}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
