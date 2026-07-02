import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { globalData } from '@/lib/data';
import linksDataRaw from '@/data/links.json';
import { LinksData } from '@/types/data';

const linksData = linksDataRaw as LinksData;

export const metadata: Metadata = {
  title: 'Bio Link',
  description: 'AI Systems & Digital Products - Hubungi kami, kunjungi website utama, dan akses asisten cerdas.',
  alternates: {
    canonical: '/links',
  },
};

export default function LinksPage() {
  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'instagram':
        return {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          ),
          hoverClass: 'hover:text-pink-500 hover:scale-110'
        };
      case 'facebook':
        return {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          ),
          hoverClass: 'hover:text-blue-500 hover:scale-110'
        };
      case 'email':
        return {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          ),
          hoverClass: 'hover:text-amber-500 hover:scale-110'
        };
      case 'whatsapp':
        return {
          icon: (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.51 5.284 3.508 8.49-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.659 1.875 14.183 1.84 11.55 1.84c-5.438 0-9.863 4.42-9.866 9.863-.001 1.745.485 3.326 1.48 4.897L2.14 21.896l5.508-1.443z" />
            </svg>
          ),
          hoverClass: 'hover:text-emerald-500 hover:scale-110'
        };
      default: // website
        return {
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          ),
          hoverClass: 'hover:text-cyan-400 hover:scale-110'
        };
    }
  };

  const socials = [
    ...globalData.footer.socials.map(s => ({
      name: s.label,
      url: s.link,
      ...getSocialIcon(s.label)
    })),
    {
      name: 'Website',
      url: 'https://imanlogics.web.id',
      ...getSocialIcon('website')
    }
  ];

  const avatarUrl = linksData.avatar.startsWith('/') ? linksData.avatar : `/assets/uploads/${linksData.avatar}`;

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-200 flex flex-col items-center justify-between p-6 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-900/20 -top-[150px] left-[50%] -translate-x-[50%] rounded-full blur-[90px] z-[0] pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] bg-violet-900/15 bottom-[-100px] left-[50%] -translate-x-[50%] rounded-full blur-[90px] z-[0] pointer-events-none"></div>

      {/* Main Container */}
      <div className="w-full max-w-[420px] z-10 flex flex-col items-center flex-grow pt-14 pb-8">

        {/* Profile Card Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 via-emerald-500 to-indigo-500 shadow-xl shadow-cyan-900/20">
            <div className="w-full h-full rounded-full bg-[#0B0F19] flex items-center justify-center p-1 overflow-hidden">
              <Image
                src={avatarUrl}
                alt={linksData.title}
                width={88}
                height={88}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-xl font-bold mt-5 text-white tracking-tight">{linksData.title}</h1>
          <p className="text-sm font-semibold text-slate-400 mt-1.5 uppercase tracking-wider">
            {linksData.tagline}
          </p>
        </div>

        {/* Social Media Horizontal List */}
        <div className="flex items-center gap-5 mb-10">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 transition-all duration-300 ${social.hoverClass}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Action Buttons Stack */}
        <div className="w-full flex flex-col gap-4 mb-12">
          {linksData.buttons.map((btn, idx) => {
            const isExternal = btn.url.startsWith('http') || btn.url.startsWith('mailto');
            const targetProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
            const LinkComponent = isExternal ? 'a' : Link;

            // Image/Icon selector
            let iconContainer = null;
            let themeBorder = 'hover:border-cyan-500/30 hover:shadow-[0_6px_20px_-8px_rgba(6,182,212,0.2)]';
            let iconColorClass = 'text-cyan-400';
            let bgLightClass = 'bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/15';

            if (btn.type === 'whatsapp') {
              themeBorder = 'hover:border-emerald-500/30 hover:shadow-[0_6px_20px_-8px_rgba(16,185,129,0.2)]';
              iconColorClass = 'text-emerald-400';
              bgLightClass = 'bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/15';
              iconContainer = (
                <div className={`w-12 h-12 rounded-lg ${bgLightClass} border flex items-center justify-center flex-shrink-0 ${iconColorClass} transition-all duration-300`}>
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.51 5.284 3.508 8.49-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.659 1.875 14.183 1.84 11.55 1.84c-5.438 0-9.863 4.42-9.866 9.863-.001 1.745.485 3.326 1.48 4.897L2.14 21.896l5.508-1.443z" />
                  </svg>
                </div>
              );
            } else if (btn.type === 'website') {
              themeBorder = 'hover:border-cyan-500/30 hover:shadow-[0_6px_20px_-8px_rgba(6,182,212,0.2)]';
              iconColorClass = 'text-cyan-400';
              bgLightClass = 'bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/15';
              iconContainer = (
                <div className={`w-12 h-12 rounded-lg ${bgLightClass} border flex items-center justify-center flex-shrink-0 ${iconColorClass} transition-all duration-300`}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
              );
            } else {
              themeBorder = btn.type === 'product'
                ? 'hover:border-violet-500/30 hover:shadow-[0_6px_20px_-8px_rgba(139,92,246,0.2)]'
                : 'hover:border-cyan-500/30 hover:shadow-[0_6px_20px_-8px_rgba(6,182,212,0.2)]';
              iconColorClass = btn.type === 'product' ? 'text-violet-400' : 'text-cyan-400';
              bgLightClass = btn.type === 'product'
                ? 'bg-violet-500/10 border-violet-500/20 group-hover:bg-violet-500/15'
                : 'bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/15';

              const imgUrl = btn.image ? (btn.image.startsWith('/') ? btn.image : `/assets/uploads/${btn.image}`) : null;

              if (imgUrl) {
                iconContainer = (
                  <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                    <Image
                      src={imgUrl}
                      alt={btn.title}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                );
              } else {
                iconContainer = (
                  <div className={`w-12 h-12 rounded-lg ${bgLightClass} border flex items-center justify-center flex-shrink-0 ${iconColorClass} transition-all duration-300`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                );
              }
            }

            let textHoverClass = 'group-hover:text-cyan-400';
            let arrowHoverClass = 'group-hover:text-cyan-400';
            if (btn.type === 'whatsapp') {
              textHoverClass = 'group-hover:text-emerald-400';
              arrowHoverClass = 'group-hover:text-emerald-400';
            } else if (btn.type === 'product') {
              textHoverClass = 'group-hover:text-violet-400';
              arrowHoverClass = 'group-hover:text-violet-400';
            }

            return (
              <LinkComponent
                key={idx}
                href={btn.url}
                {...targetProps}
                className={`group w-full glass-card p-4 rounded-xl flex items-center gap-4 text-left border border-white/5 ${themeBorder} hover:-translate-y-0.5 transition-all duration-300`}
              >
                {iconContainer}
                <div className="flex-grow">
                  <div className={`text-white font-bold text-sm tracking-wide ${textHoverClass} transition-colors`}>
                    {btn.title}
                  </div>
                  {btn.subtitle && (
                    <div className="text-[11px] text-slate-400 mt-1 leading-normal font-medium">
                      {btn.subtitle}
                    </div>
                  )}
                </div>
                <div className={`text-slate-600 ${arrowHoverClass} group-hover:translate-x-0.5 transition-all duration-300`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </LinkComponent>
            );
          })}
        </div>

      </div>

      {/* Footer Branded Note */}
      <div className="z-10 pb-8 text-center">
        <p className="text-[11px] md:text-xs text-slate-400/90 tracking-wide leading-relaxed">
          {linksData.copyright}<br />{linksData.built_with}
        </p>
      </div>
    </div>
  );
}
