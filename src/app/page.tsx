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
                <div className="relative flex items-start gap-3 bg-card border-2 border-transparent rounded-xl p-4 hover:shadow-lg hover:shadow-yellow-500/20 transition-all group">
                  <div className="absolute inset-0 rounded-xl gradient-gold-shine opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-clip-padding" style={{backgroundImage: 'linear-gradient(#121212, #121212), linear-gradient(135deg, #FFD700, #DAA520)', backgroundOrigin: 'padding-box, border-box'}} />
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 relative z-10" />
                  <div className="relative z-10">
                    <p className="font-semibold text-sm">100% Original</p>
                    <p className="text-xs text-secondary">Caja sellada de fábrica</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-3 bg-card border-2 border-transparent rounded-xl p-4 hover:shadow-lg hover:shadow-blue-400/20 transition-all group">
                  <div className="absolute inset-0 rounded-xl gradient-silver-cool opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-clip-padding" style={{backgroundImage: 'linear-gradient(#121212, #121212), linear-gradient(135deg, #E0E0E0, #A9A9A9)', backgroundOrigin: 'padding-box, border-box'}} />
                  <Truck className="h-6 w-6 text-primary flex-shrink-0 mt-1 relative z-10" />
                  <div className="relative z-10">
                    <p className="font-semibold text-sm">Envío Rápido</p>
                    <p className="text-xs text-secondary">Mismo día en Lanús</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-3 bg-card border-2 border-transparent rounded-xl p-4 hover:shadow-lg hover:shadow-green-400/20 transition-all group">
                  <div className="absolute inset-0 rounded-xl gradient-gold-warm opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-clip-padding" style={{backgroundImage: 'linear-gradient(#121212, #121212), linear-gradient(135deg, #FFD700, #FFA500)', backgroundOrigin: 'padding-box, border-box'}} />
                  <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1 relative z-10" />
                  <div className="relative z-10">
                    <p className="font-semibold text-sm">Atención Personalizada</p>
                    <p className="text-xs text-secondary">WhatsApp + Instagram</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-3 bg-card border-2 border-transparent rounded-xl p-4 hover:shadow-lg hover:shadow-gray-400/20 transition-all group">
                  <div className="absolute inset-0 rounded-xl gradient-steel-light opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-clip-padding" style={{backgroundImage: 'linear-gradient(#121212, #121212), linear-gradient(135deg, #A9A9A9, #606060)', backgroundOrigin: 'padding-box, border-box'}} />
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 relative z-10" />
                  <div className="relative z-10">
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
                  className="gradient-gold-shine text-foreground px-8 py-4 rounded-lg font-bold text-center hover:shadow-xl hover:shadow-yellow-500/30 transition-all transform hover:scale-105"
                >
                  💬 Contactar por WhatsApp
                </a>
                <a
                  href="#catalogo"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-center hover:bg-primary/10 transition-all relative group"
                >
                  <span className="relative z-10">Ver Catálogo</span>
                  <div className="absolute inset-0 rounded-lg gradient-silver-matte opacity-0 group-hover:opacity-20 transition-opacity" />
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
              className="gradient-gold-shine text-foreground px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-yellow-500/40 transition-all inline-flex items-center gap-2 transform hover:scale-105"
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
            {communityProof.map((post, idx) => (
              <div
                key={post.id}
                className="relative bg-card border-2 border-transparent rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
                style={{
                  borderImage: idx % 3 === 0 ? 'linear-gradient(135deg, #FFD700, #DAA520) 1' :
                               idx % 3 === 1 ? 'linear-gradient(135deg, #E0E0E0, #A9A9A9) 1' :
                               'linear-gradient(135deg, #A9A9A9, #606060) 1'
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.username}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-4 relative z-10">
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
              className="gradient-gold-matte text-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-yellow-600/30 transition-all inline-flex items-center gap-2"
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
            {faqItems.map((item, idx) => (
              <details
                key={item.id}
                className="group bg-card border-2 border-transparent rounded-xl hover:shadow-lg transition cursor-pointer"
                style={{
                  backgroundImage: 'linear-gradient(#121212, #121212), linear-gradient(135deg, ' +
                                  (idx % 3 === 0 ? '#FFD700, #DAA520' :
                                   idx % 3 === 1 ? '#E0E0E0, #A9A9A9' :
                                   '#A9A9A9, #606060') + ')',
                  backgroundOrigin: 'padding-box, border-box'
                }}
              >
                <summary className="flex items-center justify-between p-4 sm:p-6 font-semibold text-foreground hover:text-primary/80 transition relative z-10">
                  {item.question}
                  <span className="inline-block group-open:rotate-180 transition text-primary">
                    ▼
                  </span>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-secondary border-t border-border/50 relative z-10">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 relative border-2 border-transparent rounded-2xl p-6 sm:p-8 text-center space-y-4 group overflow-hidden" style={{backgroundImage: 'linear-gradient(#0a0a0a, #0a0a0a), linear-gradient(135deg, rgba(255,215,0,0.1), rgba(37,211,102,0.1))', backgroundOrigin: 'padding-box, border-box'}}>
            <div className="absolute inset-0 gradient-gold-accent opacity-5 group-hover:opacity-10 transition-opacity rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">¿No encontraste tu respuesta?</h3>
              <p className="text-secondary">
                Nuestro equipo está disponible por WhatsApp e Instagram para ayudarte.
              </p>
              <a
                href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20tengo%20una%20consulta%20--%20EXPOSTORE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block gradient-gold-shine text-foreground px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
              >
                💬 Contáctanos por WhatsApp
              </a>
            </div>
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
              className="gradient-gold-shine text-foreground px-8 py-4 rounded-lg font-bold text-center hover:shadow-xl hover:shadow-yellow-500/40 transition-all text-lg transform hover:scale-105"
            >
              💬 Enviar mensaje por WhatsApp
            </a>
            <a
              href="https://instagram.com/direct/t/expostorelanus"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-silver-cool text-foreground px-8 py-4 rounded-lg font-bold text-center hover:shadow-xl hover:shadow-blue-300/40 transition-all text-lg transform hover:scale-105"
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
