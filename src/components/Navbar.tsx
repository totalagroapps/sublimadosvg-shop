import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, MessageCircle, Heart, ChevronDown, Flame } from 'lucide-react';
import { STORE_CONFIG, CATEGORIES, formatPrice } from '../data/products';
import type { ProductCategory } from '../types';

interface NavbarProps {
  cartCount: number;
  cartSubtotal: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartSubtotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const selectedCategoryName =
    CATEGORIES.find((c) => c.id === selectedCategory)?.name || 'Todas las categorías';

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-card transition-all">
      {/* Top Marketplace Announcement & Utility Strip */}
      <div className="bg-slate-900 text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold truncate">
              📍 Taller en <strong>Pereira, Risaralda</strong> (Calle 9 #7-36) • Envíos a toda Colombia
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-300 shrink-0">
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {STORE_CONFIG.whatsappDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-amber-300 font-bold">✨ {STORE_CONFIG.domain}</span>
          </div>
        </div>
      </div>

      {/* Main Marketplace Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Brand & Official Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onSelectCategory('todos')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-amber-400 shadow-md shadow-rose-100 group-hover:scale-105 transition-transform bg-white shrink-0">
                <img
                  src={STORE_CONFIG.logoPrincipal}
                  alt="VG Personalizados"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors">
                    VG <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600">Personalizados</span>
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium hidden md:block">
                  {STORE_CONFIG.slogan}
                </p>
              </div>
            </button>
          </div>

          {/* Central Marketplace Search Bar (Desktop) */}
          <form 
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-2xl mx-2"
          >
            <div className="relative flex w-full rounded-xl border-2 border-rose-500/80 bg-white overflow-visible shadow-sm focus-within:ring-2 focus-within:ring-rose-500/30">
              
              {/* Category Dropdown */}
              <div className="relative shrink-0 border-r border-slate-200">
                <button
                  type="button"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="h-full px-3 py-2 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-colors focus:outline-none rounded-l-lg"
                >
                  <span className="max-w-[110px] truncate">{selectedCategoryName}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          onSelectCategory(cat.id as ProductCategory);
                          setCategoryDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-rose-50 transition-colors flex items-center justify-between ${
                          selectedCategory === cat.id ? 'text-rose-600 font-bold bg-rose-50/50' : 'text-slate-700'
                        }`}
                      >
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Text input */}
              <input
                type="text"
                placeholder="¿Qué estás buscando? ej. Camisetas para eventos, Mugs, Agendas..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Buscar productos"
                className="w-full px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />

              {/* Submit button */}
              <button
                type="submit"
                aria-label="Buscar"
                className="px-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white flex items-center justify-center transition-colors rounded-r-lg"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Action Utilities (Right) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* WhatsApp Quick Help */}
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('¡Hola! Me gustaría hacer una consulta sobre un producto personalizado.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="text-left leading-tight">
                <span className="block text-[10px] text-emerald-600 font-normal">Atención rápida</span>
                <span>WhatsApp</span>
              </div>
            </a>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="p-2 sm:px-3 sm:py-2 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors flex items-center gap-1.5 relative"
              title="Ver favoritos"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500' : 'text-slate-600'}`} />
              <span className="hidden sm:inline text-xs font-bold text-slate-700">Favoritos</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:static sm:top-auto sm:right-auto px-1.5 py-0.5 bg-rose-600 text-white rounded-full text-[10px] font-extrabold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Marketplace Cart Button with Total */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-rose-600 text-white transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-rose-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-slate-900">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:block text-left leading-tight">
                <span className="block text-[10px] text-slate-300 uppercase font-semibold">Mi Carrito</span>
                <span className="text-xs font-extrabold text-amber-300">
                  {cartSubtotal > 0 ? formatPrice(cartSubtotal) : '$0 COP'}
                </span>
              </div>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              className="md:hidden p-2 rounded-xl hover:bg-slate-100 text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Search input */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar camisetas, mugs, agendas..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Buscar productos"
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Secondary Marketplace Department Ribbon */}
      <nav className="bg-rose-50/70 border-t border-rose-100 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-1 overflow-x-auto py-2 scrollbar-none text-xs">
            
            <div className="flex items-center gap-1">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id as ProductCategory)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-white hover:text-rose-600'
                    }`}
                  >
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right highlight tags */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#catalogo"
                className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-extrabold flex items-center gap-1 hover:bg-amber-200 transition-colors"
              >
                <Flame className="w-3.5 h-3.5 text-rose-600" />
                <span>Ofertas Flash</span>
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="font-heading font-extrabold text-xs uppercase text-slate-400 px-1">
            Categorías del Mercado
          </div>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id as ProductCategory);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                  selectedCategory === cat.id ? 'bg-rose-600 text-white' : 'bg-slate-50 text-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear por WhatsApp ({STORE_CONFIG.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
