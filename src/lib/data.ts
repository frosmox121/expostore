// EXPOSTORE Product Data & Constants

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory?: string;
  specs: Record<string, string>;
  guarantees: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
  color: string;
}

// Categories
export const categories: Category[] = [
  {
    id: 'tech',
    name: 'Alta Gama & Tech',
    icon: '📱',
    description: 'iPhones, Apple Watch, Accesorios Premium',
    image: '/images/generated/category-alta-gama-tech-products.png',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'perfumeria',
    name: 'Perfumería Importada',
    icon: '🌸',
    description: 'Perfumes Árabes y Fragancias de Diseñador',
    image: '/images/generated/category-perfumeria-importada-luxury.png',
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 'karssell',
    name: 'Cuidado Capilar',
    icon: '✨',
    description: 'Línea Profesional KARSSELL',
    image: '/images/generated/category-karssell-hair-care-products.png',
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    id: 'electro',
    name: 'Electro & Hogar',
    icon: '🔥',
    description: 'Calefacción y Electrodomésticos',
    color: 'from-red-500/20 to-orange-500/20',
    image: '/images/generated/product-iphone-15-pro-sierra-blue.png',
  },
  {
    id: 'promos',
    name: 'Promos & Combos',
    icon: '🎉',
    description: 'Ofertas Semanales y Packs',
    color: 'from-green-500/20 to-emerald-500/20',
    image: '/images/generated/category-alta-gama-tech-products.png',
  },
];

