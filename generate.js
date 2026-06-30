const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

const adminDir = path.join(__dirname, 'public', 'admin');
if (!fs.existsSync(adminDir)) {
  fs.mkdirSync(adminDir, { recursive: true });
}

const globalData = {
  "bg_color": "#0B0F19",
  "footer": {
    "brand_prefix": "Iman",
    "brand_suffix": "Logics",
    "tagline": "AI • Systems • Digital Products",
    "nav": [
      { "label": "Beranda", "link": "/#beranda" },
      { "label": "Tentang Website", "link": "/#tentang" },
      { "label": "Tentang Pembuat", "link": "/about" },
      { "label": "Portofolio", "link": "/portfolio" },
      { "label": "Jelajahi Produk", "link": "/products" },
      { "label": "Roadmap", "link": "/#roadmap" }
    ],
    "socials": [
      { "label": "Email", "link": "mailto:imanlogics@gmail.com" },
      { "label": "X / Twitter", "link": "#" },
      { "label": "LinkedIn", "link": "#" },
      { "label": "GitHub", "link": "#" }
    ],
    "copyright": "© 2026 Iman Logics. All rights reserved.",
    "built_with": "Built as a Digital Garden."
  }
};

const berandaData = {
  "hero": {
    "title": "Portofolio dan Produk Digital yang Dibangun dengan",
    "highlight": "AI, Logika, dan Sistem.",
    "description": "Saya membangun berbagai proyek, eksperimen, dan produk digital yang bertujuan membantu orang belajar, bekerja, berpikir, dan berkembang dengan lebih efektif.",
    "btn_primary": "Lihat Portofolio",
    "btn_secondary": "Jelajahi Produk"
  },
  "fokus": {
    "title": "Fokus Utama Iman Logics",
    "items": [
      "Portofolio Pribadi",
      "Produk Digital",
      "Eksperimen AI",
      "Website & Sistem",
      "Tool Berbasis Pengetahuan",
      "Produktivitas & Otomasi"
    ]
  },
  "tentang": {
    "title": "Laboratorium",
    "highlight": "Sistem & Pengetahuan.",
    "paragraphs": [
      "Iman Logics adalah ruang tempat saya mendokumentasikan proyek, eksperimen, dan produk digital yang saya bangun di persimpangan antara AI, logika, sistem, dan pengetahuan.",
      "Saya tertarik pada bagaimana teknologi dapat membantu manusia belajar lebih cepat, berpikir lebih jernih, dan mengubah ide menjadi sesuatu yang bernilai.",
      "Website ini berfungsi sebagai portofolio, laboratorium eksperimen, dan etalase produk digital yang terus berkembang."
    ],
    "badge": {
      "sys": "SYS.CORE",
      "title": "Iman Logics Framework",
      "subtitle": "Idea → System → Product"
    }
  },
  "alur": {
    "title": "Alur Logika",
    "subtitle": "Pendekatan sistematis bagaimana sebuah masalah diubah menjadi produk fungsional.",
    "items": [
      {
        "step": "1",
        "title": "Ide",
        "desc": "Masalah atau kebutuhan diidentifikasi. Mengumpulkan data mentah dan tujuan yang ingin dicapai."
      },
      {
        "step": "2",
        "title": "Sistem",
        "desc": "Ide disusun menjadi struktur dan *workflow*. Menerapkan logika agar berjalan otomatis dan efisien."
      },
      {
        "step": "3",
        "title": "Produk",
        "desc": "Sistem diubah menjadi alat, website, atau produk digital yang elegan dan siap digunakan."
      }
    ]
  },
  "cta": {
    "title": "Sedang Membangun Sesuatu",
    "highlight": "yang Menarik.",
    "description": "Jelajahi proyek, eksperimen, dan produk digital yang sedang saya kembangkan.",
    "btn_primary": "Lihat Portofolio",
    "btn_secondary": "Jelajahi Produk"
  }
};

const profilData = {
  "name": "Rizqul Mujahidin",
  "description": "Mahasiswa Fiqih & Fatwa yang memiliki ketertarikan pada AI, sistem, produktivitas, pengembangan diri, dan produk digital. Melalui Iman Logics, ia mendokumentasikan berbagai eksperimen, proyek, dan produk yang dibangun di persimpangan antara teknologi, logika, dan pengetahuan.",
  "badges": [
    "AI",
    "Systems",
    "Digital Products",
    "Learning",
    "Knowledge"
  ]
};

