import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-32 right-20 animate-float hidden lg:block">
        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
          <Star className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Edukasi Anak Usia 6-8 Tahun</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Belajar Jadi{" "}
              <span className="text-gradient">Seru</span>,<br />
              Anak Tumbuh{" "}
              <span className="text-gradient">Maju</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Materi edukasi berkualitas yang membuat belajar terasa menyenangkan. 
              Ebook & worksheet yang dirancang khusus untuk mengembangkan potensi anak Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/produk">
                <Button size="lg" className="gap-2 text-base px-8">
                  Lihat Produk
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/tentang-kami">
                <Button variant="outline" size="lg" className="text-base px-8">
                  Tentang Kami
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Orang Tua</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Produk</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=500&fit=crop"
                alt="Anak belajar dengan gembira"
                className="rounded-3xl shadow-2xl border-4 border-primary/20"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">4.9/5</div>
                  <div className="text-xs text-muted-foreground">500+ Review</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl p-4 border border-border">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">Terpercaya!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
