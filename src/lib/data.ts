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
            className="hidden sm:flex items-center gap-2 rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] px-5 py-3 text-sm font-bold text-black shadow-xl shadow-yellow-500/20 transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/40"
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
                {categories && categories.map((cat) => {
                  // Parche de seguridad: si cat.name es undefined, busca alternativas en data.ts
                  const categoryName = cat.name || cat.title || cat.label || "Categoría";
                  
                  return (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.id}`}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-card/60 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-yellow-500/20 hover:bg-card"
                    >
                      <span>{categoryName}</span>
                      <Sparkles className="h-4 w-4 text-yellow-400" />
                    </Link>
                  );
                })}
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
