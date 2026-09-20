import React, { useState, useMemo } from 'react';
import type { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../data/products';
import { SearchX, Sparkles, ArrowUpDown } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onResetSearch: () => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onCustomizeProduct: (product: Product) => void;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onResetSearch,
  wishlistIds,
  onToggleWishlist,
  onCustomizeProduct,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceFilter, setPriceFilter] = useState<string>('all');

  // Filter & sort products
  const processedProducts = useMemo(() => {
    let list = [...products];

    // Price filter
    if (priceFilter === 'under30') {
      list = list.filter((p) => p.price < 30000);
    } else if (priceFilter === '30to45') {
      list = list.filter((p) => p.price >= 30000 && p.price <= 45000);
    } else if (priceFilter === 'over45') {
      list = list.filter((p) => p.price > 45000);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, priceFilter, sortBy]);

  return (
    <section id="catalogo" className="py-12 sm:py-16 bg-cream border-b border-purple-200/80 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Marketplace Catalog Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full mb-2 border border-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Mercado de Personalizados</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            Explora Todos Nuestros Productos
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Vasos, camisetas, rompecabezas, mugs y regalos listos para personalizar con tus mejores fotos o mensajes.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center gap-3 bg-white/90 backdrop-blur-sm p-2 rounded-2xl border border-purple-200/90 shadow-sm">
          
          {/* Price Range Filter Pills */}
          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={() => setPriceFilter('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                priceFilter === 'all' ? 'bg-purple-900 text-white' : 'text-slate-700 hover:bg-purple-100'
              }`}
            >
              Todos los precios
            </button>
            <button
              onClick={() => setPriceFilter('under30')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                priceFilter === 'under30' ? 'bg-purple-900 text-white' : 'text-slate-700 hover:bg-purple-100'
              }`}
            >
              &lt; $30k
            </button>
            <button
              onClick={() => setPriceFilter('30to45')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                priceFilter === '30to45' ? 'bg-purple-900 text-white' : 'text-slate-700 hover:bg-purple-100'
              }`}
            >
              $30k - $45k
            </button>
            <button
              onClick={() => setPriceFilter('over45')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                priceFilter === 'over45' ? 'bg-purple-900 text-white' : 'text-slate-700 hover:bg-purple-100'
              }`}
            >
              &gt; $45k
            </button>
          </div>

          <span className="text-purple-200 hidden sm:inline">|</span>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-purple-50/70 border border-purple-200 text-slate-800 font-semibold rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-purple-500 cursor-pointer text-xs"
            >
              <option value="featured">Destacados</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Calificados</option>
            </select>
          </div>

        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as ProductCategory)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isSelected
                  ? 'bg-purple-800 text-white shadow-sm scale-[1.02]'
                  : 'bg-white/90 border border-purple-200 text-slate-800 hover:bg-white hover:border-purple-400'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Results banner if searching */}
      {searchQuery && (
        <div className="mb-6 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between text-xs sm:text-sm text-rose-900">
          <span>
            Mostrando resultados para: <strong>&ldquo;{searchQuery}&rdquo;</strong> ({processedProducts.length} productos)
          </span>
          <button
            onClick={onResetSearch}
            className="text-xs font-bold text-rose-600 hover:underline"
          >
            Limpiar búsqueda
          </button>
        </div>
      )}

      {/* Products Grid */}
      {processedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {processedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onCustomize={onCustomizeProduct}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-sm my-8">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 mx-auto flex items-center justify-center mb-4">
            <SearchX className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-800">
            No encontramos productos con esos filtros
          </h3>
          <p className="text-sm text-slate-500 mt-2 mb-6">
            Intenta cambiando el rango de precio o seleccionando otra categoría.
          </p>
          <button
            onClick={() => {
              onResetSearch();
              setPriceFilter('all');
              onSelectCategory('todos');
            }}
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-rose-600 transition-colors"
          >
            Ver todos los productos
          </button>
        </div>
      )}

      </div>
    </section>
  );
};
