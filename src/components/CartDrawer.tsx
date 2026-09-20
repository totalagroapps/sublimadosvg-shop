import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Send, ArrowRight, Truck, Sparkles, Image as ImageIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { CartItem, OrderCustomerInfo } from '../types';
import { STORE_CONFIG, formatPrice } from '../data/products';
import { useModalBehavior } from '../hooks/useModalBehavior';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  useModalBehavior(isOpen, onClose);

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [customerInfo, setCustomerInfo] = useState<OrderCustomerInfo>({
    name: '',
    phone: '',
    city: '',
    address: '',
    notes: '',
  });

  // Los hooks siempre se ejecutan; recién aquí decidimos si dibujar o no el carrito
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShipping = subtotal >= STORE_CONFIG.freeShippingThreshold;
  const missingForFreeShipping = Math.max(0, STORE_CONFIG.freeShippingThreshold - subtotal);

  const handleCheckoutWhatsApp = () => {
    if (!customerInfo.name.trim() || !customerInfo.phone.trim()) {
      alert('Por favor completa al menos tu nombre y teléfono para procesar el pedido.');
      return;
    }

    // Launch celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Generate formatted WhatsApp message
    let message = `🛍️ *¡NUEVO PEDIDO EN ${STORE_CONFIG.storeName.toUpperCase()}!* 🛍️\n`;
    message += `🌐 _Vía ${STORE_CONFIG.domain}_\n\n`;
    message += `👤 *DATOS DEL CLIENTE:*\n`;
    message += `• *Nombre:* ${customerInfo.name}\n`;
    message += `• *Teléfono:* ${customerInfo.phone}\n`;
    if (customerInfo.city) message += `• *Ciudad:* ${customerInfo.city}\n`;
    if (customerInfo.address) message += `• *Dirección de Entrega:* ${customerInfo.address}\n`;
    if (customerInfo.notes) message += `• *Notas:* ${customerInfo.notes}\n`;

    message += `\n📦 *DETALLE DE PRODUCTOS:*\n`;
    items.forEach((item, index) => {
      message += `\n*${index + 1}. ${item.quantity}x ${item.product.name}*\n`;
      if (item.customization.selectedColor) {
        message += `   • Color: ${item.customization.selectedColor.name}\n`;
      }
      if (item.customization.selectedSize) {
        message += `   • Talla: ${item.customization.selectedSize}\n`;
      }
      if (item.customization.customText) {
        message += `   • Texto Personalizado: "${item.customization.customText}" (Color: ${item.customization.textColor})\n`;
      }
      if (item.customization.uploadedImage) {
        message += `   • 📸 *Foto cargada en simulador:* (Te la adjunto en este chat a continuación)\n`;
      } else {
        message += `   • Foto: (La enviaré directamente aquí)\n`;
      }
      if (item.customization.notes) {
        message += `   • Instrucciones: ${item.customization.notes}\n`;
      }
      message += `   • Subtotal: ${formatPrice(item.product.price * item.quantity)}\n`;
    });

    message += `\n--------------------------------\n`;
    message += `💰 *TOTAL GENERAL:* ${formatPrice(subtotal)} ${STORE_CONFIG.currencyCode}\n`;
    message += `--------------------------------\n\n`;
    message += `¡Hola! Acabo de armar mi pedido en la tienda web ${STORE_CONFIG.domain}. ¿Me confirmas los métodos de pago y el tiempo de entrega? 😊`;

    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* HEADER */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-lg text-slate-900">
                {step === 'cart' ? 'Tu Carrito' : 'Finalizar Pedido'}
              </h2>
              <p className="text-xs text-slate-500">
                {items.length} {items.length === 1 ? 'artículo' : 'artículos'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && step === 'cart' && (
              <button
                onClick={onClearCart}
                className="text-xs text-slate-400 hover:text-rose-600 font-medium transition-colors mr-2"
              >
                Vaciar
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* FREE SHIPPING PROGRESS BAR */}
        {items.length > 0 && (
          <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-100">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                <Truck className="w-3.5 h-3.5 text-rose-500" />
                {freeShipping ? (
                  <span className="text-emerald-600 font-bold">¡Genial! Tienes Envío Gratis</span>
                ) : (
                  <span>
                    Te faltan <strong>{formatPrice(missingForFreeShipping)}</strong> para Envío Gratis
                  </span>
                )}
              </span>
              <span className="text-[10px] text-slate-400 font-bold">Meta: {formatPrice(STORE_CONFIG.freeShippingThreshold)}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-rose-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${Math.min(100, (subtotal / STORE_CONFIG.freeShippingThreshold) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-800">
                  Tu carrito está vacío
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Personaliza un vaso, taza, camiseta o rompecabezas para comenzar a llenar tu pedido.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-rose-600 text-white font-bold text-xs sm:text-sm hover:bg-rose-700 shadow-md shadow-rose-200"
              >
                Explorar Catálogo
              </button>
            </div>
          ) : step === 'cart' ? (
            /* CART ITEMS LIST */
            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.cartItemId}
                  className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex gap-3 shadow-sm"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 relative shrink-0 border border-slate-100">
                    <img 
                      src={item.customization.uploadedImage || item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                    {item.customization.uploadedImage && (
                      <span className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-white text-[8px] font-bold py-0.5 text-center flex items-center justify-center gap-0.5">
                        <ImageIcon className="w-2.5 h-2.5" />
                        <span>Foto</span>
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.cartItemId)}
                          className="text-slate-400 hover:text-rose-500 p-1 rounded transition-colors"
                          aria-label="Eliminar del carrito"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Customization specs chips */}
                      <div className="flex flex-wrap gap-1.5 mt-1 text-[11px] text-slate-500">
                        {item.customization.selectedColor && (
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                            Color: {item.customization.selectedColor.name}
                          </span>
                        )}
                        {item.customization.selectedSize && (
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                            Talla: {item.customization.selectedSize}
                          </span>
                        )}
                        {item.customization.customText && (
                          <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 font-medium truncate max-w-[150px]">
                            &ldquo;{item.customization.customText}&rdquo;
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity & Item Subtotal */}
                    <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-100">
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          aria-label="Disminuir cantidad"
                          className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-200 font-bold"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, Math.min(99, item.quantity + 1))}
                          aria-label="Aumentar cantidad"
                          className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-200 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-heading font-extrabold text-sm text-slate-900">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* CHECKOUT STEP FORM */
            <div className="space-y-4 animate-fadeIn">
              <div className="p-3.5 bg-rose-50 rounded-2xl border border-rose-100 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-rose-500 shrink-0" />
                <p className="text-xs text-rose-900 leading-tight">
                  Ingresa tus datos de contacto para armar el mensaje oficial de tu pedido listo para enviar a WhatsApp.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  placeholder="Ej: Laura Gómez"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp o Teléfono de contacto *
                </label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  placeholder="Ej: +57 312 345 6789"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                    placeholder="Tu ciudad"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Dirección
                  </label>
                  <input
                    type="text"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    placeholder="Calle, Barrio, Casa..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Indicaciones adicionales
                </label>
                <textarea
                  value={customerInfo.notes}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                  placeholder="Ej: Por favor empacar para regalo, fecha límite para entrega..."
                  rows={2}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <p className="font-bold text-slate-800">🔒 Métodos de pago disponibles al acordar:</p>
                <p>Nequi, Daviplata, Bancolombia, PSE o tarjetas. Te confirmamos los datos por WhatsApp.</p>
                <p className="text-slate-500 pt-1">
                  Tus datos se usan únicamente para preparar y entregar tu pedido; no se guardan en nuestros servidores.
                </p>
              </div>

            </div>
          )}
        </div>

        {/* FOOTER TOTALS & CTA */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-white space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xs sm:text-sm text-slate-500">Subtotal de tu compra:</span>
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                {formatPrice(subtotal)} {STORE_CONFIG.currencyCode}
              </span>
            </div>

            {step === 'cart' ? (
              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold text-sm sm:text-base shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Continuar al Pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Pedido a WhatsApp</span>
                </button>
                <button
                  onClick={() => setStep('cart')}
                  className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 text-center"
                >
                  Volver a editar el carrito
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
