import React, { useRef } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Heart, Eye } from 'lucide-react';
import type { Product } from '../types';
import { formatPrice } from '../data/products';

interface EditorialCollectionSliderProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const EditorialCollectionSlider: React.FC<EditorialCollectionSliderProps> = ({
  products,
  onSelectProduct,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Curated list of signature products
  const curatedSelection = [
    'prod-mug-tapa-silicona-imparable',
    'prod-mug-tapa-silicona-blanco',
    'prod-mug-magico-fotos',
    'prod-mug-negro-personalizar-cero',
    'prod-termo-papa',
    'prod-termo-mascotas',
    'prod-mug-tradicional-personalizar-cero',
    'prod-camiseta-ajolote-cumple',
    'prod-agenda-planifica-fe',
    'prod-rompecabezas-corazon',
  ];

  const collectionProducts = curatedSelection
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Slider Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Colección Numerada // Lookbook 2026</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Piezas de Autor: Pasarela de Diseños
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-xl">
              Cada creación cuenta una historia. Toca cualquier pieza numerada para explorar su ficha técnica, fotos y opciones de personalización.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-3 rounded-2xl bg-white/90 hover:bg-white text-purple-900 border border-purple-200 shadow-sm hover:shadow transition-all active:scale-95"
              title="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-3 rounded-2xl bg-white/90 hover:bg-white text-purple-900 border border-purple-200 shadow-sm hover:shadow transition-all active:scale-95"
              title="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Editorial Reel */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
        >
          {collectionProducts.map((product, index) => {
            const serialNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="w-72 sm:w-80 shrink-0 snap-start bg-white/95 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 overflow-hidden shadow-card hover:shadow-2xl hover:border-purple-400 hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                {/* Photo Top Container */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Serial Number Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase shadow-sm">
                    #{serialNumber} · VG LOOKBOOK
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-purple-900/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider">
                      {product.badge}
                    </div>
                  )}

                  {/* Hover Quick Hint */}
                  <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-white text-purple-950 text-xs font-black shadow-lg flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-pink-500" />
                      <span>Ver producto y fotos</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 block mb-1">
                      {product.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-purple-900 transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-3 border-t border-purple-100 flex items-center justify-between">
                    <div>
                      <span className="font-heading font-black text-lg text-purple-950">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-400 line-through ml-1.5">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-extrabold text-pink-600 group-hover:text-pink-700 transition-colors">
                      <span>Personalizar</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
