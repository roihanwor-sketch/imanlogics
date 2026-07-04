'use client'

import { useEffect, useState, useRef } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'motion/react'
import { Sun, Moon, Laptop, ChevronDown } from 'lucide-react'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Avoid Hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)

    // Close dropdown on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9 rounded-lg bg-slate-500/5 animate-pulse" />
  }

  const currentThemeIcon = () => {
    if (theme === 'system') return <Laptop className="w-4 h-4 text-slate-500 dark:text-slate-400" />
    return resolvedTheme === 'dark' ? (
      <Moon className="w-4 h-4 text-cyan-400" />
    ) : (
      <Sun className="w-4 h-4 text-amber-500" />
    )
  }

  const options = [
    { value: 'light', label: 'Terang', icon: <Sun className="w-4 h-4 text-amber-500" /> },
    { value: 'dark', label: 'Gelap', icon: <Moon className="w-4 h-4 text-cyan-400" /> },
    {
      value: 'system',
      label: 'Sistem',
      icon: <Laptop className="w-4 h-4 text-slate-500 dark:text-slate-400" />,
    },
  ]

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ubah Tema"
        className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-500/5 hover:bg-slate-500/10 border border-slate-200/50 dark:border-white/5 text-slate-700 dark:text-slate-200 transition-colors focus:outline-none"
      >
        {currentThemeIcon()}
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl glass-card bg-[#faf3e5]/95 dark:bg-[#0F172A]/90 shadow-xl z-50 overflow-hidden py-1 border border-slate-200/80 dark:border-white/10"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setTheme(opt.value)
                  setIsOpen(false)
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-xs font-medium transition-colors ${
                  theme === opt.value
                    ? 'bg-[#f4ebd4] dark:bg-slate-800/80 text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-[#faf3e5]/50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {opt.icon}
                <span>{opt.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
