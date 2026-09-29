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
  badge: string;
  description: string;
  price: number;
  image: string;
}

const SHAPED_PRODUCTS: ShapedProductItem[] = [
  {
    id: 'shape-camisetas',
    name: 'Camisetas Personalizadas',
    productId: 'prod-camiseta-ajolote-cumple',
    badge: 'Tallas Familiares (Bebés a Adultos)',
    description: 'Sublimación de tacto ultrasuave y colores vivos. Estampado nítido centrado para eventos familiares y cumpleaños.',
    price: 25000,
    image: '/forma-producto-camiseta.jpg',
  },
  {
    id: 'shape-mugs',
    name: 'Mug Personalizados',
    productId: 'prod-mug-tapa-silicona-imparable',
    badge: 'Tapa Silicona & Asa Corazón ❤️',
    description: 'Cerámica AAA con tapa térmica antiderrames, base protectora de silicona y asa ergonómica de corazón.',
    price: 25000,
    image: '/forma-producto-mug.jpg',
  },
  {
    id: 'shape-rompecabezas',
    name: 'Rompecabezas Personalizados',
    productId: 'prod-rompecabezas-a4',
    badge: 'Amor en Cada Pieza ♡',
    description: 'Sublimación fotográfica full color con piezas troqueladas de alta precisión para armar tus fotos familiares.',
    price: 30000,
    image: '/forma-producto-rompecabezas.jpg',
  },
  {
    id: 'shape-termos',
    name: 'Termos Personalizados',
    productId: 'prod-termo-inteligente-cero',
    badge: 'Sensor Digital LED 🌡️',
    description: 'Acero inoxidable 304 de doble pared con sensor digital de temperatura táctil en la tapa y aislamiento al vacío.',
    price: 35000,
    image: '/forma-producto-termo.jpg',
  },
  {
    id: 'shape-libretas',
    name: 'Libretas Personalizadas',
    productId: 'prod-agenda-personalizada-fe',
    badge: 'Pasta Dura & Anillado Oro 📓',
    description: 'Pasta dura plastificada de lujo con anillado metálico dorado doble y portada personalizada con tu nombre.',
    price: 45000,
    image: '/forma-producto-libreta.jpg',
  },
  {
    id: 'shape-cojines',
    name: 'Cojines Personalizados',
    productId: 'prod-cojin-personalizado',
    badge: 'Felpa Suave con Relleno Incluido',
    description: 'Microfibra satinada y felpa ultrasuave con cremallera oculta y relleno hipoalergénico esponjoso.',
    price: 42000,
    image: '/forma-producto-cojin.jpg',
  },
];

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
            <span>Colección Oficial VG · Productos Personalizados</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Nuestros Productos en su Forma Real
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-slate-700 mt-2 font-medium">
            Cada producto presentado en su forma física exacta, con su diseño centrado y nítido. Toca cualquier artículo para abrir su ficha completa y comenzar a personalizar con tus fotos y frases en otra pestaña.
          </p>
        </div>

        {/* 6 Shape-Crafted Product Cards Grid (No repetition, no oval frames, clean product shapes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SHAPED_PRODUCTS.map((item) => {
            return (
              <a
                key={item.id}
                href={`#producto-${item.productId}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleItemClick(item.productId)}
                className="group relative rounded-3xl bg-gradient-to-b from-white/95 via-purple-50/70 to-pink-50/80 backdrop-blur-md border-2 border-purple-200/90 hover:border-pink-500 p-5 sm:p-6 shadow-[0_8px_25px_rgba(88,28,135,0.08)] hover:shadow-[0_16px_35px_rgba(219,39,119,0.3)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer text-slate-800"
                title={`Personalizar ${item.name} en otra pestaña`}
              >
                {/* Floating Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 text-white text-[11px] font-extrabold shadow-sm border border-pink-300/60">
                    <Heart className="w-3 h-3 text-pink-200 fill-pink-200" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* The Pure Product Shape Visual (No oval frame, perfectly straight and centered) */}
                <div className="relative w-full aspect-square max-w-[240px] sm:max-w-[260px] mx-auto flex items-center justify-center p-2 my-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(88,28,135,0.18)] group-hover:scale-105 group-hover:drop-shadow-[0_18px_32px_rgba(219,39,119,0.3)] transition-all duration-500 ease-out"
                    loading="eager"
                  />
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
                    <div className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 group-hover:from-pink-600 group-hover:via-purple-700 group-hover:to-pink-500 text-white font-extrabold text-xs sm:text-sm shadow-md group-hover:shadow-xl group-hover:scale-[1.02] transition-all border border-pink-200/60 text-center">
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
