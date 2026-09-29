import React from 'react';
import { ArrowRight, Grid, MessageCircle, Send } from 'lucide-react';
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
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 shadow-xl p-8 sm:p-12 text-center relative overflow-hidden">
          
          {/* Heading */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Detalles Únicos Hechos con el{' '}
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 bg-clip-text text-transparent">
              Alma
            </span>
          </h2>

          {/* Clean concise description */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
            En <strong className="text-purple-950 font-bold">VG Personalizados</strong> transformamos tus recuerdos, ideas y fechas especiales en piezas de colección inolvidables.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-8">
            
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

        </div>
      </div>
    </section>
  );
};
