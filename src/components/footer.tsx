'use client';

import Link from 'next/link';
import { categories } from '@/lib/data';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                E
              </div>
              <span className="font-bold text-lg">EXPOSTORE</span>
            </div>
            <p className="text-sm text-secondary">
              Tienda de productos premium en Lanús. Garantía 100% Original.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-foreground hover:text-primary transition">
                📱 Instagram
              </a>
              <a href="#" className="text-foreground hover:text-primary transition">
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Categorías</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.id}`}
                    className="text-sm text-secondary hover:text-primary transition"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-secondary hover:text-primary transition">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-secondary hover:text-primary transition">
                  Política de Envíos
                </Link>
              </li>
              <li>
                <Link href="/guarantees" className="text-sm text-secondary hover:text-primary transition">
                  Garantías
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-secondary hover:text-primary transition">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary">Lanús, Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="https://wa.me/541234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:agusrojas010309@gmail.com"
                  className="text-secondary hover:text-primary transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-secondary">
          <p>&copy; {currentYear} EXPOSTORE. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-primary transition">
              Términos
            </Link>
            <Link href="/privacy" className="hover:text-primary transition">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
