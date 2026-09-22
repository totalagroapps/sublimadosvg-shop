import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, Heart, Flame } from 'lucide-react';
import type { Product } from '../types';
import { STORE_CONFIG } from '../data/products';

interface EditorialLookbookHeroProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onExploreProducts: () => void;
}

export const EditorialLookbookHero: React.FC<EditorialLookbookHeroProps> = ({
  products,
  onSelectProduct,
  onExploreProducts,
}) => {
  const mugSilicona = products.find((p) => p.id === 'prod-mug-tapa-silicona-imparable') || products[0];
  const termoPapa = products.find((p) => p.id === 'prod-termo-papa') || products[1];
  const mugMagico = products.find((p) => p.id === 'prod-mug-magico-fotos') || products[2];

  const handleWhatsAppChat = () => {
    const message = `¡Hola VG Personalizados! 👋 Vi su tienda editorial y quiero encargar un regalo personalizado. ¿Cómo acordamos el diseño y fotos? 😊`;
    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10 pb-14 sm:pb-20">
      {/* Editorial Decorative Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-300/40 via-purple-300/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-tr from-purple-300/40 via-pink-200/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Masthead / Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-300/80 pb-3 mb-8 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-purple-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
            <span>Lookbook 2026 // VG Personalizados Pereira</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Calle 9 #7-36, Risaralda</span>
            <span className="text-purple-400">·</span>
            <span className="text-pink-600 font-extrabold">Edición Boutique & Exclusiva</span>
          </div>
        </div>

        {/* 2-Column Asymmetric Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ============================================================ */}
          {/* LEFT: Magazine Editorial Typography & Call to Actions        */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-purple-200 text-purple-950 text-xs font-extrabold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Sublimación de Alta Definición & Regalos con Alma</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              El arte de crear{' '}
              <span className="italic font-serif bg-gradient-to-r from-purple-700 via-pink-600 to-purple-900 bg-clip-text text-transparent">
                emociones
              </span>{' '}
              para toda la vida.
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transformamos tus fotos más queridas, dedicatorias íntimas y momentos familiares en piezas de cerámica premium, acero inoxidable térmico y prendas suaves que despiertan sonrisas al instante.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#catalogo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onExploreProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 group text-center"
              >
                <span>Ver catálogo de personalizados</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/95 hover:bg-white text-purple-950 font-extrabold text-sm border-2 border-purple-300 hover:border-pink-400 shadow-sm transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-pink-600" />
                <span>Asesoría Personalizada</span>
              </button>
            </div>

            {/* Micro Guarantees / Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-purple-200/90 text-left">
              <div className="p-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-purple-100 shadow-xs">
                <span className="font-heading font-black text-lg text-purple-900 block leading-none">100%</span>
                <span className="text-[10px] text-slate-600 font-semibold leading-tight block mt-1">
                  Vista previa digital antes de imprimir
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-purple-100 shadow-xs">
                <span className="font-heading font-black text-lg text-pink-600 block leading-none">Cerámica AAA</span>
                <span className="text-[10px] text-slate-600 font-semibold leading-tight block mt-1">
                  Sublimación HD que no se borra
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-purple-100 shadow-xs">
                <span className="font-heading font-black text-lg text-purple-900 block leading-none">Pereira &amp; CO</span>
                <span className="text-[10px] text-slate-600 font-semibold leading-tight block mt-1">
                  Envíos rápidos a todo el país
                </span>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT: Magazine Cover Layered Product Composition            */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card 1: Main Star Piece (Mug Silicona con Asa Corazón) */}
              <a
                href={`#producto-${mugSilicona?.id}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => mugSilicona && onSelectProduct(mugSilicona)}
                className="block relative bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border-2 border-purple-300 shadow-2xl hover:border-pink-400 hover:shadow-soft transition-all duration-300 cursor-pointer group text-slate-800"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-xs font-black uppercase tracking-wider border border-pink-200">
                    Pieza Estrella · Tapa Térmica &amp; Corazón ❤️
                  </span>
                  <span className="font-heading font-black text-xl text-purple-900 bg-purple-50 px-3 py-0.5 rounded-xl border border-purple-200">
                    $25.000 COP
                  </span>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-inner mb-3">
                  <img
                    src="/prod-mug-silicona-imparable.jpg"
                    alt="Mug con Tapa de Silicona y Asa Corazón"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-xl bg-black/75 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
                    <span>Asa Corazón &amp; Tapa Hermética</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-purple-900 transition-colors">
                      Mug Personalizado Tapa de Silicona
                    </h3>
                    <p className="text-xs text-slate-600">
                      Toca para ver descripción completa, fotos y personalizar →
                    </p>
                  </div>
                  <span className="w-9 h-9 rounded-full bg-purple-100 group-hover:bg-purple-700 text-purple-900 group-hover:text-white flex items-center justify-center transition-colors shadow-sm shrink-0 ml-2">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>

              {/* Card 2: Floating Satellite (Termo Inteligente LED) */}
              <a
                href={`#producto-${termoPapa?.id}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => termoPapa && onSelectProduct(termoPapa)}
                className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border-2 border-purple-200 shadow-xl hover:scale-105 transition-all cursor-pointer group max-w-xs text-slate-800"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-purple-100 shadow-sm">
                  <img
                    src="/prod-termo-papa.jpg"
                    alt="Termo Inteligente"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1 text-[10px] font-extrabold text-purple-700 uppercase">
                    <Flame className="w-3 h-3 text-pink-500" />
                    <span>Pantalla LED Táctil</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-xs text-slate-900 line-clamp-1 group-hover:text-purple-900">
                    Termo Inteligente 500ml
                  </h4>
                  <span className="text-xs font-black text-purple-900">$35.000 COP</span>
                </div>
              </a>

              {/* Card 3: Floating Satellite (Mug Mágico Revelador) */}
              <a
                href={`#producto-${mugMagico?.id}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => mugMagico && onSelectProduct(mugMagico)}
                className="hidden sm:flex items-center gap-3 absolute -top-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border-2 border-purple-200 shadow-xl hover:scale-105 transition-all cursor-pointer group max-w-xs text-slate-800"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-purple-100 shadow-sm">
                  <img
                    src="/prod-mug-magico-fotos.jpg"
                    alt="Mug Mágico"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1 text-[10px] font-extrabold text-pink-600 uppercase">
                    <Sparkles className="w-3 h-3" />
                    <span>Efecto Térmico</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-xs text-slate-900 line-clamp-1 group-hover:text-purple-900">
                    Mug Mágico Revelador
                  </h4>
                  <span className="text-xs font-black text-purple-900">$25.000 COP</span>
                </div>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
