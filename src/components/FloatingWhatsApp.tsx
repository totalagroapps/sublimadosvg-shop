import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, ShoppingBag, Heart, Search, Home } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

interface FloatingWhatsAppProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide tooltip after 12s if user doesn't interact, but re-show if hovered
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = `¡Hola Viviana! Estoy viendo tu tienda *${STORE_CONFIG.domain}* y me gustaría cotizar un producto personalizado. ¿Me puedes asesorar? 😊`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ======================================================== */}
      {/* DESKTOP & TABLET FLOATING BUTTON (Bottom Right)          */}
      {/* ======================================================== */}
      <aside aria-label="Contacto flotante" className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3 pointer-events-auto">
        
        {/* Floating Speech Bubble Tooltip */}
        {showTooltip && (
          <div className="animate-float bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border-2 border-emerald-400 max-w-xs text-slate-800 relative group transition-all duration-300">
            {/* Close button */}
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Cerrar mensaje"
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-slate-900 text-white hover:bg-rose-600 flex items-center justify-center text-xs shadow-md transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start gap-3">
              {/* Avatar with status indicator */}
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500 shadow-sm">
                  <img
                    src={STORE_CONFIG.logoPrincipal}
                    alt="Viviana - VG Personalizados"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
              </div>

              {/* Message text */}
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <span className="font-heading font-extrabold text-xs text-slate-900">
                    Viviana Giraldo
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">
                    En línea
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  ¡Hola! 👋 ¿Tienes una idea o foto para personalizar? <strong>¡Escríbeme por WhatsApp y te armo el diseño gratis!</strong>
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="mt-1 text-[11px] font-extrabold text-emerald-600 hover:text-emerald-700 underline flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Chatear ahora mismo</span>
                </button>
              </div>
            </div>

            {/* Little speech bubble arrow */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-emerald-400 rotate-45" />
          </div>
        )}

        {/* Main Floating WhatsApp Pulse Button */}
        <button
          onClick={handleWhatsAppClick}
          className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-2xl shadow-emerald-900/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80"
          aria-label="Abrir chat de WhatsApp"
        >
          {/* Animated Background Ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-75 blur-sm group-hover:opacity-100 transition-opacity -z-10" />

          <div className="relative">
            <MessageCircle className="w-7 h-7 text-white animate-bounce" style={{ animationDuration: '3s' }} />
            {/* Unread badge */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-extrabold rounded-full flex items-center justify-center border border-white">
              1
            </span>
          </div>

          <div className="text-left pr-1 leading-tight">
            <span className="block text-[10px] text-emerald-100 font-bold uppercase tracking-wider">
              ¿Dudas? Escríbenos
            </span>
            <span className="font-heading font-extrabold text-sm text-white">
              WhatsApp en Vivo
            </span>
          </div>
        </button>

      </aside>

      {/* ======================================================== */}
      {/* MOBILE STICKY BOTTOM DOCK (Navigation + Floating WhatsApp) */}
      {/* ======================================================== */}
      <nav aria-label="Navegación móvil" className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl px-2 py-1.5 flex items-center justify-around">
        
        {/* Home */}
        <button
          onClick={handleScrollTop}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-rose-600 p-1.5 focus:outline-none"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Inicio</span>
        </button>

        {/* Catalog Search */}
        <button
          onClick={handleScrollCatalog}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-rose-600 p-1.5 focus:outline-none"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-bold">Buscar</span>
        </button>

        {/* Center Prominent WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative -top-3 w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 text-white p-3 shadow-xl shadow-emerald-500/40 border-4 border-white flex items-center justify-center active:scale-95 transition-transform"
          aria-label="WhatsApp directo"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        </button>

        {/* Wishlist */}
        <button
          onClick={onOpenWishlist}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-rose-600 p-1.5 relative focus:outline-none"
        >
          <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
          <span className="text-[10px] font-bold">Favoritos</span>
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-2 w-4 h-4 bg-rose-600 text-white rounded-full text-[9px] font-extrabold flex items-center justify-center border border-white">
              {wishlistCount}
            </span>
          )}
        </button>

        {/* Cart */}
        <button
          onClick={onOpenCart}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-rose-600 p-1.5 relative focus:outline-none"
        >
          <ShoppingBag className="w-5 h-5 text-slate-700" />
          <span className="text-[10px] font-bold">Carrito</span>
          {cartCount > 0 && (
            <span className="absolute top-0 right-2 w-4 h-4 bg-rose-600 text-white rounded-full text-[9px] font-extrabold flex items-center justify-center border border-white">
              {cartCount}
            </span>
          )}
        </button>

      </nav>
    </>
  );
};
