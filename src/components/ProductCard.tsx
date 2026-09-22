import React from 'react';
import { Star, Sparkles, Check, MessageCircle, Heart } from 'lucide-react';
import type { Product } from '../types';
import { STORE_CONFIG, formatPrice, CATEGORIES } from '../data/products';

interface ProductCardProps {
  product: Product;
  isWishlisted?: boolean;
  onToggleWishlist?: (productId: string) => void;
  onCustomize: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted = false,
  onToggleWishlist,
  onCustomize,
}) => {
  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `¡Hola VG Personalizados! Me interesa ordenar el producto del catálogo: *${product.name}* (${formatPrice(product.price)} ${STORE_CONFIG.currencyCode}). ¿Tienen disponibilidad y cómo acordamos el diseño? 😊`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const categoryName =
    CATEGORIES.find((c) => c.id === product.category)?.name || product.category;

  return (
    <div 
      onClick={() => onCustomize(product)}
      className="bg-white/95 backdrop-blur-sm rounded-3xl border border-purple-200/90 overflow-hidden shadow-card hover:shadow-soft hover:border-purple-400 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      
      {/* Product Image Area */}
      <div 
        className="relative aspect-square bg-slate-50 overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {discount > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-purple-700 text-white text-[10px] font-extrabold shadow-sm">
              -{discount}% OFF
            </span>
          )}
          {product.badge && (
            <span className="px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist?.(product.id);
          }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-slate-700 shadow-sm flex items-center justify-center transition-all hover:scale-110 z-10"
          title={isWishlisted ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'text-pink-600 fill-pink-600' : 'text-slate-400 hover:text-pink-500'
            }`}
          />
        </button>

        {/* Bottom hover bar */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className="px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-[10px] font-bold text-slate-700 shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-purple-600" />
            <span>Personalizable</span>
          </span>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50/95 backdrop-blur-md px-1.5 py-0.5 rounded-md shadow-sm">
            Hecho a pedido
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span className="font-semibold text-purple-700 uppercase tracking-wider text-[10px]">
              {categoryName}
            </span>
            <div className="flex items-center gap-1 text-slate-600">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="font-bold text-slate-800">{product.rating}</span>
              <span className="text-slate-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onCustomize(product)}
            className="font-heading font-bold text-sm text-slate-900 group-hover:text-purple-800 transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
            {product.description}
          </p>

          {/* Quick bullet points */}
          <div className="mt-2.5 space-y-1.5">
            {product.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-tight">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Double Actions */}
        <div className="pt-3 border-t border-purple-100 space-y-2.5">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="font-heading font-extrabold text-xl text-slate-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through ml-1.5">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
              Incluye diseño
            </span>
          </div>

          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => onCustomize(product)}
              className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold text-xs shadow-sm shadow-purple-500/20 transition-all flex items-center justify-center gap-1 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-200" />
              <span>Ver & Personalizar</span>
            </button>

            <button
              onClick={handleQuickWhatsApp}
              className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs shadow-sm shadow-pink-500/20 transition-all flex items-center justify-center gap-1 active:scale-95"
              title="Pedir directamente a WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span>Pedir a Wpp</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
