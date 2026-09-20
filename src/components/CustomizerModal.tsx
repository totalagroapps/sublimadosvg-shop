import React, { useState, useRef } from 'react';
import { X, Upload, Trash2, Check, ShoppingBag, Type, Palette, Sparkles, AlertCircle } from 'lucide-react';
import type { Product, CustomizationData } from '../types';
import { formatPrice } from '../data/products';
import { useModalBehavior } from '../hooks/useModalBehavior';
import { compressImage } from '../utils/compressImage';

interface CustomizerModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, customization: CustomizationData, quantity: number) => void;
}

// Envoltorio: solo monta el contenido cuando hay un producto, y `key` reinicia el formulario
// al cambiar de producto (así no hace falta un useEffect para "resetear" el estado).
export const CustomizerModal: React.FC<CustomizerModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;
  return <CustomizerContent key={product.id} product={product} onClose={onClose} onAddToCart={onAddToCart} />;
};

interface CustomizerContentProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, customization: CustomizationData, quantity: number) => void;
}

const CustomizerContent: React.FC<CustomizerContentProps> = ({ product, onClose, onAddToCart }) => {
  useModalBehavior(true, onClose);

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [customText, setCustomText] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('#ffffff');
  const [fontFamily, setFontFamily] = useState<string>('sans-serif');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | undefined>(
    product.availableColors?.[0]
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.availableSizes?.[0]
  );
  const [notes, setNotes] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'foto' | 'texto' | 'opciones'>('foto');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        alert('Por favor selecciona una imagen menor a 15MB.');
        return;
      }
      compressImage(file)
        .then(setUploadedImage)
        .catch(() => alert('No pudimos leer esa imagen. Intenta con otra o envíala por WhatsApp.'));
    }
  };

  const handleAdd = () => {
    const customization: CustomizationData = {
      uploadedImage,
      customText,
      textColor,
      fontFamily,
      selectedColor,
      selectedSize,
      notes,
    };
    onAddToCart(product, customization, quantity);
    onClose();
  };

  const textColors = [
    { name: 'Blanco', hex: '#ffffff' },
    { name: 'Negro', hex: '#0f172a' },
    { name: 'Dorado', hex: '#eab308' },
    { name: 'Rojo Pasión', hex: '#ef4444' },
    { name: 'Rosa Neón', hex: '#ec4899' },
    { name: 'Azul Real', hex: '#3b82f6' },
  ];

  const fontOptions = [
    { name: 'Moderno', value: 'sans-serif' },
    { name: 'Elegante', value: 'Georgia, serif' },
    { name: 'Manuscrita', value: 'cursive, Pacifico, sans-serif' },
    { name: 'Impacto', value: 'Impact, sans-serif' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Personalizar ${product.name}`}
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* LEFT COLUMN: INTERACTIVE VISUAL MOCKUP PREVIEW */}
        <div className="lg:w-1/2 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/80 p-6 sm:p-8 flex flex-col items-center justify-between relative border-b lg:border-b-0 lg:border-r border-slate-200">
          
          <div className="w-full flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 text-white flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Simulador en Vivo</span>
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Vista previa orientativa
            </span>
          </div>

          {/* Product Simulator Container */}
          <div className="w-full max-w-[320px] aspect-square relative flex items-center justify-center my-auto">
            
            {/* Base Product Visual */}
            <div 
              className="w-full h-full rounded-2xl relative shadow-lg overflow-hidden flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: selectedColor ? selectedColor.hex : '#f8fafc',
              }}
            >
              {/* Product Background Image as base reference */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply opacity-75"
              />

              {/* OVERLAY CUSTOMIZATION PRINT AREA */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                
                {/* Custom Photo Overlay */}
                {uploadedImage ? (
                  <div className="relative max-w-[170px] max-h-[170px] rounded-xl overflow-hidden shadow-md border-2 border-dashed border-white/60 group">
                    <img
                      src={uploadedImage}
                      alt="Tu diseño subido"
                      className="w-full h-full object-contain bg-black/10 backdrop-blur-[2px]"
                    />
                  </div>
                ) : (
                  <div className="w-40 h-32 border-2 border-dashed border-slate-400/50 rounded-xl flex flex-col items-center justify-center p-3 bg-white/40 backdrop-blur-sm text-slate-600">
                    <Upload className="w-6 h-6 mb-1 text-rose-500 opacity-80" />
                    <span className="text-[11px] font-bold">Tu diseño aquí</span>
                    <span className="text-[9px] text-slate-400">Sube tu foto o logo</span>
                  </div>
                )}

                {/* Custom Text Overlay */}
                {customText && (
                  <div 
                    className="mt-3 px-3 py-1 rounded-md backdrop-blur-sm font-bold transition-all break-words max-w-[220px]"
                    style={{
                      color: textColor,
                      fontFamily: fontFamily,
                      fontSize: customText.length > 20 ? '14px' : '18px',
                      textShadow: textColor === '#ffffff' ? '0 2px 4px rgba(0,0,0,0.8)' : '0 1px 2px rgba(255,255,255,0.8)',
                    }}
                  >
                    {customText}
                  </div>
                )}

              </div>

              {/* Puzzle piece texture overlay if it's a puzzle */}
              {product.mockupType === 'puzzle' && (
                <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
              )}
            </div>

          </div>

          {/* Simulator helper note */}
          <div className="w-full mt-4 p-2.5 rounded-xl bg-white/80 border border-slate-200 text-center text-[11px] text-slate-500">
            💡 <strong>Nota:</strong> Al hacer tu pedido por WhatsApp, nuestros diseñadores ajustan y cuadran tu foto para que la impresión quede perfecta en alta resolución.
          </div>

        </div>

        {/* RIGHT COLUMN: CONTROLS & CUSTOMIZATION OPTIONS */}
        <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          
          <div>
            {/* Header with Close button */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-tight">
                  {product.name}
                </h2>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-heading font-extrabold text-2xl text-rose-600">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Personalización Incluida
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Customization Tabs */}
            <div className="flex items-center gap-2 my-5 p-1 bg-slate-100 rounded-xl text-xs font-bold">
              <button
                onClick={() => setActiveTab('foto')}
                className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'foto' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>1. Tu Foto / Logo</span>
              </button>

              <button
                onClick={() => setActiveTab('texto')}
                className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'texto' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Type className="w-3.5 h-3.5" />
                <span>2. Texto</span>
              </button>

              <button
                onClick={() => setActiveTab('opciones')}
                className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'opciones' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>3. Opciones</span>
              </button>
            </div>

            {/* TAB 1: UPLOAD PHOTO */}
            {activeTab === 'foto' && (
              <div className="space-y-4 animate-fadeIn">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />

                {uploadedImage ? (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={uploadedImage}
                        alt="Subida"
                        className="w-16 h-16 rounded-xl object-cover border border-slate-300"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-800">¡Imagen cargada con éxito!</p>
                        <p className="text-[11px] text-slate-500">Se previsualiza en el simulador</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                      >
                        Cambiar
                      </button>
                      <button
                        onClick={() => setUploadedImage(null)}
                        className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"
                        title="Eliminar imagen"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-rose-300 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-rose-50/30 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-slate-800">Haz clic aquí para subir tu imagen</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Soporta JPG, PNG, WEBP, SVG o captura de pantalla
                    </p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-white border border-slate-200 text-slate-700">
                      Explorar archivos
                    </span>
                  </div>
                )}

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2.5 text-xs text-amber-800">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    ¿No tienes la imagen lista aún? No te preocupes, puedes agregar el pedido y enviarnos el archivo o la idea directamente por WhatsApp.
                  </span>
                </div>
              </div>
            )}

            {/* TAB 2: CUSTOM TEXT */}
            {activeTab === 'texto' && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Texto, nombre o dedicatoria
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Ej: Te Amo Mamá, Mi Graduación 2026, Carlos..."
                    maxLength={50}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block text-right">
                    {customText.length}/50 caracteres
                  </span>
                </div>

                {/* Font Style */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Estilo de Fuente
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {fontOptions.map((font) => (
                      <button
                        key={font.name}
                        onClick={() => setFontFamily(font.value)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          fontFamily === font.value
                            ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                        style={{ fontFamily: font.value }}
                      >
                        {font.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Color */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Color de las letras
                  </label>
                  <div className="flex items-center gap-2.5">
                    {textColors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setTextColor(c.hex)}
                        className={`w-8 h-8 rounded-full border-2 transition-transform flex items-center justify-center ${
                          textColor === c.hex ? 'scale-110 border-rose-500 shadow-sm' : 'border-slate-300'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {textColor === c.hex && (
                          <Check className={`w-4 h-4 ${c.hex === '#ffffff' ? 'text-slate-900' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: VARIANTS & SIZES & NOTES */}
            {activeTab === 'opciones' && (
              <div className="space-y-4 animate-fadeIn">
                {/* Available colors */}
                {product.availableColors && product.availableColors.length > 0 && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Color del artículo: <span className="text-rose-600">{selectedColor?.name}</span>
                    </label>
                    <div className="flex items-center gap-2.5">
                      {product.availableColors.map((col) => (
                        <button
                          key={col.name}
                          onClick={() => setSelectedColor(col)}
                          className={`w-9 h-9 rounded-full border-2 transition-transform flex items-center justify-center ${
                            selectedColor?.name === col.name ? 'scale-110 border-rose-500 shadow-md' : 'border-slate-300'
                          }`}
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                        >
                          {selectedColor?.name === col.name && (
                            <Check className={`w-4 h-4 ${col.hex === '#ffffff' ? 'text-slate-900' : 'text-white'}`} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Available sizes */}
                {product.availableSizes && product.availableSizes.length > 0 && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Talla seleccionada: <span className="text-rose-600">{selectedSize}</span>
                    </label>
                    <div className="flex items-center gap-2">
                      {product.availableSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-11 h-11 rounded-xl text-xs font-bold transition-all ${
                            selectedSize === size
                              ? 'bg-slate-900 text-white shadow-md'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional instructions */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Instrucciones o notas adicionales para el diseñador
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej: Quiero que le quiten el fondo a la foto, que el texto esté en cursiva y agregarle un corazón rojo..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>
              </div>
            )}

          </div>

          {/* FOOTER ACTIONS */}
          <div className="pt-5 border-t border-slate-100 mt-6 space-y-3">
            <div className="flex items-center justify-between gap-4">
              
              {/* Quantity */}
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Disminuir cantidad"
                  className="px-3.5 py-2 text-slate-600 hover:bg-slate-200 font-bold transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-sm font-bold text-slate-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(99, quantity + 1))}
                  aria-label="Aumentar cantidad"
                  className="px-3.5 py-2 text-slate-600 hover:bg-slate-200 font-bold transition-colors"
                >
                  +
                </button>
              </div>

              {/* Total & Add Button */}
              <div className="text-right">
                <p className="text-[11px] text-slate-400">Total a pagar:</p>
                <p className="font-heading font-extrabold text-xl text-slate-900">
                  {formatPrice(product.price * quantity)}
                </p>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full py-3.5 px-6 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-200 hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Agregar al Carrito de Compras</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
