import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FadeIn } from '@/components/shared/FadeIn';
import berandaData from '@/data/beranda.json';
import roadmapData from '@/data/roadmap.json';
import { BadgeConfig } from '@/lib/ui-configs';
import Link from 'next/link';

export default function Home() {
  const { hero, fokus, tentang, alur, cta } = berandaData;

  return (
    <>
      <div className="fixed w-[600px] h-[600px] bg-cyan-900/20 top-[-200px] left-[-200px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>
      <div className="fixed w-[500px] h-[500px] bg-violet-900/20 top-[20%] right-[-100px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      <SiteHeader />
      
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section id="beranda" className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gradient-subtle">
                {hero.title} <br className="hidden md:block" /> <span className="text-gradient">{hero.highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
                <Link href="/portfolio" className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-cyan-50 btn-primary flex items-center justify-center">
                  {hero.btn_primary}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
                <Link href="/products" className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center">
                  {hero.btn_secondary}
                </Link>
              </div>
            </FadeIn>

            {/* Abstract AI Ecosystem Visual */}
            <FadeIn delay={0.2} className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10"></div>
              <div className="glass-card p-4 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="flex items-center space-x-2 mb-4 px-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 opacity-50">
                  <div className="h-32 rounded-lg bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20"></div>
                  <div className="col-span-2 h-32 rounded-lg bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)] -translate-x-full animate-[shimmer_3s_infinite]"></div>
                  </div>
                  <div className="col-span-3 h-48 rounded-lg bg-white/5 border border-white/5"></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. Fokus Utama */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest text-center mb-8">{fokus.title}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {fokus.items.map((item, index) => (
                  <div key={index} className="text-center p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="text-slate-300 font-medium text-sm">{item}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. Tentang */}
        <section id="tentang" className="pt-24 pb-12 px-6 relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                {tentang.title} <br/><span className="text-gradient">{tentang.highlight}</span>
              </h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                {tentang.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 blur-3xl rounded-full"></div>
              <div className="glass-card rounded-2xl p-8 aspect-square flex flex-col justify-between border border-white/10 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{tentang.badge.sys}</span>
                </div>
                <div>
                  <div className="space-y-3 mb-6">
                    <div className="h-1 w-full bg-white/5 rounded overflow-hidden"><div className="h-full bg-cyan-500/50 w-3/4"></div></div>
                    <div className="h-1 w-full bg-white/5 rounded overflow-hidden"><div className="h-full bg-violet-500/50 w-1/2"></div></div>
                    <div className="h-1 w-full bg-white/5 rounded overflow-hidden"><div className="h-full bg-blue-500/50 w-5/6"></div></div>
                  </div>
                  <h4 className="text-white font-medium">{tentang.badge.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{tentang.badge.subtitle}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. Cara Kerja (Alur Logika) */}
        <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-white">{alur.title}</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">{alur.subtitle}</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 pointer-events-none"></div>
              {alur.items.map((item, index) => {
                const borderColors = ['border-white/10', 'border-cyan-500/30', 'border-violet-500/30'];
                const textColors = ['text-white', 'text-cyan-400', 'text-violet-400'];
                const shadows = ['shadow-[0_0_15px_rgba(255,255,255,0.05)]', 'shadow-[0_0_15px_rgba(34,211,238,0.1)]', 'shadow-[0_0_15px_rgba(168,85,247,0.1)]'];
                
                return (
                  <FadeIn key={index} delay={0.2 * index} className="glass-card p-8 rounded-2xl relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-[#0B0F19] border ${borderColors[index]} flex items-center justify-center mb-6 ${textColors[index]} font-bold font-mono text-lg ${shadows[index]}`}>
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Roadmap Section */}
        <section id="roadmap" className="py-24 px-6 relative border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-white">🗺️ Roadmap <span className="text-gradient">Pengembangan</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Rencana pengembangan proyek dan eksperimen sistem digital ke depan.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Garis penghubung timeline di belakang kartu pada desktop */}
              <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent pointer-events-none z-0"></div>

              {roadmapData.items.map((item, index) => {
                const accentClasses: Record<string, string> = {
                  inprogress: 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
                  prototype: 'hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
                  research: 'hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
                  concept: 'hover:border-zinc-500/50 hover:shadow-[0_0_20px_rgba(113,113,122,0.15)]'
                };
                const hoverAccent = accentClasses[item.status.toLowerCase()] || accentClasses.concept;

                return (
                  <FadeIn key={index} delay={0.1 * index} className="group relative z-10 h-full">
                    <div className={`glass-card p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 ${hoverAccent}`}>
                      {/* Watermark penomoran fase */}
                      <span className="absolute top-4 right-6 text-7xl font-bold font-mono text-white/[0.02] group-hover:text-white/[0.06] transition-colors pointer-events-none select-none">
                        0{index + 1}
                      </span>
                      
                      <div className="mb-6 relative">
                        <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300 pr-4">{item.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                      </div>
                      
                      <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between">
                        <BadgeConfig status={item.status} />
                        <span className="text-[10px] font-mono text-slate-500 tracking-wider">PHASE 0{index + 1}</span>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. CTA Penutup */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">
                {cta.title} <br className="hidden md:block" /> <span className="text-gradient">{cta.highlight}</span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto relative z-10 text-lg">{cta.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
                <Link href="/portfolio" className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-cyan-50 btn-primary">
                  {cta.btn_primary}
                </Link>
                <Link href="/products" className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                  {cta.btn_secondary}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
