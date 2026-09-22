import React from 'react';
import { Sparkles, Grid, ArrowRight } from 'lucide-react';

interface TopCatalogBannerProps {
  onOpenCatalog: () => void;
}

export const TopCatalogBanner: React.FC<TopCatalogBannerProps> = ({
  onOpenCatalog,
}) => {
  return (
    <section
      aria-label="Acceso Directo al Catálogo de Personalizados"
      className="pt-5 sm:pt-7 pb-2 px-4 max-w-5xl mx-auto text-center"
    >
      <div className="inline-block relative group">
        {/* Glowing Animated Ambient Aura in Purple & Pink Palette */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 rounded-full blur-lg opacity-80 group-hover:opacity-100 transition duration-300 animate-pulse pointer-events-none" />

        {/* Striking, Highly-Visible Catalog Button */}
        <a
          href="#catalogo"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onOpenCatalog}
          className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 hover:from-purple-800 hover:via-pink-500 hover:to-purple-900 text-white font-black text-base sm:text-xl shadow-[0_12px_35px_rgba(219,39,119,0.38)] hover:shadow-[0_16px_45px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/40 cursor-pointer text-center"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
          <Grid className="w-5 h-5 sm:w-6 sm:h-6 text-pink-200 group-hover:rotate-12 transition-transform" />
          <span className="tracking-wide uppercase sm:normal-case font-heading font-extrabold">
            Ver Catálogo de Personalizados
          </span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1.5 transition-transform" />
        </a>
      </div>

      {/* Helpful orienting caption below the button */}
      <p className="text-xs sm:text-sm font-bold text-purple-950/90 mt-2.5 flex items-center justify-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping inline-block" />
        <span>Toca aquí para explorar todos nuestros productos organizados por categorías</span>
      </p>
    </section>
  );
};
