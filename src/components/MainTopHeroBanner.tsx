import React from 'react';
import { Sparkles, Grid, ArrowRight, MessageCircle, Heart, Star, ShieldCheck } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

interface MainTopHeroBannerProps {
  onOpenCatalog: () => void;
}

export const MainTopHeroBanner: React.FC<MainTopHeroBannerProps> = ({
  onOpenCatalog,
}) => {
  const handleWhatsAppAdvice = () => {
    const message = `¡Hola VG Personalizados! 👋 Vi su banner principal y quiero asesoría para personalizar un regalo. ¿Me pueden ayudar con el diseño? 😊`;
    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      aria-label="Banner Principal de Productos Personalizados"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-5 pb-4"
    >
      {/* Main Banner Box with Frosted Glassmorphism and Purple/Pink Glows */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 via-purple-50/80 to-pink-50/90 border-2 border-purple-200/90 shadow-2xl p-5 sm:p-8 lg:p-10">
        
        {/* Ambient Decorative Light Orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-pink-400/25 to-purple-400/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-400/25 to-pink-300/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ============================================================ */}
          {/* LEFT: Typography, Highlights & The Eye-Catching Button       */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Top Brand Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-purple-200 text-purple-950 text-xs sm:text-sm font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
              <span>Taller de Sublimación en Pereira · Regalos con el Alma</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
              Crea recuerdos inolvidables con{' '}
              <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                diseños únicos
              </span>{' '}
              hechos para ti.
            </h1>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Estampa tus fotos favoritas, frases emotivas y momentos familiares en nuestros <strong>mugs con tapa de silicona (asa corazón)</strong>, <strong>termos inteligentes LED</strong>, <strong>rompecabezas con fotos</strong>, <strong>mugs mágicos</strong> y <strong>camisetas para eventos</strong>. Con insumos premium AAA y vista previa digital aprobada por ti antes de estampar.
            </p>

            {/* Micro Value Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-bold text-purple-950">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-100/90 border border-purple-200">
                <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                <span>Vista Previa Digital Aprobada</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pink-100/90 border border-pink-200">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                <span>Cerámica & Acero AAA</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 border border-purple-200">
                <Heart className="w-3.5 h-3.5 text-pink-500" />
                <span>Envíos Seguros a Todo Colombia</span>
              </span>
            </div>

            {/* ============================================================ */}
            {/* The Striking, Eye-Catching Button Requested by the User      */}
            {/* ============================================================ */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              
              <div className="relative group w-full sm:w-auto">
                {/* Glowing Aura Behind Button */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 rounded-full blur-md opacity-85 group-hover:opacity-100 transition duration-300 animate-pulse pointer-events-none" />

                <a
                  href="#catalogo"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onOpenCatalog}
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 hover:from-purple-800 hover:via-pink-500 hover:to-purple-900 text-white font-black text-base sm:text-lg shadow-[0_12px_35px_rgba(219,39,119,0.38)] hover:shadow-[0_16px_45px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/40 cursor-pointer text-center"
                >
                  <Grid className="w-5 h-5 text-pink-200 group-hover:rotate-12 transition-transform" />
                  <span className="tracking-wide">Ver Catálogo de Productos Personalizados</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>

              {/* Secondary WhatsApp Advice Button (Purple/Pink Palette) */}
              <button
                type="button"
                onClick={handleWhatsAppAdvice}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-extrabold text-sm sm:text-base border-2 border-purple-300 hover:border-pink-400 shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-pink-600" />
                <span>Asesoría de Diseño</span>
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-purple-900/80 font-medium">
              ✨ Toca el botón para abrir el catálogo completo con todas las categorías en otra pestaña.
            </p>

          </div>

          {/* ============================================================ */}
          {/* RIGHT: Visual Collage of Customized Products                 */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Mosaic Container */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
              
              {/* Product Card 1: Mug con Tapa de Silicona & Asa Corazón */}
              <a
                href="#producto-prod-mug-tapa-silicona-imparable"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-white border-2 border-purple-200/90 shadow-md hover:shadow-xl hover:border-pink-400 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="aspect-square w-full overflow-hidden bg-purple-50">
                  <img
                    src="/prod-mug-silicona-imparable.jpg"
                    alt="Mug Tapa de Silicona con Asa de Corazón"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 sm:p-2.5 bg-white/95">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-extrabold text-purple-900 truncate">
                      Mug Tapa Silicona
                    </span>
                    <span className="text-[10px] font-black text-pink-600">
                      $25.000
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-500 flex items-center gap-0.5 mt-0.5">
                    <Heart className="w-2.5 h-2.5 text-pink-500 fill-pink-500" />
                    <span>Asa Corazón</span>
                  </span>
                </div>
              </a>

              {/* Product Card 2: Rompecabezas Personalizado con Fotos */}
              <a
                href="#producto-prod-rompecabezas-a4"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-white border-2 border-pink-200/90 shadow-md hover:shadow-xl hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="aspect-square w-full overflow-hidden bg-pink-50">
                  <img
                    src="/prod-rompecabezas-personalizado.jpg"
                    alt="Rompecabezas Personalizado con Fotos y Mascotas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 sm:p-2.5 bg-white/95">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-extrabold text-purple-900 truncate">
                      Rompecabezas Fotos
                    </span>
                    <span className="text-[10px] font-black text-pink-600">
                      $30.000
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-500 flex items-center gap-0.5 mt-0.5">
                    <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                    <span>Mascotas & Amor</span>
                  </span>
                </div>
              </a>

              {/* Product Card 3: Termo Inteligente Digital LED */}
              <a
                href="#producto-prod-termo-papa"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-white border-2 border-purple-200/90 shadow-md hover:shadow-xl hover:border-pink-400 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="aspect-square w-full overflow-hidden bg-purple-50">
                  <img
                    src="/prod-termo-papa.jpg"
                    alt="Termo Inteligente Sensor Digital LED"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 sm:p-2.5 bg-white/95">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-extrabold text-purple-900 truncate">
                      Termo Digital LED
                    </span>
                    <span className="text-[10px] font-black text-pink-600">
                      $35.000
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-500 flex items-center gap-0.5 mt-0.5">
                    <Sparkles className="w-2.5 h-2.5 text-purple-600" />
                    <span>Sensor Táctil</span>
                  </span>
                </div>
              </a>

              {/* Product Card 4: Camisetas para Eventos Familiares */}
              <a
                href="#producto-prod-camiseta-ajolote-cumple"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-white border-2 border-pink-200/90 shadow-md hover:shadow-xl hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="aspect-square w-full overflow-hidden bg-pink-50">
                  <img
                    src="/prod-camiseta-ajolote.jpg"
                    alt="Camiseta Personalizada para Eventos y Cumpleaños"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 sm:p-2.5 bg-white/95">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-extrabold text-purple-900 truncate">
                      Camisetas Eventos
                    </span>
                    <span className="text-[10px] font-black text-pink-600">
                      $25.000
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-500 flex items-center gap-0.5 mt-0.5">
                    <Heart className="w-2.5 h-2.5 text-pink-500 fill-pink-500" />
                    <span>Toda la Familia</span>
                  </span>
                </div>
              </a>

            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-200 shadow-md text-[11px] font-black text-purple-950 flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Insumos Premium AAA Garantizados</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
