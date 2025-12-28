import { Helmet } from "react-helmet-async";
import { Heart, Target, Eye, Sparkles } from "lucide-react";

const TentangKami = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Kami - Remember | Edukasi Anak Menyenangkan</title>
        <meta name="description" content="Remember hadir untuk membantu orang tua mendampingi tumbuh kembang anak melalui materi edukasi yang menyenangkan." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tentang Remember</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cerita di Balik <span className="text-primary">Remember</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Berawal dari keinginan sederhana: membuat belajar menjadi pengalaman yang menyenangkan bagi setiap anak Indonesia.</p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop" alt="Anak belajar bersama orang tua" className="rounded-3xl shadow-xl" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Dari Orang Tua, untuk Orang Tua</h2>
              <p className="text-muted-foreground">Remember lahir dari pengalaman nyata sebagai orang tua yang ingin memberikan pendidikan terbaik untuk anak. Kami memahami tantangan mencari materi belajar yang berkualitas, menyenangkan, dan sesuai tahapan perkembangan anak.</p>
              <p className="text-muted-foreground">Setiap produk Remember dirancang dengan penuh cinta dan perhatian terhadap detail. Kami percaya bahwa setiap anak unik dan memiliki cara belajar masing-masing.</p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi</h3>
              <p className="text-muted-foreground">Menjadi partner terpercaya orang tua Indonesia dalam mendampingi tumbuh kembang anak melalui edukasi yang menyenangkan dan bermakna.</p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Menyediakan materi edukasi berkualitas tinggi</li>
                <li>• Membuat belajar menjadi pengalaman yang menyenangkan</li>
                <li>• Mendukung bonding orang tua dan anak</li>
                <li>• Mempersiapkan anak menghadapi dunia pendidikan</li>
              </ul>
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Nilai yang Kami Pegang</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Cinta & Perhatian</h4>
                <p className="text-sm text-muted-foreground">Setiap produk dibuat dengan penuh cinta untuk anak Indonesia</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Kreativitas</h4>
                <p className="text-sm text-muted-foreground">Desain yang menarik dan metode yang inovatif</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6">
                <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Kualitas</h4>
                <p className="text-sm text-muted-foreground">Standar tinggi dalam setiap materi yang kami buat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TentangKami;