// Products
export const products: Product[] = [
  // Tech Products
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    description: 'El smartphone más poderoso jamás creado. Pantalla Super Retina XDR de 6.7" con ProMotion. Chip A17 Pro con Núcleo Neural.',
    price: 299999,
    originalPrice: 329999,
    image: '/images/generated/hero-iphone-15-pro-max-natural-titanium.png',
    category: 'tech',
    subcategory: 'iPhone',
    specs: {
      'Pantalla': '6.7" Super Retina XDR',
      'Procesador': 'Apple A17 Pro',
      'Almacenamiento': '256GB',
      'Cámara Principal': '48MP',
      'Batería': 'Hasta 29h',
    },
    guarantees: ['Garantía 100% Original', 'Caja Sellada de Fábrica', 'Garantía Oficial Apple 1 Año'],
    inStock: true,
    rating: 4.9,
    reviews: 247,
    badge: '9% OFF',
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    description: 'Potencia y precisión en un tamaño perfecto. Pantalla Super Retina XDR de 6.1". Todo lo que necesitas en la palma de tu mano.',
    price: 249999,
    originalPrice: 269999,
    image: '/images/generated/product-iphone-15-pro-sierra-blue.png',
    category: 'tech',
    subcategory: 'iPhone',
    specs: {
      'Pantalla': '6.1" Super Retina XDR',
      'Procesador': 'Apple A17 Pro',
      'Almacenamiento': '256GB',
      'Cámara Principal': '48MP',
      'Batería': 'Hasta 27h',
    },
    guarantees: ['Garantía 100% Original', 'Caja Sellada de Fábrica', 'Garantía Oficial Apple 1 Año'],
    inStock: true,
    rating: 4.8,
    reviews: 189,
    badge: '7% OFF',
  },
  {
    id: 'apple-watch-ultra',
    name: 'Apple Watch Ultra',
    description: 'El reloj inteligente más resistente. Pantalla Retina grande de 49mm. Batería hasta 36 horas. Diseño de titanio extremadamente duradero.',
    price: 79999,
    image: '/images/generated/category-alta-gama-tech-products.png',
    category: 'tech',
    subcategory: 'Apple Watch',
    specs: {
      'Pantalla': '49mm Retina Always-On',
      'Resistencia': 'Titanio + Acero',
      'Batería': '36h (hasta 72h en Modo Ahorro)',
      'Impermeabilidad': '100m',
    },
    guarantees: ['Garantía 100% Original', 'Caja Sellada de Fábrica', 'Garantía Oficial Apple 1 Año'],
    inStock: true,
    rating: 4.7,
    reviews: 142,
  },

  // Perfumes
  {
    id: 'perfume-arabian-aoud',
    name: 'Arabian Oud Signature',
    description: 'Fragancia árabe premium con notas de oud de Oriente Medio puro. Aroma intenso y duradero que trasciende en la piel.',
    price: 8999,
    image: '/images/generated/category-perfumeria-importada-luxury.png',
    category: 'perfumeria',
    subcategory: 'Árabes',
    specs: {
      'Volumen': '100ml',
      'Concentración': 'Eau de Parfum 18%',
      'Durabilidad': '12+ horas',
      'Salida': 'Oud, Almizcares Orientales',
    },
    guarantees: ['Garantía 100% Original', 'Código Batch Verificable', 'Importación Directa'],
    inStock: true,
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 'perfume-creed-aventus',
    name: 'Creed Aventus',
    description: 'El perfume de diseñador más deseado del mundo. Notas cítrica frescas con base de madera. Para hombres con presencia.',
    price: 34999,
    originalPrice: 37999,
    image: '/images/generated/category-perfumeria-importada-luxury.png',
    category: 'perfumeria',
    subcategory: 'Diseñador',
    specs: {
      'Volumen': '100ml',
      'Concentración': 'Eau de Parfum 10%',
      'Durabilidad': '10+ horas',
      'Salida': 'Pimienta Rosa, Frambuesa, Bergamota',
    },
    guarantees: ['Garantía 100% Original', 'Código Batch Verificable', 'Importación Directa'],
    inStock: true,
    rating: 5,
    reviews: 156,
    badge: '8% OFF',
  },
  {
    id: 'perfume-dior-sauvage',
    name: 'Dior Sauvage',
    description: 'Fresco, sofisticado, infinitamente versátil. El favorito absoluto de millones. Notas amaderadas y frescas combinadas magistralmente.',
    price: 12999,
    originalPrice: 14999,
    image: '/images/generated/category-perfumeria-importada-luxury.png',
    category: 'perfumeria',
    subcategory: 'Diseñador',
    specs: {
      'Volumen': '100ml',
      'Concentración': 'Eau de Toilette 10%',
      'Durabilidad': '8+ horas',
      'Salida': 'Bergamota, Ambroxán, Cedro',
    },
    guarantees: ['Garantía 100% Original', 'Código Batch Verificable', 'Importación Directa'],
    inStock: true,
    rating: 4.8,
    reviews: 213,
    badge: '13% OFF',
  },

  // Karssell
  {
    id: 'karssell-mascara-pro',
    name: 'Mascarilla Capilar Profesional Karssell',
    description: 'Tratamiento intensivo de recuperación y fortalecimiento. Repara y revitaliza cabellos dañados y maltratados. Fórmula con keratina pura.',
    price: 2499,
    image: '/images/generated/category-karssell-hair-care-products.png',
    category: 'karssell',
    specs: {
      'Volumen': '500ml',
      'Activos': 'Keratina, Colágeno, Ácido Hialurónico',
      'Tipo': 'Mascarilla Capilar',
    },
    guarantees: ['Producto 100% Auténtico', 'Sellado de Fábrica'],
    inStock: true,
    rating: 4.9,
    reviews: 87,
  },
  {
    id: 'karssell-combo-tratamiento',
    name: 'Combo Tratamiento Karssell (3 Pasos)',
    description: 'Set completo: Champú, Acondicionador y Mascarilla. Todo lo que necesita tu cabello para estar radiante.',
    price: 5999,
    originalPrice: 6999,
    image: '/images/generated/category-karssell-hair-care-products.png',
    category: 'karssell',
    specs: {
      'Incluye': 'Champú 500ml + Acondicionador 500ml + Mascarilla 500ml',
      'Beneficio': 'Limpieza, Hidratación y Reparación Completa',
    },
    guarantees: ['Producto 100% Auténtico', 'Sellado de Fábrica'],
    inStock: true,
    rating: 4.9,
    reviews: 156,
    badge: '14% OFF',
  },

  // Heating & Home
  {
    id: 'calefactor-premium',
    name: 'Calefactor Industrial Eficiencia Premium',
    description: 'Calienta espacios de hasta 50m². Tecnología de cerámica rápida. Termostato digital inteligente. Muy silencioso.',
    price: 24999,
    image: '/images/generated/category-alta-gama-tech-products.png',
    category: 'electro',
    specs: {
      'Potencia': '2000W',
      'Cobertura': 'Hasta 50m²',
      'Control': 'Termostato Digital',
      'Modo': 'Calefacción + Ventilación',
    },
    guarantees: ['Garantía Fabricante 2 Años', 'Certificación de Seguridad'],
    inStock: true,
    rating: 4.8,
    reviews: 74,
  },
  {
    id: 'panel-radiante',
    name: 'Panel Radiante Infrarrojo Bajo Consumo',
    description: 'Tecnología infrarroja para calor uniforme. Bajo consumo energético. Perfecto para espacios pequeños y medianos.',
    price: 19999,
    image: '/images/generated/category-alta-gama-tech-products.png',
    category: 'electro',
    specs: {
      'Potencia': '1500W',
      'Tecnología': 'Infrarrojo Bajo Consumo',
      'Montaje': 'Pared o Piso',
    },
    guarantees: ['Garantía Fabricante 2 Años', 'Certificación de Seguridad'],
    inStock: true,
    rating: 4.7,
    reviews: 51,
  },
];

