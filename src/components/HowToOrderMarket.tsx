import React from 'react';
import { ShoppingBag, MessageSquareShare, Palette, PackageCheck, ArrowRight } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

export const HowToOrderMarket: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: ShoppingBag,
      title: 'Elige tu Producto',
      desc: 'Selecciona la camiseta, mug, agenda, rompecabezas o cojín que más te guste.',
    },
    {
      num: '02',
      icon: MessageSquareShare,
      title: 'Contáctanos por WhatsApp',
      desc: 'Envíanos tu foto, nombres, temática o frase. Te respondemos al instante.',
    },
    {
      num: '03',
      icon: Palette,
      title: 'Aprobación del Boceto',
      desc: 'Creamos la simulación digital de tu artículo y esperamos tu OK para estampar.',
    },
    {
      num: '04',
      icon: PackageCheck,
      title: 'Recibe en tu Puerta',
      desc: 'Entregas en Pereira y despachos a toda Colombia con empaque especial para regalo.',
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-extrabold uppercase tracking-wider mb-2 border border-rose-500/30">
            Paso a Paso
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            ¿Cómo comprar en VG Personalizados?
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Hacer tus regalos personalizados es súper fácil y 100% seguro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-rose-500/50 hover:bg-slate-800 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-extrabold text-2xl text-rose-400">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('¡Hola! Me gustaría hacer un pedido personalizado.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-800 to-indigo-950 hover:from-purple-900 hover:to-indigo-950 text-white font-extrabold text-sm shadow-xl shadow-purple-950/40 hover:scale-105 transition-all"
          >
            <span>Iniciar Pedido por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
