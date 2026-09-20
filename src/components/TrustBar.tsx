import React from 'react';
import { Truck, ShieldCheck, Palette, CreditCard } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Envíos a Toda Colombia',
      desc: 'Despachos desde Pereira con guía de rastreo y empaque seguro.',
      highlight: 'Envío gratis desde $120.000',
    },
    {
      icon: ShieldCheck,
      title: 'Atención 1 a 1 por WhatsApp',
      desc: 'Revisas y apruebas el diseño digital antes de pasarlo a estampado.',
      highlight: 'Sin sorpresas, 100% a tu gusto',
    },
    {
      icon: Palette,
      title: 'Personalización Incluida',
      desc: 'Agrega nombres, fotos y fechas en cualquier producto sin recargo.',
      highlight: 'Sublimación HD táctil suave',
    },
    {
      icon: CreditCard,
      title: 'Pagos Fáciles y Seguros',
      desc: 'Transfiere por Nequi, Daviplata, Bancolombia, PSE o Tarjetas.',
      highlight: 'Facilidad y confianza',
    },
  ];

  return (
    <section className="bg-transparent border-y border-purple-200/80 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/85 backdrop-blur-sm border border-purple-200/90 hover:bg-white hover:border-purple-400 shadow-sm transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-800 shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-heading font-bold text-sm text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    {item.desc}
                  </p>
                  <span className="inline-block text-[11px] font-extrabold text-purple-800">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
