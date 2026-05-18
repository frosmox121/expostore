'use client';

import { Category } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <div className={`group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${category.color} border-2 border-transparent transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/30`} style={{backgroundImage: `linear-gradient(#0a0a0a, #0a0a0a), linear-gradient(135deg, #FFD700, #DAA520)`, backgroundOrigin: 'padding-box, border-box'}}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
          <div className="text-3xl sm:text-4xl mb-2">{category.icon}</div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
            {category.name}
          </h3>
          <p className="text-xs sm:text-sm text-secondary line-clamp-2">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
