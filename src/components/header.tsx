# src/components/header.tsx

```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Menu,
  X,
  MessageCircle,
  Truck,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { categories } from '@/lib/data';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Premium Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-white/10 bg-black text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c6a55c] via-[#f7e7a1] to-[#8f6b29] opacity-90" />

        <div className="relative flex items-center justify-center gap-3 px-4 py-2 text-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 backdrop-blur-md">
            <Truck className="h-4 w-4 text-black" />
          </div>

          <p className="text-sm font-bold tracking-wide text-black sm:text-base">
            ¡Envíos rápidos a todo el país!
          </p>

          <Sparkles className="hidden h-4 w-4 text-black sm:block" />
        </div>
      </div>

      {/* Sticky Header */}
      <header className="fixed top-12 left-0 right-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-shrink-0 items-center gap-3 transition-all duration-300 hover:opacity-90"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white p-1 shadow-2xl shadow-yellow-500/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-yellow-500/20">
              <Image
                src="/images/uploads/a069893e-38f0-4741-9ee3-f0d0be242825.jpg"
                alt="EXPOSTORE"
                fill
                className="object-contain p-1"
                sizes="56px"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-2xl font-black tracking-[0.25em] text-white">
                EXPOSTORE
              </p>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">
                Premium Store
              </p>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-card/70 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-transparent to-[#f5f5f5]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <input
                type="text"
                placeholder="Buscar iPhone, perfumes, Karssell..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="relative z-10 w-full bg-transparent py-3 pl-5 pr-12 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
              />

              <Search className="absolute right-4 top-3.5 h-5 w-5 text-zinc-400 transition-colors group-hover:text-yellow-400" />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-xl border border-white/10 bg-card/70 p-2 transition-all duration-300 hover:border-yellow-500/30 hover:bg-card"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20por%20disponibilidad%20--%20EXPOSTORE"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] px-5 py-3 text-sm font-bold text-black shadow-xl shadow-yellow-500/20 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/40"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-black/95 backdrop-blur-2xl md:hidden">
            <div className="space-y-5 p-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/80">
                <input
                  type="text"
                  placeholder="Buscar productos premium..."
                  className="w-full bg-transparent py-3 pl-5 pr-12 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                />

                <Search className="absolute right-4 top-3.5 h-5 w-5 text-zinc-400" />
              </div>

              <div className="space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-card/60 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-yellow-500/20 hover:bg-card"
                  >
                    <span>{cat.name}</span>
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                  </Link>
                ))}
              </div>

              <a
                href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20por%20disponibilidad%20--%20EXPOSTORE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] px-4 py-3 font-bold text-black shadow-xl shadow-yellow-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="h-28" />
    </>
  );
}
```

---

# src/app/page.tsx

