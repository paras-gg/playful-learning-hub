import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Download, Heart, Smile, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";
import { getFeaturedProducts } from "@/data/products";
import { testimonials } from "@/data/testimonials";

const Beranda = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Helmet>
        <title>Remember - Belajar Jadi Seru, Anak Tumbuh Maju | Edukasi Anak 6-8 Tahun</title>
        <meta name="description" content="Remember menyediakan ebook dan worksheet berkualitas untuk anak usia 6-8 tahun. Materi belajar membaca, menulis, berhitung yang menyenangkan." />
      </Helmet>

      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kenapa Pilih <span className="text-primary">Remember</span>?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Kami berkomitmen menyediakan materi edukasi terbaik untuk perkembangan anak Anda</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<BookOpen className="w-7 h-7" />} title="Materi Berkualitas" description="Disusun oleh tim ahli pendidikan anak usia dini" />
            <FeatureCard icon={<Smile className="w-7 h-7" />} title="Fun Learning" description="Belajar jadi menyenangkan dengan desain playful" />
            <FeatureCard icon={<Download className="w-7 h-7" />} title="Langsung Download" description="File PDF siap print dan gunakan berulang kali" />
            <FeatureCard icon={<Heart className="w-7 h-7" />} title="Dipercaya 500+ Ortu" description="Rating 4.9 dari orang tua di seluruh Indonesia" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Produk <span className="text-primary">Unggulan</span></h2>
            <p className="text-muted-foreground">Pilihan terbaik untuk memulai perjalanan belajar si kecil</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/produk">
              <Button size="lg" variant="outline">Lihat Semua Produk</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kata <span className="text-primary">Orang Tua</span></h2>
            <p className="text-muted-foreground">Testimoni dari orang tua yang sudah menggunakan produk Remember</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Siap Memulai Perjalanan Belajar?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Dapatkan materi edukasi berkualitas sekarang dan lihat si kecil tumbuh dengan lebih percaya diri!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/produk"><Button size="lg">Lihat Produk</Button></Link>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => window.open("https://wa.me/6281234567890", "_blank")}>
                <MessageCircle className="w-5 h-5" /> Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Beranda;
