import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import type { ProductCategory } from '../types';
import { STORE_CONFIG } from '../data/products';

interface MarketHeroProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onExploreClick: () => void;
}

interface BannerSlide {
  id: string;
  tag: string;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  category: ProductCategory;
  ctaText: string;
  badge: string;
  gradient: string;
}

export const MarketHero: React.FC<MarketHeroProps> = ({ onSelectCategory, onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: BannerSlide[] = [
    {
      id: 'slide-fe',
      tag: '🌸 Colección Exclusiva Fe & Propósito',
      title: 'Lleva tu fe a todas partes con',
      highlight: 'diseños que inspiran tu vida',
      subtitle: 'Camisetas cristianas "Todo lo puedo en Cristo", Mugs con propósito y Agendas ejecutivas de lujo.',
      image: '/banner-catalogo-fe.webp',
      category: 'todos',
      ctaText: 'Ver Colección Fe',
      badge: 'Más Vendidos de la Tienda ✨',
      gradient: 'from-rose-950/85 via-purple-900/55 to-slate-950/80',
    },
    {
      id: 'slide-cumple',
      tag: '🎉 Fiestas Infantiles & Eventos',
      title: 'Celebra momentos únicos con',
      highlight: 'camisetas personalizadas para tus eventos',
      subtitle: 'Manejamos tallas para toda la familia (desde bebés hasta adultos) a solo $25.000.',
      image: '/prod-camiseta-ajolote.jpg',
      category: 'camisetas',
      ctaText: 'Ver Camisetas ($25.000)',
      badge: 'A solo $25.000 COP 👕',
      gradient: 'from-rose-950/85 via-rose-900/55 to-slate-950/80',
    },
    {
      id: 'slide-mugs',
      tag: '☕ Mugs Personalizados Tradicionales',
      title: 'Tu café matutino con',
      highlight: 'diseños que tocan el corazón',
      subtitle: 'Mugs tradicionales de cerámica AAA con tus fotos familiares, frases emotivas y dedicatorias a solo $20.000.',
      image: '/prod-mug-tradicional-foto.jpg',
      category: 'mugs',
      ctaText: 'Ver Mugs Tradicionales ($20.000)',
      badge: 'A solo $20.000 COP ☕',
      gradient: 'from-purple-900/85 via-purple-800/55 to-slate-950/80',
    },
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <section className="bg-cream py-6 sm:py-8 border-b border-rose-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Main Marketplace Carousel (8 cols on lg) */}
          <div className="lg:col-span-8 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[430px] bg-slate-900 group">
            {/* Background Image with Zoom */}
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Gradient Overlay for Readable Text */}
            <div className={`absolute inset-0 bg-gradient-to-r ${current.gradient}`} />

            {/* Slide Content */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between text-white z-10">
              <div className="space-y-2 sm:space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{current.tag}</span>
                </div>

                <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-white drop-shadow-md">
                  {current.title}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-pink-200">
                    {current.highlight}
                  </span>
                </h1>

                <p className="text-xs sm:text-base text-slate-200 line-clamp-2 sm:line-clamp-3 leading-relaxed drop-shadow">
                  {current.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onSelectCategory(current.category);
                    onExploreClick();
                  }}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-rose-900/40 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`¡Hola VG Personalizados! Me interesa ordenar sobre la promoción: ${current.tag}. ¿Cómo acordamos el diseño?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-purple-800 hover:bg-purple-900 text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Pedir a WhatsApp</span>
                  <span className="sm:hidden">WhatsApp</span>
                </a>

                <span className="hidden md:inline-block px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[11px] text-amber-200 font-semibold border border-amber-300/30">
                  {current.badge}
                </span>
              </div>
            </div>

            {/* Carousel Nav Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Anterior diapositiva"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente diapositiva"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-8 bg-rose-500' : 'w-2 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Ir a diapositiva ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Promotional Marketplace Cards (4 cols on lg) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Promo Card 1: Agendas de Lujo */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-gradient-to-br from-rose-500 via-pink-600 to-purple-600 text-white p-5 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div className="space-y-1.5 relative z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-extrabold uppercase tracking-wider text-amber-200">
                  📓 Edición Especial 2026
                </span>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl leading-tight">
                  Agendas Personalizadas Pasta Dura
                </h3>
                <p className="text-xs text-rose-100 line-clamp-2">
                  Anillado dorado de lujo, flores delicadas y tu nombre en la portada.
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/20 relative z-10">
                <div>
                  <span className="text-[10px] uppercase text-rose-200 block">Desde</span>
                  <span className="font-heading font-extrabold text-lg text-white">$45.000 COP</span>
                </div>
                <button
                  onClick={() => {
                    onSelectCategory('agendas');
                    onExploreClick();
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs shadow transition-colors flex items-center gap-1"
                >
                  <span>Ver Diseños</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Background decorative watermark */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
            </div>

            {/* Promo Card 2: Envíos & Garantía */}
            <div className="rounded-2xl sm:rounded-3xl border border-rose-100 bg-white p-5 shadow-md flex flex-col justify-between hover:border-rose-300 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-rose-600 font-extrabold text-xs">
                  <Truck className="w-4 h-4" />
                  <span>DESPACHOS DESDE PEREIRA</span>
                </div>
                <h4 className="font-heading font-extrabold text-base text-slate-900 leading-tight">
                  Envíos Gratis en compras desde $120.000
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Llegamos a Pereira, Dosquebradas, Eje Cafetero y toda Colombia con guía de rastreo.
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sublimación HD 100% Garantizada</span>
                </div>
                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola! Quiero consultar los tiempos de envío a mi ciudad.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 underline flex items-center gap-1"
                >
                  <span>Consultar</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
