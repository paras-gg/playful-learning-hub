import { Helmet } from "react-helmet-async";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Produk = () => {
  return (
    <>
      <Helmet>
        <title>Produk - Remember | Ebook & Worksheet Edukasi Anak</title>
        <meta name="description" content="Koleksi lengkap ebook dan worksheet untuk anak usia 6-8 tahun. Belajar membaca, menulis, berhitung dengan cara menyenangkan." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Katalog <span className="text-primary">Produk</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Pilih materi edukasi terbaik untuk mendampingi perjalanan belajar si kecil</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Produk;
