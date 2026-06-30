import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../shared/FadeIn';

interface TrustBarProps {
  items: string[];
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <FadeIn delay={0.6}>
      <div className="border-y border-white/5 py-8 mb-24 flex flex-wrap justify-center gap-6 sm:gap-12 opacity-90">
        {items.map((item, index) => (
          <div key={index} className="flex items-center text-sm md:text-base font-medium text-slate-400">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
            {item}
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
