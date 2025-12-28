import { Helmet } from "react-helmet-async";
import { MessageCircle, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Kontak = () => (
  <>
    <Helmet>
      <title>Kontak - Remember | Hubungi Kami</title>
      <meta name="description" content="Hubungi Remember via WhatsApp untuk pemesanan atau konsultasi seputar produk edukasi anak." />
    </Helmet>
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hubungi <span className="text-primary">Kami</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Ada pertanyaan? Kami siap membantu Anda!</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 text-center mb-8">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Chat via WhatsApp</h2>
            <p className="text-muted-foreground mb-6">Cara tercepat untuk menghubungi kami. Klik tombol di bawah untuk langsung chat!</p>
            <Button size="lg" className="gap-2" onClick={() => window.open("https://wa.me/6281234567890", "_blank")}>
              <MessageCircle className="w-5 h-5" /> Chat Sekarang
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-muted-foreground">WhatsApp</div>
              <div className="font-semibold">+62 812-3456-7890</div>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-semibold">hello@remember.id</div>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-muted-foreground">Jam Operasional</div>
              <div className="font-semibold">09:00 - 21:00 WIB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Kontak;
