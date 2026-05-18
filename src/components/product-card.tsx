'use client';

import { Product } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Truck, Shield } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group relative bg-card border-2 border-transparent rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl" style={{backgroundImage: 'linear-gradient(#121212, #121212), linear-gradient(135deg, #FFD700, #DAA520)', backgroundOrigin: 'padding-box, border-box'}}>
        {/* Image Container */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-background">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 right-3 gradient-gold-bright text-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/30">
              {product.badge}
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-destructive font-bold">Agotado</span>
            </div>
          )}

          {/* Guarantees - Mini Badges */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            {product.guarantees.includes('Garantía 100% Original') && (
              <div className="gradient-gold-shine text-foreground px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 shadow-md shadow-yellow-500/30">
                <Shield className="h-3 w-3" />
                Original
              </div>
            )}
            {product.guarantees.some(g => g.includes('Envío')) && (
              <div className="gradient-silver-light text-foreground px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 shadow-md shadow-gray-300/30">
                <Truck className="h-3 w-3" />
                Envío
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Name */}
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-secondary line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-primary text-primary'
                      : 'text-secondary'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-secondary">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-secondary line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Shipping Badge */}
          <div className="text-xs text-accent font-semibold flex items-center gap-1">
            <Truck className="h-3 w-3" />
            Envío inmediato
          </div>

          {/* CTA Button */}
          <a
            href={`https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20me%20interesa%20el%20producto%3A%20${encodeURIComponent(
              product.name
            )}%20%28ID%3A%20${product.id}%29%20--%20EXPOSTORE`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full gradient-gold-shine text-foreground py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition text-center text-sm"
          >
            💬 Consultar por WhatsApp
          </a>
        </div>
      </div>
    </Link>
  );
}
