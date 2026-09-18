import { useState, useEffect, useMemo } from 'react';
import './App.css';
import type { Product, ProductCategory, CartItem, CustomizationData } from './types';
import { INITIAL_PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CategoryBubbles } from './components/CategoryBubbles';
import { MarketHero } from './components/MarketHero';
import { PromoBannerGrid } from './components/PromoBannerGrid';
import { TrustBar } from './components/TrustBar';
import { FlashOffers } from './components/FlashOffers';
import { FaithCollectionShowcase } from './components/FaithCollectionShowcase';
import { CustomIdeaBanner } from './components/CustomIdeaBanner';
import { ProductGrid } from './components/ProductGrid';
import { DiscountBanner } from './components/DiscountBanner';
import { HowToOrderMarket } from './components/HowToOrderMarket';
import { CustomerReviews } from './components/CustomerReviews';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CustomizerModal } from './components/CustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('todos');
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

  const handleExploreClick = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
    <div className="min-h-screen flex flex-col bg-cream selection:bg-rose-600 selection:text-white font-sans text-slate-800 pb-16 sm:pb-0">
      
      {/* 1. Marketplace Header */}
      <Navbar
        cartCount={totalCartCount}
        cartSubtotal={cartSubtotal}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Colorful Animated Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Stories / Circular Category Row */}
      <CategoryBubbles
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          handleExploreClick();
        }}
      />

      {/* Main Marketplace Sections */}
      <main className="flex-1">
        
        {/* 4. Marketplace Hero Slider & Side Banners */}
        <MarketHero
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            handleExploreClick();
          }}
          onExploreClick={handleExploreClick}
        />

        {/* 5. 3 Vibrant Promotional Banners: Parejas, Cumpleaños, Fe */}
        <PromoBannerGrid
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            handleExploreClick();
          }}
          onExploreClick={handleExploreClick}
        />

        {/* 6. Marketplace Trust Bar */}
        <TrustBar />

        {/* 7. Flash Offers Shelf (Vibrant Sunset Gradient + Live Countdown) */}
        <FlashOffers
          products={products}
          onCustomizeProduct={(product) => setCustomizingProduct(product)}
        />

        {/* 8. Curated Faith Collection Shelf */}
        <FaithCollectionShowcase
          products={products}
          onCustomizeProduct={(product) => setCustomizingProduct(product)}
          onExploreCategory={(cat) => {
            setSelectedCategory(cat as ProductCategory);
            handleExploreClick();
          }}
        />

        {/* 9. Mid-Page Interactive Callout Banner (Send Your Photo / Idea) */}
        <CustomIdeaBanner
          onOpenCustomizer={() => {
            if (products.length > 0) setCustomizingProduct(products[0]);
          }}
        />

        {/* 10. Main Product Catalog Shelf with Filters & Sorting */}
        <ProductGrid
          products={filteredProducts}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onResetSearch={() => setSearchQuery('')}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onCustomizeProduct={(product) => setCustomizingProduct(product)}
        />

        {/* 11. Welcome Coupon 10% OFF Banner */}
        <DiscountBanner />

        {/* 12. 4-Step Marketplace Ordering Guide */}
        <HowToOrderMarket />

        {/* 13. Verified Customer Reviews Wall */}
        <CustomerReviews />

        {/* 14. Frequently Asked Questions */}
        <FAQ />

      </main>

      {/* 15. Comprehensive Marketplace Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          handleExploreClick();
        }}
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

      {/* 16. Enhanced Floating WhatsApp Button Widget & Mobile Bottom Dock */}
      <FloatingWhatsApp
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

    </div>
  );
}

export default App;
