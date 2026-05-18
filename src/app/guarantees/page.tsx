import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { Shield, Award, CheckCircle } from 'lucide-react';

export default function GuaranteesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Garantía de <span className="text-primary">Autenticidad</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Cada producto en EXPOSTORE es 100% original con garantía de fábrica
          </p>
        </div>

        {/* Main Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nuestro Compromiso</h2>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              En EXPOSTORE, entendemos que la confianza es lo más importante. Por eso, traemos
              todos nuestros productos directamente de proveedores oficiales en el exterior, sin
              intermediarios. Esto nos permite garantizar:
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <CheckCircle className="h-6 w-6 text-primary" />,
                  title: 'Autenticidad 100%',
                  desc: 'Directo de proveedores oficiales, sin intermediarios',
                },
                {
                  icon: <Shield className="h-6 w-6 text-primary" />,
                  title: 'Caja Sellada',
                  desc: 'Todos los productos llegan en su caja original sin abrir',
                },
                {
                  icon: <Award className="h-6 w-6 text-primary" />,
                  title: 'Garantía Oficial',
                  desc: 'Incluye la garantía oficial del fabricante',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  {item.icon}
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-sm text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border-2 border-primary/30 space-y-6">
            <h3 className="text-2xl font-bold">¿Cómo verificamos autenticidad?</h3>
            <div className="space-y-4">
              {[
                'Código Batch verificable (perfumes y cosméticos)',
                'Número de serie comprobable (iPhones, Apple Watch)',
                'Documentación de importación con sellos oficiales',
                'Inspección física antes de envío',
                'Fotos de caja sellada antes de entregar',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold flex-shrink-0 mt-1">→</span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warranty by Category */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Garantía por Categoría</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'iPhones y Apple Watch',
                items: ['Garantía Oficial Apple 1 año', 'Caja original y sellada', 'Número de serie verificable', 'Accesorios incluidos sin abrir'],
              },
              {
                title: 'Perfumes Importados',
                items: ['Garantía de autenticidad', 'Código Batch verificable', 'Botella y embalaje original', 'Fragancia verificada por experto'],
              },
              {
                title: 'Karssell - Cuidado Capilar',
                items: ['Producto 100% auténtico', 'Fórmula original garantizada', 'Lote verificado', 'Componentes originales'],
              },
              {
                title: 'Electrodomésticos',
                items: ['Garantía del fabricante 2 años', 'Certificación de seguridad', 'Manual y accesorios incluidos', 'Servicio técnico autorizado'],
              },
            ].map((category, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-foreground">
                      <span className="text-primary flex-shrink-0 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 sm:p-12 space-y-8">
          <h2 className="text-3xl font-bold text-center">Proceso de Verificación EXPOSTORE</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Importación', desc: 'Traemos directo de proveedores oficiales' },
              { num: '2', title: 'Inspección', desc: 'Verificamos autenticidad y estado' },
              { num: '3', title: 'Documentación', desc: 'Generamos certificado de autenticidad' },
              { num: '4', title: 'Garantía', desc: 'Te entregas con toda la cobertura' },
            ].map((step, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                  {step.num}
                </div>
                <h4 className="font-bold text-foreground">{step.title}</h4>
                <p className="text-sm text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center space-y-6 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold">¿Tienes dudas sobre garantía?</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Nuestro equipo está disponible para explicarte todos los detalles de nuestras garantías
            y responder cualquier pregunta que tengas.
          </p>
          <a
            href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20sobre%20garantías%20--%20EXPOSTORE"
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
