import React from 'react';
import { Sparkles, MessageCircle, Palette, Wand2, CheckCircle2 } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

interface CustomIdeaBannerProps {
  onOpenCustomizer: () => void;
}

export const CustomIdeaBanner: React.FC<CustomIdeaBannerProps> = ({ onOpenCustomizer }) => {
  return (
    <section className="py-12 sm:py-16 bg-slate-900 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-500 to-purple-900 opacity-90 animate-gradient-flow" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-200 text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <Wand2 className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Personalización 100% a tu Medida</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight drop-shadow-md">
              ¿Tienes una foto o frase especial?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-200 to-white">
                ¡Nosotros la hacemos realidad!
              </span>
            </h2>

            <p className="text-sm sm:text-base text-rose-100 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
              Mándanos la foto de tu pareja, hijos, mascota o versículo bíblico por WhatsApp. Creamos una muestra digital de cómo quedará tu mug, camiseta o termo <strong>totalmente gratis antes de estampar</strong>.
            </p>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-lg mx-auto lg:mx-0 text-xs text-white/95">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Boceto digital previo sin costo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Sublimación HD con tintas premium</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Caja de regalo decorada incluida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Despachos exprés a toda Colombia</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('¡Hola Viviana! Tengo una foto / idea para personalizar un producto. ¿Te la puedo enviar para ver cómo quedaría?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 text-white font-extrabold text-sm shadow-xl shadow-purple-500/30 hover:scale-105 transition-all flex items-center gap-2 border-2 border-white/40"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar mi Foto por WhatsApp</span>
              </a>

              <button
                onClick={onOpenCustomizer}
                className="px-5 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/40 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <Palette className="w-4 h-4 text-amber-300" />
                <span>Probar en el Simulador Online</span>
              </button>
            </div>
          </div>

          {/* Right Visual Floating Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 animate-float">
              
              {/* Back card */}
              <div className="absolute top-0 right-0 w-60 h-60 rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 bg-white">
                <img
                  src="/prod-taza-magica.webp"
                  alt="Taza personalizada"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front card */}
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-3xl overflow-hidden border-4 border-amber-300 shadow-2xl -rotate-6 group-hover:-rotate-3 transition-transform duration-500 bg-white">
                <img
                  src="/prod-vaso-termico.webp"
                  alt="Vaso térmico personalizado"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-extrabold text-center block">
                  ✨ Vaso Térmico 20oz
                </span>
              </div>

              {/* Floating animated sticker */}
              <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-full bg-amber-400 text-slate-900 text-xs font-black shadow-lg border-2 border-white flex items-center gap-1 animate-bounce" style={{ animationDuration: '2.5s' }}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>¡DISEÑO GRATIS!</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
