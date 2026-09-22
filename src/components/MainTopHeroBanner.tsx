import React from 'react';
import { Sparkles, Grid, ArrowRight, MessageCircle, Heart, Star, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react';
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

  const sublimationHighlights = [
    {
      id: 'prod-mug-tapa-silicona-imparable',
      title: 'Mug Tapa Silicona & Corazón',
      category: 'Cerámica AAA',
      price: '$25.000',
      badge: 'Asa Corazón ❤️',
      image: '/prod-mug-silicona-imparable.jpg',
      technique: 'Sublimación 360°',
    },
    {
      id: 'prod-rompecabezas-a4',
      title: 'Rompecabezas con tus Fotos',
      category: 'Fotográfico HD',
      price: '$30.000',
      badge: 'Mascotas & Amor',
      image: '/prod-rompecabezas-personalizado.jpg',
      technique: 'Alta Definición',
    },
    {
      id: 'prod-termo-papa',
      title: 'Termo Inteligente Digital LED',
      category: 'Acero Inox 304',
      price: '$35.000',
      badge: 'Sensor Táctil',
      image: '/prod-termo-papa.jpg',
      technique: 'Térmico & Digital',
    },
    {
      id: 'prod-mug-magico-fotos',
      title: 'Mug Mágico Termoactivo',
      category: 'Tinta Reactiva',
      price: '$25.000',
      badge: 'Efecto Magia ✨',
      image: '/prod-mug-magico-fotos.jpg',
      technique: 'Revela con Calor',
    },
    {
      id: 'prod-camiseta-ajolote-cumple',
      title: 'Camisetas para Eventos',
      category: 'Textil Suave',
      price: '$25.000',
      badge: 'Toda la Familia',
      image: '/prod-camiseta-ajolote.jpg',
      technique: 'Tacto Cero',
    },
    {
      id: 'prod-agenda-planifica-fe',
      title: 'Agendas de Lujo con tu Nombre',
      category: 'Papelería Premium',
      price: '$45.000',
      badge: 'Pasta Dura',
      image: '/prod-agendas-fe.webp',
      technique: 'Laminado Brillante',
    },
  ];

  return (
    <section
      aria-label="Banner Panorámico de Sublimación y Personalizados"
      className="w-full relative overflow-hidden bg-gradient-to-r from-[#3b0764] via-[#581c87] via-[#701a75] via-[#831843] to-[#3b0764] text-white py-8 sm:py-12 border-b-2 border-purple-400/40 shadow-2xl"
    >
      {/* Decorative Sublimation Chromatic Glows & Mesh Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-28 -translate-y-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-fuchsia-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Inner Container spanning the page width */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        
        {/* ============================================================ */}
        {/* TOP ROW: Editorial Header & Sublimation Presentation         */}
        {/* ============================================================ */}
        <div className="text-center max-w-4xl mx-auto space-y-3.5 mb-7 sm:mb-9">
          
          {/* Studio Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-pink-200 text-xs sm:text-sm font-extrabold shadow-sm">
            <Flame className="w-4 h-4 text-pink-400 animate-pulse" />
            <span>ARTE & SUBLIMACIÓN DE ALTA DEFINICIÓN // TALLER EN PEREIRA</span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          </div>

          {/* Panoramic Main Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12]">
            El Arte de Sublimar{' '}
            <span className="bg-gradient-to-r from-pink-300 via-yellow-200 to-pink-200 bg-clip-text text-transparent">
              Emociones
            </span>{' '}
            en Piezas Únicas
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-purple-100/90 leading-relaxed font-normal max-w-3xl mx-auto">
            Transformamos tus fotos, dedicatorias y recuerdos en cerámica brillante con <strong className="text-white font-semibold">tapas de silicona y asa corazón</strong>, termos inteligentes LED, rompecabezas familiares, prendas suaves y agendas de autor. Sublimación térmica permanente con tintas premium que nunca se borran ni se caen.
          </p>

          {/* CTA Buttons in Banner Header */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            
            {/* The Main Eye-Catching Button */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-300 to-pink-400 rounded-full blur-md opacity-85 group-hover:opacity-100 transition duration-300 animate-pulse pointer-events-none" />

              <a
                href="#catalogo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenCatalog}
                className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-11 py-4 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 hover:from-pink-500 hover:to-purple-500 text-white font-black text-base sm:text-lg shadow-[0_12px_35px_rgba(219,39,119,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/50 cursor-pointer text-center"
              >
                <Grid className="w-5 h-5 text-pink-200 group-hover:rotate-12 transition-transform" />
                <span className="tracking-wide">Ver Catálogo de Productos Personalizados</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            {/* Secondary WhatsApp Button */}
            <button
              type="button"
              onClick={handleWhatsAppAdvice}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-extrabold text-sm sm:text-base border border-white/30 backdrop-blur-md shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-pink-300" />
              <span>Asesoría de Diseño Inmediata</span>
            </button>
          </div>

        </div>

        {/* ============================================================ */}
        {/* HORIZONTAL PANORAMIC PRODUCT GALLERY (Edge-to-Edge Scroll)    */}
        {/* ============================================================ */}
        <div className="w-full">
          <div className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory">
            {sublimationHighlights.map((item) => {
              return (
                <a
                  key={item.id}
                  href={`#producto-${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-56 sm:w-64 lg:w-72 shrink-0 snap-start bg-white rounded-3xl p-3 sm:p-3.5 shadow-xl hover:shadow-2xl border-2 border-purple-200 hover:border-pink-400 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between text-slate-800"
                >
                  {/* Image container */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-purple-50 mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge top-left */}
                    <div className="absolute top-2 left-2">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] sm:text-xs font-black text-purple-900 border border-purple-200 shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    {/* Technique top-right */}
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-0.5 rounded-md bg-purple-900/90 text-white text-[9px] font-bold shadow-sm">
                        {item.technique}
                      </span>
                    </div>

                    {/* Price Tag bottom-right */}
                    <div className="absolute bottom-2.5 right-2.5">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-extrabold text-xs shadow-md">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div>
                    <span className="text-[10px] font-extrabold text-pink-600 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-1 mt-0.5">
                      {item.title}
                    </h3>

                    <div className="mt-2.5 pt-2 border-t border-purple-100 flex items-center justify-between text-[11px] font-bold text-purple-900 group-hover:text-pink-600 transition-colors">
                      <span className="flex items-center gap-1">
                        <span>Ver Ficha</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-slate-400 font-normal">Sublimación AAA</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM VALUE STRIP: Micro Guarantees across the banner       */}
        {/* ============================================================ */}
        <div className="mt-6 pt-5 border-t border-white/20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-purple-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-pink-300" />
            <span>Vista previa digital aprobada antes de estampar</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-yellow-300" />
            <span>Cerámica & Acero inoxidable AAA</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-400" />
            <span>Envíos 100% protegidos a toda Colombia</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span>Taller propio en Pereira, Risaralda</span>
          </div>
        </div>

      </div>
    </section>
  );
};
