'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t-2 border-t-transparent mt-20" style={{borderImage: 'linear-gradient(90deg, #FFD700, #E0E0E0, #A9A9A9, #FFD700) 1'}}>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition w-fit">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/uploads/a069893e-38f0-4741-9ee3-f0d0be242825.jpg"
                  alt="EXPOSTORE"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">EXPOSTORE</span>
            </Link>
            <p className="text-sm text-secondary">
              Tienda de productos premium en Lanús. Garantía 100% Original.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/direct/t/expostorelanus" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded text-sm font-semibold gradient-silver-light text-foreground hover:shadow-md transition">
                📱 Instagram
              </a>
              <a href="https://wa.me/541234567890" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded text-sm font-semibold gradient-gold-warm text-foreground hover:shadow-md transition">
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
        <div className="h-px my-8 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

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