// Community Social Proof
export const communityProof = [
  {
    id: 1,
    username: '@usuario1',
    comment: '¡Mi iPhone 15 Pro Max llegó en perfectas condiciones! Envío super rápido.',
    image: '/images/generated/hero-iphone-15-pro-max-natural-titanium.png',
  },
  {
    id: 2,
    username: '@usuario2',
    comment: 'Los perfumes árabes son de primera calidad. Exactamente como se anuncian. 100% recomendable.',
    image: '/images/generated/category-perfumeria-importada-luxury.png',
  },
  {
    id: 3,
    username: '@usuario3',
    comment: 'Karssell products are legit! Mi cabello está transformado. Excelente servicio de EXPOSTORE.',
    image: '/images/generated/category-karssell-hair-care-products.png',
  },
];

// FAQ
export const faqItems = [
  {
    id: 1,
    question: '¿Los productos son 100% originales?',
    answer: 'Sí, garantizamos 100% originalidad. Traemos los productos directamente de proveedores oficiales en el exterior, sin intermediarios. Todos llegan en caja sellada de fábrica con garantía oficial.',
  },
  {
    id: 2,
    question: '¿Cuáles son las opciones de envío?',
    answer: 'Ofrecemos tres modalidades: (1) Envío Moto Express en Lanús y CABA (24h), (2) Envíos Nacionales por Correo Argentino/Andreani (asegurados), (3) Retiro en punto de entrega en Lanús (abono en efectivo).',
  },
  {
    id: 3,
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos: Mercado Pago (todos los medios), Efectivo contra entrega, Transferencia bancaria, y USDT para clientes internacionales.',
  },
  {
    id: 4,
    question: '¿Tienen garantía los productos?',
    answer: 'Sí. Los iPhones y Apple Watch cuentan con garantía oficial Apple de 1 año. Los perfumes y productos Karssell tienen garantía de autenticidad. Los electrodomésticos tienen garantía del fabricante por 2 años.',
  },
  {
    id: 5,
    question: '¿Puedo devolver un producto?',
    answer: 'Aceptamos devoluciones dentro de 14 días del recibimiento si el producto está sin abrir. Los productos abiertos no se aceptan por razones de higiene y autenticidad.',
  },
  {
    id: 6,
    question: '¿De dónde envían?',
    answer: 'Estamos ubicados en Lanús, Buenos Aires. Los envíos locales salen el mismo día. Los nacionales se coordinan a través de nuestros partners logísticos con número de seguimiento.',
  },
];
