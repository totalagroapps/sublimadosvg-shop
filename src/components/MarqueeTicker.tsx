import React from 'react';
import { Sparkles, Truck, Heart, Coffee, Shirt, Gift, ShieldCheck } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { icon: Sparkles, text: 'PERSONALIZACIÓN 100% GRATIS SIN RECARGO' },
    { icon: Truck, text: 'ENVÍOS DESDE PEREIRA A TODA COLOMBIA' },
    { icon: Sparkles, text: 'MUGS MÁGICOS PERSONALIZADOS A $25.000 ✨' },
    { icon: Coffee, text: 'MUGS PERSONALIZADOS TRADICIONALES A $20.000' },
    { icon: Shirt, text: 'CAMISETAS PERSONALIZADAS PARA TUS EVENTOS A $25.000' },
    { icon: Gift, text: 'EMPAQUE ESPECIAL LISTO PARA REGALAR' },
    { icon: ShieldCheck, text: 'SUBLIMACIÓN HD TACTO CERO' },
    { icon: Heart, text: 'DETALLES QUE CREAN EMOCIONES' },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-800 via-pink-600 to-purple-900 text-white overflow-hidden py-2.5 shadow-md border-y border-purple-400/30 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2 mx-5 text-xs sm:text-sm font-extrabold tracking-wider uppercase">
              <Icon className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>{item.text}</span>
              <span className="text-pink-300 mx-2">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
