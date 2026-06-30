import { ProductConfig } from '@/types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../shared/FadeIn';

interface SolutionSectionProps {
  solution: NonNullable<ProductConfig['solution']>;
}

export function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <FadeIn>
      <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.05)] text-center max-w-4xl mx-auto mb-16 relative z-10">
        <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-8">{solution.title}</h3>

        <div className="space-y-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {solution.description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-emerald-500/10">
          <p className="text-base italic text-slate-400 leading-relaxed max-w-3xl mx-auto">
            {solution.quote}
          </p>
        </div>
      </div>

      <div className="mt-12 text-center flex justify-center mb-24 relative z-10">
        <a
          href={solution.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-emerald-50 btn-primary inline-flex items-center justify-center shadow-lg shadow-emerald-500/20"
        >
          {solution.cta.text}
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </FadeIn>
  );
}
