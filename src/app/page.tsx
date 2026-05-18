import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { ProductCard } from '@/components/product-card';
import { CategoryCard } from '@/components/category-card';
import { products, categories, communityProof, faqItems } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Zap, Shield, Truck } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Montserrat'] font-extrabold leading-tight">
                  Productos <span className="text-primary">Premium</span> de Clase Mundial
                </h1>
                <p className="text-lg text-secondary leading-relaxed">
                  iPhones originales, perfumes importados, Karssell profesional y electrodomésticos premium. Garantía 100% Original. Envíos rápidos en Lanús y todo el país.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">100% Original</p>
                    <p className="text-xs text-secondary">Caja sellada de fábrica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <Truck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Envío Rápido</p>
                    <p className="text-xs text-secondary">Mismo día en Lanús</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Atención Personalizada</p>
                    <p className="text-xs text-secondary">WhatsApp + Instagram</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Garantía Oficial</p>
                    <p className="text-xs text-secondary">Apple, Marcas Premium</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20--%20EXPOSTORE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-center hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  💬 Contactar por WhatsApp
                </a>
                <a
                  href="#catalogo"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-center hover:bg-primary/10 transition-all"
                >
                  Ver Catálogo
                </a>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
              <Image
                src="/images/generated/hero-iphone-15-pro-max-natural-titanium.png"
                alt="iPhone 15 Pro Max"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 animate-bounce">
            <ChevronDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nuestras <span className="text-primary">Categorías</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Explora nuestra selección cuidada de productos premium en cada categoría
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers - Lo Más Vendido */}
      <section id="catalogo" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Lo Más <span className="text-primary">Vendido</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Los productos favoritos de nuestros clientes. Garantía de satisfacción.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <a
              href="/catalogo"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20 inline-flex items-center gap-2"
            >
              Ver Todo el Catálogo →
            </a>
          </div>
        </div>
      </section>

      {/* Community Section - Prueba Social */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comunidad <span className="text-primary">EXPOSTORE</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Mira qué opinan nuestros clientes satisfechos. Síguenos en Instagram para más.
            </p>
          </div>

          {/* Community Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityProof.map((post) => (
              <div
                key={post.id}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.username}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="font-bold text-foreground mb-2">{post.username}</p>
                  <p className="text-secondary text-sm">{post.comment}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Link */}
          <div className="text-center mt-12">
            <a
              href="https://instagram.com/direct/t/expostorelanus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              📸 Síguenos en Instagram @expostorelanus
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Preguntas <span className="text-primary">Frecuentes</span>
            </h2>
            <p className="text-secondary text-lg">
              Respuestas a las dudas más comunes de nuestros clientes
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.id}
                className="group bg-card border border-border rounded-xl hover:border-primary/50 transition cursor-pointer"
              >
                <summary className="flex items-center justify-between p-4 sm:p-6 font-semibold text-foreground hover:text-primary transition">
                  {item.question}
                  <span className="inline-block group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-secondary border-t border-border">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">¿No encontraste tu respuesta?</h3>
            <p className="text-secondary">
              Nuestro equipo está disponible por WhatsApp e Instagram para ayudarte.
            </p>
            <a
              href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20tengo%20una%20consulta%20--%20EXPOSTORE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition"
            >
              💬 Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose EXPOSTORE */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                ¿Por qué elegir <span className="text-primary">EXPOSTORE</span>?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: 'Autenticidad Garantizada',
                    desc: 'Traemos directamente de proveedores oficiales sin intermediarios.',
                  },
                  {
                    title: 'Mejor Precio del Mercado',
                    desc: 'Sin intermediarios = mejor precio. Garantizado.',
                  },
                  {
                    title: 'Envío Seguro y Rápido',
                    desc: 'Mismo día en Lanús, rápido a todo el país con seguimiento.',
                  },
                  {
                    title: 'Atención Personalizada',
                    desc: 'WhatsApp, Instagram, Email. Siempre disponibles para ayudarte.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl">{'✓'}</div>
                    <div>
                      <p className="font-bold text-foreground">{item.title}</p>
                      <p className="text-sm text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 sm:h-[500px]">
              <Image
                src="/images/mockups/projectlogo.png"
                alt="EXPOSTORE"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              ¿Listo para tu compra?
            </h2>
            <p className="text-xl text-secondary">
              Conecta directamente con nosotros y obtén atención personalizada en segundos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20--%20EXPOSTORE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-center hover:opacity-90 transition-all hover:shadow-lg text-lg"
            >
              💬 Enviar mensaje por WhatsApp
            </a>
            <a
              href="https://instagram.com/direct/t/expostorelanus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500/80 text-white px-8 py-4 rounded-lg font-bold text-center hover:opacity-90 transition-all hover:shadow-lg text-lg"
            >
              📸 Instagram Direct
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
