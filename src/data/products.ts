import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Ebook Ide Stimulasi Anak Usia 6-8 Tahun",
    slug: "ebook-stimulasi-anak",
    price: 79000,
    originalPrice: 129000,
    description: "Panduan lengkap berisi 50+ ide aktivitas stimulasi untuk mengembangkan kemampuan kognitif, motorik, dan sosial-emosional anak usia 6-8 tahun. Setiap aktivitas dilengkapi dengan penjelasan manfaat, bahan yang dibutuhkan, dan langkah-langkah mudah yang bisa dilakukan di rumah.",
    shortDescription: "50+ ide aktivitas stimulasi untuk anak usia 6-8 tahun",
    benefits: [
      "Mengembangkan kemampuan kognitif anak",
      "Melatih motorik halus dan kasar",
      "Meningkatkan kreativitas dan imajinasi",
      "Mempererat bonding orang tua dan anak",
      "Aktivitas mudah dengan bahan seadanya"
    ],
    ageRange: "6-8 tahun",
    pageCount: 85,
    category: "ebook",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: "2",
    name: "Ebook Persiapan Masuk SD",
    slug: "ebook-persiapan-sd",
    price: 89000,
    originalPrice: 149000,
    description: "Panduan komprehensif untuk mempersiapkan anak memasuki Sekolah Dasar. Berisi materi pre-reading, pre-writing, numerasi dasar, serta tips membangun kemandirian dan kesiapan sosial-emosional anak.",
    shortDescription: "Persiapan lengkap anak masuk SD",
    benefits: [
      "Materi pre-reading dan phonics dasar",
      "Latihan menulis huruf dan angka",
      "Pengenalan konsep matematika sederhana",
      "Tips membangun kemandirian anak",
      "Panduan kesiapan sosial-emosional"
    ],
    ageRange: "5-7 tahun",
    pageCount: 120,
    category: "ebook",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: "3",
    name: "Worksheet Belajar Membaca",
    slug: "worksheet-membaca",
    price: 49000,
    originalPrice: 79000,
    description: "Kumpulan 100+ lembar kerja untuk belajar membaca dengan metode yang menyenangkan. Dimulai dari pengenalan huruf, suku kata, hingga membaca kalimat sederhana. Dilengkapi gambar ilustrasi yang menarik.",
    shortDescription: "100+ lembar kerja belajar membaca",
    benefits: [
      "Pengenalan huruf A-Z",
      "Latihan suku kata bertahap",
      "Membaca kata sederhana",
      "Membaca kalimat pendek",
      "Ilustrasi menarik dan penuh warna"
    ],
    ageRange: "5-7 tahun",
    pageCount: 100,
    category: "worksheet",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: "4",
    name: "Worksheet Belajar Menulis",
    slug: "worksheet-menulis",
    price: 49000,
    originalPrice: 79000,
    description: "Lembar kerja untuk melatih kemampuan menulis anak. Mulai dari tracing garis, huruf kapital, huruf kecil, hingga menulis kata dan kalimat. Cocok untuk anak yang baru mulai belajar menulis.",
    shortDescription: "Latihan menulis dari dasar hingga mahir",
    benefits: [
      "Tracing garis dan pola dasar",
      "Menulis huruf kapital A-Z",
      "Menulis huruf kecil a-z",
      "Menulis angka 0-20",
      "Latihan menulis kata dan kalimat"
    ],
    ageRange: "5-7 tahun",
    pageCount: 80,
    category: "worksheet",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=400&h=300&fit=crop"
  },
  {
    id: "5",
    name: "Worksheet Belajar Berhitung",
    slug: "worksheet-berhitung",
    price: 49000,
    originalPrice: 79000,
    description: "Kumpulan lembar kerja matematika dasar untuk anak. Mencakup pengenalan angka, menghitung benda, penjumlahan dan pengurangan sederhana, serta konsep matematika dasar lainnya.",
    shortDescription: "Belajar matematika dengan cara menyenangkan",
    benefits: [
      "Pengenalan angka 1-100",
      "Menghitung dan membandingkan",
      "Penjumlahan sederhana",
      "Pengurangan sederhana",
      "Pengenalan konsep lebih besar/kecil"
    ],
    ageRange: "5-8 tahun",
    pageCount: 90,
    category: "worksheet",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=300&fit=crop"
  },
  {
    id: "6",
    name: "Paket Lengkap Worksheet Calistung",
    slug: "paket-calistung",
    price: 129000,
    originalPrice: 237000,
    description: "Paket hemat berisi semua worksheet belajar membaca, menulis, dan berhitung. Cocok untuk persiapan masuk SD dan belajar di rumah. Total 270 lembar kerja dengan berbagai aktivitas menyenangkan.",
    shortDescription: "Paket lengkap baca-tulis-hitung (270 halaman)",
    benefits: [
      "Hemat 45% dari beli satuan",
      "Materi lengkap calistung",
      "270 lembar kerja berkualitas",
      "Bonus: Tracker kemajuan belajar",
      "Bonus: Reward stickers printable"
    ],
    ageRange: "5-8 tahun",
    pageCount: 270,
    category: "worksheet",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    featured: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