```tsx
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { ProductCard } from '@/components/product-card';
import { CategoryCard } from '@/components/category-card';
import { products, categories, faqItems } from '@/lib/data';
import Image from 'next/image';
import {
  ChevronDown,
  ShieldCheck,
  Truck,
  Sparkles,
  BadgeCheck,
  MessageCircle,
  Instagram,
  Gem,
  Star,
  Check,
  Layers3,
} from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-white">
      <Header />

      {/* Hero */}
      <section className="relative px-4 pb-24 pt-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 animate-[fadeIn_1s_ease]">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                Tecnología y productos premium
              </div>

              <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                La nueva experiencia
                <span className="block bg-gradient-to-r from-[#d4af37] via-[#f7e7a1] to-[#8f6b29] bg-clip-text text-transparent">
                  premium online
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
                iPhones originales, perfumes importados, Karssell profesional y electrodomésticos premium con estética moderna, seguridad y atención personalizada.
              </p>
            </div>

            {/* Premium Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Originalidad Garantizada',
                  desc: 'Productos sellados y verificados.',
                },
                {
                  icon: Truck,
                  title: 'Envíos Premium',
                  desc: 'Cobertura rápida a todo el país.',
                },
                {
                  icon: Sparkles,
                  title: 'Atención Exclusiva',
                  desc: 'Soporte humano por WhatsApp.',
                },
                {
                  icon: BadgeCheck,
                  title: 'Calidad Verificada',
                  desc: 'Marcas premium seleccionadas.',
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/70 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/20 hover:shadow-2xl hover:shadow-yellow-500/10"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#f5f5f5]/10" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] shadow-lg">
                        <Icon className="h-5 w-5 text-black" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-zinc-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/541234567890?text=Hola%20EXPOSTORE"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] px-8 py-4 text-lg font-black text-black shadow-2xl shadow-yellow-500/20 transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/40"
              >
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                Contactar ahora
              </a>

              <a
                href="#catalogo"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-yellow-500/20 hover:bg-white/10"
              >
                <Layers3 className="h-5 w-5 text-yellow-300" />
                Ver catálogo
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[420px] sm:h-[540px] lg:h-[650px] animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4af37]/20 to-white/5 blur-3xl" />

            <Image
              src="/images/generated/hero-iphone-15-pro-max-natural-titanium.png"
              alt="EXPOSTORE"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(212,175,55,0.25)]"
              priority
            />
          </div>
        </div>

        <div className="mt-16 flex justify-center animate-bounce">
          <ChevronDown className="h-7 w-7 text-yellow-300" />
        </div>
      </section>

      {/* Categories */}
      <section className="bg-card/40 px-4 py-24 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black sm:text-5xl">
              Categorías <span className="text-yellow-300">Premium</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
              Una selección exclusiva diseñada para quienes buscan calidad y estética premium.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="catalogo" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black sm:text-5xl">
              Lo más <span className="text-yellow-300">vendido</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
              Productos destacados con diseño, rendimiento y calidad premium.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href="/catalogo"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] px-10 py-4 text-lg font-black text-black shadow-2xl shadow-yellow-500/20 transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/40"
            >
              Explorar catálogo completo
              <Star className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            </a>
          </div>
        </div>
      </section>

      {/* NEW SECTION replacing fake reviews */}
      <section className="bg-card/40 px-4 py-24 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black sm:text-5xl">
              Experiencia <span className="text-yellow-300">EXPOSTORE</span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-400">
              Diseñamos una tienda moderna enfocada en estética, confianza y experiencia premium real.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                icon: Gem,
                title: 'Selección Curada',
                desc: 'Solo productos premium cuidadosamente elegidos para mantener el estándar EXPOSTORE.',
              },
              {
                icon: Sparkles,
                title: 'Diseño Moderno',
                desc: 'Experiencia visual inspirada en marcas de lujo y tecnología de alto nivel.',
              },
              {
                icon: ShieldCheck,
                title: 'Compra Segura',
                desc: 'Atención personalizada y transparencia en cada etapa de la compra.',
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/20 hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#f5f5f5]/10" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] shadow-xl shadow-yellow-500/20">
                      <Icon className="h-7 w-7 text-black" />
                    </div>

                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black sm:text-5xl">
              Preguntas <span className="text-yellow-300">frecuentes</span>
            </h2>

            <p className="mt-4 text-lg text-zinc-400">
              Todo lo que necesitas saber antes de comprar.
            </p>
          </div>

          <div className="space-y-5">
            {faqItems.map((item, idx) => (
              <details
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/20"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-lg font-bold text-white transition-all duration-300 hover:text-yellow-300">
                  {item.question}

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-open:rotate-180">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>

                <div className="border-t border-white/5 px-6 py-5 text-zinc-400">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-card/40 px-4 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black sm:text-5xl">
              ¿Por qué elegir <span className="text-yellow-300">EXPOSTORE</span>?
            </h2>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: 'Autenticidad Garantizada',
                  desc: 'Trabajamos únicamente con productos originales y premium.',
                },
                {
                  title: 'Estética Premium',
                  desc: 'Diseño visual moderno inspirado en lujo y tecnología.',
                },
                {
                  title: 'Atención Real',
                  desc: 'Soporte personalizado vía WhatsApp e Instagram.',
                },
                {
                  title: 'Envíos Seguros',
                  desc: 'Cobertura rápida y seguimiento profesional.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-5 rounded-3xl border border-white/5 bg-black/30 p-5 transition-all duration-500 hover:border-yellow-500/20 hover:bg-black/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] shadow-lg shadow-yellow-500/20">
                    <Check className="h-6 w-6 text-black" />
                  </div>

                  <div>
                    <p className="text-lg font-black text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IMPORTANT: USER REQUESTED ORIGINAL LOGO HERE */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-white/5 blur-3xl" />

            <div className="relative rounded-[40px] border border-white/10 bg-white p-10 shadow-[0_0_80px_rgba(212,175,55,0.15)] backdrop-blur-2xl">
              <Image
                src="/images/uploads/a069893e-38f0-4741-9ee3-f0d0be242825.jpg"
                alt="EXPOSTORE"
                width={500}
                height={220}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-[#111111] via-[#181818] to-[#0a0a0a] p-10 text-center shadow-[0_0_80px_rgba(212,175,55,0.08)]">
          <div className="space-y-6">
            <h2 className="text-5xl font-black leading-tight">
              Listo para comprar
              <span className="block bg-gradient-to-r from-[#d4af37] via-[#f7e7a1] to-[#8f6b29] bg-clip-text text-transparent">
                como se debe?
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-zinc-400">
              Atención premium, diseño moderno y productos originales.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/541234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] px-8 py-4 text-lg font-black text-black shadow-2xl shadow-yellow-500/20 transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/40"
            >
              <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
              WhatsApp
            </a>

            <a
              href="https://instagram.com/direct/t/expostorelanus"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-black text-white backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-yellow-500/20"
            >
              <Instagram className="h-5 w-5 text-pink-400" />
              Instagram Direct
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
```

