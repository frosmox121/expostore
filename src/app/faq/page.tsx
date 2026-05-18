import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { faqItems } from '@/lib/data';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h1>
          <p className="text-xl text-secondary">
            Respuestas a todas tus dudas sobre EXPOSTORE
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-20">
          {faqItems.map((item) => (
            <details
              key={item.id}
              className="group bg-card border border-border rounded-xl hover:border-primary/50 transition cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 font-semibold text-foreground hover:text-primary transition">
                <span className="text-left">{item.question}</span>
                <span className="inline-block group-open:rotate-180 transition flex-shrink-0 ml-4">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 text-secondary border-t border-border space-y-3">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">¿Tienes más dudas?</h2>
          <p className="text-lg text-secondary">
            Nuestro equipo está disponible por WhatsApp e Instagram para responder cualquier pregunta
            adicional que tengas sobre nuestros productos, servicios o políticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20tengo%20una%20consulta%20--%20EXPOSTORE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://instagram.com/direct/t/expostorelanus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500/80 text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block"
            >
              📸 Instagram Direct
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
