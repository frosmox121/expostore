import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, Shield, Truck, Check } from 'lucide-react';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="relative h-96 sm:h-[500px] lg:h-[600px] bg-card border border-border rounded-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-bold">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">{product.name}</h1>
              <p className="text-lg text-secondary mb-4">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-primary text-primary'
                          : 'text-secondary'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-secondary">({product.reviews} opiniones)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-primary">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-secondary line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-lg text-sm font-bold">
                      Ahorrás {discount}%
                    </span>
                  </>
                )}
              </div>
              {product.inStock ? (
                <p className="text-success font-semibold">✓ En Stock</p>
              ) : (
                <p className="text-destructive font-semibold">Agotado</p>
              )}
            </div>

            {/* Guarantees */}
            <div className="space-y-3 bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg">Garantías Incluidas</h3>
              <div className="space-y-2">
                {product.guarantees.map((guarantee, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="space-y-3 bg-card/50 border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg">Especificaciones</h3>
              <div className="space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-secondary">{key}</span>
                    <span className="font-semibold text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-xl p-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">100% Original</p>
                  <p className="text-xs text-secondary">Directo de proveedores oficiales</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-accent/10 border border-accent/20 rounded-xl p-4">
                <Truck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Envío Rápido</p>
                  <p className="text-xs text-secondary">Mismo día en Lanús</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20me%20interesa%3A%20${encodeURIComponent(
                product.name
              )}%20--%20EXPOSTORE`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all hover:shadow-lg text-center"
            >
              💬 Consultar Disponibilidad por WhatsApp
            </a>

            {/* Info Message */}
            <div className="bg-card/50 border border-border rounded-lg p-4 text-sm text-secondary">
              <p>
                Contacta directamente por WhatsApp para confirmar disponibilidad, coordinar envío y resolver cualquier duda.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose This Product */}
        <div className="mt-20 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Por qué elegir este producto en EXPOSTORE</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Cada producto es seleccionado cuidadosamente para garantizar la mejor calidad y el mejor precio del mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '✓',
                title: 'Garantía Oficial',
                desc: 'Todos nuestros productos incluyen garantía oficial del fabricante.',
              },
              {
                icon: '🔒',
                title: 'Seguridad de Compra',
                desc: 'Pago contra entrega en Lanús o mediante plataformas seguras.',
              },
              {
                icon: '💰',
                title: 'Mejor Precio',
                desc: 'Sin intermediarios, obtienes el precio más competitivo del mercado.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center space-y-3">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
