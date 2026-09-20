import React, { useState } from 'react';
import { Tag, Copy, Check, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_CONFIG } from '../data/products';

export const DiscountBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const coupon = 'SUBVG10';

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#e11d48', '#f59e0b', '#8b5cf6', '#10b981'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 text-white py-6 px-4 shadow-inner relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 shadow-sm animate-pulse">
            <Tag className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-heading font-extrabold text-base sm:text-xl leading-tight">
                ¡10% DE DESCUENTO EN TU PRIMER PEDIDO!
              </span>
              <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-white text-rose-600 text-[10px] font-black uppercase">
                Bienvenida
              </span>
            </div>
            <p className="text-xs text-rose-100 mt-0.5">
              Menciona el cupón al escribirnos a WhatsApp y te aplicamos el 10% inmediato.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center bg-white/20 backdrop-blur-md border-2 border-dashed border-white/60 rounded-xl px-3 py-1.5 font-mono font-black text-sm text-amber-200 tracking-wider">
            {coupon}
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-amber-100 text-slate-900 font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-rose-600" />
                <span>Copiar Cupón</span>
              </>
            )}
          </button>

          <a
            href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`¡Hola Viviana! Quiero aplicar el cupón *${coupon}* del 10% de descuento en mi primer pedido.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">Usar en WhatsApp</span>
            <span className="md:hidden">Usar</span>
          </a>
        </div>

      </div>

      {/* Decorative stars */}
      <Sparkles className="w-20 h-20 text-white/10 absolute -top-5 -right-5 pointer-events-none" />
      <Sparkles className="w-16 h-16 text-white/10 absolute -bottom-5 -left-5 pointer-events-none" />
    </section>
  );
};
