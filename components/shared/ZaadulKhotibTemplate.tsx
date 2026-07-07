'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { FadeIn } from '@/components/shared/FadeIn'
import {
  ArrowLeft,
  Check,
  X,
  AlertTriangle,
  ChevronDown,
  Sparkles,
  Calendar,
  Globe,
  MapPin,
  Plus,
} from 'lucide-react'

interface ZaadulKhotibTemplateProps {
  backUrl: string
  backLabel: string
}

export function ZaadulKhotibTemplate({ backUrl, backLabel }: ZaadulKhotibTemplateProps) {
  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Tab state for Stage 1
  const [activeTab, setActiveTab] = useState<'hijriyah' | 'masehi' | 'indonesia'>('hijriyah')

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: 'Apakah saya masih perlu mengecek hasil AI?',
      a: 'Ya. Justru itulah yang kami anjurkan. Zaadul Khotib 2.0 membantu mempercepat proses penyusunan, tetapi pemeriksaan akhir tetap menjadi tanggung jawab pengguna.',
    },
    {
      q: 'Saya sudah memakai ChatGPT. Mengapa saya masih membutuhkan Zaadul Khotib 2.0?',
      a: 'ChatGPT adalah AI serbaguna. Zaadul Khotib 2.0 dirancang secara khusus untuk membantu proses persiapan khutbah Jumat. Perbedaannya bukan hanya pada hasil akhirnya, tetapi pada mekanisme penyusunannya yang disesuaikan dengan kebutuhan seorang khatib.',
    },
    {
      q: 'Apakah hasilnya pasti benar?',
      a: 'Tidak ada sistem AI yang dapat menjamin hasilnya selalu benar. Karena itu setiap hasil tetap harus ditinjau kembali sebelum digunakan.',
    },
    {
      q: 'Apakah semua dalil dijamin shahih?',
      a: 'Sistem dirancang untuk memprioritaskan dalil yang lebih kuat dan lebih dikenal dalam literatur Islam. Namun pengguna tetap berkewajiban memverifikasi setiap dalil yang digunakan.',
    },
    {
      q: 'Apakah saya boleh mengubah hasilnya?',
      a: 'Tentu. Bahkan kami sangat menganjurkannya. Sesuaikan dengan kondisi jamaah, waktu, tempat, dan gaya penyampaian Anda.',
    },
    {
      q: 'Apakah saya harus bisa membuat prompt?',
      a: 'Tidak. Anda cukup memilih tema dan mengikuti alur yang telah disediakan. Seluruh proses teknis dilakukan oleh sistem.',
    },
    {
      q: 'Apakah ada batas penggunaan?',
      a: 'Selama layanan tersedia sesuai ketentuan yang berlaku, Anda dapat menggunakannya untuk membantu menyusun berbagai draf khutbah sesuai kebutuhan.',
    },
  ]

  const waLink = 'https://wa.me/6285190846209?text=Saya%20tertarik%20dengan%20Zaadul%20Khotib%202.0'

  const btnCtaClass =
    'px-8 py-4 text-base font-bold rounded-2xl text-emerald-50 btn-primary inline-flex items-center justify-center shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-emerald-500/30 duration-300'

  return (
    <>
      {/* Background radial highlights */}
      <div className="fixed w-[800px] h-[800px] bg-emerald-500/10 dark:bg-emerald-950/20 top-[-300px] left-1/2 -translate-x-1/2 rounded-full blur-[120px] z-[-1] pointer-events-none"></div>
      <div className="fixed w-[500px] h-[500px] bg-amber-500/5 dark:bg-amber-950/10 bottom-[10%] right-[-100px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      <SiteHeader />

      <main className="flex-grow pt-32 pb-24 px-2 sm:px-6 min-h-screen relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href={backUrl}
            className="inline-flex items-center text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors mb-8 relative z-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLabel}
          </Link>

          {/* Main Landing Card Container */}
          <div className="glass-card rounded-[2.5rem] p-4 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Top decorative gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-emerald-500/10 to-amber-500/0 dark:from-emerald-500/15 dark:to-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* --- HERO SECTION --- */}
            <section className="text-center relative z-10 mb-16">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Asisten AI Khutbah Jumat
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                  🌙 <span className="text-gradient">ZAADUL KHOTIB 2.0</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 leading-snug max-w-2xl mx-auto">
                  Persiapan Khutbah Jumat Tidak Harus Menghabiskan Waktu Berjam-jam.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
                  Platform Persiapan Khutbah Jumat Berbasis AI yang Membantu Anda Menyusun Draf
                  Khutbah Secara Lebih Terstruktur, Lebih Relevan, dan Lebih Siap Ditinjau Sebelum
                  Dibacakan di Mimbar.
                </p>
              </FadeIn>

              {/* CTA 1 (Hero) */}
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnCtaClass}
                  >
                    🚀 Ya, Saya Siap Menggunakan Zaadul Khotib 2.0
                  </a>
                  <a
                    href="#masalah"
                    className="px-8 py-4 text-base font-bold rounded-2xl btn-glass inline-flex items-center justify-center transition-all hover:-translate-y-0.5 hover:scale-[1.01] duration-300"
                  >
                    Lihat Cara Kerjanya ↓
                  </a>
                </div>
              </FadeIn>
            </section>

            {/* --- TRUST BAR --- */}
            <section className="border-y border-slate-200/50 dark:border-white/5 py-8 mb-16 relative z-10 bg-slate-500/5 rounded-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  'Struktur Khutbah Otomatis',
                  'Bahasa Indonesia & Arab',
                  'Sesuai Konteks Indonesia',
                  'Amanah Ilmu Terjaga',
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-center px-4">
                    <Check className="w-5 h-5 text-emerald-500 mb-2" />
                    <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* --- THE PROBLEM --- */}
            <section id="masalah" className="mb-20 relative z-10 scroll-mt-24">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500 block mb-2">
                    Tantangan Khatib
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Menjelang Hari Jumat, Banyak Khatib Menghadapi Tantangan yang Sama
                  </h2>
                </div>
              </FadeIn>

              <div className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto space-y-6">
                <FadeIn delay={0.1}>
                  <div className="space-y-6">
                    <p>
                      Bukan karena mereka kekurangan ilmu. Bukan pula karena mereka tidak mampu
                      menyampaikan nasihat.
                    </p>
                    <p className="font-extrabold text-slate-900 dark:text-white text-lg border-l-4 border-emerald-500 pl-4 py-1">
                      Namun karena proses mempersiapkan satu khutbah yang baik memang membutuhkan
                      banyak waktu dan perhatian.
                    </p>

                    {/* Burdens Checklist */}
                    <div className="bg-slate-500/5 dark:bg-white/3 border border-slate-200/50 dark:border-white/5 rounded-3xl p-4 sm:p-8 my-6 text-left">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm sm:text-base">
                        Beban Teknis Persiapan Khutbah Setiap Pekan:
                      </h4>
                      <ul className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-200">
                        <li className="flex items-start gap-2.5">
                          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>Menentukan tema pembahasan yang tepat untuk jamaah.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>Mencari & memverifikasi dalil yang shahih serta relevan.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>Memastikan susunan khutbah pertama dan kedua tetap tertata.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>Merapikan penulisan teks Arab beserta terjemahannya.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>Menyusun doa penutup yang selaras dengan tema khutbah.</span>
                        </li>
                      </ul>
                    </div>

                    <p>
                      Di tengah kesibukan mengajar, bekerja, berdakwah, atau mengurus keluarga,
                      proses ini sering kali menjadi beban yang harus diulang setiap pekan.
                      Akibatnya, tidak sedikit khatib yang baru mulai menyusun khutbah pada Kamis
                      malam, bahkan ada yang masih menyelesaikannya beberapa jam sebelum azan Jumat
                      dikumandangkan.
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 py-1">
                      {
                        "Padahal waktu yang paling berharga seharusnya digunakan untuk muraja'ah, memperdalam pemahaman materi, memperbaiki penyampaian, dan mempersiapkan hati sebelum berdiri di atas mimbar."
                      }
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.15} className="text-center pt-8">
                  <div className="p-4 sm:p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                      Di Sinilah Zaadul Khotib 2.0 Hadir
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-8">
                      Bukan untuk menggantikan peran seorang khatib. Melainkan membantu meringankan
                      pekerjaan teknis penyusunan draf khutbah, sehingga Anda dapat lebih fokus pada
                      ilmu, dakwah, dan penyampaian. Karena AI seharusnya membantu Anda menyiapkan
                      khutbah dengan lebih tenang, bukan menambah pekerjaan baru.
                    </p>

                    {/* CTA 2 (Post-Problem) */}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnCtaClass}
                    >
                      🚀 Ya, Saya Mau Akses Zaadul Khotib 2.0
                    </a>
                  </div>
                </FadeIn>
              </div>
            </section>

            {/* --- WHY GENERAL AI FAILS --- */}
            <section className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-500 block mb-2">
                    Kelemahan AI Umum
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Mengapa AI Umum Belum Cukup untuk Membantu Menyusun Khutbah Jumat?
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Banyak orang mencoba menggunakan AI seperti ChatGPT untuk membuat khutbah.
                    Sekilas memang terlihat praktis. Namun setelah dicoba, biasanya muncul masalah
                    yang sama berulang kali.
                  </p>
                </div>
              </FadeIn>

              <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                  {[
                    {
                      title: '❌ Struktur Khutbah Masih Berantakan',
                      desc: 'AI umum sering menghasilkan satu tulisan panjang seperti artikel atau ceramah biasa. Padahal khutbah Jumat memiliki struktur tersendiri. Khutbah pertama dan khutbah kedua perlu tersusun dengan jelas agar lebih mudah ditinjau, disesuaikan, dan disampaikan di atas mimbar.',
                    },
                    {
                      title: '❌ Dalil Kurang Kaya atau Tidak Disisipkan Secara Alami',
                      desc: "Sering kali AI hanya memberikan satu atau dua dalil, kemudian sisanya diisi dengan penjelasan panjang. Ada pula yang hanya menampilkan terjemahan tanpa teks Arab, atau justru menumpuk dalil di satu bagian sehingga alur khutbah terasa kurang mengalir. Padahal dalam praktiknya, khutbah yang baik biasanya membangun pembahasan secara bertahap, dengan ayat Al-Qur'an, hadits, atsar, maupun perkataan ulama yang disisipkan pada bagian-bagian yang paling relevan.",
                    },
                    {
                      title: '❌ Muqaddimah Terasa Seperti Paragraf Pembuka Biasa',
                      desc: 'Alih-alih membuka khutbah dengan nuansa yang lazim dikenal oleh para khatib, AI umum sering memulai dengan kalimat seperti: "Jamaah Jumat yang dirahmati Allah..." Padahal banyak khatib menginginkan pembuka yang lebih sesuai dengan tradisi khutbah, baik menggunakan Khutbatul Hajah maupun muqaddimah yang disusun secara dinamis sesuai tema.',
                    },
                    {
                      title: '❌ Tema Kurang Relevan dengan Momentum',
                      desc: 'Ketika diminta membuat khutbah, AI biasanya hanya mengembangkan tema yang diberikan. AI tidak memahami bahwa khutbah Jumat sering kali perlu menyesuaikan momentum. Misalnya: memasuki Ramadan, menjelang Idul Adha, awal Muharram, musim keberangkatan haji, tahun ajaran baru, bencana yang terjadi di Indonesia, ataupun peristiwa penting yang sedang menjadi perhatian umat. Akibatnya, tema terasa generik dan kurang membumi.',
                    },
                    {
                      title: '❌ Terlalu Banyak Hal yang Masih Harus Dibereskan',
                      desc: 'Setelah hasil keluar, pekerjaan belum selesai. Anda masih harus: memperbaiki struktur, memindahkan dalil, mencari teks Arab, memeriksa referensi, menyesuaikan muqaddimah, merapikan doa, memastikan alurnya enak dibaca. Yang seharusnya menghemat waktu, justru sering menambah pekerjaan.',
                    },
                  ].map((item, index) => (
                    <FadeIn
                      key={index}
                      delay={0.05 * index}
                      className="p-4 sm:p-8 rounded-2xl bg-slate-500/5 dark:bg-white/3 border border-slate-200/50 dark:border-white/5 hover:border-red-500/20 dark:hover:border-red-500/10 transition-all duration-300 shadow-sm"
                    >
                      <h4 className="font-extrabold text-slate-900 dark:text-white mb-3 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>

            {/* --- THE MECHANISM & WORKFLOW --- */}
            <section className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500 block mb-2">
                    Alur Kerja Baru
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Bayangkan Jika Semua Proses Itu Bisa Dibantu Dalam Satu Alur Kerja
                  </h2>
                </div>
              </FadeIn>

              <div className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto space-y-6">
                <FadeIn delay={0.1}>
                  <div className="space-y-6">
                    <p>
                      Bukan sekadar menghasilkan teks. Tetapi membantu Anda sejak tahap paling awal,
                      mulai dari ide tema hingga draf khutbah yang siap ditinjau.
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">
                      Itulah alasan kami membangun Zaadul Khotib 2.0 sebagai Platform Persiapan
                      Khutbah Jumat Berbasis AI yang dirancang khusus secara sistematis.
                    </p>

                    {/* Integrated Workflow Checklist */}
                    <div className="bg-slate-500/5 dark:bg-white/3 border border-slate-200/50 dark:border-white/5 rounded-3xl p-4 sm:p-8 my-6 text-left">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm sm:text-base">
                        Satu Alur Kerja Terintegrasi yang Membantu Anda:
                      </h4>
                      <ul className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                        <li className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>
                            Memilih atau meminta rekomendasi tema yang tepat sesuai momentum.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>
                            Menyusun kerangka pembahasan khutbah pertama dan kedua secara runut.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>
                            Menempatkan dalil-dalil referensial pada bagian pembahasan yang sesuai.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>
                            Menyediakan pilihan jenis muqaddimah sesuai gaya penyampaian Anda.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>
                            Merapikan format naskah Arab beserta terjemahan secara terpisah.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>
                            Menghasilkan draf khutbah utuh yang jauh lebih siap untuk Anda tinjau.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn
                  delay={0.2}
                  className="p-4 sm:p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 my-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Bukan Sekadar AI. Inilah Mekanisme yang Membuat Zaadul Khotib 2.0 Berbeda.
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed mb-4 text-slate-600 dark:text-slate-300">
                    Sebagian besar AI bekerja dengan cara yang sederhana: Anda memberi perintah
                    &rarr; AI langsung menulis. Zaadul Khotib 2.0 tidak berhenti sampai di sana.
                    Sebelum draf khutbah disusun, sistem terlebih dahulu melewati serangkaian
                    tahapan yang dirancang khusus untuk kebutuhan khutbah Jumat.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    Mulai dari memahami tema, menyesuaikannya dengan momentum yang sedang
                    berlangsung, menyusun kerangka dua khutbah, memilih muqaddimah sesuai preferensi
                    pengguna, membantu memilih dalil yang relevan, hingga merangkai seluruh
                    pembahasan menjadi alur yang lebih alami dan mudah ditinjau.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed mt-4 font-semibold text-emerald-600 dark:text-emerald-400">
                    Dengan pendekatan inilah hasil yang diperoleh tidak lagi terasa seperti artikel
                    AI yang dipotong menjadi dua, tetapi lebih menyerupai draf khutbah yang memang
                    disusun dengan mempertimbangkan karakteristik khutbah Jumat. AI membantu
                    menyusun drafnya. Khatib tetap memegang kendali atas ilmu, ketelitian, dan
                    amanah penyampaiannya.
                  </p>
                </FadeIn>

                {/* Important alert */}
                <FadeIn
                  delay={0.25}
                  className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-500/0 dark:from-amber-500/5 dark:to-transparent border border-amber-500/20 dark:border-amber-500/10 text-sm shadow-[0_4px_25px_rgba(245,158,11,0.02)]"
                >
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-white block mb-1">
                        ⚠️ Penting untuk Diketahui
                      </span>
                      Zaadul Khotib 2.0 adalah asisten penyusun draf khutbah, bukan pengganti peran
                      seorang khatib. Meskipun sistem dirancang dengan berbagai mekanisme untuk
                      membantu menjaga struktur, memilih tema yang lebih relevan, dan membantu
                      penyusunan dalil, AI tetap dapat melakukan kesalahan. Karena itu, setiap hasil
                      yang dihasilkan harus ditinjau kembali, termasuk memverifikasi dalil,
                      memastikan kesesuaian isi, dan menyesuaikannya dengan kebutuhan jamaah sebelum
                      dibacakan di atas mimbar. Keilmuan, amanah, dan tanggung jawab khutbah
                      sepenuhnya tetap berada di tangan khatib.
                    </div>
                  </div>
                </FadeIn>
              </div>
            </section>

            {/* --- THE 6 STAGES (TIMELINE VISUAL WITH TABS) --- */}
            <section className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10">
              <FadeIn>
                <div className="text-center mb-16">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500 block mb-2">
                    Mengapa Berbeda?
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Mengapa Zaadul Khotib 2.0 Berbeda?
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Banyak produk AI menjual hasil akhir. Zaadul Khotib 2.0 justru dibangun dengan
                    cara yang berbeda. Kami percaya bahwa khutbah yang baik lahir dari proses
                    persiapan yang baik. Karena itu, sebelum menghasilkan satu naskah khutbah,
                    sistem tidak langsung menulis. Ia terlebih dahulu melewati serangkaian tahapan
                    yang dirancang khusus untuk kebutuhan khutbah Jumat. Setiap tahapan memiliki
                    tujuan yang berbeda, menyelesaikan masalah yang berbeda, dan seluruh tahapan
                    tersebut bekerja bersama agar hasil akhirnya jauh lebih terarah dibanding
                    sekadar meminta AI menulis sebuah khutbah.
                  </p>
                </div>
              </FadeIn>

              {/* Detailed 6 Stages Timeline Layout */}
              <div className="relative border-l-2 border-emerald-500/20 dark:border-emerald-500/10 pl-4 sm:pl-12 ml-2 sm:ml-8 space-y-12 max-w-3xl mx-auto">
                {/* Stage 1 */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] sm:-left-[65px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs sm:text-sm ring-4 ring-slate-100 dark:ring-slate-900 shadow-md">
                    1
                  </div>
                  <FadeIn className="p-4 sm:p-8 rounded-3xl bg-brand-card-inner border border-slate-200/50 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-sm">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl mb-4">
                      🧭 Tahap 1 — Memilih Tema yang Tepat, Bukan Sekadar Menarik
                    </h3>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        {
                          'Salah satu tantangan terbesar seorang khatib bukanlah berbicara. Tetapi menentukan... '
                        }
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {'"Jumat ini, saya harus membahas apa?"'}
                        </span>
                      </p>
                      <p>
                        Tema yang baik bukan hanya menarik. Tetapi juga harus tepat. Tepat dengan
                        waktu. Tepat dengan kondisi masyarakat. Tepat dengan kebutuhan jamaah.
                      </p>
                      <p>
                        Karena itu, Zaadul Khotib 2.0 tidak hanya menerima tema dari pengguna.
                        Sistem juga mampu membantu memberikan rekomendasi tema berdasarkan berbagai
                        konteks, sehingga materi khutbah terasa lebih relevan and dekat dengan
                        kehidupan jamaah.
                      </p>

                      {/* Interactive Tabs for Stage 1 */}
                      <div className="mt-6 border border-slate-200/30 dark:border-white/5 rounded-2xl p-4 sm:p-6 bg-slate-500/5 dark:bg-black/20">
                        <div className="flex flex-wrap gap-2 mb-4 border-b border-slate-200 dark:border-white/5 pb-3">
                          {[
                            { id: 'hijriyah', label: '📅 Kalender Hijriyah' },
                            { id: 'masehi', label: '📆 Kalender Masehi' },
                            { id: 'indonesia', label: '🇮🇩 Konteks Indonesia' },
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id as any)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                                activeTab === tab.id
                                  ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/10'
                                  : 'bg-slate-500/5 hover:bg-slate-500/10 text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>

                        {/* Active Tab Copy */}
                        <div className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {activeTab === 'hijriyah' && (
                            <p>
                              {
                                "Sistem dapat mempertimbangkan momentum seperti: Ramadan, Syawal, Dzulqa'dah, Dzulhijjah, Muharram, Rabiul Awal, Rajab, Sya'ban serta momentum Hijriyah lainnya. Misalnya... Menjelang Ramadan, sistem tidak sekadar mengusulkan tema \"Puasa\". Tetapi dapat mengarahkan ke pembahasan seperti: menyambut Ramadan, persiapan hati, taubat, keutamaan Al-Qur'an, adab berpuasa, memperbaiki hubungan antarsesama yang lebih sesuai dengan fase waktu tersebut."
                              }
                            </p>
                          )}
                          {activeTab === 'masehi' && (
                            <p>
                              Momentum masyarakat juga diperhatikan. Contohnya: awal tahun, akhir
                              tahun, tahun ajaran baru, musim liburan, musim ujian, musim haji,
                              musim hujan, ataupun momentum sosial lainnya yang relevan. Tujuannya
                              bukan mengikuti budaya semata. Tetapi membantu memilih tema yang lebih
                              dekat dengan kondisi jamaah saat itu.
                            </p>
                          )}
                          {activeTab === 'indonesia' && (
                            <p>
                              {
                                "Setiap negara memiliki tantangan dakwah yang berbeda. Karena itu, sistem juga dirancang untuk membantu mempertimbangkan konteks Indonesia. Misalnya ketika terjadi: bencana alam, kekeringan, banjir, gempa, kebakaran, fenomena sosial, meningkatnya budaya konsumtif, maraknya fitnah di media sosial, isu persatuan umat. Tema khutbah dapat diarahkan agar lebih relevan dengan kondisi tersebut, tanpa kehilangan pijakan pada Al-Qur'an dan Sunnah. Karena khutbah yang baik bukan hanya benar. Tetapi juga hadir pada waktu yang tepat."
                              }
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Stage 2 */}
                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[65px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs sm:text-sm ring-4 ring-slate-100 dark:ring-slate-900 shadow-md">
                    2
                  </div>
                  <FadeIn className="p-4 sm:p-8 rounded-3xl bg-brand-card-inner border border-slate-200/50 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-sm">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl mb-4">
                      📚 Tahap 2 — Penyaringan Dalil yang Lebih Selektif
                    </h3>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        Inilah salah satu pembeda terbesar Zaadul Khotib 2.0. AI umum biasanya hanya
                        mencari dalil yang paling mudah ditemukan. Kadang hanya satu ayat. Kadang
                        satu hadits. Kadang bahkan mengulang dalil yang sama untuk berbagai tema.
                      </p>
                      <p>
                        Padahal dalam praktiknya, satu khutbah yang baik sering kali dibangun dari
                        beberapa dalil yang saling menguatkan. Karena itu, Zaadul Khotib 2.0
                        membantu menyusun materi dengan dalil yang lebih kaya dan lebih relevan
                        terhadap tema.
                      </p>
                      <p>Sistem dapat membantu menghadirkan:</p>
                      <div className="flex flex-wrap gap-2 py-2">
                        {[
                          "Ayat Al-Qur'an",
                          'Hadits Nabi ﷺ',
                          'Atsar para sahabat',
                          'Perkataan ulama',
                          'Hikmah para salaf',
                        ].map((dalil) => (
                          <span
                            key={dalil}
                            className="px-3 py-1.5 rounded bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 dark:border-emerald-500/10 text-xs font-bold text-emerald-600 dark:text-emerald-400"
                          >
                            {dalil}
                          </span>
                        ))}
                      </div>

                      {/* Pull-quote for readability break */}
                      <div className="p-4 rounded-xl bg-emerald-500/5 border-l-4 border-emerald-500 text-xs sm:text-sm font-semibold italic text-slate-800 dark:text-slate-200 my-4 leading-relaxed">
                        {
                          '"Lebih penting lagi... Dalil tersebut tidak dikumpulkan menjadi satu daftar panjang. Melainkan disisipkan secara alami di berbagai bagian khutbah."'
                        }
                      </div>

                      <p>
                        Ketika menjelaskan satu poin... AI dapat menyisipkan ayat yang relevan. Pada
                        poin berikutnya... Hadits yang menguatkan. Kemudian atsar atau perkataan
                        ulama ketika dibutuhkan. Dengan begitu alur khutbah terasa lebih hidup,
                        lebih mengalir, dan lebih mudah diikuti oleh jamaah.
                      </p>
                    </div>
                  </FadeIn>
                </div>

                {/* Stage 3 */}
                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[65px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs sm:text-sm ring-4 ring-slate-100 dark:ring-slate-900 shadow-md">
                    3
                  </div>
                  <FadeIn className="p-4 sm:p-8 rounded-3xl bg-brand-card-inner border border-slate-200/50 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-sm">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl mb-4">
                      🏗️ Tahap 3 — Menyusun Kerangka Khutbah yang Lebih Alami
                    </h3>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        Kesalahan paling sering dari AI umum adalah memperlakukan khutbah seperti
                        artikel. Zaadul Khotib 2.0 tidak.
                      </p>
                      <p>
                        Sistem membantu menyusun dua khutbah secara terpisah dengan alur pembahasan
                        yang saling berkaitan.
                      </p>
                      <p>
                        Khutbah pertama menjadi ruang untuk membuka tema dan membangun pembahasan.
                        Khutbah kedua membantu memperkuat pesan utama, memberikan penegasan, nasihat
                        penutup, serta doa yang selaras dengan materi.
                      </p>
                      <p>
                        Di dalam kedua khutbah tersebut, dalil dapat ditempatkan pada bagian-bagian
                        yang paling sesuai sehingga pembahasan tidak terasa dipaksakan. Hasil
                        akhirnya bukan dua blok teks yang dipisahkan secara asal, tetapi dua khutbah
                        yang saling melengkapi.
                      </p>
                    </div>
                  </FadeIn>
                </div>

                {/* Stage 4 */}
                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[65px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs sm:text-sm ring-4 ring-slate-100 dark:ring-slate-900 shadow-md">
                    4
                  </div>
                  <FadeIn className="p-4 sm:p-8 rounded-3xl bg-brand-card-inner border border-slate-200/50 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-sm">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl mb-4">
                      🕌 Tahap 4 — Dua Pilihan Muqaddimah Sesuai Gaya Khatib
                    </h3>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        Setiap khatib memiliki kebiasaan yang berbeda. Karena itu, Zaadul Khotib 2.0
                        memberikan kebebasan kepada Anda untuk memilih gaya muqaddimah sebelum
                        proses penyusunan dimulai.
                      </p>
                      <div className="space-y-4 my-4 pl-4 border-l-2 border-emerald-500/40">
                        <div>
                          <h5 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Muqaddimah Dinamis
                          </h5>
                          <p className="text-xs sm:text-sm mt-1 text-slate-500 dark:text-slate-400">
                            Sistem menyusun muqaddimah yang menyesuaikan dengan tema khutbah yang
                            akan dibahas. Transisi menuju isi menjadi lebih alami, sehingga
                            pembukaan terasa hidup dan tidak monoton dari pekan ke pekan. Sangat
                            cocok bagi khatib yang ingin setiap khutbah memiliki nuansa pembuka yang
                            berbeda namun tetap terarah.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Muqaddimah Klasik — Khutbatul Hajah
                          </h5>
                          <p className="text-xs sm:text-sm mt-1 text-slate-500 dark:text-slate-400">
                            Bagi khatib yang lebih nyaman menggunakan pembuka yang telah dikenal
                            luas dalam tradisi khutbah, tersedia pilihan Khutbatul Hajah. Sistem
                            akan menggunakan format pembuka tersebut sebagai dasar muqaddimah
                            sebelum melanjutkan kepada isi khutbah.
                          </p>
                        </div>
                      </div>
                      <p>
                        Dengan adanya dua pilihan ini, Anda dapat menyesuaikan gaya khutbah sesuai
                        kebutuhan, kebiasaan, maupun karakter jamaah.
                      </p>
                    </div>
                  </FadeIn>
                </div>

                {/* Stage 5 */}
                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[65px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs sm:text-sm ring-4 ring-slate-100 dark:ring-slate-900 shadow-md">
                    5
                  </div>
                  <FadeIn className="p-4 sm:p-8 rounded-3xl bg-brand-card-inner border border-slate-200/50 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-sm">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl mb-4">
                      📝 Tahap 5 — Menyusun Naskah yang Lebih Nyaman Dibaca
                    </h3>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                      <p>Khutbah bukan hanya untuk dibaca. Tetapi untuk dilafalkan.</p>
                      <p>
                        Karena itu, sistem membantu menghasilkan naskah yang lebih nyaman dibaca
                        dari mimbar. Mulai dari pemisahan paragraf, penempatan dalil, pemisahan teks
                        Arab dan terjemahan, hingga alur pembahasan dibuat lebih mudah diikuti.
                      </p>
                      <p>
                        Tujuannya bukan sekadar menghasilkan teks yang bagus dilihat. Tetapi
                        membantu khatib menyampaikan materi dengan lebih tenang.
                      </p>
                    </div>
                  </FadeIn>
                </div>

                {/* Stage 6 */}
                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[65px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs sm:text-sm ring-4 ring-slate-100 dark:ring-slate-900 shadow-md">
                    6
                  </div>
                  <FadeIn className="p-4 sm:p-8 rounded-3xl bg-brand-card-inner border border-slate-200/50 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-sm">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl mb-4">
                      🤲 Tahap 6 — Doa Penutup yang Selaras dengan Isi Khutbah
                    </h3>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        Sering kali doa penutup pada AI umum terasa tidak berhubungan dengan isi
                        materi.
                      </p>
                      <p>
                        Zaadul Khotib 2.0 membantu menyusun doa penutup yang tetap relevan dengan
                        tema yang baru saja dibahas.
                      </p>
                      <p>
                        Misalnya setelah membahas taubat, doa diarahkan kepada permohonan ampun dan
                        keteguhan hati. Setelah membahas persatuan umat, doa diarahkan kepada
                        persaudaraan, persatuan, dan keselamatan kaum muslimin. Dengan demikian,
                        khutbah memiliki penutup yang terasa menyatu dengan keseluruhan pembahasan.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>

              {/* Workflow Alur Kerja Summary Box */}
              <FadeIn
                delay={0.35}
                className="mt-16 p-4 sm:p-8 rounded-3xl bg-slate-500/5 border border-slate-200/50 dark:border-white/5 max-w-3xl mx-auto shadow-sm"
              >
                <h4 className="font-extrabold text-slate-900 dark:text-white text-xl mb-6 text-center">
                  Dari Ide Menjadi Draf Khutbah dalam Satu Alur Kerja
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-relaxed mb-6 text-slate-600 dark:text-slate-300">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Pilih atau minta rekomendasi tema.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Sistem membantu menentukan arah pembahasan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Dalil yang relevan diseleksi dan disusun.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Muqaddimah dipilih sesuai preferensi.</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Kerangka dua khutbah dibangun.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Dalil disisipkan secara alami di seluruh pembahasan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Doa penutup disesuaikan dengan tema.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>
                        {
                          "Draf khutbah siap untuk Anda tinjau, muraja'ah, sesuaikan, dan sempurnakan sebelum disampaikan di atas mimbar."
                        }
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm font-semibold text-center text-slate-900 dark:text-white">
                  Karena tujuan Zaadul Khotib 2.0 bukan menggantikan peran khatib, tetapi membantu
                  Anda mempersiapkan khutbah dengan lebih efisien, lebih terarah, dan tetap menjaga
                  amanah ilmu.
                </p>

                {/* CTA 3 (Post-Mechanism) */}
                <div className="text-center mt-8">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnCtaClass}
                  >
                    🚀 Mulai Siapkan Khutbah Jumat Sekarang
                  </a>
                </div>
              </FadeIn>
            </section>

            {/* --- BEFORE VS AFTER --- */}
            <section className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500 block mb-2">
                    Simulasi Perbandingan
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Bayangkan Persiapan Khutbah Anda Mulai Pekan Depan
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                    Sekarang bayangkan dua kondisi berikut yang akan Anda alami secara nyata:
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Without */}
                <FadeIn
                  delay={0.1}
                  className="p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-red-500/5 to-transparent border border-red-500/20 dark:border-red-500/10 flex flex-col justify-between shadow-[0_4px_25px_rgba(239,68,68,0.01)]"
                >
                  <div>
                    <h3 className="text-lg font-bold text-red-500 mb-6 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      Tanpa Zaadul Khotib 2.0
                    </h3>
                    <div className="text-sm text-slate-600 dark:text-slate-300 space-y-4">
                      <p className="font-bold text-slate-900 dark:text-white">Hari Kamis malam.</p>

                      {/* Red checklist of fatigue */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>Anda baru mulai kalut mencari tema acak.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>Membuka belasan tab web mencari ayat & hadits.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>Mencocokkan teks Arab & terjemahan secara manual.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>Mengedit dan memotong naskah AI generik panjang lebar.</span>
                        </li>
                      </ul>

                      <p className="font-semibold text-slate-900 dark:text-white border-t border-slate-200/20 pt-3 mt-3">
                        Selesai... Tetapi waktu sudah habis.
                      </p>
                      <p className="text-slate-500">
                        {
                          "Anda belum sempat muraja'ah. Belum sempat berlatih. Belum sempat benar-benar menghayati materi yang akan disampaikan kepada jamaah."
                        }
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* With */}
                <FadeIn
                  delay={0.2}
                  className="p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-emerald-500/5 to-transparent border border-emerald-500/30 dark:border-emerald-500/20 flex flex-col justify-between shadow-[0_4px_30px_rgba(16,185,129,0.03)]"
                >
                  <div>
                    <h3 className="text-lg font-bold text-emerald-500 mb-6 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Dengan Zaadul Khotib 2.0
                    </h3>
                    <div className="text-sm text-slate-600 dark:text-slate-300 space-y-4">
                      <p>
                        Anda membuka sistem, memilih tema, menentukan pilihan muqaddimah, lalu
                        menekan tombol generate.
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white">
                        Dalam waktu singkat Anda sudah memperoleh sebuah{' '}
                        <strong>draf khutbah yang lebih tertata</strong>.
                      </p>
                      <p className="border-t border-slate-200/20 pt-3 mt-3 text-slate-700 dark:text-slate-400 font-semibold">
                        Anda memiliki lebih banyak waktu untuk:
                      </p>
                      <ul className="space-y-2.5 pl-2">
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Membaca ulang seluruh isi naskah draf.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Memeriksa, meriset, dan memverifikasi setiap dalil.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Menambahkan kisah hikmah dan pengalaman pribadi.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Menyesuaikan gaya bahasa dengan karakter jamaah.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Melatih intonasi dan cara penyampaian di mimbar.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Memperbanyak doa menata niat sebelum naik mimbar.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Quotation block */}
              <FadeIn delay={0.3} className="text-center mt-12 max-w-2xl mx-auto">
                <p className="text-lg font-black text-slate-800 dark:text-slate-100 italic leading-relaxed">
                  {
                    '"Yang membekas di hati jamaah bukan siapa yang menulis naskahnya. Tetapi siapa yang menyampaikannya dengan ilmu, keikhlasan, dan ketulusan."'
                  }
                </p>
              </FadeIn>

              {/* CTA 4 (Post-Simulation) */}
              <FadeIn delay={0.35} className="text-center mt-10">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className={btnCtaClass}>
                  🚀 Dapatkan Draf Khutbah Terstruktur Sekarang
                </a>
              </FadeIn>
            </section>

            {/* --- PHILOSOPHY: AI IS A TOOL (GROUPED BULLETS) --- */}
            <section className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10 max-w-3xl mx-auto">
              <FadeIn>
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Mengapa Banyak Khatib Memilih Tetap Meninjau Hasil AI?
                  </h2>
                </div>
              </FadeIn>

              <div className="text-sm sm:text-base text-slate-600 dark:text-slate-200 leading-relaxed text-center space-y-6">
                <FadeIn delay={0.1}>
                  <div className="space-y-6">
                    <p>Karena mereka memahami satu hal penting:</p>

                    {/* Bold Callout Block */}
                    <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 text-center my-6">
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-base sm:text-lg block">
                        AI adalah alat. Bukan guru. Bukan mufti. Bukan pengganti seorang penuntut
                        ilmu.
                      </span>
                    </div>

                    <p>
                      Dan memang seperti itulah Zaadul Khotib 2.0 dirancang. Sistem ini membantu
                      mempercepat pekerjaan yang berulang setiap pekan. Namun keputusan akhir tetap
                      berada di tangan Anda.
                    </p>

                    {/* Khatib Control Checklist */}
                    <div className="text-left bg-slate-500/5 dark:bg-white/3 border border-slate-200/50 dark:border-white/5 rounded-3xl p-4 sm:p-8 my-6">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm sm:text-base">
                        Anda tetap memegang kendali penuh untuk menentukan:
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>Mana dalil yang ingin Anda gunakan atau abaikan.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>Bagian materi mana yang ingin Anda tambahkan secara personal.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>Contoh kontekstual apa yang ingin Anda sampaikan ke jamaah.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>
                            Gaya bahasa apa yang paling sesuai dengan audiens mimbar Anda.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>Bagaimana materi khutbah tersebut akan dilafalkan/dibawakan.</span>
                        </li>
                      </ul>
                    </div>

                    <p className="font-bold text-emerald-600 dark:text-emerald-400 text-lg mt-6">
                      Dengan kata lain... AI membantu menyiapkan naskah. Khatib tetap memegang
                      amanah mimbar.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </section>

            {/* --- WHAT YOU GET & OFFER --- */}
            <section
              id="harga"
              className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10 scroll-mt-24"
            >
              <FadeIn>
                <div className="text-center mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500 block mb-2">
                    Akses & Penawaran
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Apa yang Akan Anda Dapatkan?
                  </h2>
                </div>
              </FadeIn>

              {/* Main Pricing Box */}
              <FadeIn
                delay={0.1}
                className="max-w-2xl mx-auto rounded-[2rem] bg-brand-card-inner border-2 border-emerald-500/20 p-4 sm:p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500 text-white font-bold text-[10px] uppercase tracking-widest rounded-bl-xl">
                  Best Value
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                  ✅ Akses Zaadul Khotib 2.0 Seumur Hidup
                </h3>

                <ul className="space-y-4 mb-8 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  {[
                    'Platform Persiapan Khutbah Jumat Berbasis AI',
                    'Penyusunan struktur dua khutbah',
                    'Pilihan Muqaddimah Dinamis',
                    'Pilihan Muqaddimah Klasik (Khutbatul Hajah)',
                    'Rekomendasi tema berdasarkan momentum Hijriyah',
                    'Rekomendasi tema berdasarkan momentum Masehi',
                    'Penyesuaian tema terhadap konteks Indonesia',
                    'Penyusunan dalil yang lebih kaya dan relevan',
                    'Penyisipan dalil secara alami di seluruh pembahasan',
                    'Pemisahan teks Arab dan terjemahan yang lebih rapi',
                    'Penyusunan doa penutup yang selaras dengan tema',
                    'Update pengembangan sistem tanpa biaya tambahan*',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Bonuses */}
                <div className="border-t border-slate-200/50 dark:border-white/5 pt-6 mb-8">
                  <h4 className="font-extrabold text-amber-500 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    🎁 Bonus Eksklusif
                  </h4>
                  <div className="space-y-4">
                    <div className="p-5 rounded-xl bg-slate-500/5 dark:bg-white/3 border border-slate-200/30 dark:border-white/5">
                      <span className="font-bold text-slate-900 dark:text-white text-sm block mb-1">
                        Bonus 1: Bank 200 Tema Khutbah
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                        Tidak perlu lagi bingung setiap Kamis malam. Ratusan tema disusun secara
                        sistematis berdasarkan:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Aqidah',
                          'Ibadah',
                          'Akhlak',
                          'Muamalah',
                          'Keluarga',
                          'Dakwah',
                          'Pendidikan',
                          'Hari Besar Islam',
                          'Momentum Hijriyah',
                          'Momentum Masehi',
                          'Isu Sosial',
                        ].map((cat) => (
                          <span
                            key={cat}
                            className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                        Sehingga Anda selalu memiliki inspirasi ketika membutuhkan.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-500/5 dark:bg-white/3 border border-slate-200/30 dark:border-white/5">
                      <span className="font-bold text-slate-900 dark:text-white text-sm block mb-1">
                        Bonus 2: Referensi Naskah Khutbah Bahasa Arab
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        Kumpulan referensi khutbah berbahasa Arab sebagai bahan pembelajaran,
                        perbandingan struktur, dan inspirasi penyusunan materi. Bukan untuk disalin
                        mentah-mentah, melainkan sebagai tambahan referensi dalam proses belajar dan
                        penyusunan khutbah.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Total Value stacking list */}
                <div className="border-t border-slate-200/50 dark:border-white/5 pt-6 mb-8 text-sm text-slate-700 dark:text-slate-300">
                  <h5 className="font-bold text-slate-900 dark:text-white mb-4">
                    Total Nilai yang Anda Dapatkan:
                  </h5>
                  <div className="bg-slate-500/5 dark:bg-black/20 rounded-2xl p-4 border border-slate-200/30 dark:border-white/5 space-y-2">
                    <div className="flex justify-between font-semibold">
                      <span>• Platform Zaadul Khotib 2.0</span>
                      <span className="text-emerald-500">Terdaftar</span>
                    </div>
                    <div className="w-full border-t border-dashed border-slate-200/20 my-1"></div>
                    <div className="flex justify-between font-semibold">
                      <span>• Seluruh pembaruan sistem</span>
                      <span className="text-emerald-500">Gratis</span>
                    </div>
                    <div className="w-full border-t border-dashed border-slate-200/20 my-1"></div>
                    <div className="flex justify-between font-semibold">
                      <span>• Bonus Bank Tema</span>
                      <span className="text-emerald-500">Disertakan</span>
                    </div>
                    <div className="w-full border-t border-dashed border-slate-200/20 my-1"></div>
                    <div className="flex justify-between font-semibold">
                      <span>• Referensi Khutbah Arab</span>
                      <span className="text-emerald-500">Disertakan</span>
                    </div>
                  </div>
                  <div className="text-right font-black text-slate-900 dark:text-white text-base mt-4">
                    Total Value Rp549.000
                  </div>
                </div>

                {/* Price Display */}
                <div className="text-center bg-slate-500/5 dark:bg-[#0B0F19]/50 rounded-2xl p-6 mb-8 border border-slate-200/30 dark:border-white/5">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 line-through block mb-1">
                    Harga Normal Rp299.000
                  </div>
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest block mb-2">
                    Hari Ini Anda Cukup Berinvestasi
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white block">
                    Rp 199.000
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold block mt-3 space-y-1">
                    <div>Sekali Bayar.</div>
                    <div>Akses Seumur Hidup.</div>
                    <div>Tanpa Biaya Langganan Bulanan.</div>
                  </div>
                </div>

                {/* Buy Button - CTA 5 (Final checkout) */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl text-base font-bold text-emerald-50 btn-primary inline-flex items-center justify-center shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-emerald-500/30 duration-300"
                >
                  🚀 Amankan Akses Zaadul Khotib 2.0
                </a>
              </FadeIn>

              {/* Disclaimer */}
              <FadeIn
                delay={0.2}
                className="mt-8 max-w-2xl mx-auto text-[11px] text-slate-500 text-center leading-relaxed"
              >
                *Selama layanan dan pengembangan produk masih berlangsung. Penggunaan AI adalah alat
                bantu. Tanggung jawab dan amanah keilmuan isi khutbah sepenuhnya berada di tangan
                khatib.
              </FadeIn>
            </section>

            {/* --- IMPORTANT READ BEFORE USING --- */}
            <section className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10 max-w-3xl mx-auto">
              <FadeIn>
                <div className="p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-amber-500/0 dark:from-amber-500/5 dark:to-transparent border border-amber-500/20 dark:border-amber-500/10 text-sm shadow-[0_4px_25px_rgba(245,158,11,0.02)]">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-2 text-base">
                        ⚠️ Penting Dibaca Sebelum Menggunakan
                      </span>
                      <div className="space-y-3 leading-relaxed text-slate-700 dark:text-slate-200">
                        <p>
                          Zaadul Khotib 2.0 adalah{' '}
                          <strong>alat bantu penyusunan draf khutbah</strong>. Bukan pengganti
                          seorang khatib. Bukan pemberi fatwa. Bukan pengganti proses belajar.
                        </p>
                        <p>
                          Walaupun sistem dirancang dengan berbagai mekanisme untuk membantu
                          menyusun tema, memilih dalil yang lebih relevan, dan menjaga struktur
                          khutbah,{' '}
                          <strong>AI tetap memiliki kemungkinan menghasilkan kekeliruan</strong>.
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {
                            "Karena itu kami sangat menganjurkan agar setiap hasil: diperiksa kembali, dimuraja'ah, diverifikasi dalilnya, disesuaikan dengan kebutuhan jamaah, serta dipastikan kembali sebelum dibacakan di atas mimbar."
                          }
                        </p>
                        <p className="font-bold text-emerald-600 dark:text-emerald-400">
                          Kami meyakini bahwa amanah ilmu tetap berada di tangan khatib, bukan pada
                          teknologi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="mb-8 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500 block mb-2">
                    Pertanyaan Umum
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Pertanyaan yang Sering Ditanyakan
                  </h2>
                </div>
              </FadeIn>

              <div className="max-w-2xl mx-auto space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <FadeIn key={index} delay={0.05 * index}>
                      <div className="rounded-xl border border-slate-200/50 dark:border-white/5 bg-slate-500/5 overflow-hidden transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-4 py-3 sm:px-6 sm:py-4 text-left flex justify-between items-center font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors focus:outline-none"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 py-3 sm:px-6 sm:pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/30 dark:border-white/5 pt-3 bg-slate-500/10">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  )
                })}
              </div>
            </section>

            {/* Bottom brand footer block */}
            <section className="mt-20 pt-12 border-t border-slate-200/30 dark:border-white/5 text-center relative z-10">
              <FadeIn>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  IMAN LOGICS
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                  {'"Teknologi yang membantu manusia berkarya, tanpa menggantikan amanahnya."'}
                </div>
              </FadeIn>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
