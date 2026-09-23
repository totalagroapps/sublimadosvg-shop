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
    const message = `¡Hola VG Personalizados! 👋 Vi su banner oficial y quiero asesoría para personalizar un regalo. ¿Me pueden ayudar con el diseño? 😊`;
    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      aria-label="Banner Oficial VG Personalizados"
      className="w-full relative overflow-hidden bg-gradient-to-b from-white/40 via-purple-100/30 to-transparent backdrop-blur-sm border-b border-purple-200/50 pt-2 sm:pt-4 pb-6 sm:pb-8"
    >
      {/* Ambient Pastel Glows that enhance the transparent feel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Edge-to-Edge Horizontal Panoramic Logo Banner */}
      <div className="w-full relative group">
        <a
          href="#catalogo"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onOpenCatalog}
          className="block w-full cursor-pointer relative"
          title="Ver Catálogo de Productos Personalizados"
        >
          <img
            src="/banner-vg-logo-escarcha.jpg"
            alt="VG Personalizados - Detalles Únicos para Momentos Especiales - Más que productos, creamos emociones"
            className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[480px] object-cover sm:object-contain object-center mx-auto drop-shadow-xl group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            loading="eager"
          />

          {/* Ethereal Hover Overlay Badge with Brand Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3 sm:p-5 pointer-events-none">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4a044e] via-[#6b21a8] to-[#9d174d] text-white font-extrabold text-xs sm:text-sm shadow-2xl border-2 border-pink-400">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span>Toca aquí para abrir el Catálogo de Personalizados en otra pestaña</span>
              <ArrowRight className="w-4 h-4 text-pink-200" />
            </span>
          </div>
        </a>
      </div>

      {/* Translucent Glassmorphic Action Ribbon with Brand Colors */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-3 sm:mt-5">
        <div className="p-3.5 sm:p-4 rounded-2xl sm:rounded-full bg-gradient-to-r from-[#4a044e]/95 via-[#581c87]/95 via-[#6b21a8]/95 to-[#4a044e]/95 backdrop-blur-xl border-2 border-pink-400/50 shadow-[0_12px_35px_rgba(88,28,135,0.4)] flex flex-col md:flex-row items-center justify-between gap-3.5 text-center md:text-left">
          
          {/* Slogan details */}
          <div className="px-2 sm:px-3">
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black text-pink-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
              <span>Más que productos, creamos emociones · Pereira, Colombia</span>
            </div>
            <p className="text-xs sm:text-sm text-purple-100 font-medium mt-0.5">
              Mugs tapa silicona, termos LED, rompecabezas con fotos, camisetas familiares y agendas de lujo.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href="#catalogo"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenCatalog}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer text-center border border-white/40"
            >
              <Grid className="w-4 h-4 text-pink-100" />
              <span>Ver Catálogo de Productos Personalizados</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <button
              type="button"
              onClick={handleWhatsAppAdvice}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 via-purple-700 to-pink-600 hover:from-pink-500 hover:to-purple-600 text-white font-bold text-xs sm:text-sm border-2 border-pink-300/80 shadow-md hover:shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-yellow-300" />
              <span>Asesoría</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
