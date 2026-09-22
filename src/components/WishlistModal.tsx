import React from 'react';
import { X, Heart, Sparkles, MessageCircle, Trash2 } from 'lucide-react';
import type { Product } from '../types';
import { STORE_CONFIG, formatPrice } from '../data/products';
import { useModalBehavior } from '../hooks/useModalBehavior';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onCustomizeProduct: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onCustomizeProduct,
}) => {
  useModalBehavior(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mis productos favoritos"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-fadeIn">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-rose-50">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-slate-900">
                Mis Productos Favoritos
              </h3>
              <p className="text-xs text-slate-500">
                {wishlistProducts.length} {wishlistProducts.length === 1 ? 'artículo guardado' : 'artículos guardados'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar favoritos"
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center border border-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List */}
        <div className="p-5 max-h-[60vh] overflow-y-auto divide-y divide-slate-100">
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map((p) => (
              <div key={p.id} className="py-3.5 flex items-center gap-3.5 first:pt-0 last:pb-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 truncate">
                    <a
                      href={`#producto-${p.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        onCustomizeProduct(p);
                        onClose();
                      }}
                      className="hover:text-purple-700 hover:underline"
                    >
                      {p.name}
                    </a>
                  </h4>
                  <div className="text-xs font-extrabold text-rose-600 mt-0.5">
                    {formatPrice(p.price)}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <a
                      href={`#producto-${p.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        onCustomizeProduct(p);
                        onClose();
                      }}
                      className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-[11px] font-bold transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <Sparkles className="w-3 h-3 text-purple-200" />
                      <span>Personalizar</span>
                    </a>
                    <a
                      href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`¡Hola VG Personalizados! Tengo en mis favoritos el producto: *${p.name}* a ${formatPrice(p.price)}. ¿Cómo acordamos el diseño?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-[11px] font-bold transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <MessageCircle className="w-3 h-3 text-white" />
                      <span>Pedir</span>
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromWishlist(p.id)}
                  title="Quitar de favoritos"
                  className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-400 mx-auto flex items-center justify-center mb-3">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-800">
                Aún no tienes productos en favoritos
              </h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Haz clic en el corazón de cualquier artículo para guardarlo aquí y consultarlo cuando quieras.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {STORE_CONFIG.storeName} • Pereira
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Seguir explorando
          </button>
        </div>

      </div>
    </div>
  );
};
