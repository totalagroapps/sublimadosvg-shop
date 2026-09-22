import React from 'react';
import { Sparkles, Grid, ArrowRight, MessageCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

interface MainTopHeroBannerProps {
  onOpenCatalog: () => void;
}

export const MainTopHeroBanner: React.FC<MainTopHeroBannerProps> = ({
  onOpenCatalog,
}) => {
  const handleWhatsAppAdvice = () => {
    const message = `¡Hola VG Personalizados! 👋 Vi su banner principal de sublimación y quiero asesoría para personalizar un regalo. ¿Me pueden ayudar con el diseño? 😊`;
    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      aria-label="Banner Panorámico de Sublimación y Personalizados"
      className="w-full pt-2 sm:pt-4 pb-4 sm:pb-6 max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6"
    >
      {/* 1. Main Horizontal Panoramic Sublimation Collage Banner */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-300/80 shadow-2xl bg-gradient-to-r from-purple-950 to-pink-950 group">
        <a
          href="#catalogo"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onOpenCatalog}
          className="block w-full cursor-pointer relative"
        >
          <img
            src="/banner-sublimacion-hero.jpg"
            alt="Sublimación y Personalizados VG - Mugs, Termos, Camisetas, Rompecabezas y Agendas"
            className="w-full h-auto aspect-[16/9] object-cover sm:object-contain group-hover:scale-[1.01] transition-transform duration-500"
            loading="eager"
          />

          {/* Interactive Hover Sheen & Floating Action Badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3 sm:p-6 pointer-events-none">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-purple-950 font-black text-xs sm:text-sm shadow-xl border border-purple-200">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>Toca aquí para abrir el Catálogo de Personalizados en otra pestaña</span>
              <ArrowRight className="w-4 h-4 text-purple-700" />
            </span>
          </div>
        </a>
      </div>

      {/* 2. Action Strip Directly Connected to the Banner */}
      <div className="mt-3 sm:mt-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border-2 border-purple-200/90 shadow-lg">
        
        {/* Left Slogan / Value statement */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black text-pink-600 uppercase tracking-wider mb-0.5">
            <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
            <span>Taller de Sublimación en Pereira · Regalos con el Alma</span>
          </div>
          <h2 className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-slate-900 leading-tight">
            Mugs tapa silicona, termos LED, rompecabezas con fotos, camisetas y agendas
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
            Cerámica y acero AAA · Vista previa digital aprobada por ti · Envíos a todo Colombia
          </p>
        </div>

        {/* Right: The Prominent Catalog Button Requested by the User */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 shrink-0 w-full md:w-auto">
          
          <div className="relative group w-full sm:w-auto">
            {/* Ambient pulsating aura in brand palette */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 rounded-full blur-md opacity-80 group-hover:opacity-100 transition duration-300 animate-pulse pointer-events-none" />

            <a
              href="#catalogo"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenCatalog}
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 hover:from-purple-800 hover:via-pink-500 hover:to-purple-900 text-white font-black text-xs sm:text-sm lg:text-base shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/40 cursor-pointer text-center"
            >
              <Grid className="w-4 h-4 text-pink-200 group-hover:rotate-12 transition-transform" />
              <span>Ver Catálogo de Productos Personalizados</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Secondary WhatsApp consultation button */}
          <button
            type="button"
            onClick={handleWhatsAppAdvice}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs sm:text-sm border-2 border-purple-200 hover:border-pink-300 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-pink-600" />
            <span>Asesoría de Diseño</span>
          </button>
        </div>

      </div>
    </section>
  );
};
