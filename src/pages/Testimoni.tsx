import { Helmet } from "react-helmet-async";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const Testimoni = () => (
  <>
    <Helmet>
      <title>Testimoni - Remember | Apa Kata Orang Tua</title>
      <meta name="description" content="Baca testimoni dari orang tua yang telah menggunakan produk Remember untuk anak mereka." />
    </Helmet>
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Apa Kata <span className="text-primary">Orang Tua</span>?</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Testimoni nyata dari orang tua yang sudah merasakan manfaat produk Remember</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => <TestimonialCard key={t.id} testimonial={t} />)}
        </div>
      </div>
    </div>
  </>
);

export default Testimoni;
