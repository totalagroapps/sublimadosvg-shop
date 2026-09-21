import React, { useState } from 'react';
import { Sparkles, ArrowRight, Flame, Coffee, Thermometer, ShieldCheck } from 'lucide-react';
import type { ProductCategory } from '../types';

interface MagicFeatureShowcaseProps {
  onSelectCategory: (cat: ProductCategory) => void;
}

export const MagicFeatureShowcase: React.FC<MagicFeatureShowcaseProps> = ({ onSelectCategory }) => {
  const [isHotMug, setIsHotMug] = useState<boolean>(true);
  const [thermoTemp, setThermoTemp] = useState<number>(54);

  const toggleThermoTemp = () => {
    setThermoTemp((prev) => (prev === 54 ? 8 : 54));
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Nuestros Productos Más Virales</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Descubre la Magia en Acción
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 mt-2">
            Toca los controles interactivos para simular el efecto térmico del mug mágico y la pantalla digital del termo inteligente.
          </p>
        </div>

        {/* 2-Column Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* ========================================================== */}
          {/* 1. MUG MÁGICO INTERACTIVO                                 */}
          {/* ========================================================== */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 p-6 sm:p-8 shadow-card flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-extrabold">
                  <Coffee className="w-3.5 h-3.5 text-purple-700" />
                  <span>Mug Termosensible 11oz</span>
                </span>
                <span className="font-heading font-black text-xl text-purple-900">
                  $25.000 COP
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
                Simulador del Efecto Térmico Revelador
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toca el botón para ver cómo cambia de una taza negra mate a revelar la foto de tus seres queridos con café caliente.
              </p>

              {/* Interactive Photo Box */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-inner my-5">
                <img
                  src={isHotMug ? '/prod-mug-magico-fotos.jpg' : '/prod-mug-negro-personalizar.jpg'}
                  alt={isHotMug ? 'Mug revelado con calor' : 'Mug en frío negro'}
                  className="w-full h-full object-cover transition-all duration-700"
                />

                {/* Status badge on photo */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 backdrop-blur-md transition-colors text-white"
                  style={{ backgroundColor: isHotMug ? 'rgba(190, 24, 93, 0.85)' : 'rgba(15, 23, 42, 0.85)' }}
                >
                  <span>{isHotMug ? '🔥 Café Caliente: ¡Foto Revelada!' : '❄️ Taza Fría: Fondo Negro Oculto'}</span>
                </div>
              </div>

              {/* Interactive Switch Controls */}
              <div className="flex items-center justify-center gap-2 p-1.5 bg-purple-50/80 rounded-2xl border border-purple-100">
                <button
                  type="button"
                  onClick={() => setIsHotMug(false)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-extrabold transition-all ${
                    !isHotMug
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-700 hover:bg-purple-100'
                  }`}
                >
                  Ver en Frío ❄️
                </button>
                <button
                  type="button"
                  onClick={() => setIsHotMug(true)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 ${
                    isHotMug
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md'
                      : 'text-pink-700 hover:bg-pink-100/60'
                  }`}
                >
                  <span>Ver con Café Caliente 🔥</span>
                </button>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-purple-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Apto para microondas y lavavajillas
              </span>
              <button
                type="button"
                onClick={() => onSelectCategory('mugs-magicos')}
                className="py-2.5 px-4 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-950 font-extrabold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>Ver Mugs Mágicos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ========================================================== */}
          {/* 2. TERMO INTELIGENTE INTERACTIVO                          */}
          {/* ========================================================== */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 p-6 sm:p-8 shadow-card flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-xs font-extrabold">
                  <Flame className="w-3.5 h-3.5 text-pink-600" />
                  <span>Acero Inoxidable 500ml</span>
                </span>
                <span className="font-heading font-black text-xl text-purple-900">
                  $35.000 COP
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
                Simulador de la Tapa Táctil con Sensor LED
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toca la tapa digital para simular la lectura de temperatura de bebidas calientes o frías en tiempo real.
              </p>

              {/* Interactive Photo Box */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-inner my-5">
                <img
                  src="/prod-termo-papa.jpg"
                  alt="Termo inteligente con sensor LED"
                  className="w-full h-full object-cover"
                />

                {/* Simulated LED display badge */}
                <div 
                  onClick={toggleThermoTemp}
                  className="absolute top-3 right-3 cursor-pointer group bg-black/85 backdrop-blur-md border border-purple-300/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 transition-transform hover:scale-110 active:scale-95"
                  title="Toca para cambiar temperatura"
                >
                  <Thermometer className={`w-4 h-4 ${thermoTemp > 30 ? 'text-amber-400' : 'text-cyan-400'}`} />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">
                      Pantalla Táctil LED
                    </span>
                    <span className="font-mono font-black text-lg text-white">
                      {thermoTemp}°C {thermoTemp > 30 ? '🔥' : '❄️'}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Doble pared al vacío 304</span>
                </div>
              </div>

              {/* Interactive Switch Controls */}
              <div className="flex items-center justify-center gap-2 p-1.5 bg-purple-50/80 rounded-2xl border border-purple-100">
                <button
                  type="button"
                  onClick={() => setThermoTemp(54)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-extrabold transition-all ${
                    thermoTemp > 30
                      ? 'bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-md'
                      : 'text-slate-700 hover:bg-purple-100'
                  }`}
                >
                  Modo Caliente (54°C) 🔥
                </button>
                <button
                  type="button"
                  onClick={() => setThermoTemp(8)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-extrabold transition-all ${
                    thermoTemp <= 30
                      ? 'bg-gradient-to-r from-purple-800 to-indigo-700 text-white shadow-md'
                      : 'text-slate-700 hover:bg-purple-100'
                  }`}
                >
                  Modo Frío (8°C) ❄️
                </button>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-purple-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Frío 24 horas · Caliente 12 horas
              </span>
              <button
                type="button"
                onClick={() => onSelectCategory('termos')}
                className="py-2.5 px-4 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-950 font-extrabold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>Ver Termos Inteligentes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
