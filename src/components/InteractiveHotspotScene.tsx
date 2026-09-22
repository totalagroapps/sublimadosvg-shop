import React, { useState } from 'react';
import { Sparkles, ArrowRight, Plus, Check, Heart, Flame, Shirt, BookOpen } from 'lucide-react';
import type { Product } from '../types';

interface InteractiveHotspotSceneProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

interface Hotspot {
  id: string;
  productId: string;
  label: string;
  tag: string;
  icon: React.ElementType;
  x: string; // percentage left
  y: string; // percentage top
}

export const InteractiveHotspotScene: React.FC<InteractiveHotspotSceneProps> = ({
  products,
  onSelectProduct,
}) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('hotspot-silicona');

  const hotspots: Hotspot[] = [
    {
      id: 'hotspot-silicona',
      productId: 'prod-mug-tapa-silicona-imparable',
      label: 'Mug Tapa de Silicona & Asa Corazón',
      tag: 'Tapa Térmica $25.000',
      icon: Heart,
      x: '24%',
      y: '48%',
    },
    {
      id: 'hotspot-magico',
      productId: 'prod-mug-magico-fotos',
      label: 'Mug Mágico con Revelación Térmica',
      tag: 'Efecto Magia $25.000',
      icon: Sparkles,
      x: '52%',
      y: '32%',
    },
    {
      id: 'hotspot-termo',
      productId: 'prod-termo-papa',
      label: 'Termo Inteligente Sensor Digital LED',
      tag: 'Pantalla Táctil $35.000',
      icon: Flame,
      x: '76%',
      y: '58%',
    },
    {
      id: 'hotspot-camisetas',
      productId: 'prod-camiseta-ajolote-cumple',
      label: 'Camisetas para Eventos Familiares',
      tag: 'Tallas Familiares $25.000',
      icon: Shirt,
      x: '38%',
      y: '78%',
    },
    {
      id: 'hotspot-agendas',
      productId: 'prod-agenda-planifica-fe',
      label: 'Agenda Pasta Dura de Lujo',
      tag: 'Pasta Dura $45.000',
      icon: BookOpen,
      x: '82%',
      y: '22%',
    },
  ];

  const activeHotspot = hotspots.find((h) => h.id === activeHotspotId) || hotspots[0];
  const activeProduct = products.find((p) => p.id === activeHotspot.productId) || products[0];

  return (
    <section className="py-12 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Escena Interactiva Lookbook</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Toca los Puntos Mágicos (+) para Explorar Cada Pieza
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
            Una mirada exclusiva a nuestros productos estrella. Toca los puntos interactivos sobre la escena para desplegar al instante la ficha, fotos y precio de cada producto.
          </p>

          {/* Quick Hotspot Switcher Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {hotspots.map((h) => {
              const Icon = h.icon;
              const isSelected = activeHotspotId === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setActiveHotspotId(h.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-700 to-pink-600 text-white ring-2 ring-purple-300 scale-105'
                      : 'bg-white/85 text-purple-950 hover:bg-white border border-purple-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{h.label.split(' ')[0]} {h.label.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Interactive Lookbook Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/60 backdrop-blur-md rounded-3xl border-2 border-purple-300/80 p-5 sm:p-8 shadow-2xl overflow-hidden">
          
          {/* Visual Interactive Scene (Left / Center) */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] rounded-3xl overflow-hidden bg-gradient-to-tr from-purple-900 via-purple-950 to-slate-900 shadow-inner p-4 flex items-center justify-center group">
            
            {/* Ambient Lighting & Stage Visuals */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />

            {/* Stage Central Composition with current product image */}
            <a
              href={`#producto-${activeProduct.id}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onSelectProduct(activeProduct)}
              className="relative z-10 w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 group/stage block"
              title={`Ver ${activeProduct.name} en otra página`}
            >
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-cover transition-all duration-700 animate-fadeIn group-hover/stage:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-300 block mb-1">
                  Pieza en exhibición · Toca para abrir
                </span>
                <h4 className="font-heading font-extrabold text-base sm:text-lg leading-tight drop-shadow flex items-center justify-between">
                  <span>{activeProduct.name}</span>
                  <ArrowRight className="w-4 h-4 text-pink-400 group-hover/stage:translate-x-1 transition-transform" />
                </h4>
              </div>
            </a>

            {/* Hotspots Positioned Over Stage */}
            {hotspots.map((h) => {
              const isSelected = activeHotspotId === h.id;
              return (
                <div
                  key={h.id}
                  style={{ left: h.x, top: h.y }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    type="button"
                    onClick={() => setActiveHotspotId(h.id)}
                    className="relative flex items-center justify-center group focus:outline-none"
                    title={h.label}
                  >
                    {/* Pulsing Outer Wave */}
                    <span
                      className={`absolute inline-flex h-9 w-9 sm:h-11 sm:w-11 rounded-full opacity-75 animate-ping ${
                        isSelected ? 'bg-pink-400' : 'bg-purple-300'
                      }`}
                    />
                    
                    {/* Center Core Button */}
                    <span
                      className={`relative inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full shadow-lg border-2 border-white font-extrabold text-xs transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white scale-125 ring-4 ring-pink-400/50'
                          : 'bg-purple-900 text-white hover:scale-110'
                      }`}
                    >
                      <Plus className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-45' : ''}`} />
                    </span>

                    {/* Floating Hotspot Tag Tooltip */}
                    <span
                      className={`hidden sm:block absolute left-full ml-2.5 whitespace-nowrap px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur-md transition-all ${
                        isSelected
                          ? 'bg-white text-purple-950 opacity-100 translate-x-0'
                          : 'bg-black/60 text-white opacity-80 group-hover:opacity-100'
                      }`}
                    >
                      {h.tag}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Popover Product Detail Card (Right Column) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-purple-200 p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-4">
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold border border-purple-200">
                    <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                    <span>{activeProduct.badge || 'Detalle Exclusivo'}</span>
                  </span>

                  <span className="font-heading font-black text-2xl text-purple-900 bg-pink-50 px-3 py-1 rounded-xl border border-pink-200">
                    ${activeProduct.price.toLocaleString('es-CO')} COP
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug mt-2">
                  {activeProduct.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {activeProduct.description}
                </p>

                {/* Key features bullets */}
                <div className="mt-4 space-y-2">
                  {activeProduct.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Opens dedicated product page in new tab */}
              <div className="pt-4 border-t border-purple-100">
                <a
                  href={`#producto-${activeProduct.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onSelectProduct(activeProduct)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 group text-center"
                >
                  <span>Ver Fotos en Detalle &amp; Personalizar</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