const roadmapData = {
  "items": [
    {
      "title": "Website Etalase Produk Digital",
      "description": "Menyempurnakan platform utama untuk mendistribusikan seluruh produk digital Iman Logics.",
      "status": "inprogress"
    },
    {
      "title": "Gem YouTube Video Analyzer & Summarizer",
      "description": "Pengujian alat bantu untuk mempercepat akuisisi pengetahuan dari konten video durasi panjang.",
      "status": "prototype"
    },
    {
      "title": "Gem/GPT CV Maker & End-to-End Product Maker",
      "description": "Riset sistem logika dan arsitektur *prompt* untuk menghasilkan *output* standar industri secara otomatis.",
      "status": "research"
    },
    {
      "title": "ThinkForge, Khutbah Generator & Personality Analyzer",
      "description": "Pemetaan awal fitur. Fokus pada pengembangan *ThinkForge* sebagai *AI Cognitive Coach* (Level 1: Curiosity Training hingga Level 8: Independent Thinker).",
      "status": "concept"
    }
  ]
};

const placeholderProduct = {
  "hero": {
    "title": "Produk Inovatif Kami",
    "description": "Kami merancang produk ini untuk memecahkan masalah spesifik Anda dan memberikan hasil yang nyata.",
    "primaryCta": { "text": "Dapatkan Akses Sekarang", "href": "#" },
    "secondaryCta": { "text": "Pelajari Lebih Lanjut ↓", "href": "#masalah" }
  },
  "trustBar": [
    "Kualitas Terjamin",
    "Dukungan Penuh",
    "Akses Selamanya",
    "Desain Modern"
  ],
  "problems": {
    "title": "Apakah Anda Menghadapi Masalah Ini?",
    "subtitle": "Identifikasi Masalah",
    "items": [
      { "id": "p1", "title": "Tidak Ada Waktu", "description": "Menghabiskan terlalu banyak waktu untuk hal-hal yang seharusnya bisa diotomatisasi.", "icon": "clock" },
      { "id": "p2", "title": "Kebingungan Memulai", "description": "Ide ada, tetapi bingung bagaimana mengeksekusinya dengan langkah yang benar.", "icon": "brain-off" },
      { "id": "p3", "title": "Kualitas Kurang Maksimal", "description": "Hasil pekerjaan belum mencapai standar profesional yang diharapkan.", "icon": "edit-3" },
      { "id": "p4", "title": "Susah Menemukan Data", "description": "Kesulitan dalam meriset atau mengumpulkan informasi relevan dengan cepat.", "icon": "search" }
    ],
    "highlightedItem": { "id": "p5", "title": "Kehilangan Momentum", "description": "Banyak peluang terlewatkan karena eksekusi yang lambat dan kurangnya sistem.", "icon": "bot" }
  },
  "solution": {
    "title": "Kami Punya Solusinya",
    "description": [
      "Produk ini dirancang khusus sebagai alat bantu mutakhir untuk mengatasi hambatan tersebut.",
      "Mengintegrasikan teknologi dan pendekatan sistematis sehingga Anda dapat mencapai target dengan lebih mudah."
    ],
    "quote": "\"Investasi terbaik adalah pada alat dan sistem yang melipatgandakan nilai waktu Anda.\"",
    "cta": { "text": "Mulai Perjalanan Anda", "href": "#" }
  },
  "howItWorks": {
    "title": "Cara Kerja Sistem",
    "subtitle": "Tiga langkah mudah untuk melihat perubahan nyata.",
    "steps": [
      { "id": "s1", "stepNumber": 1, "title": "Identifikasi", "description": "Kenali apa yang menjadi fokus utama Anda saat ini." },
      { "id": "s2", "stepNumber": 2, "title": "Implementasi", "description": "Terapkan langkah-langkah yang ada di dalam produk." },
      { "id": "s3", "stepNumber": 3, "title": "Optimalisasi", "description": "Nikmati efisiensi dan terus kembangkan proses Anda." }
    ]
  },
  "benefits": {
    "title": "Keuntungan yang Akan Anda Dapatkan",
    "items": [
      { "id": "b1", "title": "Lebih Cepat", "description": "Proses yang tadinya berjam-jam kini bisa selesai dalam hitungan menit.", "icon": "timer" },
      { "id": "b2", "title": "Lebih Terstruktur", "description": "Semua tertata dengan pola yang jelas dan mudah diikuti.", "icon": "layout-list" },
      { "id": "b3", "title": "Adaptif", "description": "Bisa disesuaikan dengan berbagai skenario penggunaan.", "icon": "languages" },
      { "id": "b4", "title": "Dukungan Pengetahuan", "description": "Dilengkapi dengan panduan dan *best practices* industri.", "icon": "book-open" }
    ],
    "highlightedItem": { "id": "b5", "title": "Desain Spesifik", "description": "Dibangun bukan sebagai *tools* umum, melainkan solusi yang tajam untuk target penggunanya.", "icon": "mic" }
  },
  "faq": {
    "title": "Pertanyaan Umum",
    "items": [
      { "question": "Apakah saya memerlukan keahlian khusus?", "answer": "Tidak, produk ini dirancang ramah pengguna dan dilengkapi panduan." },
      { "question": "Bagaimana dengan pembaruan ke ke depannya?", "answer": "Anda akan mendapatkan pembaruan secara gratis." },
      { "question": "Apakah ada batasan penggunaan?", "answer": "Produk ini bebas digunakan tanpa batasan harian." },
      { "question": "Apakah saya bisa menyesuaikannya dengan kebutuhan saya?", "answer": "Sangat bisa, fleksibilitas adalah salah satu keunggulan kami." }
    ]
  },
  "pricing": {
    "title": "Transformasi Dimulai dari Sini",
    "subtitle": "Ambil langkah pertama untuk mengoptimalkan cara kerja Anda.",
    "originalPrice": "Rp 299.000",
    "currentPrice": "Rp 99.000",
    "features": [
      "Akses penuh seumur hidup",
      "Dokumentasi dan panduan langkah",
      "Gratis update sistem secara berkala",
      "Kompatibel untuk berbagai platform"
    ],
    "bonuses": [
      "Materi eksklusif tambahan",
      "Akses komunitas prioritas"
    ],
    "cta": { "text": "Amankan Akses Sekarang", "href": "#" }
  }
};

