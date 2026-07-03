'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  Action,
} from 'kbar'
import { Search, Compass, Phone, Mail, Sun, Moon, Package, FolderGit2 } from 'lucide-react'
import { getProductItems } from '@/lib/products'
import { getPortfolioItems } from '@/lib/portfolio'

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { setTheme } = useTheme()

  // Static core actions
  // Dynamic actions mapped from static links, products, and portfolio files
  const actions: Action[] = React.useMemo(() => {
    const staticActions: Action[] = [
      // Navigation
      {
        id: 'nav-home',
        name: 'Kembali ke Beranda',
        shortcut: ['h'],
        keywords: 'beranda home landing page awal',
        section: 'Navigasi Cepat',
        perform: () => router.push('/'),
      },
      {
        id: 'nav-portfolio',
        name: 'Lihat Portofolio',
        shortcut: ['p'],
        keywords: 'portofolio projects karya hasil kerja list daftar',
        section: 'Navigasi Cepat',
        perform: () => router.push('/portfolio'),
      },
      {
        id: 'nav-products',
        name: 'Jelajahi Produk',
        shortcut: ['d'],
        keywords: 'produk digital tools template e-book membership',
        section: 'Navigasi Cepat',
        perform: () => router.push('/products'),
      },
      {
        id: 'nav-contact',
        name: 'Hubungi Kontak',
        shortcut: ['c'],
        keywords: 'kontak whatsapp email support bantuan',
        section: 'Navigasi Cepat',
        perform: () => router.push('/#kontak'),
      },
      // Themes
      {
        id: 'theme-light',
        name: 'Aktifkan Tema Terang (Light Mode)',
        shortcut: ['t', 'l'],
        keywords: 'light mode tema terang siang',
        section: 'Utilitas',
        perform: () => setTheme('light'),
      },
      {
        id: 'theme-dark',
        name: 'Aktifkan Tema Gelap (Dark Mode)',
        shortcut: ['t', 'd'],
        keywords: 'dark mode tema gelap malam',
        section: 'Utilitas',
        perform: () => setTheme('dark'),
      },
      // Social
      {
        id: 'social-wa',
        name: 'Hubungi via WhatsApp Resmi',
        shortcut: ['w', 'a'],
        keywords: 'wa whatsapp chat admin support bantuan',
        section: 'Hubungi Kami',
        perform: () => window.open('https://wa.me/6285190846209', '_blank'),
      },
      {
        id: 'social-email',
        name: 'Kirim Email ke Support',
        shortcut: ['e', 'm'],
        keywords: 'email surat mail support bantuan',
        section: 'Hubungi Kami',
        perform: () => window.open('mailto:support@imanlogics.web.id', '_blank'),
      },
    ]

    const list = [...staticActions]

    // Load products dynamically
    try {
      const products = getProductItems()
      products.forEach((p) => {
        list.push({
          id: `product-${p.slug}`,
          name: `Etalase: ${p.name}`,
          subtitle: p.description || 'Lihat detail produk digital ini',
          keywords: `${p.name} ${p.badge} produk digital etalase`,
          section: 'Etalase Produk Digital',
          perform: () => router.push(`/products/${p.slug}/`),
        })
      })
    } catch (err) {
      console.error('Failed to load products in KBar:', err)
    }

    // Load portfolio dynamically
    try {
      const portfolio = getPortfolioItems()
      portfolio.forEach((p) => {
        list.push({
          id: `portfolio-${p.slug}`,
          name: `Portofolio: ${p.name}`,
          subtitle: p.description || 'Lihat detail karya portofolio ini',
          keywords: `${p.name} ${p.badge} portofolio karya proyek`,
          section: 'Karya Portofolio',
          perform: () => router.push(`/portfolio/${p.slug}/`),
        })
      })
    } catch (err) {
      console.error('Failed to load portfolio in KBar:', err)
    }

    return list
  }, [router, setTheme])

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="bg-slate-900/60 dark:bg-black/60 backdrop-blur-sm z-[100] p-4">
          <KBarAnimator className="w-full max-w-[600px] rounded-2xl overflow-hidden glass-card shadow-2xl border border-slate-200/85 dark:border-white/10 bg-[#f0e3c9]/95 dark:bg-[#0B0F19]/95 flex flex-col">
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200/50 dark:border-white/5">
              <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" />
              <KBarSearch
                className="w-full bg-transparent border-none outline-none text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:ring-0"
                placeholder="Ketik perintah atau cari..."
              />
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f0e3c9] dark:bg-slate-800 text-slate-400 dark:text-slate-500 shrink-0 border border-slate-200/60 dark:border-white/5">
                ESC
              </span>
            </div>
            <RenderResults />
            <div className="px-4 py-2.5 text-[10px] text-slate-500 dark:text-slate-400 border-t border-slate-200/50 dark:border-white/5 bg-[#e8dabc]/75 dark:bg-[#121826]/30 flex justify-between items-center select-none">
              <span>Gunakan ↑↓ untuk navigasi • Enter untuk memilih</span>
              <span className="hidden sm:inline">
                Tekan tombol huruf untuk jalan pintas (shortcut)
              </span>
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        if (typeof item === 'string') {
          return (
            <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-[#e8dabc]/75 dark:bg-[#121826]/30 border-b border-slate-200/30 dark:border-white/5">
              {item}
            </div>
          )
        }

        const getIcon = () => {
          if (item.section === 'Navigasi Cepat') return <Compass className="w-4 h-4" />
          if (item.section === 'Utilitas') {
            if (item.id === 'theme-light') return <Sun className="w-4 h-4" />
            return <Moon className="w-4 h-4" />
          }
          if (item.id === 'social-wa') return <Phone className="w-4 h-4" />
          if (item.id === 'social-email') return <Mail className="w-4 h-4" />
          if (item.section === 'Etalase Produk Digital') return <Package className="w-4 h-4" />
          if (item.section === 'Karya Portofolio') return <FolderGit2 className="w-4 h-4" />
          return <Compass className="w-4 h-4" />
        }

        return (
          <div
            className={`flex items-center justify-between px-4 py-3.5 cursor-pointer transition-all ${
              active
                ? 'bg-[#e8dabc]/80 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-500'
                : 'text-slate-600 dark:text-slate-300 hover:bg-[#f0e3c9]/50 dark:hover:bg-[#121826]/20 border-l-4 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span
                className={`transition-colors ${active ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`}
              >
                {getIcon()}
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-semibold">{item.name}</span>
                {item.subtitle && (
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1">
                    {item.subtitle}
                  </span>
                )}
              </div>
            </div>
            {item.shortcut?.length ? (
              <div className="flex items-center gap-1">
                {item.shortcut.map((sc) => (
                  <kbd
                    key={sc}
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase bg-[#e8dabc] dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-300/40 dark:border-white/5"
                  >
                    {sc}
                  </kbd>
                ))}
              </div>
            ) : null}
          </div>
        )
      }}
    />
  )
}
