import React from 'react';
import { Sparkles, ArrowRight, Heart, Palette, MessageCircle } from 'lucide-react';
import type { Product } from '../types';
import { formatPrice, STORE_CONFIG } from '../data/products';

interface HeroCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

interface ShapedProductItem {
  id: string;
  name: string;
  productId: string;
  badge: string;
  description: string;
  price: number;
  image: string;
}

const SHAPED_PRODUCTS: ShapedProductItem[] = [
  {
    id: 'shape-camisetas',
    name: 'Camisetas Personalizadas',
    productId: 'prod-camiseta-ajolote-cumple',
    badge: 'Tallas desde Pequeños hasta Adultos 👕',
    description: 'Transforma una prenda básica en una pieza única que hable por ti. Ya sea que busques estampar tus personajes animados favoritos, ilustraciones divertidas, tipografías creativas para un evento especial o el logo de tu empresa, logramos que cada detalle destaque con calidad profesional.\n\nGracias a nuestra técnica de transferencia térmica de alta precisión, la tinta se integra perfectamente a la tela, garantizando que los diseños no se sientan pesados, no se cuarteen y conserven sus colores vibrantes lavada tras lavada. Además, para que el ajuste sea siempre el ideal, ofrecemos una amplia variedad de colores y una curva de tallas completa pensada para todas las edades y complexiones. ¡Viste tus ideas y marca la diferencia con un estilo 100% tuyo!',
    price: 25000,
    image: '/forma-producto-camiseta.jpg',
  },
  {
    id: 'shape-mugs',
    name: 'Mugs y Tazas Personalizadas',
    productId: 'prod-mug-tapa-silicona-imparable',
    badge: 'Cerámica Clásica & Tapa Silicona ☕',
    description: 'El detalle perfecto para empezar el día con buena energía. Nuestros mugs de cerámica clásica y nuestras prácticas opciones con tapa de silicona son el lienzo ideal para dar vida a tus ideas. Ya sea una fotografía inolvidable, personajes animados, una dedicatoria especial para un ser querido o la identidad visual de tu marca, garantizamos un acabado brillante y colores vibrantes. Gracias a nuestra impresión de alta calidad, tus diseños resistirán el uso diario y las lavadas, convirtiendo cada sorbo de café en una experiencia única.',
    price: 25000,
    image: '/forma-producto-mug.jpg',
  },
  {
    id: 'shape-rompecabezas',
    name: 'Rompecabezas Personalizados',
    productId: 'prod-rompecabezas-a4',
    badge: 'Piezas Troqueladas de Alta Calidad 🧩',
    description: '¡Convierte tus recuerdos favoritos en una experiencia interactiva! Nuestros rompecabezas personalizados son la manera más original y divertida de sorprender a alguien especial. Son perfectos para regalos de graduación, invitaciones creativas, anuncios sorpresa o simplemente para pasar un buen rato armando esa fotografía, personaje animado o diseño que tanto te gusta.\n\nGracias a nuestro proceso de transferencia térmica de alta resolución, cada pieza ofrece un acabado brillante con colores vivos que no se desvanecen con el uso. Regala más que un detalle: regala un momento inolvidable que se construye pieza por pieza.',
    price: 30000,
    image: '/forma-producto-rompecabezas.jpg',
  },
  {
    id: 'shape-termos',
    name: 'Termos Inteligentes Personalizados',
    productId: 'prod-termo-inteligente-cero',
    badge: 'Sensor LED & Acero Inoxidable 🌡️',
    description: 'Lleva tu estilo a todas partes y mantén tus bebidas en la temperatura ideal. Nuestros termos no solo destacan por su capacidad para conservar el frío o el calor por horas, sino por convertirse en un accesorio completamente tuyo. Personalízalos con tu nombre, un diseño elegante, tu logo corporativo o esa frase que te motiva a entrenar o trabajar. Son resistentes, modernos y el compañero perfecto para la oficina, el gimnasio o tus trayectos diarios, garantizando que tu diseño luzca impecable vayas donde vayas.',
    price: 35000,
    image: '/forma-producto-termo.jpg',
  },
  {
    id: 'shape-libretas',
    name: 'Libretas Personalizadas',
    productId: 'prod-agenda-personalizada-fe',
    badge: 'Pasta Dura & Anillado Metálico 📓',
    description: 'Lleva tu inspiración, apuntes y grandes ideas a todas partes con una libreta que tenga tu propio sello. Olvídate de los diseños genéricos; ahora la portada de tu cuaderno puede reflejar exactamente tu personalidad, la identidad de tu emprendimiento o el concepto de ese evento especial.\n\nSon perfectas para el colegio, la oficina, un diario personal o como un regalo corporativo muy original. Ya sea que prefieras un estilo minimalista con tu nombre en letras cursivas, tu logo empresarial o un diseño lleno de color con tus gráficos favoritos, nos aseguramos de que la portada luzca profesional, vibrante y lista para acompañarte en tu día a día.',
    price: 45000,
    image: '/forma-producto-libreta.jpg',
  },
  {
    id: 'shape-cojines',
    name: 'Cojines Personalizados',
    productId: 'prod-cojin-personalizado',
    badge: 'Felpa Suave con Relleno Incluido 🛋️',
    description: 'Dale un toque único y acogedor a cualquier espacio con nuestros cojines personalizados. Son el detalle ideal para decorar una habitación, hacer un regalo entrañable o darle identidad a tu sala de estar. Desde tiernas fotografías familiares y dedicatorias con tipografías elegantes, hasta ilustraciones divertidas y personajes animados; todo es posible.\n\nAl utilizar nuestra técnica de transferencia térmica, la tinta se funde directamente con la tela. Esto significa que tu diseño no solo tendrá colores vivos y una resolución increíble, sino que el cojín mantendrá su textura suave al tacto y los estampados no se borrarán con los lavados. ¡Comodidad y estilo diseñados a tu medida!',
    price: 42000,
    image: '/forma-producto-cojin.jpg',
  },
];

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  products,
  onSelectProduct,
}) => {
  const handleItemClick = (productId: string) => {
    const targetProduct = products.find((p) => p.id === productId);
    if (targetProduct) {
      onSelectProduct(targetProduct);
    }
  };

  return (
    <section
      aria-label="Colección de Productos por Siluetas"
      className="relative pt-6 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-purple-900/90 text-pink-200 border-2 border-pink-400/60 text-xs sm:text-sm font-extrabold shadow-md mb-3">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>Colección Oficial VG · Productos Personalizados</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Nuestros Productos en su Forma Real
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-slate-700 mt-2 font-medium">
            Cada producto en su silueta física auténtica con estampado centrado y nítido. Puedes personalizarlo como desees y coordinar tu diseño directamente por WhatsApp.
          </p>
        </div>

        {/* 6 Shape-Crafted Product Cards Grid (No repetition, no oval frames, clean product shapes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SHAPED_PRODUCTS.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-gradient-to-b from-white/95 via-purple-50/70 to-pink-50/80 backdrop-blur-md border-2 border-purple-200/90 hover:border-pink-500 p-5 sm:p-6 shadow-[0_8px_25px_rgba(88,28,135,0.08)] hover:shadow-[0_16px_35px_rgba(219,39,119,0.3)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-slate-800"
              >
                {/* Floating Badge */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 text-white text-[11px] font-extrabold shadow-sm border border-pink-300/60">
                    <Heart className="w-3 h-3 text-pink-200 fill-pink-200" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* The Pure Product Shape Visual (No oval frame, perfectly straight and centered) */}
                <div
                  onClick={() => handleItemClick(item.productId)}
                  className="relative w-full aspect-square max-w-[240px] sm:max-w-[260px] mx-auto flex items-center justify-center p-2 my-2 cursor-pointer"
                  title={`Ver detalle de ${item.name}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(88,28,135,0.18)] group-hover:scale-105 group-hover:drop-shadow-[0_18px_32px_rgba(219,39,119,0.3)] transition-all duration-500 ease-out"
                    loading="eager"
                  />
                </div>

                {/* Product Info & Action CTA */}
                <div className="pt-4 border-t border-purple-200/80 flex flex-col justify-between flex-1 text-center">
                  <div className="flex flex-col items-center text-center">
                    <h3
                      onClick={() => handleItemClick(item.productId)}
                      className="font-heading font-black text-lg sm:text-xl text-slate-900 group-hover:text-pink-600 transition-colors leading-tight cursor-pointer text-center"
                    >
                      {item.name}
                    </h3>
                    
                    <div className="my-2.5">
                      <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-800 via-purple-700 to-pink-600 text-white font-black text-xs sm:text-sm shadow-md">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-normal whitespace-pre-line text-center">
                      {item.description}
                    </p>
                  </div>

                  {/* Actions: View Details & WhatsApp Personalization (Paleta de Marca: Morado Imperial, Fucsia y Oro) */}
                  <div className="mt-4 pt-2 flex flex-col gap-2">
                    {/* Botón para ver ficha completa con tallas, colores y configuración */}
                    <button
                      type="button"
                      onClick={() => handleItemClick(item.productId)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/95 hover:bg-purple-50 text-purple-950 font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all border-2 border-purple-200/90 hover:border-purple-400 text-center group/btn"
                    >
                      <Palette className="w-4 h-4 text-pink-500 group-hover/btn:scale-110 transition-transform" />
                      <span>Ver Detalles & Opciones</span>
                      <ArrowRight className="w-4 h-4 text-purple-700 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Botón directo a WhatsApp para personalizar (Gama de Colores Oficial VG: Morado Real, Fucsia y Oro) */}
                    <a
                      href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                        `¡Hola VG Personalizados! 👋 Deseo personalizar el producto "${item.name}". ¿Me pueden ayudar con el diseño?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-800 via-pink-600 to-purple-800 hover:from-purple-900 hover:via-pink-700 hover:to-purple-900 text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_16px_rgba(219,39,119,0.3)] hover:shadow-[0_6px_22px_rgba(147,51,234,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all border border-pink-300/60 text-center"
                    >
                      <span className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/40">
                        <MessageCircle className="w-3.5 h-3.5 text-white fill-white/30" />
                      </span>
                      <span>Personalizar por WhatsApp</span>
                      <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
