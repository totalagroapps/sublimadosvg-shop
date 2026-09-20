import React from 'react';
import { ArrowRight, Sparkles, Heart, Gift, MessageCircle } from 'lucide-react';
import type { ProductCategory } from '../types';
import { STORE_CONFIG } from '../data/products';

interface PromoBannerGridProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onExploreClick: () => void;
}

export const PromoBannerGrid: React.FC<PromoBannerGridProps> = ({
  onSelectCategory,
  onExploreClick,
}) => {
  const banners = [
    {
      id: 'banner-parejas',
      tag: 'Amor & Aniversario',
      icon: Heart,
      title: 'Combos para Parejas',
      subtitle: 'Detalles únicos + Rompecabezas en forma de corazón.',
      gradient: 'from-rose-600 via-pink-600 to-red-600',
      shadow: 'shadow-rose-500/20',
      badge: 'Regalo Perfecto ❤️',
      category: 'rompecabezas' as ProductCategory,
      image: '/prod-rompecabezas-corazon.webp',
      whatsappText: '¡Hola Viviana! Me gustaría cotizar el Combo de Parejas con Rompecabezas Corazón.',
    },
    {
      id: 'banner-cumple',
      tag: 'Fiestas & Eventos',
      icon: Gift,
      title: 'Camiseta Personalizada para tus Eventos',
      subtitle: 'Manejamos tallas para toda la familia (bebés, niños y adultos) a solo $25.000.',
      gradient: 'from-amber-500 via-orange-500 to-rose-600',
      shadow: 'shadow-amber-500/20',
      badge: 'A solo $25.000 🎂',
      category: 'camisetas' as ProductCategory,
      image: '/prod-camiseta-ajolote.jpg',
      whatsappText: '¡Hola Viviana! Me gustaría cotizar la camiseta personalizada para tus eventos (tallas para toda la familia).',
    },
    {
      id: 'banner-fe',
      tag: 'Inspiración & Fe',
      icon: Sparkles,
      title: 'Colección con Propósito',
      subtitle: 'Agendas ejecutivas pasta dura con anillado dorado + Mugs con versículos.',
      gradient: 'from-purple-600 via-violet-600 to-indigo-700',
      shadow: 'shadow-purple-500/20',
      badge: 'Diseños de Fe ✨',
      category: 'agendas' as ProductCategory,
      image: '/prod-agendas-fe.webp',
      whatsappText: '¡Hola! Quisiera ordenar la Agenda personalizada de pasta dura con nombre.',
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-transparent border-b border-purple-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-300">
              Especiales del Mes
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-slate-900 mt-1">
              Colecciones que Enamoran
            </h2>
          </div>
          <button
            onClick={() => {
              onSelectCategory('todos');
              onExploreClick();
            }}
            className="hidden sm:flex items-center gap-1.5 text-xs font-extrabold text-purple-800 hover:text-purple-900 underline"
          >
            <span>Ver todo el catálogo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Colorful Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {banners.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className={`relative rounded-3xl overflow-hidden shadow-lg ${b.shadow} bg-gradient-to-br ${b.gradient} text-white p-6 flex flex-col justify-between group hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 min-h-[260px]`}
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-white border border-white/30 shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-amber-300" />
                    <span>{b.tag}</span>
                  </span>
                  <span className="text-[10px] font-extrabold bg-amber-300 text-slate-900 px-2 py-0.5 rounded-full shadow-sm">
                    {b.badge}
                  </span>
                </div>

                {/* Center Content */}
                <div className="space-y-1.5 my-4 relative z-10 max-w-[65%]">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-tight drop-shadow">
                    {b.title}
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed drop-shadow-sm line-clamp-2">
                    {b.subtitle}
                  </p>
                </div>

                {/* Floating Product Thumbnail */}
                <div className="absolute -right-4 -bottom-4 w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 bg-white/20">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Bottom Action Button */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/20 relative z-10">
                  <button
                    onClick={() => {
                      onSelectCategory(b.category);
                      onExploreClick();
                    }}
                    className="px-4 py-2 rounded-full bg-white text-slate-900 font-extrabold text-xs shadow-md hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>Ver Colección</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(b.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-purple-800 hover:bg-purple-900 text-white shadow-md transition-colors"
                    title="Pedir combo por WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>

                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
