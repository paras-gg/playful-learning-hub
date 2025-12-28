import { Link } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Ditambahkan ke keranjang!",
      description: `${product.name} berhasil ditambahkan.`,
    });
  };

  const handleBuyNow = () => {
    const message = `Halo Remember! 👋

Saya ingin membeli:
• ${product.name}
• Harga: ${formatPrice(product.price)}

Mohon informasi cara pembayarannya. Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden card-hover">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
            Diskon {Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}
        <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-full capitalize">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <span className="text-xs text-muted-foreground">Usia {product.ageRange}</span>
          <h3 className="font-bold text-foreground line-clamp-2 mt-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <Link to={`/produk/${product.slug}`} className="flex-1">
            <Button variant="outline" className="w-full gap-2" size="sm">
              <Eye className="w-4 h-4" />
              Detail
            </Button>
          </Link>
          <Button
            className="flex-1 gap-2"
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4" />
            {isInCart(product.id) ? "Tambah" : "Keranjang"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
