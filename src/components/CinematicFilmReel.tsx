import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, ArrowRight, Grid, Film, Eye } from 'lucide-react';
import type { Product } from '../types';
import { formatPrice } from '../data/products';

interface CinematicFilmReelProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onOpenCatalog: () => void;
}

export const CinematicFilmReel: React.FC<CinematicFilmReelProps> = ({
  products,
  onSelectProduct,
  onOpenCatalog,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Curated list of signature products for the 35mm film reel
  const curatedIds = [
    'prod-mug-tapa-silicona-imparable',
    'prod-termo-papa',
    'prod-mug-magico-fotos',
    'prod-mug-tradicional-personalizar-cero',
    'prod-camiseta-ajolote-cumple',
    'prod-agenda-planifica-fe',
    'prod-cojin-familia-amor',
    'prod-rompecabezas-corazon',
    'prod-mug-tapa-silicona-blanco',
    'prod-termo-mascotas',
  ];

  const reelProducts = curatedIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [reelProducts]);

  // Gentle automatic cinematic drift (pauses on mouse hover or touch)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const distance = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -distance : distance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-purple-200 text-purple-950 text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
              <Film className="w-3.5 h-3.5 text-pink-600" />
              <span>Rollo Cinematográfico 35mm // Creaciones de Autor</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
              Una historia en cada pieza.{' '}
              <span className="italic font-serif bg-gradient-to-r from-purple-700 via-pink-600 to-purple-900 bg-clip-text text-transparent">
                Desliza la película.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
              Explora nuestra cinta fotográfica en movimiento horizontal. Toca cualquier fotograma para abrirlo en otra página con sus fotos reales y opciones para personalizar.
            </p>
          </div>

          {/* Top Controls: Catalog CTA & Navigation Chevrons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#catalogo"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // If user wants to open catalog in another page or switch
                onOpenCatalog();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 group"
            >
              <Grid className="w-4 h-4 text-pink-200 group-hover:rotate-12 transition-transform" />
              <span>Ver catálogo de personalizados</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-3 rounded-2xl border transition-all active:scale-95 ${
                  canScrollLeft
                    ? 'bg-white/95 text-purple-950 hover:bg-white border-purple-300 shadow-sm cursor-pointer'
                    : 'bg-white/40 text-purple-300 border-purple-200/50 cursor-not-allowed'
                }`}
                title="Fotograma anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-3 rounded-2xl border transition-all active:scale-95 ${
                  canScrollRight
                    ? 'bg-white/95 text-purple-950 hover:bg-white border-purple-300 shadow-sm cursor-pointer'
                    : 'bg-white/40 text-purple-300 border-purple-200/50 cursor-not-allowed'
                }`}
                title="Siguiente fotograma"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* THE 35MM CINEMA FILMSTRIP REEL CONTAINER                     */}
        {/* ============================================================ */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          className="relative bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 rounded-3xl p-3 sm:p-5 shadow-2xl border-2 border-purple-400/80 overflow-hidden"
        >
          {/* Top Film Sprocket Track */}
          <div className="flex items-center justify-between gap-4 px-3 py-2 bg-black/60 rounded-t-2xl border-b border-purple-800/60 select-none overflow-hidden mb-3">
            <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-pink-300 font-bold">
              <Film className="w-3.5 h-3.5 text-pink-400 shrink-0" />
              <span>VG 35MM CINEMATIC FILMSTRIP</span>
              <span className="hidden sm:inline text-purple-400">· EDICIÓN PEREIRA // 2026</span>
            </div>
            
            {/* Sprocket Holes Pattern */}
            <div className="flex items-center gap-2.5 overflow-hidden">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-2 rounded-[2px] bg-white/20 border border-white/10 shrink-0 shadow-inner"
                />
              ))}
            </div>
          </div>

          {/* Film Frames Scroll Area */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto py-3 px-1 scrollbar-none snap-x snap-mandatory"
          >
            {reelProducts.map((product, index) => {
              const frameNumber = String(index + 1).padStart(2, '0');

              return (
                <a
                  key={product.id}
                  href={`#producto-${product.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onSelectProduct(product)}
                  className="w-72 sm:w-84 shrink-0 snap-start bg-slate-900/95 rounded-2xl border-2 border-purple-500/60 hover:border-pink-400 hover:shadow-glow transition-all duration-300 cursor-pointer flex flex-col justify-between group text-white overflow-hidden"
                >
                  {/* Frame Top Meta Strip */}
                  <div className="flex items-center justify-between px-3 py-1.5 bg-black/80 border-b border-purple-900/60 text-[10px] font-mono tracking-wider text-purple-300">
                    <span className="font-black text-pink-400">EXP {frameNumber} // 35MM</span>
                    <span className="uppercase text-purple-300/80 truncate max-w-[120px]">
                      {product.category}
                    </span>
                  </div>

                  {/* Frame Photo Area */}
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Cinematic Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />

                    {/* Frame Badge */}
                    {product.badge && (
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-purple-900/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider border border-purple-400/40">
                        {product.badge}
                      </div>
                    )}

                    {/* Price Tag in Frame */}
                    <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-xl bg-purple-950/90 backdrop-blur-md text-white text-xs font-black border border-purple-400/60 shadow-md">
                      {formatPrice(product.price)}
                    </div>

                    {/* Hover Hint */}
                    <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-full bg-white text-purple-950 text-xs font-black shadow-xl flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-pink-600" />
                        <span>Abrir producto en otra página</span>
                      </span>
                    </div>
                  </div>

                  {/* Frame Footer Caption */}
                  <div className="p-3.5 bg-slate-900/95 flex-1 flex flex-col justify-between space-y-2">
                    <h3 className="font-heading font-extrabold text-sm text-white group-hover:text-pink-300 transition-colors line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                    
                    <p className="text-[11px] text-purple-200/80 line-clamp-2 leading-snug">
                      {product.description}
                    </p>

                    <div className="pt-2 border-t border-purple-800/40 flex items-center justify-between text-xs font-bold text-pink-400">
                      <span>Toca para ver en detalle</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Bottom Film Sprocket Track */}
          <div className="flex items-center justify-between gap-4 px-3 py-2 bg-black/60 rounded-b-2xl border-t border-purple-800/60 select-none overflow-hidden mt-3">
            {/* Sprocket Holes Pattern */}
            <div className="flex items-center gap-2.5 overflow-hidden">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-2 rounded-[2px] bg-white/20 border border-white/10 shrink-0 shadow-inner"
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-purple-400 font-bold shrink-0">
              <Sparkles className="w-3 h-3 text-pink-400" />
              <span>SUB-HD · TACTO SUAVE · INSUMOS AAA</span>
            </div>
          </div>

        </div>

        {/* Bottom Giant Callout to Full Catalog */}
        <div className="mt-8 sm:mt-12 text-center p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border-2 border-purple-300 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900">
              ¿Quieres explorar todas las categorías?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Descubre nuestro catálogo completo con filtros por Mugs con Tapa de Silicona, Mugs Mágicos, Termos Inteligentes, Camisetas Familiares, Agendas y más.
            </p>
          </div>

          <a
            href="#catalogo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              onOpenCatalog();
            }}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-black text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all group shrink-0"
          >
            <Grid className="w-5 h-5 text-pink-200 group-hover:rotate-12 transition-transform" />
            <span>Ver catálogo de personalizados</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
