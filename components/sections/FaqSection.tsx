import { ProductConfig } from '@/types';
import { FadeIn } from '../shared/FadeIn';

interface FaqSectionProps {
  faq: NonNullable<ProductConfig['faq']>;
}

export function FaqSection({ faq }: FaqSectionProps) {
  return (
    <section className="relative z-10 border-t border-white/5 pt-20 mt-16 max-w-3xl mx-auto mb-20">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{faq.title}</h2>
        </div>
      </FadeIn>
      
      <div className="space-y-6 text-left">
        {faq.items.map((item, index) => (
          <FadeIn key={index} delay={0.1 * index}>
            <details className="group bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none py-4 px-6 md:py-5 md:px-8 text-emerald-50 hover:text-emerald-400 transition-colors">
                <span className="text-base md:text-lg pr-4">{item.question}</span>
                <span className="transition group-open:rotate-180 shrink-0 text-slate-400 group-hover:text-emerald-400">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-slate-400 text-sm md:text-base pb-5 px-6 md:pb-6 md:px-8 pt-0 leading-relaxed">
                {item.answer}
              </p>
            </details>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
