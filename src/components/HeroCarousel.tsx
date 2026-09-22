import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Eye, ArrowRight } from 'lucide-react';
import type { Product } from '../types';
import { formatPrice } from '../data/products';

interface HeroCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  products,
  onSelectProduct,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Curated list of signature products for the top hero carousel
  const curatedIds = [
    'prod-mug-tapa-silicona-imparable',
    'prod-termo-papa',
    'prod-mug-magico-fotos',
    'prod-mug-tradicional-personalizar-cero',
    'prod-camiseta-ajolote-cumple',
    'prod-agenda-planifica-fe',
    'prod-mug-tapa-silicona-blanco',
    'prod-rompecabezas-corazon',
    'prod-cojin-familia-amor',
    'prod-termo-mascotas',
  ];

  const carouselProducts = curatedIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

      // Estimate active index based on card width
      const cardWidth = 320; // approximate card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), carouselProducts.length - 1));
    }
  };

  useEffect(() => {
    checkScrollState();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollState, { passive: true });
      window.addEventListener('resize', checkScrollState);
      return () => {
        el.removeEventListener('scroll', checkScrollState);
        window.removeEventListener('resize', checkScrollState);
      };
    }
  }, [carouselProducts.length]);

  // Smooth auto-play advancing every 3.8s (pauses on hover/touch)
  useEffect(() => {
    if (isPaused || carouselProducts.length === 0) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Advance by one card width
          const scrollStep = 330;
          scrollContainerRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, carouselProducts.length]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollStep = 330;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollStep : scrollStep,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollStep = 330;
      scrollContainerRef.current.scrollTo({
        left: index * scrollStep,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      aria-label="Carrusel de Productos Destacados"
      className="relative pt-4 sm:pt-6 pb-6 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Header & Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-purple-200 text-purple-950 text-xs font-extrabold shadow-sm mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span>Colección Exclusiva & Regalos Favoritos</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Galería de Creaciones Personalizadas
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
              Desliza para ver nuestros mugs, termos y regalos. Toca cualquier producto para abrir sus detalles y fotos en una nueva pestaña.
            </p>
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-2xl border transition-all active:scale-95 shadow-sm ${
                canScrollLeft
                  ? 'bg-white hover:bg-purple-50 text-purple-900 border-purple-200 hover:border-pink-300 hover:shadow-md cursor-pointer'
                  : 'bg-white/40 text-purple-300 border-purple-100 cursor-not-allowed'
              }`}
              title="Ver anterior"
              aria-label="Anterior producto"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-2xl border transition-all active:scale-95 shadow-sm ${
                canScrollRight
                  ? 'bg-white hover:bg-purple-50 text-purple-900 border-purple-200 hover:border-pink-300 hover:shadow-md cursor-pointer'
                  : 'bg-white/40 text-purple-300 border-purple-100 cursor-not-allowed'
              }`}
              title="Ver siguiente"
              aria-label="Siguiente producto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Horizontal Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth"
        >
          {carouselProducts.map((product, idx) => {
            return (
              <a
                key={product.id}
                href={`#producto-${product.id}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onSelectProduct(product)}
                className="w-72 sm:w-80 shrink-0 snap-start bg-white/95 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 hover:border-pink-400 p-3.5 shadow-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group text-slate-800"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-purple-50/70 border border-purple-100 mb-3.5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={idx < 3 ? 'eager' : 'lazy'}
                  />

                  {/* Gradient Overlay for Tag Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-purple-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                      <Eye className="w-3.5 h-3.5 text-pink-300" />
                      <span>Abrir en nueva pestaña</span>
                    </span>
                  </div>

                  {/* Top Badge */}
                  {product.badge && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-purple-900 border border-purple-200 shadow-sm">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Price Tag Badge */}
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-extrabold text-xs shadow-md">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-3 pt-2.5 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-900 group-hover:text-pink-600 transition-colors">
                    <span className="flex items-center gap-1">
                      <span>Personalizar</span>
                      <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span>Ver Ficha</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {carouselProducts.map((p, index) => (
            <button
              key={`dot-${p.id}`}
              type="button"
              onClick={() => scrollToSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? 'w-7 bg-gradient-to-r from-purple-700 to-pink-600'
                  : 'w-2 bg-purple-300/70 hover:bg-purple-400'
              }`}
              title={`Ir al producto ${index + 1}`}
              aria-label={`Ir al producto ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
