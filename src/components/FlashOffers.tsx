import React from 'react';
import { Flame, Sparkles, MessageCircle, Star } from 'lucide-react';
import type { Product } from '../types';
import { STORE_CONFIG, formatPrice } from '../data/products';

interface FlashOffersProps {
  products: Product[];
  onCustomizeProduct: (product: Product) => void;
}

export const FlashOffers: React.FC<FlashOffersProps> = ({ products, onCustomizeProduct }) => {
  const offerProducts = products.filter(
    (p) => p.originalPrice && p.originalPrice > p.price
  ).slice(0, 4);

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-rose-600 via-pink-600 to-amber-500 text-white relative overflow-hidden shadow-xl">
      
      {/* Background glowing rings */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Countdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-rose-600 flex items-center justify-center shadow-lg shrink-0">
              <Flame className="w-7 h-7 text-rose-600 fill-rose-600 animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight drop-shadow">
                  Ofertas Especiales
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-300 text-slate-900 text-xs font-black uppercase shadow-sm">
                  Hasta 20% OFF
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                Artículos personalizados seleccionados con precio rebajado. Consulta disponibilidad por WhatsApp.
              </p>
            </div>
          </div>

          {/* Etiqueta honesta (sin cuenta regresiva falsa) */}
          <div className="flex items-center gap-2 bg-black/25 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/30 shadow-lg shrink-0 self-start sm:self-auto">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-bold text-white">Precios especiales de temporada</span>
          </div>
        </div>

        {/* 4 Featured Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offerProducts.map((product) => {
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between text-slate-800 group border-2 border-white/80"
              >
                {/* Image */}
                <div 
                  onClick={() => onCustomizeProduct(product)}
                  className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Discount Badge */}
                  <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white text-xs font-black shadow-md flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span>-{discount}% OFF</span>
                  </span>

                  {/* Rating Badge */}
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-[10px] font-bold text-slate-800 shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{product.rating}</span>
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 
                      onClick={() => onCustomizeProduct(product)}
                      className="font-heading font-bold text-sm text-slate-900 line-clamp-2 group-hover:text-rose-600 transition-colors cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-heading font-extrabold text-xl text-rose-600">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-slate-400 line-through ml-2">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        Ahorras {formatPrice((product.originalPrice || 0) - product.price)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      <button
                        onClick={() => onCustomizeProduct(product)}
                        className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 active:scale-95 shadow-sm shadow-purple-500/20"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                        <span>Personalizar</span>
                      </button>

                      <a
                        href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`¡Hola VG Personalizados! Quiero aprovechar la Oferta Relámpago de: *${product.name}* a ${formatPrice(product.price)} (Descuento del ${discount}%).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 active:scale-95 shadow-sm shadow-pink-500/20"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
                        <span>Pedir a Wpp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
