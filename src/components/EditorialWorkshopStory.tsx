import React from 'react';
import { MapPin, CheckCircle2, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

export const EditorialWorkshopStory: React.FC = () => {
  const handleContactWhatsApp = () => {
    const message = `¡Hola VG Personalizados! 👋 Me gustaría conocer más sobre sus servicios de personalización en Pereira.`;
    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-transparent via-purple-100/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/80 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Background Decorative Stamp */}
          <div className="absolute top-0 right-0 translate-x-10 -translate-y-10 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Editorial Manifesto */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-black uppercase tracking-widest border border-purple-200">
                <MapPin className="w-3.5 h-3.5 text-pink-500" />
                <span>Hecho en Pereira · Calle 9 #7-36</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-snug">
                "No estampamos productos en masa; creamos piezas que tocan el corazón."
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                En nuestro taller en Pereira combinamos la tecnología de sublimación térmica de alta fidelidad con el cuidado artesanal de cada detalle. Desde la tipografía hasta la saturación del color, nos aseguramos de que el regalo final supere tus expectativas.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
                <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 text-left">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mb-1.5" />
                  <h4 className="font-heading font-bold text-xs text-purple-950">Visto Bueno Digital</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Te enviamos la vista previa por WhatsApp antes de estampar.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-pink-50/70 border border-pink-100 text-left">
                  <ShieldCheck className="w-5 h-5 text-pink-600 mb-1.5" />
                  <h4 className="font-heading font-bold text-xs text-purple-950">Insumos AAA</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Cerámica premium, silicona libre de BPA y acero inoxidable 304.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 text-left">
                  <Truck className="w-5 h-5 text-purple-600 mb-1.5" />
                  <h4 className="font-heading font-bold text-xs text-purple-950">Empaque Seguro</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Protección antigolpes con entrega en Pereira y toda Colombia.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Atelier Badge / Direct Action */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-gradient-to-tr from-purple-900 via-purple-950 to-slate-900 text-white shadow-2xl space-y-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 p-0.5 bg-white shadow-md">
                <img
                  src={STORE_CONFIG.logoPrincipal}
                  alt="VG Personalizados"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold text-pink-300 uppercase tracking-widest block">
                  Atención Directa
                </span>
                <h3 className="font-heading font-black text-xl text-white mt-0.5">
                  ¿Tienes una idea en mente?
                </h3>
                <p className="text-xs text-purple-200 mt-1 max-w-xs leading-relaxed">
                  Cuéntanos tu idea, envíanos tus fotos y diseñamos juntos el detalle perfecto para tu celebración.
                </p>
              </div>

              <button
                type="button"
                onClick={handleContactWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hablar con el Taller por WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
