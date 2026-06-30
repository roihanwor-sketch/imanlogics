import { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FadeIn } from '@/components/shared/FadeIn';
import profilData from '@/data/profil.json';

export const metadata: Metadata = {
  title: 'Tentang Pembuat',
  description: 'Tentang Rizqul Mujahidin — Mahasiswa Fiqih & Fatwa yang membangun ekosistem digital di persimpangan teknologi, logika, dan pengetahuan islami.',
};

export default function ProfilPage() {
  const { name, description, badges } = profilData;

  return (
    <>
      <div className="fixed w-[600px] h-[600px] bg-cyan-900/20 top-[-200px] left-[-200px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>
      <div className="fixed w-[500px] h-[500px] bg-violet-900/20 top-[20%] right-[-100px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      <SiteHeader />
      
      <main className="flex-grow pt-32 pb-24 px-6 flex items-center min-h-[70vh]">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 blur-[80px] rounded-full pointer-events-none"></div>

              {/* Modern Avatar Placeholder */}
              <div className="shrink-0 relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#131A2B] to-[#0B0F19] border border-white/10 flex items-center justify-center p-1 relative z-10 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center border border-white/5 overflow-hidden">
                    <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-[#0B0F19] border border-white/10 rounded-full text-[10px] font-mono text-cyan-400 z-20">
                  SYS.USR
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center md:text-left relative z-10 flex-grow">
                <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">Tentang Pembuat</h3>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{name}</h2>
                <p className="text-slate-400 mb-6 text-sm md:text-base max-w-2xl">{description}</p>

                {/* Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {badges.map((b, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
