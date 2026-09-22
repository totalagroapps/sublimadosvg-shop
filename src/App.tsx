import { useState, useEffect, useMemo } from 'react';
import './App.css';
import type { Product, ProductCategory, CartItem, CustomizationData } from './types';
import { INITIAL_PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CategoryBubbles } from './components/CategoryBubbles';
import { EditorialLookbookHero } from './components/EditorialLookbookHero';
import { CinematicFilmReel } from './components/CinematicFilmReel';
import { EditorialWorkshopStory } from './components/EditorialWorkshopStory';
import { MagicFeatureShowcase } from './components/MagicFeatureShowcase';
import { HowItWorksSteps } from './components/HowItWorksSteps';
import { TrustBar } from './components/TrustBar';
import { CustomIdeaBanner } from './components/CustomIdeaBanner';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailPage } from './components/ProductDetailPage';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(() => {
    try {
      const hash = window.location.hash;
      if (hash.startsWith('#producto-')) {
        const prodId = hash.replace('#producto-', '');
        return INITIAL_PRODUCTS.find((p) => p.id === prodId) || null;
      }
    } catch {
      // fallback
    }
    return null;
  });

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(() => {
    try {
      const hash = window.location.hash;
      if (hash.startsWith('#producto-')) {
        const prodId = hash.replace('#producto-', '');
        const found = INITIAL_PRODUCTS.find((p) => p.id === prodId);
        if (found) return found.category;
      } else if (hash.startsWith('#categoria-')) {
        return hash.replace('#categoria-', '') as ProductCategory;
      }
    } catch {
      // fallback
    }
    return 'camisetas';
  });

  const [viewMode, setViewMode] = useState<'home' | 'catalog' | 'product'>(() => {
    try {
      const hash = window.location.hash;
      if (hash.startsWith('#producto-')) {
        const prodId = hash.replace('#producto-', '');
        const found = INITIAL_PRODUCTS.find((p) => p.id === prodId);
        if (found) return 'product';
      } else if (hash.startsWith('#categoria-') || hash === '#catalogo') {
        return 'catalog';
      }
    } catch {
      // fallback
    }
    return 'home';
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);

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

  // Synchronize hash routing with state (#producto-xxx, #categoria-xxx, #catalogo)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#producto-')) {
        const prodId = hash.replace('#producto-', '');
        const found = products.find((p) => p.id === prodId);
        if (found) {
          setSelectedProduct(found);
          setSelectedCategory(found.category);
          setViewMode('product');
          return;
        }
      } else if (hash.startsWith('#categoria-')) {
        const catId = hash.replace('#categoria-', '') as ProductCategory;
        setSelectedCategory(catId);
        setSelectedProduct(null);
        setViewMode('catalog');
        return;
      } else if (hash === '#catalogo') {
        setSelectedProduct(null);
        setViewMode('catalog');
        return;
      } else if (hash === '' || hash === '#inicio' || hash === '#home') {
        setSelectedProduct(null);
        setViewMode('home');
        return;
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [products]);

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === 'todos' ||
        p.category === selectedCategory ||
        (selectedCategory === 'mugs-tradicionales' && p.category === 'mugs-silicona');
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

  // Open product detail page in a separate page (new tab)
  const handleOpenProduct = (product: Product) => {
    const targetUrl = `${window.location.origin}${window.location.pathname}#producto-${product.id}`;
    const newWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');

    // Fallback if browser popup blocker interferes: open in current tab
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      setSelectedProduct(product);
      setSelectedCategory(product.category);
      setViewMode('product');
      window.location.hash = `producto-${product.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    setSelectedProduct(null);
    setViewMode('catalog');
    window.location.hash = `categoria-${cat}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCatalog = () => {
    const catalogUrl = `${window.location.origin}${window.location.pathname}#catalogo`;
    const newWindow = window.open(catalogUrl, '_blank', 'noopener,noreferrer');

    // Fallback if browser popup blocker interferes: open in current tab
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      setSelectedProduct(null);
      setSelectedCategory('todos');
      setViewMode('catalog');
      window.location.hash = 'catalogo';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoHome = () => {
    setViewMode('home');
    setSelectedProduct(null);
    setSearchQuery('');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromProduct = () => {
    setSelectedProduct(null);
    setViewMode('home');
    window.location.hash = '';
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

      {/* 3. Stories / Circular Category Row (shown on catalog view for quick switching) */}
      {viewMode === 'catalog' && (
        <CategoryBubbles
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
      )}

      {/* Main Marketplace Sections */}
      <main className="flex-1">
        {viewMode === 'product' && selectedProduct ? (
          /* ======================================================== */
          /* DEDICATED PRODUCT DETAIL PAGE (Full view with all info)  */
          /* ======================================================== */
          <ProductDetailPage
            product={selectedProduct}
            allProducts={products}
            isWishlisted={wishlistIds.includes(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onBack={handleBackFromProduct}
            onSelectCategory={handleSelectCategory}
            onSelectProduct={handleOpenProduct}
            onGoHome={handleGoHome}
          />
        ) : isViewingCatalog ? (
          /* ======================================================== */
          /* CATEGORY PRODUCTS VIEW (When catalog or category opened) */
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
            onCustomizeProduct={handleOpenProduct}
          />
        ) : (
          /* ======================================================== */
          /* EDITORIAL BOUTIQUE HOME PAGE WITH CINEMATIC FILM REEL    */
          /* ======================================================== */
          <>
            {/* 1. Lookbook Editorial Hero con Botón a Catálogo de Personalizados */}
            <EditorialLookbookHero
              products={products}
              onSelectProduct={handleOpenProduct}
              onExploreProducts={handleOpenCatalog}
            />

            {/* 2. Rollo Cinematográfico 35mm / Película Horizontal con Avance y Botón de Catálogo */}
            <CinematicFilmReel
              products={products}
              onSelectProduct={handleOpenProduct}
              onOpenCatalog={handleOpenCatalog}
            />

            {/* 3. Demostración Interactiva del Efecto Térmico (Mug Mágico & Termo LED) */}
            <MagicFeatureShowcase
              onSelectCategory={handleSelectCategory}
            />

            {/* 4. El Manifiesto y Credenciales del Taller en Pereira */}
            <EditorialWorkshopStory />

            {/* 5. Cómo Funciona la Magia en 3 Pasos */}
            <HowItWorksSteps />

            {/* 6. Interactive Callout: Cotizar / Diseñar desde Cero */}
            <CustomIdeaBanner
              onOpenCustomizer={() => {
                if (products.length > 0) handleOpenProduct(products[0]);
              }}
            />

            {/* 7. Boutique Trust Bar */}
            <TrustBar />
          </>
        )}
      </main>

      {/* Comprehensive Marketplace Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
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
        onCustomizeProduct={(product) => {
          setIsWishlistOpen(false);
          handleOpenProduct(product);
        }}
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
}

export default App;