const zaadulKhotibData = {
  "slug": "zaadul-khotib",
  "name": "Zaadul Khotib 2.0",
  "badge": "Asisten AI Khutbah",
  "status": "live",
  "icon": "book",
  "hero": {
    "title": "Susun Khutbah Berkualitas dalam Hitungan Menit, Bukan Berjam-jam.",
    "description": "Zaadul Khotib 2.0 membantu Anda menyusun draft khutbah Jum'at berbahasa Indonesia maupun Arab dengan struktur yang sistematis, referensi yang relevan, serta gaya bahasa yang mudah dipahami—sehingga Anda dapat lebih fokus mempersiapkan penyampaian, bukan memulai dari halaman kosong.",
    "primaryCta": { "text": "Akses Zaadul Khotib Sekarang", "href": "https://imanlogics.myr.id/pl/zaadul-khotib-20" },
    "secondaryCta": { "text": "Lihat Cara Kerjanya ↓", "href": "#masalah" }
  },
  "trustBar": ["Bahasa Indonesia & Arab", "Struktur Khutbah Otomatis", "Siap Disesuaikan Kembali", "Khusus untuk Khutbah"],
  "problems": {
    "title": "Jujur, pernah ngerasa kaya gini gak?",
    "subtitle": "Refleksi Pribadi",
    "items": [
      { "id": "blank", "title": "Nge-blank & Bingung Pilih Tema", "description": "Jangankan bikin draft, ide mau bahas apa saja belum ada. Bingung nyari judul dan tema yang benar-benar pas dengan kondisi jamaah minggu ini.", "icon": "brain-off" },
      { "id": "buntu", "title": "Ide Ada, Naskah Buntu", "description": "Sudah menentukan mau bahas apa, tapi bingung merangkai kata awalnya gimana. Ujung-ujungnya mandek dan bengong di depan laptop.", "icon": "edit-3" },
      { "id": "dalil", "title": "Waktu Habis Cari Dalil", "description": "Mencari ayat dan mensinkronkan dengan hadits yang pas memakan waktu berjam-jam. Belum lagi khawatir tanpa sadar mengutip hadits dhaif.", "icon": "search" },
      { "id": "deadline", "title": "Dikejar Deadline Jum'at", "description": "Sudah hari Kamis malam, aktivitas harian menumpuk, dan naskah belum jadi. Bikin panik dan persiapan penyampaian jadi kurang maksimal.", "icon": "clock" }
    ],
    "highlightedItem": { "id": "ai-biasa", "title": "Hasil AI Biasa Terlalu Kaku & Robotik", "description": "Pernah coba minta tolong ChatGPT atau AI biasa, tapi bahasanya terlalu umum, terjemahannya kaku, dan malah terdengar aneh kalau dibacakan layaknya orasi di atas mimbar.", "icon": "bot" }
  },
  "solution": {
    "title": "Kenalkan, Zaadul Khotib 2.0",
    "description": [
      "Zaadul Khotib 2.0 adalah AI Assistant yang dirancang khusus untuk membantu penyusunan khutbah Jum'at.",
      "Berbeda dengan AI umum, sistem ini telah diinstruksikan secara spesifik agar mampu menghasilkan draft khutbah yang terstruktur, relevan, dan sesuai tata cara redaksi seorang khatib."
    ],
    "quote": "\"Menyusun khutbah memang membutuhkan ilmu, ketelitian, dan waktu. Zaadul Khotib 2.0 tidak menggantikan peran Anda sebagai khatib, tetapi mengambil alih beban penyusunan draft mentah, sehingga Anda dapat lebih fokus pada penyempurnaan isi dan penyampaiannya.\"",
    "cta": { "text": "Ya, Bantu Saya Susun Khutbah", "href": "https://imanlogics.myr.id/pl/zaadul-khotib-20" }
  },
  "howItWorks": {
    "title": "Hanya 3 Langkah",
    "subtitle": "Persingkat waktu penulisan, maksimalkan waktu persiapan.",
    "steps": [
      { "id": "step-1", "stepNumber": 1, "title": "Pilih atau Ketik Tema", "description": "Ketik ide Anda sendiri, atau biarkan Asisten memilihkan tema yang dijamin relevan dengan momen tanggal dan kondisi jamaah saat ini." },
      { "id": "step-2", "stepNumber": 2, "title": "Biarkan AI Bekerja", "description": "Zaadul Khotib akan menyusun struktur khutbah beserta pencarian dalil Al-Qur'an & Hadits shahih secara otomatis untuk Anda." },
      { "id": "step-3", "stepNumber": 3, "title": "Tinjau & Sesuaikan", "description": "Tambahkan sentuhan pribadi Anda. Edit yang kurang pas, salin teks utuhnya, dan khutbah siap digunakan." }
    ]
  },
  "benefits": {
    "title": "Mengapa Memilih Zaadul Khotib 2.0?",
    "items": [
      { "id": "hemat-waktu", "title": "Menghemat Waktu", "description": "Tidak perlu lagi memulai dari halaman kosong atau memikirkan kerangka dari nol.", "icon": "timer" },
      { "id": "struktur", "title": "Struktur Sistematis", "description": "Susunan khutbah menjadi sangat runtut, proporsional, dan mudah diikuti jamaah.", "icon": "layout-list" },
      { "id": "bahasa", "title": "Fleksibilitas Bahasa", "description": "Tersedia output Bahasa Indonesia & Arab yang bisa Anda atur sesuai preferensi.", "icon": "languages" },
      { "id": "muqaddimah", "title": "Pilihan Muqaddimah", "description": "Bebas pilih: mau Muqaddimah dinamis sesuai tema, atau versi klasik Khutbatul Hajah.", "icon": "book-open" }
    ],
    "highlightedItem": { "id": "khusus", "title": "Dibangun Khusus untuk Dakwah", "description": "Sistem ini tidak dirancang untuk nulis blog, tapi spesifik di-training dengan struktur redaksi mimbar dan audiens Islami.", "icon": "mic" }
  },
  "faq": {
    "title": "Pertanyaan Seputar Sistem",
    "items": [
      { "question": "Apakah ini menggantikan peran seorang khatib?", "answer": "Tidak. Zaadul Khotib adalah alat bantu penyusunan draft khutbah. Hasil akhirnya tetap perlu ditinjau, dibaca ulang, dan disesuaikan oleh kebijaksanaan Anda." },
      { "question": "Apakah bisa digunakan dalam Bahasa Arab?", "answer": "Ya. Sistem ini mendukung Bahasa Indonesia maupun Bahasa Arab secara penuh." },
      { "question": "Apakah saya harus paham IT atau AI?", "answer": "Tidak. Tampilannya semudah berkirim pesan di WhatsApp. Anda cukup mengetikkan tema atau klik tombol, sistem yang akan bekerja di belakang layar." },
      { "question": "Berapa kali saya bisa membuat naskah?", "answer": "Tanpa batas. Tidak ada limit jumlah penyusunan khutbah selama Anda memiliki akses ke layanan AI (gratis) yang kami tunjuk dalam panduan." }
    ]
  },
  "pricing": {
    "title": "Siapkan Khutbah dengan Lebih Efisien",
    "subtitle": "Hemat waktu dalam menyusun draft khutbah tanpa mengurangi kesempatan untuk tetap menelaah dan menyempurnakan isi sesuai kebutuhan jamaah.",
    "originalPrice": "Rp 299.000",
    "currentPrice": "Rp 199.000",
    "features": [
      "Akses penuh sistem Asisten Zaadul Khotib 2.0",
      "Bebas setel Muqaddimah (Dinamis / Khutbatul Hajah)",
      "Output Naskah Bahasa Indonesia & Arab",
      "Panduan penggunaan lengkap & Dukungan dasar",
      "Gratis update sistem & penyempurnaan selamanya"
    ],
    "bonuses": [
      "Bank 200 Tema Khutbah Sepanjang Masa (Dibagi sistematis berdasar kalender Hijriyah & Masehi)",
      "3 PDF Khutbah Bahasa Arab Awqaf UAE (Naskah utuh selama 3 Tahun: 2023-2025)"
    ],
    "cta": { "text": "Ya, Saya Mau Akses & Semua Bonusnya", "href": "https://imanlogics.myr.id/pl/zaadul-khotib-20" }
  }
};

