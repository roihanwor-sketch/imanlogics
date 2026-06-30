import { ProductConfig } from '@/types';
import Link from 'next/link';
import { ArrowRight, Bot } from 'lucide-react';
import { FadeIn } from '../shared/FadeIn';

interface HeroSectionProps {
  hero: ProductConfig['hero'];
  badge: string;
}

export function HeroSection({ hero, badge }: HeroSectionProps) {
  return (
    <section className="relative z-10 flex flex-col items-center text-center mb-16 pt-12 md:pt-20">
      <FadeIn delay={0.1}>
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-[#0B0F19]/80 border border-emerald-500/30 flex items-center justify-center p-5 text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.15)] mb-8 mx-auto">
          <Bot className="w-full h-full" />
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">{badge}</span>
        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Tersedia
        </span>
      </FadeIn>

      <FadeIn delay={0.3}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight max-w-4xl mx-auto">
          {hero.title}
        </h1>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p className="text-slate-300 text-base md:text-lg leading-loose mb-10 max-w-2xl mx-auto">
          {hero.description}
        </p>
      </FadeIn>

      <FadeIn delay={0.5} className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full">
        <a
          href={hero.primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-emerald-50 btn-primary inline-flex items-center justify-center shadow-lg shadow-emerald-500/20"
        >
          {hero.primaryCta.text}
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
        <Link
          href={hero.secondaryCta.href}
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 inline-flex items-center justify-center transition-all"
        >
          {hero.secondaryCta.text}
        </Link>
      </FadeIn>
    </section>
  );
}
