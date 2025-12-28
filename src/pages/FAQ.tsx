import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

const FAQ = () => (
  <>
    <Helmet>
      <title>FAQ - Remember | Pertanyaan yang Sering Diajukan</title>
      <meta name="description" content="Temukan jawaban atas pertanyaan umum seputar produk Remember, cara pembelian, dan lainnya." />
    </Helmet>
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pertanyaan <span className="text-primary">Umum</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Jawaban untuk pertanyaan yang sering diajukan</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map(faq => (
              <AccordionItem key={faq.id} value={faq.id} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </>
);

export default FAQ;
