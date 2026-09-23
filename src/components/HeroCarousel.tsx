import React from 'react';
import { Sparkles, ArrowRight, ExternalLink, Heart, Palette } from 'lucide-react';
import type { Product } from '../types';
import { formatPrice } from '../data/products';

interface HeroCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

interface ShapedProductItem {
  id: string;
  name: string;
  productId: string;
  shapeType: 'tshirt' | 'mug' | 'puzzle' | 'thermos' | 'notebook' | 'cushion';
  badge: string;
  highlightText: string;
  description: string;
  price: number;
  image: string;
}

const SHAPED_PRODUCTS: ShapedProductItem[] = [
  {
    id: 'shape-camisetas',
    name: 'Camisetas Personalizadas',
    productId: 'prod-camiseta-ajolote-cumple',
    shapeType: 'tshirt',
    badge: 'Tallas Familiares (Bebés a Adultos)',
    highlightText: 'Silueta de Camiseta',
    description: 'Sublimación de tacto ultrasuave y colores vivos. Manejamos todas las tallas para eventos familiares y cumpleaños.',
    price: 25000,
    image: '/prod-camiseta-ajolote.jpg',
  },
  {
    id: 'shape-mugs',
    name: 'Mug Personalizados',
    productId: 'prod-mug-tapa-silicona-imparable',
    shapeType: 'mug',
    badge: 'Tapa Silicona & Asa Corazón ❤️',
    highlightText: 'Silueta de Mug con Asa',
    description: 'Cerámica AAA con tapa térmica antiderrames, base protectora de silicona y asa ergonómica de corazón.',
    price: 25000,
    image: '/prod-mug-silicona-imparable.jpg',
  },
  {
    id: 'shape-rompecabezas',
    name: 'Rompecabezas Personalizados',
    productId: 'prod-rompecabezas-a4',
    shapeType: 'puzzle',
    badge: 'Amor en Cada Pieza ♡',
    highlightText: 'Silueta de Rompecabezas',
    description: 'Sublimación fotográfica full color con piezas troqueladas de alta precisión para armar tus fotos familiares.',
    price: 30000,
    image: '/prod-rompecabezas-personalizado.jpg',
  },
  {
    id: 'shape-termos',
    name: 'Termos Personalizados',
    productId: 'prod-termo-inteligente-cero',
    shapeType: 'thermos',
    badge: 'Sensor Digital LED 🌡️',
    highlightText: 'Silueta de Termo Inteligente',
    description: 'Acero inoxidable 304 de doble pared con sensor digital de temperatura táctil en la tapa y aislamiento al vacío.',
    price: 35000,
    image: '/prod-termo-papa.jpg',
  },
  {
    id: 'shape-libretas',
    name: 'Libretas Personalizadas',
    productId: 'prod-agenda-personalizada-fe',
    shapeType: 'notebook',
    badge: 'Pasta Dura & Anillado Oro 📓',
    highlightText: 'Silueta de Libreta / Agenda',
    description: 'Pasta dura plastificada de lujo con anillado metálico dorado doble y portada personalizada con tu nombre.',
    price: 45000,
    image: '/prod-agendas-fe.webp',
  },
  {
    id: 'shape-cojines',
    name: 'Cojines Personalizados',
    productId: 'prod-cojin-personalizado',
    shapeType: 'cushion',
    badge: 'Felpa Suave con Relleno Incluido',
    highlightText: 'Silueta de Cojín Mullido',
    description: 'Microfibra satinada y felpa ultrasuave con cremallera oculta y relleno hipoalergénico esponjoso.',
    price: 42000,
    image: '/prod-cojin-decorativo.webp',
  },
];

