import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, Eye, Grid } from 'lucide-react';
import type { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';

interface HomeFeaturedProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (category: ProductCategory) => void;
  onViewAllCatalog: () => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
}

type TabKey = 'todos' | 'mugs-silicona' | 'mugs-magicos' | 'termos' | 'mugs-tradicionales' | 'camisetas' | 'agendas';

interface TabItem {
  id: TabKey;
  label: string;
  badge?: string;
}

const TABS: TabItem[] = [
  { id: 'todos', label: 'Todos los Productos' },
  { id: 'mugs-silicona', label: 'Mugs Tapa Silicona', badge: 'Nuevo ❤️' },
  { id: 'mugs-magicos', label: 'Mugs Mágicos', badge: 'Térmico ✨' },
  { id: 'termos', label: 'Termos Inteligentes', badge: 'LED 🌡️' },
  { id: 'mugs-tradicionales', label: 'Mugs Tradicionales' },
  { id: 'camisetas', label: 'Camisetas Familiares' },
  { id: 'agendas', label: 'Agendas & Regalos' },
];

export const HomeFeaturedProducts: React.FC<HomeFeaturedProductsProps> = ({
  products,
  onSelectProduct,
  onSelectCategory,
  onViewAllCatalog,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('todos');

  // Filter products by selected tab
  const displayedProducts = useMemo(() => {
    if (activeTab === 'todos') {
      // Prioritize highlighting the newest and most popular products
      return products;
    }
    if (activeTab === 'agendas') {
      return products.filter((p) =>
        ['agendas', 'cojines', 'rompecabezas', 'regalos'].includes(p.category)
      );
    }
    return products.filter((p) => p.category === activeTab);
  }, [products, activeTab]);

  return (
    <section id="productos-inicio" className="py-12 sm:py-16 bg-white/40 backdrop-blur-sm border-y border-purple-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Catálogo Completo en Página Principal</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Nuestros Productos Personalizados
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
            Haz clic en el nombre o foto de cualquiera de los productos para ver sus <strong>imágenes reales</strong>, <strong>descripción completa</strong>, características y opciones para estampar con tus fotos o dedicatorias.
          </p>
        </div>

        {/* Filter Tabs Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none px-2">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 active:scale-95 shadow-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 text-white shadow-md ring-2 ring-purple-400 scale-105'
                    : 'bg-white/85 text-purple-950 hover:bg-white hover:text-purple-900 border border-purple-200/80'
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-pink-100 text-pink-700 border border-pink-200'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Informative notice showing active count */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs text-purple-950 font-bold bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-purple-200 shadow-sm">
            <Eye className="w-3.5 h-3.5 text-pink-500" />
            <span>
              Mostrando {displayedProducts.length} producto{displayedProducts.length !== 1 ? 's' : ''} — Toca cualquier producto para ver su información completa
            </span>
          </div>

          <button
            type="button"
            onClick={onViewAllCatalog}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-purple-800 hover:text-pink-600 transition-colors"
          >
            <span>Ver modo catálogo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onCustomize={onSelectProduct}
            />
          ))}
        </div>

        {/* Bottom CTA to explore all or request advice */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onViewAllCatalog}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Grid className="w-4 h-4" />
            <span>Ver Catálogo Completo con Filtros Avanzados</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {activeTab !== 'todos' && (
            <button
              type="button"
              onClick={() => onSelectCategory(activeTab as ProductCategory)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-purple-900 font-bold text-sm border-2 border-purple-300 hover:border-pink-400 shadow-sm transition-all active:scale-95"
            >
              <span>Abrir solo la categoría "{TABS.find((t) => t.id === activeTab)?.label}"</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
