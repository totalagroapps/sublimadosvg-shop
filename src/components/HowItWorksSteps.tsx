import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Palette, CheckCircle2, Truck } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

export const HowItWorksSteps: React.FC = () => {
  const handleWhatsAppConsult = () => {
    const message = `¡Hola VG Personalizados! 👋 Deseo asesoría para personalizar un detalle. ¿Cómo acordamos el diseño de mi foto o frase? 😊`;
    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const steps = [
    {
      step: '01',
      title: 'Elige tu Producto Favorito',
      description:
        'Selecciona entre mugs mágicos con revelado térmico, camisetas familiares con tallas para todos, termos con sensor LED o agendas de lujo.',
      icon: Palette,
      badge: 'Paso 1 · Elección',
      accent: 'from-purple-600 to-indigo-600',
    },
    {
      step: '02',
      title: 'Te Enviamos Muestra Previa por WhatsApp',
      description:
        'Envíanos tu foto, logo o frase. Nuestro diseñador prepara una vista previa digital exacta de cómo lucirá para que nos des tu visto bueno antes de estampar.',
      icon: CheckCircle2,
      badge: 'Paso 2 · Aprobación',
      accent: 'from-pink-500 to-rose-600',
    },
    {
      step: '03',
      title: 'Recibe en Casa Listo para Sorprender',
      description:
        'Estampamos con calor y tintas termoactivas de alta durabilidad. Empaque especial protegido para envíos rápidos en Pereira y toda Colombia.',
      icon: Truck,
      badge: 'Paso 3 · Entrega Feliz',
      accent: 'from-purple-700 to-pink-600',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white/30 backdrop-blur-sm border-y border-purple-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Fácil, Rápido y Seguro</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            ¿Cómo Funciona la Magia de Personalizar?
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 mt-2">
            No tienes que preocuparte por el diseño. Te acompañamos paso a paso para que tu regalo quede exactamente como lo sueñas.
          </p>
        </div>

        {/* Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md rounded-3xl border border-purple-200/90 p-6 sm:p-7 shadow-card hover:shadow-soft hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Step number watermark */}
                <span className="absolute top-4 right-5 text-4xl font-heading font-black text-purple-100/90 group-hover:text-pink-100 transition-colors pointer-events-none">
                  {item.step}
                </span>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-50 text-purple-900 text-[11px] font-bold mb-4 border border-purple-100">
                    <span>{item.badge}</span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.accent} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-slate-900 mb-2 group-hover:text-purple-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-purple-100 flex items-center gap-1.5 text-xs font-bold text-purple-700">
                  <span>Asesoría 100% personalizada</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct consultation CTA */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-700 to-pink-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl">
              ¿Tienes una foto o idea y no sabes cómo quedará?
            </h3>
            <p className="text-xs sm:text-sm text-purple-100 max-w-xl">
              Escríbenos directamente a WhatsApp. Te armamos el montaje digital previo sin costo de compromiso para que veas el resultado.
            </p>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppConsult}
            className="shrink-0 py-3.5 px-6 rounded-2xl bg-white text-purple-950 font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-pink-600" />
            <span>Hablar con un Diseñador</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-900" />
          </button>
        </div>

      </div>
    </section>
  );
};
