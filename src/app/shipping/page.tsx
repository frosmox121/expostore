import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { Truck, Clock, DollarSign } from 'lucide-react';

export default function ShippingPage() {
  const shippingOptions = [
    {
      title: 'Envío Moto Express (Lanús y GBA)',
      icon: <Truck className="h-8 w-8" />,
      description: 'Entrega rápida y directa en el mismo día o 24 horas.',
      cost: 'Gratis para compras mayores a $50.000',
      time: 'Hoy o mañana',
      best: 'Para Lanús y zona cercana',
    },
    {
      title: 'Envíos Nacionales Asegurados',
      icon: <Clock className="h-8 w-8" />,
      description: 'Envío a todo el país con seguimiento y seguro incluido.',
      cost: 'Desde $500 según zona',
      time: '5-10 días hábiles',
      best: 'Para todo el país',
    },
    {
      title: 'Retiro en Punto de Entrega (Lanús)',
      icon: <DollarSign className="h-8 w-8" />,
      description: 'Coordiná el retiro directo en Lanús.',
      cost: 'Sin costo de envío',
      time: 'A coordinar',
      best: 'Para clientes locales',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Política de <span className="text-primary">Envíos</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Contamos con múltiples opciones de envío para garantizar que tu pedido llegue rápido y seguro
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {shippingOptions.map((option, i) => (
            <div key={i} className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition">
              <div className="text-primary mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold mb-3">{option.title}</h3>
              <p className="text-secondary mb-4 text-sm">{option.description}</p>

              <div className="space-y-3 bg-background/50 rounded-lg p-4 text-sm">
                <div>
                  <p className="text-xs text-secondary mb-1">Costo</p>
                  <p className="font-semibold">{option.cost}</p>
                </div>
                <div>
                  <p className="text-xs text-secondary mb-1">Tiempo</p>
                  <p className="font-semibold">{option.time}</p>
                </div>
                <div>
                  <p className="text-xs text-secondary mb-1">Ideal para</p>
                  <p className="font-semibold">{option.best}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold">Seguridad en los Envíos</h3>
            <ul className="space-y-3">
              {[
                'Todos los envíos son embalados cuidadosamente',
                'Incluyen seguro para productos de alto valor',
                'Tracking y seguimiento en tiempo real',
                'Recibís foto de entrega como comprobante',
                'Atención personalizada ante cualquier incidente',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold">¿Cómo Coordinar?</h3>
            <ul className="space-y-3">
              {[
                'Elige tu opción de envío preferida',
                'Contacta por WhatsApp o Instagram',
                'Confirma tu dirección exacta',
                'Coordina día y hora de entrega',
                'Recibe tu pedido con garantía',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold flex-shrink-0">{i + 1}</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">¿Tienes dudas sobre envío?</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Nuestro equipo te ayudará a elegir la mejor opción según tu ubicación y necesidades.
          </p>
          <a
            href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20sobre%20envíos%20--%20EXPOSTORE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all hover:shadow-lg"
          >
            💬 Contáctanos por WhatsApp
          </a>
        </div>
      </div>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
