import { ProductConfig } from "@/types";

export const zaadulKhotibConfig: ProductConfig = {
  slug: "zaadul-khotib",
  name: "Zaadul Khotib 2.0",
  badge: "Asisten AI Khutbah",
  status: "live",
  icon: "book",
  hero: {
    title: "Susun Khutbah Berkualitas dalam Hitungan Menit, Bukan Berjam-jam.",
    description:
      "Zaadul Khotib 2.0 membantu Anda menyusun draft khutbah Jum'at berbahasa Indonesia maupun Arab dengan struktur yang sistematis, referensi yang relevan, serta gaya bahasa yang mudah dipahami—sehingga Anda dapat lebih fokus mempersiapkan penyampaian, bukan memulai dari halaman kosong.",
    primaryCta: {
      text: "Akses Zaadul Khotib Sekarang",
      href: "https://imanlogics.myr.id/pl/zaadul-khotib-20",
    },
    secondaryCta: {
      text: "Lihat Cara Kerjanya ↓",
      href: "#masalah",
    },
  },
  trustBar: [
    "Bahasa Indonesia & Arab",
    "Struktur Khutbah Otomatis",
    "Siap Disesuaikan Kembali",
    "Khusus untuk Khutbah",
  ],
  problems: {
    title: "Jujur, pernah ngerasa kaya gini gak?",
    subtitle: "Refleksi Pribadi",
    items: [
      {
        id: "blank",
        title: "Nge-blank & Bingung Pilih Tema",
        description:
          "Jangankan bikin draft, ide mau bahas apa saja belum ada. Bingung nyari judul dan tema yang benar-benar pas dengan kondisi jamaah minggu ini.",
        icon: "brain-off",
      },
      {
        id: "buntu",
        title: "Ide Ada, Naskah Buntu",
        description:
          "Sudah menentukan mau bahas apa, tapi bingung merangkai kata awalnya gimana. Ujung-ujungnya mandek dan bengong di depan laptop.",
        icon: "edit-3",
      },
      {
        id: "dalil",
        title: "Waktu Habis Cari Dalil",
        description:
          "Mencari ayat dan mensinkronkan dengan hadits yang pas memakan waktu berjam-jam. Belum lagi khawatir tanpa sadar mengutip hadits dhaif.",
        icon: "search",
      },
      {
        id: "deadline",
        title: "Dikejar Deadline Jum'at",
        description:
          "Sudah hari Kamis malam, aktivitas harian menumpuk, dan naskah belum jadi. Bikin panik dan persiapan penyampaian jadi kurang maksimal.",
        icon: "clock",
      },
    ],
    highlightedItem: {
      id: "ai-biasa",
      title: "Hasil AI Biasa Terlalu Kaku & Robotik",
      description:
        "Pernah coba minta tolong ChatGPT atau AI biasa, tapi bahasanya terlalu umum, terjemahannya kaku, dan malah terdengar aneh kalau dibacakan layaknya orasi di atas mimbar.",
      icon: "bot",
    },
  },
  solution: {
    title: "Kenalkan, Zaadul Khotib 2.0",
    description: [
      "Zaadul Khotib 2.0 adalah AI Assistant yang dirancang khusus untuk membantu penyusunan khutbah Jum'at.",
      "Berbeda dengan AI umum, sistem ini telah diinstruksikan secara spesifik agar mampu menghasilkan draft khutbah yang terstruktur, relevan, dan sesuai tata cara redaksi seorang khatib.",
    ],
    quote:
      "\"Menyusun khutbah memang membutuhkan ilmu, ketelitian, dan waktu. Zaadul Khotib 2.0 tidak menggantikan peran Anda sebagai khatib, tetapi mengambil alih beban penyusunan draft mentah, sehingga Anda dapat lebih fokus pada penyempurnaan isi dan penyampaiannya.\"",
    cta: {
      text: "Ya, Bantu Saya Susun Khutbah",
      href: "https://imanlogics.myr.id/pl/zaadul-khotib-20",
    },
  },
  howItWorks: {
    title: "Hanya 3 Langkah",
    subtitle: "Persingkat waktu penulisan, maksimalkan waktu persiapan.",
    steps: [
      {
        id: "step-1",
        stepNumber: 1,
        title: "Pilih atau Ketik Tema",
        description:
          "Ketik ide Anda sendiri, atau biarkan Asisten memilihkan tema yang dijamin relevan dengan momen tanggal dan kondisi jamaah saat ini.",
      },
      {
        id: "step-2",
        stepNumber: 2,
        title: "Biarkan AI Bekerja",
        description:
          "Zaadul Khotib akan menyusun struktur khutbah beserta pencarian dalil Al-Qur'an & Hadits shahih secara otomatis untuk Anda.",
      },
      {
        id: "step-3",
        stepNumber: 3,
        title: "Tinjau & Sesuaikan",
        description:
          "Tambahkan sentuhan pribadi Anda. Edit yang kurang pas, salin teks utuhnya, dan khutbah siap digunakan.",
      },
    ],
  },
  benefits: {
    title: "Mengapa Memilih Zaadul Khotib 2.0?",
    items: [
      {
        id: "hemat-waktu",
        title: "Menghemat Waktu",
        description: "Tidak perlu lagi memulai dari halaman kosong atau memikirkan kerangka dari nol.",
        icon: "timer",
      },
      {
        id: "struktur",
        title: "Struktur Sistematis",
        description: "Susunan khutbah menjadi sangat runtut, proporsional, dan mudah diikuti jamaah.",
        icon: "layout-list",
      },
      {
        id: "bahasa",
        title: "Fleksibilitas Bahasa",
        description: "Tersedia output Bahasa Indonesia & Arab yang bisa Anda atur sesuai preferensi.",
        icon: "languages",
      },
      {
        id: "muqaddimah",
        title: "Pilihan Muqaddimah",
        description: "Bebas pilih: mau Muqaddimah dinamis sesuai tema, atau versi klasik Khutbatul Hajah.",
        icon: "book-open",
      },
    ],
    highlightedItem: {
      id: "khusus",
      title: "Dibangun Khusus untuk Dakwah",
      description: "Sistem ini tidak dirancang untuk nulis blog, tapi spesifik di-training dengan struktur redaksi mimbar dan audiens Islami.",
      icon: "mic",
    },
  },
  faq: {
    title: "Pertanyaan Seputar Sistem",
    items: [
      {
        question: "Apakah ini menggantikan peran seorang khatib?",
        answer: "Tidak. Zaadul Khotib adalah alat bantu penyusunan draft khutbah. Hasil akhirnya tetap perlu ditinjau, dibaca ulang, dan disesuaikan oleh kebijaksanaan Anda."
      },
      {
        question: "Apakah bisa digunakan dalam Bahasa Arab?",
        answer: "Ya. Sistem ini mendukung Bahasa Indonesia maupun Bahasa Arab secara penuh."
      },
      {
        question: "Apakah saya harus paham IT atau AI?",
        answer: "Tidak. Tampilannya semudah berkirim pesan di WhatsApp. Anda cukup mengetikkan tema atau klik tombol, sistem yang akan bekerja di belakang layar."
      },
      {
        question: "Berapa kali saya bisa membuat naskah?",
        answer: "Tanpa batas. Tidak ada limit jumlah penyusunan khutbah selama Anda memiliki akses ke layanan AI (gratis) yang kami tunjuk dalam panduan."
      }
    ]
  },
  pricing: {
    title: "Siapkan Khutbah dengan Lebih Efisien",
    subtitle: "Hemat waktu dalam menyusun draft khutbah tanpa mengurangi kesempatan untuk tetap menelaah dan menyempurnakan isi sesuai kebutuhan jamaah.",
    originalPrice: "Rp 299.000",
    currentPrice: "Rp 199.000",
    features: [
      "Akses penuh sistem Asisten Zaadul Khotib 2.0",
      "Bebas setel Muqaddimah (Dinamis / Khutbatul Hajah)",
      "Output Naskah Bahasa Indonesia & Arab",
      "Panduan penggunaan lengkap & Dukungan dasar",
      "Gratis update sistem & penyempurnaan selamanya",
    ],
    bonuses: [
      "Bank 200 Tema Khutbah Sepanjang Masa (Dibagi sistematis berdasar kalender Hijriyah & Masehi)",
      "3 PDF Khutbah Bahasa Arab Awqaf UAE (Naskah utuh selama 3 Tahun: 2023-2025)",
    ],
    cta: {
      text: "Ya, Saya Mau Akses & Semua Bonusnya",
      href: "https://imanlogics.myr.id/pl/zaadul-khotib-20"
    }
  }
};
