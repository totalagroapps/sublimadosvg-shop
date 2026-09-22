import React from 'react';
import { ArrowRight, Sparkles, Coffee, Shirt, Flame, BookOpen, Check } from 'lucide-react';
import type { ProductCategory, Product } from '../types';

interface BentoCategoryGridProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onSelectProduct?: (product: Product) => void;
  products?: Product[];
}

export const BentoCategoryGrid: React.FC<BentoCategoryGridProps> = ({
  onSelectCategory,
  onSelectProduct,
  products = [],
}) => {
  return (
    <section className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Departamentos Exclusivos</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Explora Nuestras Categorías de Personalizados
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-xl">
              Toca cualquier categoría para ver los productos disponibles, personalizarlos desde cero o pedirlos directamente por WhatsApp.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectCategory('todos')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-white/90 hover:bg-white text-purple-900 font-extrabold text-xs sm:text-sm shadow-sm hover:shadow border border-purple-200 transition-all self-center sm:self-auto active:scale-95"
          >
            <span>Ver Todo el Catálogo</span>
            <ArrowRight className="w-4 h-4 text-purple-600" />
          </button>
        </div>

        {/* Bento Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* ========================================================== */}
          {/* CARD 1: MUGS MÁGICOS (Destacado, span 6)                   */}
          {/* ========================================================== */}
          <div
            onClick={() => onSelectCategory('mugs-magicos')}
            className="lg:col-span-6 bg-white/90 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 p-6 sm:p-7 shadow-card hover:shadow-soft hover:border-purple-400 hover:scale-[1.01] transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-200/40 via-pink-200/30 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900 text-white text-xs font-bold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Efecto Revelador Térmico</span>
                </span>
                <span className="font-heading font-black text-xl text-purple-900 bg-pink-100/90 px-3 py-0.5 rounded-xl border border-pink-200">
                  $25.000 COP
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 group-hover:text-purple-900 transition-colors">
                Mugs Mágicos Personalizados
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md leading-relaxed">
                En frío una taza negra sobria que oculta el diseño. Al contacto con café o líquidos calientes, ¡ocurre la magia y revela tus fotos familiares!
              </p>

              <div className="flex flex-wrap gap-2 mt-3 text-[11px] font-semibold text-slate-700">
                <span className="flex items-center gap-1 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                  <Check className="w-3.5 h-3.5 text-purple-600" />
                  <span>Cerámica AAA 11oz</span>
                </span>
                <span className="flex items-center gap-1 bg-pink-50 px-2.5 py-1 rounded-lg border border-pink-100">
                  <Check className="w-3.5 h-3.5 text-pink-600" />
                  <span>Personalizable desde cero</span>
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-sm">
                <img
                  src="/prod-mug-magico-fotos.jpg"
                  alt="Mug mágico con fotos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                  Con Calor 🔥
                </span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-sm">
                <img
                  src="/prod-mug-negro-personalizar.jpg"
                  alt="Mug mágico en frío"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                  En Frío ❄️
                </span>
              </div>
            </div>

            {/* Clickable Product Names */}
            <div className="mt-4 pt-3 border-t border-purple-100">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-900/80 block mb-2">
                Productos disponibles (toca para ver fotos y descripción):
              </span>
              <div className="flex flex-col gap-1.5">
                {products
                  .filter((p) => p.category === 'mugs-magicos')
                  .slice(0, 3)
                  .map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct?.(p);
                      }}
                      className="w-full flex items-center justify-between gap-2 p-2 rounded-xl bg-purple-50/80 hover:bg-pink-100/90 text-left transition-all border border-purple-200/70 group/item active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                        <span className="text-xs font-bold text-slate-800 group-hover/item:text-purple-900 truncate">
                          {p.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-extrabold text-purple-900 shrink-0 bg-white/95 px-2 py-0.5 rounded-md border border-purple-200 shadow-sm">
                        ${p.price.toLocaleString('es-CO')}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-800 group-hover:text-purple-950">
              <span>Explorar Mugs Mágicos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* ========================================================== */}
          {/* CARD 2: MUGS TAPA DE SILICONA (Destacado, span 6)          */}
          {/* ========================================================== */}
          <div
            onClick={() => onSelectCategory('mugs-silicona')}
            className="lg:col-span-6 bg-white/90 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 p-6 sm:p-7 shadow-card hover:shadow-soft hover:border-purple-400 hover:scale-[1.01] transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/40 via-purple-200/30 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-xs font-bold border border-pink-200 shadow-sm">
                  <Coffee className="w-3.5 h-3.5 text-pink-600" />
                  <span>Tapa Térmica & Asa Corazón ❤️</span>
                </span>
                <span className="font-heading font-black text-xl text-purple-900 bg-pink-100/90 px-3 py-0.5 rounded-xl border border-pink-200">
                  $25.000 COP
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 group-hover:text-purple-900 transition-colors">
                Mugs con Tapa de Silicona
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md leading-relaxed">
                Tapa y base de silicona que conserva el calor, evita salpicaduras y amortigua golpes. Con asa ergonómica en corazón. ¡Listo para personalizar con fotos o frases!
              </p>

              <div className="flex flex-wrap gap-2 mt-3 text-[11px] font-semibold text-slate-700">
                <span className="flex items-center gap-1 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                  <Check className="w-3.5 h-3.5 text-purple-600" />
                  <span>Tapa y Base Antideslizante</span>
                </span>
                <span className="flex items-center gap-1 bg-pink-50 px-2.5 py-1 rounded-lg border border-pink-100">
                  <Check className="w-3.5 h-3.5 text-pink-600" />
                  <span>Asa en Forma de Corazón</span>
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-sm">
                <img
                  src="/prod-mug-silicona-imparable.jpg"
                  alt="Mug silicona diseño Flork"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                  Diseño Flork 🌸
                </span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-sm">
                <img
                  src="/prod-mug-silicona-blanco.jpg"
                  alt="Mug silicona personalizable desde cero"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                  Personalízalo Desde Cero ✨
                </span>
              </div>
            </div>

            {/* Clickable Product Names */}
            <div className="mt-4 pt-3 border-t border-pink-100">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-pink-950/80 block mb-2">
                Productos disponibles (toca para ver fotos y descripción):
              </span>
              <div className="flex flex-col gap-1.5">
                {products
                  .filter((p) => p.category === 'mugs-silicona')
                  .map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct?.(p);
                      }}
                      className="w-full flex items-center justify-between gap-2 p-2 rounded-xl bg-pink-50/80 hover:bg-purple-100/90 text-left transition-all border border-pink-200/70 group/item active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                        <span className="text-xs font-bold text-slate-800 group-hover/item:text-purple-900 truncate">
                          {p.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-extrabold text-purple-900 shrink-0 bg-white/95 px-2 py-0.5 rounded-md border border-purple-200 shadow-sm">
                        ${p.price.toLocaleString('es-CO')}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-pink-700 group-hover:text-pink-900">
              <span>Ver Mugs Tapa de Silicona</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* ========================================================== */}
          {/* CARD 3: CAMISETAS PARA EVENTOS (span 4)                    */}
          {/* ========================================================== */}
          <div
            onClick={() => onSelectCategory('camisetas')}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 p-5 sm:p-6 shadow-card hover:shadow-soft hover:border-purple-400 hover:scale-[1.01] transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-xs font-bold border border-pink-200">
                  <Shirt className="w-3.5 h-3.5 text-pink-600" />
                  <span>Eventos & Fiestas</span>
                </span>
                <span className="font-heading font-black text-xl text-purple-900 bg-purple-50 px-3 py-0.5 rounded-xl border border-purple-200">
                  $25.000 COP
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-slate-900 group-hover:text-purple-900 transition-colors">
                Camisetas para tus Eventos
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Manejamos tallas para toda la familia: desde enterizos para bebés, tallas infantiles, hasta damas y caballeros combinados.
              </p>

              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-sm mt-2">
                <img
                  src="/prod-camiseta-ajolote.jpg"
                  alt="Camisetas para eventos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-white/95 text-purple-900 text-[10px] font-extrabold shadow-sm">
                  Bebés, Niños y Adultos
                </span>
              </div>
            </div>

            {/* Clickable Product Names */}
            <div className="mt-3 pt-2.5 border-t border-purple-100">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-900/80 block mb-1.5">
                Modelos destacados:
              </span>
              <div className="flex flex-col gap-1.5">
                {products
                  .filter((p) => p.category === 'camisetas')
                  .slice(0, 3)
                  .map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct?.(p);
                      }}
                      className="w-full flex items-center justify-between gap-2 p-1.5 rounded-lg bg-purple-50/80 hover:bg-pink-100/90 text-left transition-all border border-purple-200/70 group/item active:scale-[0.98]"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover/item:text-purple-900 truncate">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-extrabold text-purple-900 shrink-0 bg-white px-1.5 py-0.5 rounded border border-purple-200 shadow-sm">
                        ${p.price.toLocaleString('es-CO')}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-pink-700 group-hover:text-pink-900">
              <span>Ver Camisetas Familiares</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* ========================================================== */}
          {/* CARD 4: TERMOS INTELIGENTES (Tecnológico, span 4)          */}
          {/* ========================================================== */}
          <div
            onClick={() => onSelectCategory('termos')}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 p-5 sm:p-6 shadow-card hover:shadow-soft hover:border-purple-400 hover:scale-[1.01] transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold border border-purple-200">
                  <Flame className="w-3.5 h-3.5 text-pink-500" />
                  <span>Pantalla LED Táctil</span>
                </span>
                <span className="font-heading font-black text-lg text-purple-900 bg-pink-50 px-2.5 py-0.5 rounded-xl border border-pink-200">
                  $35.000 COP
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-purple-900 transition-colors">
                Termos Inteligentes
              </h3>

              <p className="text-xs text-slate-600 line-clamp-2">
                Sensor digital de temperatura en la tapa, 500ml acero 304. Conserva frío por 24h y caliente por 12h.
              </p>

              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-sm">
                <img
                  src="/prod-termo-papa.jpg"
                  alt="Termos inteligentes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Clickable Product Names */}
            <div className="mt-3 pt-2.5 border-t border-purple-100">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-900/80 block mb-1.5">
                Modelos destacados:
              </span>
              <div className="flex flex-col gap-1.5">
                {products
                  .filter((p) => p.category === 'termos')
                  .slice(0, 3)
                  .map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct?.(p);
                      }}
                      className="w-full flex items-center justify-between gap-2 p-1.5 rounded-lg bg-purple-50/80 hover:bg-pink-100/90 text-left transition-all border border-purple-200/70 group/item active:scale-[0.98]"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover/item:text-purple-900 truncate">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-extrabold text-purple-900 shrink-0 bg-white px-1.5 py-0.5 rounded border border-purple-200 shadow-sm">
                        ${p.price.toLocaleString('es-CO')}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-800">
              <span>Ver Termos Inteligentes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* ========================================================== */}
          {/* CARD 5: MUGS TRADICIONALES (span 4)                        */}
          {/* ========================================================== */}
          <div
            onClick={() => onSelectCategory('mugs-tradicionales')}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 p-5 sm:p-6 shadow-card hover:shadow-soft hover:border-purple-400 hover:scale-[1.01] transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold border border-rose-200">
                  <Coffee className="w-3.5 h-3.5 text-rose-600" />
                  <span>Cerámica AAA Blanca</span>
                </span>
                <span className="font-heading font-black text-lg text-purple-900 bg-purple-50 px-2.5 py-0.5 rounded-xl border border-purple-200">
                  $20.000 COP
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-purple-900 transition-colors">
                Mugs Tradicionales
              </h3>

              <p className="text-xs text-slate-600 line-clamp-2">
                Estampa fotos familiares, recuerdos y dedicatorias con nitidez fotográfica. Apto para microondas.
              </p>

              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-sm">
                <img
                  src="/prod-mug-tradicional-foto.jpg"
                  alt="Mugs tradicionales"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Clickable Product Names */}
            <div className="mt-3 pt-2.5 border-t border-rose-100">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-950/80 block mb-1.5">
                Modelos destacados:
              </span>
              <div className="flex flex-col gap-1.5">
                {products
                  .filter((p) => p.category === 'mugs-tradicionales')
                  .slice(0, 3)
                  .map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct?.(p);
                      }}
                      className="w-full flex items-center justify-between gap-2 p-1.5 rounded-lg bg-rose-50/80 hover:bg-purple-100/90 text-left transition-all border border-rose-200/70 group/item active:scale-[0.98]"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover/item:text-rose-950 truncate">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-extrabold text-purple-900 shrink-0 bg-white px-1.5 py-0.5 rounded border border-rose-200 shadow-sm">
                        ${p.price.toLocaleString('es-CO')}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-rose-700">
              <span>Ver Mugs Tradicionales</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* ========================================================== */}
          {/* CARD 6: AGENDAS, COJINES & REGALOS (span 4)                */}
          {/* ========================================================== */}
          <div
            onClick={() => onSelectCategory('agendas')}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md rounded-3xl border-2 border-purple-200/90 p-5 sm:p-6 shadow-card hover:shadow-soft hover:border-purple-400 hover:scale-[1.01] transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold border border-purple-200">
                  <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                  <span>Pasta Dura de Lujo</span>
                </span>
                <span className="font-heading font-black text-lg text-purple-900 bg-pink-50 px-2.5 py-0.5 rounded-xl border border-pink-200">
                  $45.000 COP
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-purple-900 transition-colors">
                Agendas & Cuadernos
              </h3>

              <p className="text-xs text-slate-600 line-clamp-2">
                Anillado doble metálico, tapa dura de lujo con tu nombre o versículo bíblico y hojas premium.
              </p>

              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-purple-100 shadow-sm">
                <img
                  src="/prod-agendas-fe.webp"
                  alt="Agendas personalizadas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Clickable Product Names */}
            <div className="mt-3 pt-2.5 border-t border-purple-100">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-900/80 block mb-1.5">
                Modelos destacados:
              </span>
              <div className="flex flex-col gap-1.5">
                {products
                  .filter((p) => ['agendas', 'cojines', 'rompecabezas', 'regalos'].includes(p.category))
                  .slice(0, 3)
                  .map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct?.(p);
                      }}
                      className="w-full flex items-center justify-between gap-2 p-1.5 rounded-lg bg-purple-50/80 hover:bg-pink-100/90 text-left transition-all border border-purple-200/70 group/item active:scale-[0.98]"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover/item:text-purple-900 truncate">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-extrabold text-purple-900 shrink-0 bg-white px-1.5 py-0.5 rounded border border-purple-200 shadow-sm">
                        ${p.price.toLocaleString('es-CO')}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-800">
              <span>Ver Agendas de Lujo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
