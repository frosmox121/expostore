'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';
import { categories } from '@/lib/data';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Top Banner - Shipping Announcement */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground py-2 px-4 text-center">
        <p className="text-sm font-semibold flex items-center justify-center gap-2">
          <span>🚚</span>
          <span>¡Envíos Rápidos a todo el país! Retirá hoy mismo en Lanús</span>
        </p>
      </div>

      {/* Sticky Header */}
      <header className="fixed top-7 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-bold text-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                E
              </div>
              <span className="hidden sm:inline">EXPOSTORE</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar iPhone, perfume, Karssell..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card border border-border rounded-lg pl-4 pr-10 py-2 text-sm text-foreground placeholder-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-secondary" />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* WhatsApp CTA - Desktop */}
          <a
            href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20por%20disponibilidad%20--%20EXPOSTORE"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition"
          >
            <span>💬</span>
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="p-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full bg-background border border-border rounded-lg pl-4 pr-10 py-2 text-sm text-foreground placeholder-secondary focus:outline-none focus:border-primary"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-secondary" />
              </div>

              {/* Categories */}
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className="block px-4 py-2 rounded-lg hover:bg-muted transition text-foreground"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                ))}
              </div>

              {/* Mobile WhatsApp CTA */}
              <a
                href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20por%20disponibilidad%20--%20EXPOSTORE"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-accent text-accent-foreground text-center px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                💬 Contactar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-24" />
    </>
  );
}