const items = [
  { slug: "thinkforge", name: "ThinkForge", badge: "AI Coach • Cognitive Training", description: "\"Dari Rajin Menjadi Tajam\". AI Cognitive Coach yang dirancang untuk melatih cara berpikir kritis, mengenali bias, dan membangun refleksi diri.", status: "concept", icon: "lightning" },
  { slug: "ai-personality-analyzer", name: "AI Personality, Intelligence & Career Analyzer", badge: "AI • Self Development", description: "Platform analisis diri terintegrasi untuk memetakan kepribadian, kecerdasan, potensi, dan gaya belajar guna pengambilan keputusan karier.", status: "concept", icon: "shield" },
  { slug: "digital-product-maker", name: "Gem End-to-End Digital Product Maker", badge: "System / Framework", description: "Sistem komprehensif yang membantu mengubah ide mentah menjadi konsep produk digital yang siap dikembangkan.", status: "research", icon: "beaker" },
  { slug: "cv-maker", name: "Gem/GPT CV Maker, Optimizer & Analyzer", badge: "AI Tool", description: "Tool cerdas untuk membantu membuat, memperbaiki, dan menganalisis CV agar sesuai standar industri terkini.", status: "research", icon: "document" },
  { slug: "youtube-analyzer", name: "Gem YouTube Video Analyzer & Summarizer", badge: "AI Workflow", description: "Tool cerdas untuk mengekstrak insight mendalam dan ringkasan dari video berdurasi panjang.", status: "prototype", icon: "video" },
  { slug: "website-etalase", name: "Website Etalase Produk Digital", badge: "Web Platform", description: "Platform terintegrasi untuk menampilkan dan menjual berbagai produk digital yang dikembangkan di bawah ekosistem Iman Logics.", status: "inprogress", icon: "globe" }
];

