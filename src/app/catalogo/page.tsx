import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Catálogo <span className="text-primary">Completo</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Todos nuestros productos 100% originales con garantía de fábrica.
            Selecciona el que quieras y contáctanos por WhatsApp.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-card border border-border rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold">¿No encontraste lo que buscas?</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Contáctanos directamente para consultar sobre productos específicos, consultar stock,
            o solicitar ofertas especiales para compras al por mayor.
          </p>
          <a
            href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20tengo%20una%20consulta%20--%20EXPOSTORE"
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
