import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, MessageCircle, BookOpen, Users, FileText, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductBySlug, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

const DetailProduk = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug || "");
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Link to="/produk"><Button>Kembali ke Katalog</Button></Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({ title: "Ditambahkan ke keranjang!", description: `${product.name} berhasil ditambahkan.` });
  };

  const handleBuyNow = () => {
    const message = `Halo Remember! 👋\n\nSaya ingin membeli:\n• ${product.name}\n• Harga: ${formatPrice(product.price)}\n\nMohon informasi cara pembayarannya. Terima kasih! 🙏`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - Remember</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/produk" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-xl" />
            </div>
            <div className="space-y-6">
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full capitalize">{product.category}</span>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">{formatPrice(product.price)}</span>
                {product.originalPrice && <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>}
              </div>
              <p className="text-muted-foreground">{product.description}</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card rounded-lg border border-border p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Usia</div>
                  <div className="font-semibold">{product.ageRange}</div>
                </div>
                <div className="bg-card rounded-lg border border-border p-4 text-center">
                  <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Halaman</div>
                  <div className="font-semibold">{product.pageCount}</div>
                </div>
                <div className="bg-card rounded-lg border border-border p-4 text-center">
                  <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Format</div>
                  <div className="font-semibold">PDF</div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">Manfaat:</h3>
                <ul className="space-y-2">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="flex-1 gap-2" onClick={handleBuyNow}>
                  <MessageCircle className="w-5 h-5" /> Beli via WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5" /> Keranjang
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Testimoni Pembeli</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.slice(0, 2).map(t => <TestimonialCard key={t.id} testimonial={t} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