const mappedItems = items.map(item => {
  return {
    ...item,
    ...placeholderProduct,
    hero: {
      ...placeholderProduct.hero,
      title: item.name,
      description: item.description
    }
  };
});

const allPortfolioItems = [zaadulKhotibData, ...mappedItems];
const allProductItems = [zaadulKhotibData, ...mappedItems];

fs.writeFileSync(path.join(dataDir, 'global.json'), JSON.stringify(globalData, null, 2));
fs.writeFileSync(path.join(dataDir, 'beranda.json'), JSON.stringify(berandaData, null, 2));
fs.writeFileSync(path.join(dataDir, 'profil.json'), JSON.stringify(profilData, null, 2));
fs.writeFileSync(path.join(dataDir, 'roadmap.json'), JSON.stringify(roadmapData, null, 2));
fs.writeFileSync(path.join(dataDir, 'portfolio.json'), JSON.stringify({ items: allPortfolioItems }, null, 2));
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify({ items: allProductItems }, null, 2));

const configYaml = `backend:
  name: git-gateway
  branch: main
publish_mode: simple
media_folder: "public/assets/uploads"
public_folder: "/assets/uploads"

collections:
  - name: "pengaturan"
    label: "⚙️ Pengaturan Website"
    files:
      - label: "Tema Global"
        name: "global"
        file: "data/global.json"
        fields:
          - {label: "Warna Background Utama", name: "bg_color", widget: "color", default: "#0B0F19"}
          - label: "Footer"
            name: "footer"
            widget: "object"
            fields:
              - {label: "Awalan Brand", name: "brand_prefix", widget: "string"}
              - {label: "Akhiran Brand", name: "brand_suffix", widget: "string"}
              - {label: "Tagline", name: "tagline", widget: "string"}
              - label: "Navigasi"
                name: "nav"
                widget: "list"
                fields:
                  - {label: "Label", name: "label", widget: "string"}
                  - {label: "Tautan", name: "link", widget: "string"}
              - label: "Sosial Media"
                name: "socials"
                widget: "list"
                fields:
                  - {label: "Label", name: "label", widget: "string"}
                  - {label: "Tautan", name: "link", widget: "string"}
              - {label: "Copyright", name: "copyright", widget: "string"}
              - {label: "Teks Built With", name: "built_with", widget: "string"}

  - name: "halaman"
    label: "📝 Teks Halaman Utama"
    files:
      - label: "Teks Beranda"
        name: "beranda"
        file: "data/beranda.json"
        fields:
          - label: "Hero Section"
            name: "hero"
            widget: "object"
            fields:
              - {label: "Judul Utama", name: "title", widget: "string"}
              - {label: "Teks Gradasi", name: "highlight", widget: "string"}
              - {label: "Deskripsi", name: "description", widget: "text"}
              - {label: "Teks Tombol 1", name: "btn_primary", widget: "string"}
              - {label: "Teks Tombol 2", name: "btn_secondary", widget: "string"}
          - label: "Fokus Utama"
            name: "fokus"
            widget: "object"
            fields:
              - {label: "Judul", name: "title", widget: "string"}
              - label: "Item Fokus"
                name: "items"
                widget: "list"
                field: {label: "Item", name: "item", widget: "string"}
          - label: "Tentang"
            name: "tentang"
            widget: "object"
            fields:
              - {label: "Judul", name: "title", widget: "string"}
              - {label: "Highlight", name: "highlight", widget: "string"}
              - label: "Paragraf"
                name: "paragraphs"
                widget: "list"
                field: {label: "Paragraf", name: "paragraph", widget: "text"}
              - label: "Badge Info"
                name: "badge"
                widget: "object"
                fields:
                  - {label: "Teks Sistem", name: "sys", widget: "string"}
                  - {label: "Judul Badge", name: "title", widget: "string"}
                  - {label: "Subjudul Badge", name: "subtitle", widget: "string"}
          - label: "Alur Logika"
            name: "alur"
            widget: "object"
            fields:
              - {label: "Judul Utama", name: "title", widget: "string"}
              - {label: "Subjudul", name: "subtitle", widget: "string"}
              - label: "Langkah-langkah"
                name: "items"
                widget: "list"
                fields:
                  - {label: "Nomor Langkah", name: "step", widget: "string"}
                  - {label: "Judul Langkah", name: "title", widget: "string"}
                  - {label: "Deskripsi Langkah", name: "desc", widget: "text"}
          - label: "CTA Penutup"
            name: "cta"
            widget: "object"
            fields:
              - {label: "Judul Utama", name: "title", widget: "string"}
              - {label: "Highlight", name: "highlight", widget: "string"}
              - {label: "Deskripsi", name: "description", widget: "text"}
              - {label: "Teks Tombol 1", name: "btn_primary", widget: "string"}
              - {label: "Teks Tombol 2", name: "btn_secondary", widget: "string"}
      - label: "Tentang Pembuat (Profil)"
        name: "profil"
        file: "data/profil.json"
        fields:
          - {label: "Nama", name: "name", widget: "string", default: "Rizqul Mujahidin"}
          - {label: "Deskripsi Profil", name: "description", widget: "text"}
          - label: "Daftar Badge (Keahlian/Minat)"
            name: "badges"
            widget: "list"
            field: {label: "Nama Badge", name: "badge", widget: "string"}

  - name: "portfolio"
    label: "📂 Portofolio & Eksperimen"
    label_singular: "Proyek"
    files:
      - label: "Data Portofolio"
        name: "portfolio_data"
        file: "data/portfolio.json"
        fields:
          - label: "Daftar Portofolio"
            name: "items"
            widget: "list"
            fields:
              - {label: "Slug (URL)", name: "slug", widget: "string"}
              - {label: "Nama/Judul", name: "name", widget: "string"}
              - {label: "Kategori/Badge", name: "badge", widget: "string"}
              - {label: "Status", name: "status", widget: "select", options: ["concept", "research", "prototype", "inprogress", "available", "live"]}
              - {label: "Icon", name: "icon", widget: "string", default: "lightning"}
              - label: "Hero"
                name: "hero"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Description", name: "description", widget: "text"}
                  - label: "Primary CTA"
                    name: "primaryCta"
                    widget: "object"
                    fields: [{label: "Text", name: "text", widget: "string"}, {label: "Href", name: "href", widget: "string"}]
                  - label: "Secondary CTA"
                    name: "secondaryCta"
                    widget: "object"
                    fields: [{label: "Text", name: "text", widget: "string"}, {label: "Href", name: "href", widget: "string"}]
              - {label: "Trust Bar Items", name: "trustBar", widget: "list", field: {name: "item", widget: "string"}}
              - label: "Problems"
                name: "problems"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Subtitle", name: "subtitle", widget: "string"}
                  - label: "Items"
                    name: "items"
                    widget: "list"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
                      - {label: "Icon", name: "icon", widget: "string"}
                  - label: "Highlighted Item"
                    name: "highlightedItem"
                    widget: "object"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
                      - {label: "Icon", name: "icon", widget: "string"}
              - label: "Solution"
                name: "solution"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Description", name: "description", widget: "list", field: {name: "paragraph", widget: "text"}}
                  - {label: "Quote", name: "quote", widget: "text"}
                  - label: "CTA"
                    name: "cta"
                    widget: "object"
                    fields: [{label: "Text", name: "text", widget: "string"}, {label: "Href", name: "href", widget: "string"}]
              - label: "How It Works"
                name: "howItWorks"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Subtitle", name: "subtitle", widget: "string"}
                  - label: "Steps"
                    name: "steps"
                    widget: "list"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Step Number", name: "stepNumber", widget: "number", value_type: "int"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
              - label: "Benefits"
                name: "benefits"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - label: "Items"
                    name: "items"
                    widget: "list"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
                      - {label: "Icon", name: "icon", widget: "string"}
                  - label: "Highlighted Item"
                    name: "highlightedItem"
                    widget: "object"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
                      - {label: "Icon", name: "icon", widget: "string"}
              - label: "Pricing"
                name: "pricing"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Subtitle", name: "subtitle", widget: "string"}
                  - {label: "Original Price", name: "originalPrice", widget: "string"}
                  - {label: "Current Price", name: "currentPrice", widget: "string"}
                  - {label: "Features", name: "features", widget: "list", field: {name: "feature", widget: "string"}}
                  - {label: "Bonuses", name: "bonuses", widget: "list", field: {name: "bonus", widget: "string"}, required: false}
                  - label: "CTA"
                    name: "cta"
                    widget: "object"
                    fields: [{label: "Text", name: "text", widget: "string"}, {label: "Href", name: "href", widget: "string"}]
              - label: "FAQ"
                name: "faq"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - label: "Items"
                    name: "items"
                    widget: "list"
                    fields:
                      - {label: "Question", name: "question", widget: "string"}
                      - {label: "Answer", name: "answer", widget: "text"}

  - name: "products"
    label: "🛒 Etalase Produk Digital"
    label_singular: "Produk"
    files:
      - label: "Data Produk"
        name: "products_data"
        file: "data/products.json"
        fields:
          - label: "Daftar Produk"
            name: "items"
            widget: "list"
            fields:
              - {label: "Slug (URL)", name: "slug", widget: "string"}
              - {label: "Nama/Judul", name: "name", widget: "string"}
              - {label: "Kategori/Badge", name: "badge", widget: "string"}
              - {label: "Deskripsi", name: "description", widget: "text"}
              - {label: "Status", name: "status", widget: "select", options: ["concept", "research", "prototype", "inprogress", "available", "live"]}
              - {label: "Icon", name: "icon", widget: "string", default: "lightning"}
              - label: "Hero"
                name: "hero"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Description", name: "description", widget: "text"}
                  - label: "Primary CTA"
                    name: "primaryCta"
                    widget: "object"
                    fields: [{label: "Text", name: "text", widget: "string"}, {label: "Href", name: "href", widget: "string"}]
                  - label: "Secondary CTA"
                    name: "secondaryCta"
                    widget: "object"
                    fields: [{label: "Text", name: "text", widget: "string"}, {label: "Href", name: "href", widget: "string"}]
              - {label: "Trust Bar Items", name: "trustBar", widget: "list", field: {name: "item", widget: "string"}}
              - label: "Problems"
                name: "problems"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Subtitle", name: "subtitle", widget: "string"}
                  - label: "Items"
                    name: "items"
                    widget: "list"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
                      - {label: "Icon", name: "icon", widget: "string"}
                  - label: "Highlighted Item"
                    name: "highlightedItem"
                    widget: "object"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
                      - {label: "Icon", name: "icon", widget: "string"}
              - label: "Solution"
                name: "solution"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Description", name: "description", widget: "list", field: {name: "paragraph", widget: "text"}}
                  - {label: "Quote", name: "quote", widget: "text"}
                  - label: "CTA"
                    name: "cta"
                    widget: "object"
                    fields: [{label: "Text", name: "text", widget: "string"}, {label: "Href", name: "href", widget: "string"}]
              - label: "How It Works"
                name: "howItWorks"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Subtitle", name: "subtitle", widget: "string"}
                  - label: "Steps"
                    name: "steps"
                    widget: "list"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Step Number", name: "stepNumber", widget: "number", value_type: "int"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
              - label: "Benefits"
                name: "benefits"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - label: "Items"
                    name: "items"
                    widget: "list"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
                      - {label: "Icon", name: "icon", widget: "string"}
                  - label: "Highlighted Item"
                    name: "highlightedItem"
                    widget: "object"
                    fields:
                      - {label: "ID", name: "id", widget: "string"}
                      - {label: "Title", name: "title", widget: "string"}
                      - {label: "Description", name: "description", widget: "text"}
                      - {label: "Icon", name: "icon", widget: "string"}
              - label: "Pricing"
                name: "pricing"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - {label: "Subtitle", name: "subtitle", widget: "string"}
                  - {label: "Original Price", name: "originalPrice", widget: "string"}
                  - {label: "Current Price", name: "currentPrice", widget: "string"}
                  - {label: "Features", name: "features", widget: "list", field: {name: "feature", widget: "string"}}
                  - {label: "Bonuses", name: "bonuses", widget: "list", field: {name: "bonus", widget: "string"}, required: false}
                  - label: "CTA"
                    name: "cta"
                    widget: "object"
                    fields: [{label: "Text", name: "text", widget: "string"}, {label: "Href", name: "href", widget: "string"}]
              - label: "FAQ"
                name: "faq"
                widget: "object"
                fields:
                  - {label: "Title", name: "title", widget: "string"}
                  - label: "Items"
                    name: "items"
                    widget: "list"
                    fields:
                      - {label: "Question", name: "question", widget: "string"}
                      - {label: "Answer", name: "answer", widget: "text"}

  - name: "roadmap"
    label: "🗺️ Roadmap Pengembangan"
    files:
      - label: "Data Roadmap"
        name: "roadmap_data"
        file: "data/roadmap.json"
        fields:
          - label: "Daftar Roadmap"
            name: "items"
            widget: "list"
            fields:
              - {label: "Judul Tahapan", name: "title", widget: "string"}
              - {label: "Deskripsi", name: "description", widget: "text"}
              - label: "Status Badge"
                name: "status"
                widget: "select"
                options: ["concept", "research", "prototype", "inprogress"]
                default: "inprogress"
`;

fs.writeFileSync(path.join(adminDir, 'config.yml'), configYaml);

const adminIndex = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Iman Logics Content Manager</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(adminDir, 'index.html'), adminIndex);

console.log("Success generating CMS config and JSON files!");
