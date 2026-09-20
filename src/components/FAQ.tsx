import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Qué tipo de fotos o imágenes puedo enviar?',
      a: 'Aceptamos fotos tomadas con el móvil, imágenes de internet, capturas de pantalla, logotipos en PNG/SVG, o diseños en PDF. Antes de estampar, nuestro equipo optimiza la imagen y mejora su resolución para que los colores queden nítidos y vivos.',
    },
    {
      q: '¿El estampado o sublimado se cae al lavar la taza o la camiseta?',
      a: '¡No! La técnica de sublimación transfiere las tintas directamente a nivel molecular en la cerámica, el acero o la fibra de la tela. No es un sticker ni se cuartea: resiste lavavajillas, microondas y múltiples lavadas sin perder intensidad.',
    },
    {
      q: '¿Tienen pedido mínimo o puedo pedir solo una unidad?',
      a: '¡No tenemos mínimo de compra! Puedes encargar desde una sola taza o camiseta para un regalo personal, hasta pedidos al por mayor de 50, 100 o 500 unidades para empresas, bodas, colegios o eventos especiales con descuentos por volumen.',
    },
    {
      q: '¿Tienen punto de atención o entregas en Pereira?',
      a: '¡Sí! Estamos ubicados en Pereira (Risaralda) en la Calle 9 #7-36. Puedes pasar a recoger tu pedido personalmente una vez esté listo o solicitar envío a domicilio en Pereira y a cualquier rincón de Colombia por transportadora (Interrapidísimo, Servientrega, Envia) con número de guía.',
    },
    {
      q: '¿Cuáles son los métodos de pago disponibles?',
      a: 'Aceptamos transferencias por Nequi, Daviplata, Bancolombia, PSE y tarjetas de crédito o débito al coordinar tu compra por WhatsApp.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-transparent border-b border-purple-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 border border-purple-300 px-3 py-1 rounded-full mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-purple-700" />
            <span>Resolvemos tus dudas</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Todo lo que necesitas saber sobre personalización, materiales y entregas.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-purple-200/90 rounded-2xl overflow-hidden bg-white/95 shadow-sm hover:border-purple-400 transition-colors"
            >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-purple-800 transition-colors"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  openIndex === idx ? 'rotate-180 text-purple-600' : ''
                }`}
              />
            </button>

            {openIndex === idx && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                {faq.a}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};
