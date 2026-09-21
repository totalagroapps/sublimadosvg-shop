import React from 'react';
import { MessageCircle, Mail, MapPin, Heart, ShieldCheck, Sparkles, Truck, ExternalLink } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import type { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Marketplace Payment & Carriers Strip */}
        <div className="mb-12 pb-10 border-b border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
              Medios de Pago Aceptados en Colombia
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-amber-300">
                Nequi
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-red-400">
                Daviplata
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-yellow-300">
                Bancolombia
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-blue-300">
                PSE
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-white">
                Tarjetas de Crédito / Débito
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
              Envíos Seguros a Todo el País
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span>Interrapidísimo</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                Servientrega
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                Envía
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-rose-300">
                Domicilios en Pereira &amp; Dosquebradas
              </span>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-300 shadow-md bg-white shrink-0">
                <img
                  src={STORE_CONFIG.logoPrincipal}
                  alt="VG Personalizados Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-tight">
                  <span className="text-purple-300">V</span>
                  <span className="text-pink-400">G</span>{' '}
                  <span className="text-rose-300">Personalizados</span>
                </span>
                <p className="text-[11px] text-slate-300 font-medium">
                  {STORE_CONFIG.slogan}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {STORE_CONFIG.secondarySlogan}. Hacemos que tus mejores recuerdos, fotografías, caricaturas y logos cobren vida en regalos y prendas únicas con acabado de alta fidelidad.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Tienda oficial: <strong className="text-white">{STORE_CONFIG.domain}</strong></span>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Atención por WhatsApp ({STORE_CONFIG.whatsappDisplay})</span>
              </a>
            </div>
          </div>

          {/* Col 3: Categorías */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Departamentos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => onSelectCategory('camisetas')}
                  className="hover:text-rose-400 transition-colors"
                >
                  👕 Camisetas &amp; Ropa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('mugs-silicona')}
                  className="hover:text-pink-300 transition-colors"
                >
                  💖 Mugs Tapa de Silicona
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('mugs-tradicionales')}
                  className="hover:text-pink-300 transition-colors"
                >
                  ☕ Mugs Tradicionales
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('mugs-magicos')}
                  className="hover:text-pink-300 transition-colors"
                >
                  ✨ Mugs Mágicos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('termos')}
                  className="hover:text-pink-300 transition-colors"
                >
                  🌡️ Termos Inteligentes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('agendas')}
                  className="hover:text-rose-400 transition-colors"
                >
                  📓 Agendas Pasta Dura
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('cojines')}
                  className="hover:text-rose-400 transition-colors"
                >
                  🛋️ Cojines Personalizados
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('rompecabezas')}
                  className="hover:text-rose-400 transition-colors"
                >
                  🧩 Rompecabezas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('regalos')}
                  className="hover:text-rose-400 transition-colors"
                >
                  🎂 Cake Toppers &amp; Llaveros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('todos')}
                  className="hover:text-rose-400 transition-colors"
                >
                  ✨ Ver Todo el Catálogo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Garantías */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Garantía VG Personalizados
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Revisión y aprobación previa del diseño por WhatsApp</span>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Sublimación HD táctil que no se cae con los lavados</span>
              </div>
              <div className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Embalaje antigolpes para tazas y termos de acero</span>
              </div>
            </div>
          </div>

          {/* Col 5: Contacto */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Sede Física &amp; Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400" />
                <span className="truncate">{STORE_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{STORE_CONFIG.whatsappDisplay}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{STORE_CONFIG.address}, {STORE_CONFIG.city}</span>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${STORE_CONFIG.address}, ${STORE_CONFIG.city}, Colombia`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-amber-300 hover:text-amber-200 underline flex items-center gap-1 pl-6"
              >
                <span>Ver ubicación en Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="text-[11px] text-slate-300 pl-6 pt-1">
                🇨🇴 Envíos a Pereira y toda Colombia
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            &copy; {new Date().getFullYear()} <strong>Sublimados VG</strong> ({STORE_CONFIG.domain}). Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            Hecho con <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> en Pereira, Risaralda
          </p>
        </div>

      </div>
    </footer>
  );
};
