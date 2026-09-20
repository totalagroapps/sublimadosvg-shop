import React from 'react';
import { Heart, Sparkles, MessageCircle, Star } from 'lucide-react';
import type { Product } from '../types';
import { STORE_CONFIG, formatPrice } from '../data/products';

interface FaithCollectionShowcaseProps {
  products: Product[];
  onCustomizeProduct: (product: Product) => void;
  onExploreCategory: (cat: string) => void;
}

export const FaithCollectionShowcase: React.FC<FaithCollectionShowcaseProps> = ({
  products,
  onCustomizeProduct,
}) => {
  // Filter faith items
  const faithIds = [
    'prod-camiseta-fe-cristo',
    'prod-mug-tradicional-frases',
    'prod-agenda-personalizada-fe',
    'prod-vaso-termico-acero',
  ];

  const faithProducts = products.filter((p) => faithIds.includes(p.id));

  return (
    <section className="bg-rose-50/70 py-12 sm:py-16 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curated Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700 text-white p-6 sm:p-10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-200 text-xs font-extrabold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Edición Especial • Diseños con Propósito</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              Colección Fe: Lleva tu mensaje a donde vayas
            </h2>
            <p className="text-xs sm:text-base text-rose-100 leading-relaxed">
              Mugs, camisetas, agendas y vasos térmicos diseñados con versículos bíblicos y frases que fortalecen el corazón. Perfectos para tu uso diario o para bendecir a alguien especial.
            </p>
          </div>

          <div className="shrink-0 z-10">
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('¡Hola! Quisiera cotizar el combo completo de la Colección Fe (Camiseta + Mug + Agenda). ¿Tienen precio especial?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-amber-100 text-rose-700 font-extrabold text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Pedir Combo Fe por WhatsApp</span>
            </a>
          </div>

          {/* Soft background decor */}
          <div className="absolute right-0 top-0 w-80 h-full bg-white/5 blur-2xl pointer-events-none" />
        </div>

        {/* Products Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {faithProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-rose-100 shadow-card hover:shadow-soft hover:border-rose-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div 
                onClick={() => onCustomizeProduct(product)}
                className="relative aspect-square bg-slate-50 overflow-hidden cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-rose-700 shadow-sm border border-rose-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-rose-500" />
                  <span>{product.badge || 'Colección Fe'}</span>
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1 text-xs text-amber-500 mb-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-bold text-slate-700">{product.rating}</span>
                    <span className="text-slate-400">({product.reviewsCount})</span>
                  </div>
                  <h3
                    onClick={() => onCustomizeProduct(product)}
                    className="font-heading font-bold text-sm text-slate-900 line-clamp-2 group-hover:text-rose-600 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-lg text-slate-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onCustomizeProduct(product)}
                      className="py-2 px-2 rounded-xl bg-slate-900 hover:bg-rose-600 text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-rose-400" />
                      <span>Personalizar</span>
                    </button>

                    <a
                      href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`¡Hola VG Personalizados! Me interesa ordenar de la Colección Fe: *${product.name}* a ${formatPrice(product.price)}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>Pedir a Wpp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
