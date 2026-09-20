import { useState, useEffect, useMemo } from 'react';
import './App.css';
import type { Product, ProductCategory, CartItem, CustomizationData } from './types';
import { INITIAL_PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CategoryBubbles } from './components/CategoryBubbles';
import { MarketHero } from './components/MarketHero';
import { TrustBar } from './components/TrustBar';
import { CustomIdeaBanner } from './components/CustomIdeaBanner';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { CustomizerModal } from './components/CustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [viewMode, setViewMode] = useState<'home' | 'catalog'>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('camisetas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null);

  // Wishlist state saved in localStorage
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sublimadosvg_wishlist');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sublimadosvg_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.warn('Could not save wishlist', e);
    }
  }, [wishlistIds]);

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Cart state saved in localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sublimadosvg_cart');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sublimadosvg_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [cartItems]);

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'todos' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const handleAddToCart = (
    product: Product,
    customization: CustomizationData,
    quantity: number
  ) => {
    const newItem: CartItem = {
      cartItemId: `${product.id}-${Date.now()}`,
      product,
      customization,
      quantity,
    };

    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    if (window.confirm('¿Deseas vaciar todos los productos del carrito?')) {
      setCartItems([]);
    }
  };

  const isViewingCatalog = viewMode === 'catalog' || searchQuery.trim().length > 0;

  const handleSelectCategory = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    setViewMode('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setViewMode('home');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const wishlistProducts = useMemo(() => {
    return products.filter((p) => wishlistIds.includes(p.id));
  }, [products, wishlistIds]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#cfb8eb] via-[#f0c3e6] via-[#c4ace8] via-[#edbde2] to-[#cfb8eb] selection:bg-purple-600 selection:text-white font-sans text-slate-800 pb-16 sm:pb-0">
      
      {/* 1. Marketplace Header */}
      <Navbar
        cartCount={totalCartCount}
        cartSubtotal={cartSubtotal}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        onGoHome={handleGoHome}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Colorful Animated Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Stories / Circular Category Row */}
      <CategoryBubbles
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Marketplace Sections */}
      <main className="flex-1">
        {isViewingCatalog ? (
          /* ======================================================== */
          /* CATEGORY PRODUCTS VIEW (When a category is clicked)     */
          /* ======================================================== */
          <ProductGrid
            products={filteredProducts}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            onGoHome={handleGoHome}
            searchQuery={searchQuery}
            onResetSearch={() => setSearchQuery('')}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onCustomizeProduct={(product) => setCustomizingProduct(product)}
          />
        ) : (
          /* ======================================================== */
          /* CLEAN HOME PAGE (No products scattered on home page)     */
          /* ======================================================== */
          <>
            {/* Marketplace Hero Slider & Side Banners */}
            <MarketHero
              onSelectCategory={handleSelectCategory}
              onExploreClick={() => {
                setViewMode('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Marketplace Trust Bar */}
            <TrustBar />

            {/* Mid-Page Interactive Callout Banner (Send Your Photo / Idea) */}
            <CustomIdeaBanner
              onOpenCustomizer={() => {
                if (products.length > 0) setCustomizingProduct(products[0]);
              }}
            />
          </>
        )}
      </main>

      {/* Comprehensive Marketplace Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
      />

      {/* Interactive Customizer Modal */}
      <CustomizerModal
        product={customizingProduct}
        onClose={() => setCustomizingProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onCustomizeProduct={(product) => setCustomizingProduct(product)}
      />

      {/* Enhanced Floating WhatsApp Button Widget & Mobile Bottom Dock */}
      <FloatingWhatsApp
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onGoHome={handleGoHome}
      />

    </div>
  );
  );
}

export default App;
