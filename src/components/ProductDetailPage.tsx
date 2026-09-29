import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Star,
  Check,
  Heart,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Truck,
  Palette,
  HelpCircle,
  Share2,
  Minus,
  Plus,
  CheckCircle2,
} from 'lucide-react';
import type { Product, CustomizationData, ProductCategory } from '../types';
import { STORE_CONFIG, formatPrice, CATEGORIES } from '../data/products';

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product, customization: CustomizationData, quantity: number) => void;
  onBack: () => void;
  onSelectCategory: (category: ProductCategory) => void;
  onSelectProduct: (product: Product) => void;
  onGoHome?: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onBack,
  onSelectCategory,
  onSelectProduct,
  onGoHome,
}) => {
  // State for customization options
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.availableSizes?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | undefined>(
    product.availableColors?.[0]
  );
  const [customText, setCustomText] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('#ffffff');
  const [fontFamily, setFontFamily] = useState<string>('sans-serif');
  const [notes, setNotes] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isAddedNotice, setIsAddedNotice] = useState<boolean>(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string>(product.image);

  React.useEffect(() => {
    setSelectedGalleryImage(product.image);
    const prevTitle = document.title;
    document.title = `${product.name} | VG Personalizados Pereira`;
    return () => {
      document.title = prevTitle;
    };
  }, [product.id, product.image, product.name]);

  // Discount computation
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const categoryObj = CATEGORIES.find((c) => c.id === product.category);
  const categoryName = categoryObj?.name || product.category;

  // Add to cart handler
  const handleAddToCartClick = () => {
    const customization: CustomizationData = {
      uploadedImage: null,
      customText,
      textColor,
      fontFamily,
      selectedColor,
      selectedSize,
      notes,
    };

    onAddToCart(product, customization, quantity);
    setIsAddedNotice(true);
    setTimeout(() => setIsAddedNotice(false), 3000);
  };

  // Dedicated WhatsApp personalization handler
  const handleWhatsAppPersonalization = () => {
    let msg = `¡Hola VG Personalizados! 👋 Deseo realizar la personalización de este producto:\n\n`;
    msg += `✨ *${product.name}*\n`;
    msg += `💰 *Precio:* ${formatPrice(product.price)} ${STORE_CONFIG.currencyCode}\n`;
    if (selectedSize) {
      msg += `📏 *Talla:* ${selectedSize}\n`;
    }
    if (selectedColor) {
      msg += `🎨 *Color:* ${selectedColor.name}\n`;
    }
    if (customText.trim()) {
      msg += `✍️ *Texto o dedicatoria:* "${customText.trim()}"\n`;
    }
    if (notes.trim()) {
      msg += `📝 *Notas:* ${notes.trim()}\n`;
    }
    msg += `\nQuiero enviarles mis fotos, imágenes e indicaciones por aquí para coordinar el diseño y la vista previa digital. ¿Me pueden asesorar? 😊`;

    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // WhatsApp full order builder
  const handleWhatsAppOrder = () => {
    let msg = `¡Hola VG Personalizados! 👋 Deseo ordenar el siguiente producto:\n\n`;
    msg += `✨ *${product.name}*\n`;
    msg += `💰 *Precio unitario:* ${formatPrice(product.price)} ${STORE_CONFIG.currencyCode}\n`;
    msg += `📦 *Cantidad:* ${quantity} unidad(es)\n`;
    msg += `🏷️ *Total:* ${formatPrice(product.price * quantity)} ${STORE_CONFIG.currencyCode}\n\n`;

    if (selectedSize) {
      msg += `📏 *Talla seleccionada:* ${selectedSize}\n`;
    }
    if (selectedColor) {
      msg += `🎨 *Color base:* ${selectedColor.name}\n`;
    }
    if (customText.trim()) {
      msg += `✍️ *Texto o dedicatoria:* "${customText.trim()}"\n`;
    }
    if (notes.trim()) {
      msg += `📝 *Instrucciones especiales:* ${notes.trim()}\n`;
    }

    msg += `\n📸 *Fotos / Diseño:* Te las enviaré por este chat de WhatsApp para coordinar la vista previa antes de estampar.\n`;
    msg += `\n¿Me confirman disponibilidad y el proceso para acordar el diseño? ¡Muchas gracias! 😊`;

    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // Share link handler
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace del producto copiado al portapapeles!');
    }
  };

  // Related products from the same category
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const textColors = [
    { name: 'Blanco', hex: '#ffffff' },
    { name: 'Negro', hex: '#0f172a' },
    { name: 'Dorado', hex: '#eab308' },
    { name: 'Rojo Pasión', hex: '#ef4444' },
    { name: 'Rosa Neón', hex: '#ec4899' },
    { name: 'Morado Real', hex: '#8b5cf6' },
  ];

  const fontOptions = [
    { name: 'Moderna', value: 'sans-serif' },
    { name: 'Elegante', value: 'Georgia, serif' },
    { name: 'Manuscrita', value: 'cursive, Pacifico, sans-serif' },
    { name: 'Impacto', value: 'Impact, sans-serif' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 animate-fadeIn">
      
      {/* 1. TOP BAR: Breadcrumbs & Back Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 hover:bg-white text-purple-900 hover:text-purple-950 font-bold text-sm shadow-sm hover:shadow transition-all border border-purple-200/90 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 text-purple-700" />
          <span>Volver a productos</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Breadcrumbs */}
          <nav className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-600 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-purple-100">
            <button
              onClick={onGoHome || onBack}
              className="hover:text-purple-700 transition-colors"
            >
              Inicio
            </button>
            <span>/</span>
            <button
              onClick={() => onSelectCategory(product.category)}
              className="hover:text-purple-700 transition-colors font-semibold text-purple-800"
            >
              {categoryName}
            </button>
            <span>/</span>
            <span className="text-slate-800 font-bold truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-700 border border-purple-200 shadow-sm transition-all hover:scale-105"
            title="Compartir producto"
          >
            <Share2 className="w-4 h-4 text-purple-700" />
          </button>
        </div>
      </div>

      {/* 2. MAIN PRODUCT DETAIL CARD */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-purple-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Large Photo, Badges & Quality Guarantees         */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Main Image Container */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-purple-100 shadow-md group">
              <img
                src={selectedGalleryImage}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none">
                {discount > 0 && (
                  <span className="px-3 py-1 rounded-lg bg-purple-700 text-white text-xs font-black shadow-md uppercase tracking-wider">
                    -{discount}% OFF
                  </span>
                )}
                {product.badge && (
                  <span className="px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Wishlist Heart */}
              <button
                type="button"
                onClick={() => onToggleWishlist(product.id)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-slate-700 shadow-md flex items-center justify-center transition-all hover:scale-110 z-10"
                title={isWishlisted ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    isWishlisted ? 'text-pink-600 fill-pink-600' : 'text-slate-400 hover:text-pink-500'
                  }`}
                />
              </button>

              {/* Live Mockup Text Overlay if custom text is provided */}
              {customText && (
                <div className="absolute inset-x-6 bottom-8 pointer-events-none text-center">
                  <div className="inline-block bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-xl border border-white/30 shadow-lg">
                    <span
                      style={{ color: textColor, fontFamily }}
                      className="text-sm sm:text-base font-bold drop-shadow"
                    >
                      {customText}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Thumbnails if product has multiple images */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="pt-1">
                <span className="text-[11px] font-bold text-slate-500 block mb-1.5 uppercase tracking-wider">
                  Vistas del producto:
                </span>
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedGalleryImage(img)}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                        selectedGalleryImage === img
                          ? 'border-purple-600 ring-2 ring-purple-300 shadow-md scale-105'
                          : 'border-purple-200/80 hover:border-purple-400 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} foto ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trust highlights under photo */}
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-purple-50/80 border border-purple-100 text-purple-900 text-xs">
                <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="font-semibold">Sublimación de tacto suave y alta definición</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-pink-50/80 border border-pink-100 text-pink-900 text-xs">
                <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0" />
                <span className="font-semibold">No se cae ni se borra con las lavadas</span>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Full Information, Options, Customizer & Actions */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Category pill & Rating */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelectCategory(product.category)}
                  className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-extrabold uppercase tracking-wider hover:bg-purple-200 transition-colors"
                >
                  {categoryName}
                </button>

                <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 text-xs">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-extrabold text-slate-800">{product.rating}</span>
                  <span className="text-slate-500 font-medium">({product.reviewsCount} opiniones)</span>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                {product.name}
              </h1>

              {/* Pricing Display */}
              <div className="flex flex-wrap items-baseline gap-3 p-4 rounded-2xl bg-gradient-to-r from-purple-50/90 to-pink-50/90 border border-purple-100">
                <div>
                  <span className="font-heading font-black text-3xl sm:text-4xl text-purple-900">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xs font-bold text-slate-500 ml-1.5">COP</span>
                </div>

                {product.originalPrice && (
                  <div className="flex items-center gap-2">
                    <span className="text-base text-slate-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-pink-100 text-pink-800 text-xs font-extrabold">
                      Ahorras {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </div>
                )}

                <div className="w-full text-xs font-bold text-purple-700 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>Incluye diseño personalizado, fotos y nombres sin costo adicional</span>
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Descripción del Producto
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features and Benefits List */}
              <div className="space-y-2 pt-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Características Principales
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-xs text-slate-700"
                    >
                      <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <span className="font-medium leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selector (if available) */}
              {product.availableSizes && product.availableSizes.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Selecciona la Talla: <span className="text-purple-700 font-extrabold">{selectedSize}</span>
                    </label>
                    <span className="text-[11px] text-purple-600 font-medium">Manejamos desde bebés hasta adultos</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-3 rounded-xl font-bold text-xs transition-all border ${
                          selectedSize === size
                            ? 'bg-purple-700 text-white border-purple-700 shadow-sm scale-105'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selector (if available) */}
              {product.availableColors && product.availableColors.length > 1 && (
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Color Base: <span className="text-purple-700 font-extrabold">{selectedColor?.name}</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {product.availableColors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 py-1.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                          selectedColor?.name === color.name
                            ? 'border-purple-700 bg-purple-50 text-purple-950 font-bold shadow-sm ring-1 ring-purple-700'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-purple-300'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-inner"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* INTEGRATED CUSTOMIZATION SECTION                         */}
              {/* ======================================================== */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50/60 via-pink-50/40 to-purple-50/60 border border-purple-200/90 space-y-4 shadow-sm">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-sm">
                      <Palette className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-extrabold text-slate-900">
                        Personaliza tu Producto
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Coordinamos tu diseño directamente por WhatsApp
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold bg-purple-200/80 text-purple-900 px-2 py-0.5 rounded-md uppercase">
                    Asesoría Directa
                  </span>
                </div>

                {/* BOTÓN Y TARJETA DIRECTA A WHATSAPP PARA PERSONALIZAR */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/70 to-emerald-50 border-2 border-emerald-300 shadow-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-md shrink-0">
                      <MessageCircle className="w-5 h-5 fill-white/20" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm sm:text-base font-heading font-extrabold text-emerald-950">
                          Personalización Directa por WhatsApp
                        </h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-200/90 text-emerald-900 text-[10px] font-black uppercase tracking-wider">
                          Recomendado
                        </span>
                      </div>
                      <p className="text-xs text-emerald-900/90 mt-1 leading-relaxed">
                        ¡Personalízalo como desees! Envíanos tus fotos, imágenes, nombres o dedicatorias directamente a nuestro WhatsApp. Nuestro equipo diseñará y te enviará una vista previa digital aprobada por ti antes de estampar.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsAppPersonalization}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                    <span>Realizar Personalización por WhatsApp (Enviar Fotos y Detalles)</span>
                  </button>
                </div>

                {/* Texto o Dedicatoria opcional */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Texto, nombre o frase a estampar (Opcional)
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Ej: Te Amo Mamá, Valentina, Feliz Cumpleaños..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-xs text-slate-800 placeholder:text-slate-400"
                  />

                  {customText && (
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 block mb-1">Color del texto:</span>
                        <div className="flex gap-1.5">
                          {textColors.map((c) => (
                            <button
                              key={c.name}
                              type="button"
                              onClick={() => setTextColor(c.hex)}
                              className={`w-6 h-6 rounded-full border shadow-sm transition-transform ${
                                textColor === c.hex ? 'scale-125 ring-2 ring-purple-600' : 'hover:scale-110'
                              }`}
                              style={{ backgroundColor: c.hex }}
                              title={c.name}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-500 block mb-1">Tipografía:</span>
                        <select
                          value={fontFamily}
                          onChange={(e) => setFontFamily(e.target.value)}
                          className="w-full py-1 px-2 rounded-lg border border-purple-200 text-xs bg-white text-slate-700"
                        >
                          {fontOptions.map((f) => (
                            <option key={f.name} value={f.value}>
                              {f.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Indicaciones o Notas opcionales */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Notas o instrucciones especiales para el diseño (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej: Deseo que el fondo sea en tono lila y colocar la foto en forma de corazón..."
                    className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-xs text-slate-800 placeholder:text-slate-400 resize-none"
                  />
                </div>

              </div>

              {/* Quantity Counter & Subtotal */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-purple-100 shadow-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Cantidad
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-900 flex items-center justify-center font-bold transition-all active:scale-95"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-bold text-base text-slate-800">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-8 h-8 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-900 flex items-center justify-center font-bold transition-all active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Total a pagar
                  </span>
                  <span className="font-heading font-black text-2xl sm:text-3xl text-purple-900">
                    {formatPrice(product.price * quantity)}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 ml-1">COP</span>
                </div>
              </div>

              {/* ======================================================== */}
              {/* PRIMARY ACTION BUTTONS                                   */}
              {/* ======================================================== */}
              <div className="space-y-3 pt-2">
                
                {/* Botón WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-pink-500/25 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Pedir directamente por WhatsApp</span>
                </button>

                {/* Botón Añadir al Carrito */}
                <button
                  type="button"
                  onClick={handleAddToCartClick}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-violet-700 hover:from-purple-800 hover:to-violet-800 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-700/25 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
                >
                  <ShoppingBag className="w-5 h-5 text-purple-200" />
                  <span>Añadir al Carrito de Compras</span>
                </button>

                {/* Feedback notification when added to cart */}
                {isAddedNotice && (
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold flex items-center justify-center gap-2 animate-bounce">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>¡Producto añadido al carrito con tus personalizaciones!</span>
                  </div>
                )}
              </div>

              {/* Trust Box & Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-purple-100 text-slate-700 text-xs">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Truck className="w-4 h-4 text-purple-600 shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-900">Envíos Seguros</span>
                    <span className="text-[11px] text-slate-500">Pereira y toda Colombia</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-900">Aprobación Previa</span>
                    <span className="text-[11px] text-slate-500">Te enviamos vista previa</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-900">Pago Fácil</span>
                    <span className="text-[11px] text-slate-500">Nequi, Daviplata, Banco</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 3. DETAILED PRODUCT QUESTIONS & CARE GUIDE */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-purple-200/80 p-6 sm:p-8 shadow-sm mb-12">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-purple-600" />
          <h3 className="font-heading font-extrabold text-lg text-slate-900">
            Preguntas Frecuentes y Cuidados de este Producto
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">¿Cómo les envío mi foto o diseño?</h4>
            <p className="leading-relaxed">
              Nos la envías directamente por WhatsApp dándole al botón de personalización o al botón flotante. Nuestro equipo te confirmará que tenga excelente resolución y te enviará una vista previa digital aprobada por ti antes de estampar.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">¿Cuánto tiempo tarda la elaboración?</h4>
            <p className="leading-relaxed">
              El tiempo promedio de producción es de 24 a 48 horas hábiles una vez aprobado el diseño por WhatsApp. Si necesitas entrega express para un evento, escríbenos para priorizarlo.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">¿Cómo cuidar mi producto personalizado?</h4>
            <p className="leading-relaxed">
              En mugs: aptos para microondas y lavavajillas. En camisetas: lavar al revés con agua fría o templada y secar a la sombra para que el estampado mantenga siempre sus colores vivos intactos.
            </p>
          </div>
        </div>
      </div>

      {/* 4. RELATED PRODUCTS IN THE SAME CATEGORY */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                También te puede interesar
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Más opciones personalizables en la categoría {categoryName}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onSelectCategory(product.category)}
              className="text-xs font-bold text-purple-700 hover:text-purple-900 hover:underline"
            >
              Ver todos en {categoryName} →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <a
                key={relProduct.id}
                href={`#producto-${relProduct.id}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onSelectProduct(relProduct)}
                className="bg-white/95 rounded-3xl border border-purple-200/90 overflow-hidden shadow-card hover:shadow-soft hover:border-purple-400 hover:scale-[1.02] transition-all cursor-pointer p-3 flex flex-col justify-between group text-slate-800"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-3">
                  <img
                    src={relProduct.image}
                    alt={relProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {relProduct.badge && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/90 text-white text-[9px] font-bold">
                      {relProduct.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-xs text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {relProduct.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                      {relProduct.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-purple-100 flex items-center justify-between">
                    <span className="font-heading font-extrabold text-sm text-slate-900">
                      {formatPrice(relProduct.price)}
                    </span>
                    <span className="text-[10px] font-bold text-purple-700 group-hover:underline flex items-center gap-0.5">
                      <span>Ver info</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
