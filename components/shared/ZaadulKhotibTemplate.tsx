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
} from 'lucide-react'

interface ZaadulKhotibTemplateProps {
  backUrl: string
  backLabel: string
}

export function ZaadulKhotibTemplate({ backUrl, backLabel }: ZaadulKhotibTemplateProps) {
  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: 'Apakah saya masih perlu mengecek hasil AI?',
      a: 'Ya. Justru itulah yang sangat kami anjurkan. Zaadul Khotib 2.0 membantu mempercepat proses penyusunan draf, tetapi pemeriksaan akhir, verifikasi dalil, dan kesesuaian isi tetap menjadi tanggung jawab dan amanah keilmuan pengguna.',
    },
    {
      q: 'Saya sudah memakai ChatGPT. Mengapa saya masih membutuhkan Zaadul Khotib 2.0?',
      a: "ChatGPT adalah AI serbaguna (generalist). Zaadul Khotib 2.0 dirancang dan dilatih khusus untuk memahami struktur khutbah Jumat (khutbah pertama/kedua, muqaddimah syar'iyyah, doa penutup terarah) serta mempertimbangkan momentum lokal (Hijriyah, Masehi, Indonesia) sehingga hasilnya jauh lebih terstruktur dan referensial.",
    },
    {
      q: 'Apakah hasilnya pasti benar?',
      a: 'Tidak ada sistem AI yang dapat menjamin hasilnya selalu 100% benar. Itulah mengapa setiap hasil yang dihasilkan tetap harus ditinjau kembali, diedit, dan diselaraskan oleh khatib sebelum dibacakan di atas mimbar.',
    },
    {
      q: 'Apakah semua dalil dijamin shahih?',
      a: 'Sistem dirancang untuk memprioritaskan dalil yang kuat (maqbul) dan dikenal luas dalam khazanah Islam. Namun, pengguna tetap berkewajiban melakukan verifikasi mandiri terhadap status riwayat dalil tersebut.',
    },
    {
      q: 'Apakah saya boleh mengubah hasilnya?',
      a: 'Tentu. Bahkan kami sangat menganjurkannya. Anda dapat menambahkan pengalaman pribadi, mengubah gaya bahasa agar sesuai dengan karakter jamaah setempat, serta mempersingkat atau memperpanjang materi.',
    },
    {
      q: 'Apakah saya harus bisa membuat prompt?',
      a: 'Tidak. Anda cukup memilih tema, memilih gaya muqaddimah, dan mengikuti alur kerja terarah yang telah disediakan oleh sistem. Seluruh proses teknis pembuatan perintah (prompts) ditangani oleh sistem di belakang layar.',
    },
    {
      q: 'Apakah ada batas penggunaan?',
      a: 'Selama layanan tersedia sesuai ketentuan yang berlaku, Anda dapat menggunakannya tanpa batasan untuk menyusun berbagai draf khutbah sesuai kebutuhan dakwah Anda.',
    },
  ]

  return (
    <>
      {/* Background radial highlights */}
      <div className="fixed w-[800px] h-[800px] bg-emerald-500/10 dark:bg-emerald-950/20 top-[-300px] left-1/2 -translate-x-1/2 rounded-full blur-[120px] z-[-1] pointer-events-none"></div>
      <div className="fixed w-[500px] h-[500px] bg-amber-500/5 dark:bg-amber-950/10 bottom-[10%] right-[-100px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      <SiteHeader />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 min-h-screen relative z-10">
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
          <div className="glass-card rounded-[2.5rem] p-6 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
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
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
                  Platform Persiapan Khutbah Jumat Berbasis AI yang Membantu Anda Menyusun Draf
                  Khutbah Secara Lebih Terstruktur, Lebih Relevan, dan Lebih Siap Ditinjau Sebelum
                  Dibacakan di Mimbar.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#harga"
                    className="px-8 py-4 text-base font-bold rounded-2xl text-emerald-50 btn-primary inline-flex items-center justify-center shadow-lg shadow-emerald-500/25 transition-transform hover:-translate-y-0.5"
                  >
                    🚀 Mulai Gunakan Zaadul Khotib 2.0
                  </a>
                  <a
                    href="#masalah"
                    className="px-8 py-4 text-base font-bold rounded-2xl btn-glass inline-flex items-center justify-center transition-transform hover:-translate-y-0.5"
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
                    Gelisah & Tantangan Khatib
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Menjelang Hari Jumat, Banyak Khatib Menghadapi Tantangan yang Sama
                  </h2>
                </div>
              </FadeIn>

              <div className="space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-350 leading-relaxed max-w-3xl mx-auto">
                <FadeIn delay={0.1}>
                  <div className="font-medium text-slate-800 dark:text-slate-200 text-center text-xl italic py-4 bg-slate-500/5 rounded-2xl border border-slate-200/30 dark:border-white/5 px-6">
                    {
                      '"Bukan karena kekurangan ilmu, bukan pula tidak mampu menyampaikan nasihat. Namun karena proses mempersiapkan khutbah berkualitas memang menyita banyak waktu."'
                    }
                  </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                  <p className="mt-6">
                    Mempersiapkan materi khutbah membutuhkan perhatian ekstra pada detail teknis:
                    menentukan tema yang tepat, menyaring dalil referensial, merapikan struktur dua
                    khutbah, menerjemahkan teks Arab secara presisi, hingga menyusun doa penutup.
                  </p>
                </FadeIn>

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                  {[
                    'Menentukan tema yang tepat untuk jamaah',
                    'Mencari dalil yang shahih & relevan',
                    'Memastikan struktur khutbah tetap tertata',
                    'Merapikan teks Arab beserta terjemahannya',
                  ].map((point, index) => (
                    <FadeIn
                      key={index}
                      delay={0.1 * index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/10"
                    >
                      <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        !
                      </div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-300">
                        {point}
                      </span>
                    </FadeIn>
                  ))}
                </div>

                <FadeIn delay={0.2}>
                  <p>
                    Di tengah kesibukan mengajar, bekerja, berdakwah, atau mengurus keluarga, proses
                    ini sering kali menjadi beban berulang setiap pekan. Akibatnya, naskah sering
                    kali baru selesai disusun pada Kamis malam—bahkan hanya beberapa jam sebelum
                    azan Jumat berkumandang.
                  </p>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <p className="font-semibold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 my-6">
                    {
                      "Padahal waktu berharga itu seharusnya digunakan untuk muraja'ah, memperdalam pemahaman materi, melatih penyampaian, dan menata ketulusan hati sebelum menaiki mimbar."
                    }
                  </p>
                </FadeIn>

                <FadeIn delay={0.3} className="text-center pt-8">
                  <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                      Di Sinilah Zaadul Khotib 2.0 Hadir
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      Kami hadir **bukan untuk menggantikan peran khatib**, melainkan meringankan
                      pekerjaan teknis penyusunan draf khutbah. Dengan begitu, Anda memiliki waktu
                      penuh untuk fokus pada pendalaman ilmu dan penyampaian yang ikhlas.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </section>

            {/* --- WHY GENERAL AI FAILS --- */}
            <section className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-500 block mb-2">
                    Perbandingan Alat
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Mengapa AI Umum (seperti ChatGPT) Belum Cukup untuk Menyusun Khutbah Jumat?
                  </h2>
                </div>
              </FadeIn>

              <div className="space-y-6 max-w-3xl mx-auto">
                <FadeIn delay={0.1}>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center font-medium">
                    Banyak orang menggunakan ChatGPT untuk menulis naskah khutbah. Hasilnya sekilas
                    praktis, namun khatib biasanya menemui masalah-masalah struktural berikut:
                  </p>
                </FadeIn>

                <div className="space-y-4 mt-8">
                  {[
                    {
                      title: 'Struktur Khutbah Masih Berantakan',
                      desc: 'AI umum menghasilkan satu tulisan panjang layaknya artikel blog atau ceramah biasa. Padahal khutbah Jumat wajib terbagi atas khutbah pertama dan kedua dengan kaidah rukun khutbah yang jelas.',
                    },
                    {
                      title: 'Dalil Kurang Kaya atau Tidak Alami',
                      desc: "Sering kali hanya disisipkan satu dalil, terjemahan tanpa teks Arab asli, atau dalil menumpuk di satu bagian. Khutbah yang baik membutuhkan dalil terintegrasi (Al-Qur'an, hadits, atsar sahabat, hikmah salaf) secara bertahap.",
                    },
                    {
                      title: 'Muqaddimah Terasa Seperti Paragraf Pembuka Biasa',
                      desc: 'Alih-alih menggunakan Khutbatul Hajah syar\'iyyah atau pembuka berkarakter, AI umum sering memulainya dengan sapaan kaku seperti "Jamaah Jumat yang dirahmati Allah...".',
                    },
                    {
                      title: 'Tema Kurang Relevan dengan Momentum',
                      desc: 'AI umum tidak memahami konteks waktu, seperti kalender Hijriyah (Ramadan, Dzulhijjah), kalender Masehi (tahun ajaran baru), atau fenomena bencana alam aktual di Indonesia.',
                    },
                    {
                      title: 'Terlalu Banyak Hal yang Masih Harus Dibereskan',
                      desc: 'Hasil akhirnya memerlukan banyak penyuntingan manual: mencari teks Arab, memformat doa, menyesuaikan struktur rukun, dsb. Pada akhirnya, tidak menghemat waktu.',
                    },
                  ].map((item, index) => (
                    <FadeIn
                      key={index}
                      delay={0.1 * index}
                      className="p-6 rounded-2xl bg-slate-500/5 dark:bg-white/3 border border-slate-200/50 dark:border-white/5 hover:border-red-500/20 transition-all"
                    >
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 font-bold mt-1">
                          <X className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base sm:text-lg">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>

            {/* --- MEKANISME ZAADUL KHOTIB 2.0 --- */}
            <section className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10">
              <FadeIn>
                <div className="text-center mb-16">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500 block mb-2">
                    Di Balik Layar
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Mekanisme Sistem Zaadul Khotib 2.0
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                    Berbeda dengan cara kerja AI biasa yang langsung menulis dari satu perintah,
                    Zaadul Khotib 2.0 bekerja melalui 6 tahapan terstruktur yang dirancang khusus:
                  </p>
                </div>
              </FadeIn>

              {/* 6 Stages Timeline / Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Stage 1 */}
                <FadeIn
                  delay={0.1}
                  className="p-8 rounded-3xl bg-brand-card-inner border border-emerald-500/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                        1
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        Tahap 1 — Memilih Tema yang Tepat & Relevan
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      Menentukan tema adalah tantangan tersendiri. Sistem membantu memberikan
                      rekomendasi tema berdasarkan berbagai konteks:
                    </p>
                    <ul className="space-y-3 text-xs font-semibold text-slate-700 dark:text-slate-350">
                      <li className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                        <span>**Kalender Hijriyah:** Ramadan, Syawal, Muharram, dll.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-emerald-500" />
                        <span>**Kalender Masehi:** Tahun ajaran baru, awal/akhir tahun, dll.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        <span>**Konteks Indonesia:** Fenomena sosial, bencana alam, dll.</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>

                {/* Stage 2 */}
                <FadeIn
                  delay={0.2}
                  className="p-8 rounded-3xl bg-brand-card-inner border border-emerald-500/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                        2
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        Tahap 2 — Penyaringan Dalil Selektif
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      Bukan sekadar list dalil di akhir naskah. Sistem menyaring dan menyisipkan
                      berbagai referensi secara alami di dalam naskah:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Ayat Al-Qur'an",
                        'Hadits Nabi ﷺ',
                        'Atsar Sahabat',
                        'Perkataan Ulama',
                        'Hikmah Salaf',
                      ].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded bg-slate-500/5 border border-slate-200/50 dark:border-white/5 text-[10px] font-bold text-slate-600 dark:text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* Stage 3 */}
                <FadeIn
                  delay={0.3}
                  className="p-8 rounded-3xl bg-brand-card-inner border border-emerald-500/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                        3
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        Tahap 3 — Kerangka Khutbah Alami
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Menyusun struktur khutbah pertama (pengantar & pembahasan) dan khutbah kedua
                      (kesimpulan, nasihat ringkas, doa) secara terpisah namun mengalir lancar,
                      memenuhi rukun-rukun khutbah yang sah.
                    </p>
                  </div>
                </FadeIn>

                {/* Stage 4 */}
                <FadeIn
                  delay={0.4}
                  className="p-8 rounded-3xl bg-brand-card-inner border border-emerald-500/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                        4
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        Tahap 4 — Dua Pilihan Muqaddimah
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      Menyesuaikan kebiasaan dan gaya khatib dengan 2 opsi muqaddimah pembuka:
                    </p>
                    <div className="space-y-2 text-slate-700 dark:text-slate-300">
                      <div className="text-xs">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          ✨ Muqaddimah Dinamis:
                        </span>{' '}
                        Menyesuaikan tema pembahasan khutbah agar transisi ke materi terasa alami.
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          🕌 Muqaddimah Klasik:
                        </span>{' '}
                        {
                          "Menggunakan teks *Khutbatul Hajah* syar'iyyah yang kokoh dan penuh berkah."
                        }
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Stage 5 */}
                <FadeIn
                  delay={0.5}
                  className="p-8 rounded-3xl bg-brand-card-inner border border-emerald-500/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                        5
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        Tahap 5 — Naskah Nyaman Dilafalkan
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Bukan sekadar tulisan, tapi didesain untuk dibacakan di atas mimbar.
                      Memisahkan teks Arab dan terjemahan dengan rapi, serta menggunakan pembagian
                      paragraf yang pas untuk intonasi berkhotbah.
                    </p>
                  </div>
                </FadeIn>

                {/* Stage 6 */}
                <FadeIn
                  delay={0.6}
                  className="p-8 rounded-3xl bg-brand-card-inner border border-emerald-500/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                        6
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        Tahap 6 — Doa Penutup Selaras
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Menghindari doa yang melenceng. Doa penutup dirangkai secara relevan dengan
                      isi dan tema utama khutbah yang baru saja disampaikan kepada jamaah agar
                      terasa menyatu penuh.
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Warning Alert */}
              <FadeIn
                delay={0.7}
                className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-slate-700 dark:text-slate-350 text-sm"
              >
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      ⚠️ Penting untuk Diketahui
                    </span>
                    Zaadul Khotib 2.0 adalah asisten penyusun draf khutbah, bukan pengganti khatib.
                    AI tetap memiliki kemungkinan melakukan kesalahan. Setiap naskah wajib ditinjau
                    kembali, diverifikasi dalilnya, dan diselaraskan sebelum dibacakan di atas
                    mimbar.
                  </div>
                </div>
              </FadeIn>
            </section>

            {/* --- BEFORE VS AFTER --- */}
            <section className="mb-20 pt-16 border-t border-slate-200/50 dark:border-white/5 relative z-10">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500 block mb-2">
                    Simulasi Waktu
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Bayangkan Persiapan Khutbah Anda Mulai Pekan Depan
                  </h2>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Without */}
                <FadeIn
                  delay={0.1}
                  className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-red-500 mb-6 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      Tanpa Zaadul Khotib 2.0
                    </h3>
                    <p className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-wider">
                      Kamis Malam Panik
                    </p>
                    <ul className="space-y-3 text-sm text-slate-650 dark:text-slate-400">
                      <li>• Mencari tema acak di internet.</li>
                      <li>• Buka banyak tab web untuk cari ayat & hadits.</li>
                      <li>• Mencocokkan naskah Arab & terjemahan secara manual.</li>
                      <li>• Mengedit teks AI umum yang terasa seperti artikel.</li>
                      <li>
                        • **Hasilnya:** Waktu habis untuk mengetik. Anda tidak sempat {"muraja'ah"},
                        melatih penyampaian, dan menata hati sebelum naik mimbar.
                      </li>
                    </ul>
                  </div>
                </FadeIn>

                {/* With */}
                <FadeIn
                  delay={0.2}
                  className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/25 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                >
                  <div>
                    <h3 className="text-lg font-bold text-emerald-500 mb-6 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Dengan Zaadul Khotib 2.0
                    </h3>
                    <p className="text-xs font-bold text-emerald-500 uppercase mb-4 tracking-wider">
                      Persiapan Tenang
                    </p>
                    <ul className="space-y-3 text-sm text-slate-650 dark:text-slate-350">
                      <li>✓ Pilih tema atau gunakan rekomendasi momentum otomatis.</li>
                      <li>✓ Pilih jenis muqaddimah sesuai karakter Anda.</li>
                      <li>✓ Klik generate dan peroleh draf naskah yang terstruktur dalam menit.</li>
                      <li>
                        ✓ **Hasilnya:** Pekerjaan mengetik selesai instan. Anda punya banyak waktu
                        untuk {"muraja'ah"}, verifikasi referensi, dan menambahkan hikmah personal.
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.3} className="text-center mt-12">
                <div className="text-base font-bold text-slate-700 dark:text-slate-300 italic">
                  {
                    '"Yang membekas di hati jamaah bukan siapa yang mengetik naskahnya, melainkan siapa yang menyampaikannya dengan ilmu, keikhlasan, dan ketulusan."'
                  }
                </div>
              </FadeIn>
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
                    Investasi Dakwah Terbaik Anda
                  </h2>
                </div>
              </FadeIn>

              {/* Main Pricing Box */}
              <FadeIn
                delay={0.1}
                className="max-w-2xl mx-auto rounded-[2rem] bg-brand-card-inner border-2 border-emerald-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 px-4 py-1 bg-emerald-500 text-white font-bold text-[10px] uppercase tracking-widest rounded-bl-xl">
                  Best Value
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                  Akses Zaadul Khotib 2.0 Seumur Hidup
                </h3>

                <ul className="space-y-4 mb-8 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  {[
                    'Platform Persiapan Khutbah Jumat Berbasis AI',
                    'Penyusunan struktur khutbah pertama & kedua',
                    'Pilihan Muqaddimah Dinamis / Klasik (Khutbatul Hajah)',
                    'Rekomendasi tema (Hijriyah, Masehi, & Konteks Indonesia)',
                    'Penyaringan & penyisipan dalil secara alami di naskah',
                    'Pemisahan teks Arab dan terjemahan yang rapi',
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
                  <h4 className="font-extrabold text-amber-500 text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Bonus Eksklusif Hari Ini
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-500/5 dark:bg-white/3 border border-slate-200/30 dark:border-white/5">
                      <span className="font-bold text-slate-900 dark:text-white text-xs block mb-1">
                        🎁 BONUS 1: Bank 200 Tema Khutbah
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Ratusan inspirasi tema khutbah siap pakai yang disusun berdasarkan Aqidah,
                        Ibadah, Akhlak, Muamalah, hingga Isu Sosial.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-500/5 dark:bg-white/3 border border-slate-200/30 dark:border-white/5">
                      <span className="font-bold text-slate-900 dark:text-white text-xs block mb-1">
                        🎁 BONUS 2: Referensi Naskah Khutbah Bahasa Arab
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Kumpulan naskah khutbah berbahasa Arab utuh sebagai referensi pembelajaran
                        dan perbandingan struktur khutbah.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="text-center bg-slate-500/5 dark:bg-[#0B0F19]/50 rounded-2xl p-6 mb-8 border border-slate-200/30 dark:border-white/5">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 line-through block mb-1">
                    Total Value Rp549.000 (Normal Rp299.000)
                  </div>
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest block mb-2">
                    Hari Ini Cukup Berinvestasi
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white block">
                    Rp 199.000
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 block mt-2">
                    Sekali Bayar • Akses Seumur Hidup • Tanpa Langganan Bulanan
                  </div>
                </div>

                {/* Buy Button */}
                <a
                  href="https://wa.me/6285190846209?text=Saya%20tertarik%20dengan%20Zaadul%20Khotib%202.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl text-base font-bold text-emerald-50 btn-primary inline-flex items-center justify-center shadow-lg shadow-emerald-500/25 transition-transform hover:-translate-y-0.5"
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
                          className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors focus:outline-none"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/30 dark:border-white/5 pt-3 bg-slate-500/10">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
