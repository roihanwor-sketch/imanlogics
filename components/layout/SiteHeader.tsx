'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search } from 'lucide-react'
import { globalData } from '@/lib/data'
import { useKBar } from 'kbar'
import ThemeSwitch from '@/components/ThemeSwitch'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { query } = useKBar()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  const navItems = globalData.footer.nav.filter((item) => item.label !== 'Jelajahi Produk')
  const mobileMenuItems = [
    ...navItems,
    { label: 'Jelajahi Produk', link: '/products', isPrimary: true },
  ]
  const isTotalOdd = mobileMenuItems.length % 2 !== 0

  return (
    <>
      <header className="fixed w-full top-0 z-50 border-b border-slate-200/30 bg-brand-bg/45 bg-gradient-to-b from-black/[0.01] to-transparent shadow-[inset_0_1px_0_0_rgba(0,0,0,0.05),0_8px_32px_0_rgba(0,0,0,0.03)] backdrop-blur-2xl transition-all dark:border-white/10 dark:bg-[#0B0F19]/45 dark:from-white/[0.04] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5 relative z-[60]"
          >
            <Image
              src="/logo.png"
              alt="Iman Logics"
              width={36}
              height={36}
              className="rounded-md"
            />
            <span>
              {globalData.footer.brand_prefix}{' '}
              <span className="text-slate-500 dark:text-slate-400">
                {globalData.footer.brand_suffix}
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.link}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => query.toggle()}
              aria-label="Cari"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:bg-slate-500/5 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>
            <ThemeSwitch />
            <Link
              href="/products"
              className="px-5 py-2 text-sm font-medium text-slate-800 dark:text-white btn-glass rounded-lg flex items-center justify-center"
            >
              Jelajahi Produk
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden relative z-[60]">
            <button
              onClick={() => query.toggle()}
              aria-label="Cari"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <ThemeSwitch />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-brand-bg dark:bg-[#0B0F19] shadow-2xl border-l border-slate-200 dark:border-white/10 flex flex-col p-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-8 border-b border-slate-200/50 dark:border-white/5 pb-4">
          <span className="font-bold text-slate-800 dark:text-white text-lg">Menu Navigasi</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-500/5 transition-colors focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items (Vertical Card style) */}
        <div className="flex flex-col gap-4 flex-grow overflow-y-auto">
          {mobileMenuItems.map((item, idx) => {
            const isPrimary = 'isPrimary' in item && item.isPrimary
            const btnClass = isPrimary
              ? 'btn-primary'
              : 'bg-brand-card hover:bg-brand-card-hover border border-slate-200/60 dark:border-white/5 text-slate-800 dark:text-slate-200 shadow-xs'

            return (
              <Link
                key={item.label}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full py-3.5 px-5 text-sm font-semibold rounded-xl flex items-center justify-between transition-all ${btnClass}`}
              >
                <span>{item.label}</span>
                <svg
                  className="w-4 h-4 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
