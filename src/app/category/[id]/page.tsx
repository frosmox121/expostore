import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { ProductCard } from '@/components/product-card';
import { products, categories } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.id === params.id);
  const categoryProducts = products.filter((p) => p.category === params.id);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 px-4 bg-gradient-to-br from-card via-background to-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="text-5xl">{category.icon}</div>
              <h1 className="text-4xl sm:text-5xl font-bold">{category.name}</h1>
              <p className="text-lg text-secondary">{category.description}</p>
              <a
                href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20por%20la%20categoría%20de%20--%20EXPOSTORE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                💬 Consultar sobre esta categoría
              </a>
            </div>

            {category.image && (
              <div className="relative h-80 sm:h-96">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {categoryProducts.length > 0 ? (
            <>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-2">
                  {categoryProducts.length} Productos disponibles
                </h2>
                <p className="text-secondary">
                  Todos 100% originales con garantía de fábrica
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-bold mb-4">No hay productos en esta categoría</p>
              <p className="text-secondary mb-8">
                Síguenos en redes para actualización de stock
              </p>
              <a
                href="/"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Volver al inicio
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
