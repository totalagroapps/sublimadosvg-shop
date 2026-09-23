import React from 'react';
import { Sparkles, ArrowRight, Grid, MessageCircle, ShieldCheck, Heart, Coffee, Send } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

interface HeroDescriptionSectionProps {
  onOpenCatalog: () => void;
}

export const HeroDescriptionSection: React.FC<HeroDescriptionSectionProps> = ({
  onOpenCatalog,
}) => {
  const handleWhatsAppChat = () => {
    const message = `¡Hola VG Personalizados! 👋 Quiero cotizar y encargar un regalo personalizado. ¿Me pueden brindar asesoría para el diseño y fotos? 😊`;
    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section aria-label="Descripción de la Tienda y Catálogo" className="py-8 sm:py-12 relative overflow-hidden">
      {/* Decorative Pastel Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Box with Glassmorphism */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 shadow-xl p-6 sm:p-10 md:p-12 text-center relative overflow-hidden">
          
          {/* Top Brand Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-950 text-xs sm:text-sm font-extrabold shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>VG Personalizados · Pereira, Risaralda · Taller de Creación</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Detalles Únicos Hechos con el{' '}
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 bg-clip-text text-transparent">
              Alma
            </span>
          </h2>

          {/* Detailed Store Description */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto font-normal">
            En <strong className="text-purple-950 font-bold">VG Personalizados</strong> transformamos tus recuerdos, ideas y fechas especiales en piezas de colección inolvidables. Somos especialistas en <span className="font-semibold text-purple-900">mugs con tapa y base de silicona (con asa de corazón)</span>, mugs mágicos termoactivos que revelan tus fotos con calor, termos inteligentes con sensor digital LED, camisetas para eventos familiares y agendas de lujo.
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Trabajamos con insumos premium AAA de alta definición y <strong className="text-pink-700 font-semibold">siempre te enviamos una vista previa digital aprobada por ti antes de estampar</strong>. Envíos 100% seguros a Pereira, el Eje Cafetero y toda Colombia.
          </p>

          {/* 4 Trust Value Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-8 text-left">
            <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200/80 shadow-sm flex flex-col justify-between">
              <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                Vista Previa Digital
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                Apruebas diseño y fotos antes de fabricar.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-pink-50/80 border border-pink-200/80 shadow-sm flex flex-col justify-between">
              <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-pink-700 mb-2">
                <Coffee className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                Cerámica & Acero AAA
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                Insumos de alto brillo y máxima durabilidad.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200/80 shadow-sm flex flex-col justify-between">
              <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                Envíos Protegidos
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                Empaque anti-roturas a toda Colombia.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-pink-50/80 border border-pink-200/80 shadow-sm flex flex-col justify-between">
              <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-pink-700 mb-2">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                Hecho con Amor
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                Cuidado artesanal en cada detalle y foto.
              </p>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            
            {/* The Main Requested Button: "Ver catálogo de productos personalizados" */}
            <a
              href="#catalogo"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenCatalog}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl sm:rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-extrabold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-95 transition-all text-center group cursor-pointer"
            >
              <Grid className="w-5 h-5 text-pink-200 group-hover:rotate-12 transition-transform" />
              <span>Ver catálogo de productos personalizados</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Companion WhatsApp Advice Button */}
            <button
              type="button"
              onClick={handleWhatsAppChat}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 sm:py-4.5 rounded-2xl sm:rounded-full bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 hover:from-purple-800 hover:to-pink-800 text-pink-100 font-extrabold text-sm sm:text-base border-2 border-pink-400/80 shadow-lg hover:shadow-xl transition-all active:scale-95 text-center cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-yellow-300" />
              <span>Asesoría o Cotización Inmediata</span>
              <Send className="w-4 h-4 text-pink-300" />
            </button>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-500 mt-4">
            ✨ Al pulsar <strong>Ver catálogo de productos personalizados</strong> se abrirá la vista organizada por categorías en otra pestaña para que explores cómodamente.
          </p>

        </div>
      </div>
    </section>
  );
};
