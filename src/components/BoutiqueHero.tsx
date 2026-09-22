import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Star,
  CheckCircle2,
  Heart,
  Flame,
  Coffee,
  Shirt,
} from 'lucide-react';
import type { ProductCategory, Product } from '../types';
import { STORE_CONFIG } from '../data/products';

interface BoutiqueHeroProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onExploreCatalog: () => void;
  onSelectProduct?: (product: Product) => void;
  products?: Product[];
}

export const BoutiqueHero: React.FC<BoutiqueHeroProps> = ({
  onSelectCategory,
  onExploreCatalog,
  onSelectProduct,
  products = [],
}) => {
  const [activeHighlight, setActiveHighlight] = useState(0);

  const heroShowcases = [
    {
      id: 'mugs-magicos',
      category: 'mugs-magicos' as ProductCategory,
      title: 'Mugs Mágicos con Efecto Térmico',
      tag: '¡Ocurre la Magia! ✨',
      price: '$25.000 COP',
      description: 'En frío es una taza negra elegante; al contacto con líquido caliente, ¡revela tu foto familiar o mensaje especial!',
      image: '/prod-mug-magico-fotos.jpg',
      badge: 'Efecto Revelador',
      icon: Coffee,
      accent: 'from-purple-600 to-pink-500',
    },
    {
      id: 'termos',
      category: 'termos' as ProductCategory,
      title: 'Termos Inteligentes con Sensor LED',
      tag: 'Innovación 500ml 🌡️',
      price: '$35.000 COP',
      description: 'Acero inoxidable 304 de doble pared que mantiene tus bebidas frías por 24h y calientes por 12h con pantalla táctil.',
      image: '/prod-termo-papa.jpg',
      badge: 'Pantalla Táctil',
      icon: Flame,
      accent: 'from-pink-500 to-purple-600',
    },
    {
      id: 'camisetas',
      category: 'camisetas' as ProductCategory,
      title: 'Camisetas Personalizadas Familiares',
      tag: 'Tallas para Toda la Familia 👕',
      price: '$25.000 COP',
      description: 'Para fiestas infantiles, cumpleaños y eventos. Manejamos tallas desde bebés y niños hasta adultos combinados.',
      image: '/prod-camiseta-ajolote.jpg',
      badge: 'Eventos & Familia',
      icon: Shirt,
      accent: 'from-purple-700 to-indigo-600',
    },
    {
      id: 'mugs-silicona',
      category: 'mugs-silicona' as ProductCategory,
      title: 'Mugs con Tapa de Silicona y Asa Corazón',
      tag: 'Tapa Térmica & Asa Corazón ❤️',
      price: '$25.000 COP',
      description: 'Mug en cerámica con tapa y base protectora de silicona más asa en corazón. Evita salpicaduras y cuida tus mesas.',
      image: '/prod-mug-silicona-imparable.jpg',
      badge: 'Nuevo Lanzamiento',
      icon: Coffee,
      accent: 'from-pink-500 to-purple-600',
    },
    {
      id: 'mugs-tradicionales',
      category: 'mugs-tradicionales' as ProductCategory,
      title: 'Mugs Tradicionales de Cerámica AAA',
      tag: 'El Detalle Más Querido ❤️',
      price: '$20.000 COP',
      description: 'Sublimación de alta fidelidad que no se cae ni se borra. Aptos para microondas y lavavajillas.',
      image: '/prod-mug-tradicional-foto.jpg',
      badge: 'Más Vendido',
      icon: Heart,
      accent: 'from-rose-500 to-purple-600',
    },
  ];

  // Auto rotate hero showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % heroShowcases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroShowcases.length]);

  const current = heroShowcases[activeHighlight];

  const handleWhatsAppConsult = () => {
    const message = `¡Hola VG Personalizados! 👋 Quiero personalizar un detalle especial (mug, termo o camiseta). ¿Cómo es el proceso para acordar el diseño? 😊`;
    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="relative overflow-hidden pt-4 sm:pt-6 pb-12 sm:pb-16">
      
      {/* Background soft pastel ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-purple-300/40 via-pink-300/30 to-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center sm:justify-start mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-300/80 shadow-sm text-purple-950 text-xs font-bold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Taller Creativo de Sublimación en Pereira · Envíos a toda Colombia</span>
          </div>
        </div>

        {/* Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Editorial Typography & High-Impact CTAs        */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center sm:text-left">
            
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
              Más que productos,{' '}
              <span className="bg-gradient-to-r from-purple-800 via-pink-600 to-purple-900 bg-clip-text text-transparent drop-shadow-sm">
                creamos emociones
              </span>{' '}
              para tus momentos únicos.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Diseñamos y sublimamos tus mejores recuerdos en{' '}
              <strong className="text-purple-950 font-bold">mugs mágicos que revelan tu foto</strong>,{' '}
              <strong className="text-purple-950 font-bold">termos inteligentes LED</strong> y{' '}
              <strong className="text-purple-950 font-bold">camisetas para toda la familia</strong> con acabado de alta durabilidad.
            </p>

            {/* CTAs in Pink & Purple */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onExploreCatalog}
                className="w-full sm:w-auto py-3.5 px-7 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-violet-700 hover:from-purple-800 hover:to-violet-800 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-700/25 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 active:scale-95 group"
              >
                <span>Ver Catálogo de Productos</span>
                <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppConsult}
                className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-pink-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Personalizar por WhatsApp</span>
              </button>
            </div>

            {/* Quick social proof badges */}
            <div className="pt-3 border-t border-purple-200/60 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-100 shadow-sm">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">5.0</span>
                <span className="text-slate-500">(+1.500 clientes felices)</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-100 shadow-sm text-purple-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Muestra digital previa por WhatsApp</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-100 shadow-sm text-pink-900">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
                <span>Garantía de calidad en sublimación</span>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Layered Boutique Interactive Showcase          */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/30 to-purple-500/30 rounded-3xl blur-2xl transform rotate-2 -z-10" />

            {/* Main Interactive Showcase Card */}
            <div 
              onClick={() => {
                const match = products.find((p) => p.category === current.category);
                if (match && onSelectProduct) {
                  onSelectProduct(match);
                } else {
                  onSelectCategory(current.category);
                }
              }}
              className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 shadow-2xl p-5 sm:p-6 transition-all duration-500 hover:border-purple-400 cursor-pointer group flex flex-col justify-between"
            >
              
              {/* Card Header with Category Tag and Price */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-extrabold uppercase tracking-wider border border-purple-200">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  <span>{current.tag}</span>
                </div>

                <span className="font-heading font-black text-lg sm:text-xl text-purple-900 bg-pink-50 px-2.5 py-0.5 rounded-xl border border-pink-200">
                  {current.price}
                </span>
              </div>

              {/* Main Photo with smooth transition */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-inner mb-4">
                <img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 animate-fadeIn"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  {current.badge}
                </div>

                {/* Interactive Click Hint */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-purple-950 text-xs font-bold shadow-md flex items-center gap-1 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                  <span>Ver fotos y descripción</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Showcase Details */}
              <div className="space-y-1.5">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-purple-800 transition-colors">
                  {current.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {current.description}
                </p>
              </div>

              {/* Showcase Selector Pills */}
              <div className="grid grid-cols-5 gap-1 pt-4 mt-3 border-t border-purple-100">
                {heroShowcases.map((item, idx) => {
                  const isActive = activeHighlight === idx;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHighlight(idx);
                      }}
                      className={`py-2 px-1 rounded-xl text-[10px] font-extrabold transition-all flex flex-col items-center gap-1 border ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-700 to-pink-600 text-white border-transparent shadow-md scale-105'
                          : 'bg-white/80 text-purple-950 border-purple-100 hover:bg-purple-50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[60px]">{item.title.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