// Product Shape Visual SVG Renderer
const ProductShapeVisual: React.FC<{ item: ShapedProductItem }> = ({ item }) => {
  const clipId = `clip-${item.id}`;
  const gradId = `grad-${item.id}`;
  const strokeGradId = `stroke-${item.id}`;

  const renderShapeContent = () => {
    switch (item.shapeType) {
      case 'tshirt': {
        const tshirtPath =
          'M 95 36 Q 130 54 165 36 L 214 62 L 244 112 L 206 134 L 180 108 L 180 230 Q 130 236 80 230 L 80 108 L 54 134 L 16 112 L 46 62 Z';
        return (
          <>
            <defs>
              <clipPath id={clipId}>
                <path d={tshirtPath} />
              </clipPath>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdf2f8" />
                <stop offset="50%" stopColor="#f3e8ff" />
                <stop offset="100%" stopColor="#e0e7ff" />
              </linearGradient>
              <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>

            {/* Background Base */}
            <rect width="260" height="260" fill={`url(#${gradId})`} clipPath={`url(#${clipId})`} />

            {/* Product Image Formed Inside T-Shirt */}
            <image
              href={item.image}
              x="20"
              y="20"
              width="220"
              height="220"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />

            {/* Inner Sheen Glow */}
            <path
              d={tshirtPath}
              fill="none"
              stroke={`url(#${strokeGradId})`}
              strokeWidth="4"
              className="drop-shadow-md"
            />

            {/* Collar Ribbing Detail */}
            <path
              d="M 95 36 Q 130 54 165 36 Q 130 62 95 36"
              fill="#fbcfe8"
              stroke="#db2777"
              strokeWidth="2"
            />

            {/* Sleeve Stitches */}
            <line x1="180" y1="108" x2="206" y2="134" stroke="#db2777" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="80" y1="108" x2="54" y2="134" stroke="#db2777" strokeWidth="2" strokeDasharray="3 3" />
          </>
        );
      }

      case 'mug': {
        // Mug with handle on the right
        const mugPath =
          'M 44 40 L 176 40 L 176 72 C 246 72, 246 188, 176 188 L 176 214 Q 176 226 162 226 L 58 226 Q 44 226 44 214 Z';
        return (
          <>
            <defs>
              <clipPath id={clipId}>
                <path d="M 44 40 L 176 40 L 176 214 Q 176 226 162 226 L 58 226 Q 44 226 44 214 Z" />
              </clipPath>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#faf5ff" />
                <stop offset="100%" stopColor="#fdf2f8" />
              </linearGradient>
              <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#db2777" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            {/* Handle Base Behind */}
            <path
              d="M 176 72 C 248 72, 248 188, 176 188 L 176 162 C 220 162, 220 98, 176 98 Z"
              fill="url(#grad-shape-mugs)"
              stroke={`url(#${strokeGradId})`}
              strokeWidth="3.5"
              className="drop-shadow-sm"
            />
            {/* Heart Accent inside Mug Handle */}
            <path
              d="M 215 130 C 215 125, 210 120, 204 120 C 198 120, 194 125, 204 136 C 214 125, 210 120, 204 120"
              fill="#ec4899"
              className="animate-pulse"
            />

            {/* Mug Body with Product Photo */}
            <rect width="260" height="260" fill={`url(#${gradId})`} clipPath={`url(#${clipId})`} />
            <image
              href={item.image}
              x="25"
              y="25"
              width="170"
              height="210"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />

            {/* Silicone Lid on Top */}
            <rect
              x="38"
              y="32"
              width="144"
              height="16"
              rx="8"
              fill="#f472b6"
              stroke="#db2777"
              strokeWidth="2.5"
              className="drop-shadow-sm"
            />
            {/* Mug Contour */}
            <path
              d={mugPath}
              fill="none"
              stroke={`url(#${strokeGradId})`}
              strokeWidth="4"
              className="drop-shadow-md"
            />
          </>
        );
      }

      case 'puzzle': {
        // Classic interlocking jigsaw piece
        const puzzlePath =
          'M 45 45 L 105 45 C 100 15, 160 15, 155 45 L 215 45 L 215 105 C 245 100, 245 160, 215 155 L 215 215 L 155 215 C 160 185, 100 185, 105 215 L 45 215 L 45 155 C 75 160, 75 100, 45 105 Z';
        return (
          <>
            <defs>
              <clipPath id={clipId}>
                <path d={puzzlePath} />
              </clipPath>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff1f2" />
                <stop offset="50%" stopColor="#f3e8ff" />
                <stop offset="100%" stopColor="#fef3c7" />
              </linearGradient>
              <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            {/* Background base */}
            <rect width="260" height="260" fill={`url(#${gradId})`} clipPath={`url(#${clipId})`} />

            {/* Product Photo Shaped as Puzzle Piece */}
            <image
              href={item.image}
              x="20"
              y="20"
              width="220"
              height="220"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />

            {/* Embossed Puzzle Border */}
            <path
              d={puzzlePath}
              fill="none"
              stroke={`url(#${strokeGradId})`}
              strokeWidth="4.5"
              className="drop-shadow-lg"
            />

            {/* Inner highlight lines */}
            <circle cx="130" cy="30" r="4" fill="#fbbf24" />
            <circle cx="230" cy="130" r="4" fill="#fbbf24" />
          </>
        );
      }

      case 'thermos': {
        // Smart Thermos bottle silhouette with digital LED cap
        const thermosPath =
          'M 84 30 Q 84 22 96 22 L 164 22 Q 176 22 176 30 L 176 64 L 168 76 L 180 102 L 180 226 Q 180 238 168 238 L 92 238 Q 80 238 80 226 L 80 102 L 92 76 L 84 64 Z';
        return (
          <>
            <defs>
              <clipPath id={clipId}>
                <path d="M 80 82 L 180 82 L 180 226 Q 180 238 168 238 L 92 238 Q 80 238 80 226 Z" />
              </clipPath>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="50%" stopColor="#312e81" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
              <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            {/* Thermos Base */}
            <path d={thermosPath} fill="#f8fafc" />

            {/* Bottle Body Image */}
            <image
              href={item.image}
              x="80"
              y="80"
              width="100"
              height="160"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />

            {/* Smart Digital LED Cap */}
            <rect x="84" y="22" width="92" height="42" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
            
            {/* LED Screen with glowing temperature */}
            <circle cx="130" cy="43" r="14" fill="#0284c7" className="animate-pulse" />
            <text x="130" y="47" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif">
              20°C
            </text>

            {/* Metallic Ring */}
            <rect x="88" y="64" width="84" height="12" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Bottle Contour Stroke */}
            <path
              d={thermosPath}
              fill="none"
              stroke={`url(#${strokeGradId})`}
              strokeWidth="4"
              className="drop-shadow-md"
            />
          </>
        );
      }

      case 'notebook': {
        // Spiral Hardcover Notebook
        const notebookCover =
          'M 68 25 L 208 25 Q 218 25 218 35 L 218 225 Q 218 235 208 235 L 68 235 Q 58 235 58 225 L 58 35 Q 58 25 68 25 Z';
        return (
          <>
            <defs>
              <clipPath id={clipId}>
                <path d={notebookCover} />
              </clipPath>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdf4ff" />
                <stop offset="100%" stopColor="#fae8ff" />
              </linearGradient>
              <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            {/* Notebook Cover Base */}
            <rect width="260" height="260" fill={`url(#${gradId})`} clipPath={`url(#${clipId})`} />

            {/* Notebook Photo */}
            <image
              href={item.image}
              x="50"
              y="20"
              width="175"
              height="220"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />

            {/* Cover Contour */}
            <path
              d={notebookCover}
              fill="none"
              stroke={`url(#${strokeGradId})`}
              strokeWidth="4"
              className="drop-shadow-lg"
            />

            {/* Gold Wire-O Spirals along left spine */}
            {[45, 75, 105, 135, 165, 195, 215].map((y, i) => (
              <g key={`spiral-${i}`}>
                <ellipse cx="58" cy={y} rx="9" ry="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                <circle cx="58" cy={y} r="2" fill="#713f12" />
              </g>
            ))}

            {/* Satin Bookmark Ribbon hanging */}
            <path d="M 175 220 L 175 252 L 183 244 L 191 252 L 191 220 Z" fill="#ec4899" stroke="#be185d" strokeWidth="1.5" />
          </>
        );
      }

      case 'cushion': {
        // Soft Puffy Square Cushion
        const cushionPath =
          'M 45 45 Q 130 20 215 45 Q 240 130 215 215 Q 130 240 45 215 Q 20 130 45 45 Z';
        return (
          <>
            <defs>
              <clipPath id={clipId}>
                <path d={cushionPath} />
              </clipPath>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff1f2" />
                <stop offset="50%" stopColor="#fdf4ff" />
                <stop offset="100%" stopColor="#f5f3ff" />
              </linearGradient>
              <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>

            {/* Cushion Base */}
            <rect width="260" height="260" fill={`url(#${gradId})`} clipPath={`url(#${clipId})`} />

            {/* Cushion Photo */}
            <image
              href={item.image}
              x="20"
              y="20"
              width="220"
              height="220"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />

            {/* Plump Pillow Seams radiating to corners */}
            <path d="M 130 130 Q 80 80 45 45" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 130 130 Q 180 80 215 45" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 130 130 Q 180 180 215 215" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 130 130 Q 80 180 45 215" stroke="#ec4899" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

            {/* Tufted Button in Center */}
            <circle cx="130" cy="130" r="10" fill="#f43f5e" stroke="#ffffff" strokeWidth="2.5" className="drop-shadow-sm" />
            <circle cx="130" cy="130" r="4" fill="#fbbf24" />

            {/* Outer Stitched Border */}
            <path
              d={cushionPath}
              fill="none"
              stroke={`url(#${strokeGradId})`}
              strokeWidth="4.5"
              className="drop-shadow-md"
            />
          </>
        );
      }
    }
  };

  return (
    <div className="relative w-full aspect-square max-w-[220px] sm:max-w-[240px] mx-auto flex items-center justify-center p-1">
      <svg
        viewBox="0 0 260 260"
        className="w-full h-full drop-shadow-xl filter transition-transform duration-500 group-hover:scale-105"
      >
        {renderShapeContent()}
      </svg>
    </div>
  );
};

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  products,
  onSelectProduct,
}) => {
  const handleItemClick = (productId: string) => {
    const targetProduct = products.find((p) => p.id === productId);
    if (targetProduct) {
      onSelectProduct(targetProduct);
    }
  };

  return (
    <section
      aria-label="Colección de Productos por Siluetas"
      className="relative pt-6 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-purple-900/90 text-pink-200 border-2 border-pink-400/60 text-xs sm:text-sm font-extrabold shadow-md mb-3">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>Colección Oficial VG · Formas de Productos Exclusivas</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Nuestros Productos Personalizados
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-slate-700 mt-2 font-medium">
            Cada producto moldeado en su forma característica. Toca cualquier artículo para abrir su ficha completa y comenzar a personalizar con tus fotos y frases en otra pestaña.
          </p>
        </div>

        {/* 6 Shape-Crafted Product Cards Grid (No repetition) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SHAPED_PRODUCTS.map((item) => {
            return (
              <a
                key={item.id}
                href={`#producto-${item.productId}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleItemClick(item.productId)}
                className="group relative rounded-3xl bg-gradient-to-b from-white/95 via-purple-50/80 to-pink-50/90 backdrop-blur-md border-2 border-purple-200/90 hover:border-pink-500 p-5 sm:p-6 shadow-[0_8px_25px_rgba(88,28,135,0.08)] hover:shadow-[0_16px_35px_rgba(219,39,119,0.3)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer text-slate-800"
                title={`Personalizar ${item.name} en otra pestaña`}
              >
                {/* Floating Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 text-white text-[11px] font-extrabold shadow-sm border border-pink-300/60">
                    <Heart className="w-3 h-3 text-pink-200 fill-pink-200" />
                    <span>{item.badge}</span>
                  </span>

                  <span className="text-[11px] font-bold text-purple-900 bg-purple-100/90 px-2.5 py-0.5 rounded-full border border-purple-200">
                    {item.highlightText}
                  </span>
                </div>

                {/* The Custom Shape Visual Container */}
                <div className="py-2 flex items-center justify-center">
                  <ProductShapeVisual item={item} />
                </div>

                {/* Product Info & Action CTA */}
                <div className="pt-4 border-t border-purple-200/80 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 group-hover:text-pink-600 transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <span className="shrink-0 px-3 py-1 rounded-full bg-gradient-to-r from-purple-800 via-purple-700 to-pink-600 text-white font-black text-xs sm:text-sm shadow-md">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* High Impact Brand Button (No plain white) */}
                  <div className="mt-4 pt-2">
                    <div className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 group-hover:from-pink-600 group-hover:via-purple-700 group-hover:to-pink-500 text-white font-extrabold text-xs sm:text-sm shadow-md group-hover:shadow-xl group-hover:scale-[1.02] transition-all border border-pink-200/60 text-center">
                      <Palette className="w-4 h-4 text-pink-100" />
                      <span>Personalizar {item.name}</span>
                      <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    
                    <span className="block text-center text-[10px] text-purple-900/70 font-semibold mt-1.5">
                      ✨ Abre la ficha con todas las fotos y opciones en otra pestaña
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
