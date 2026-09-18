import React from 'react';
import { Star, CheckCircle2, Heart } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: 'Carolina Morales',
      city: 'Pereira, Risaralda',
      product: 'Camisetas Temáticas Mickey "Mi Primer Añito"',
      rating: 5,
      date: 'Hace 3 días',
      comment:
        '¡Quedaron hermosas las camisetas para el cumpleaños de mi bebé! Pedí para el niño, papá y mamá. La tela es súper suave al tacto y el estampado quedó con colores vivos e impecables. La atención por WhatsApp fue de 10.',
    },
    {
      id: 2,
      author: 'Daniela Restrepo',
      city: 'Manizales, Caldas',
      product: 'Mug con Propósito "Con Dios todo es posible"',
      rating: 5,
      date: 'Hace 1 semana',
      comment:
        'Fue el regalo del día de las madres para mi mamá y casi llora de la emoción al ver la cajita tan delicada. La cerámica es pesada, brillante y los detalles de las flores son preciosos. ¡100% recomendados!',
    },
    {
      id: 3,
      author: 'Andrea Gómez',
      city: 'Armenia, Quindío',
      product: 'Agenda Personalizada Pasta Dura Floral',
      rating: 5,
      date: 'Hace 2 semanas',
      comment:
        'La agenda superó todas mis expectativas. El anillado dorado y el acabado plastificado de la pasta dura se sienten de lujo. Me enviaron el boceto previo con mi nombre antes de imprimir. Muy cumplidos con la entrega.',
    },
    {
      id: 4,
      author: 'Felipe & Valentina',
      city: 'Dosquebradas, Risaralda',
      product: 'Camiseta Stitch "Ella es Mía" & Rompecabezas',
      rating: 5,
      date: 'Hace 3 semanas',
      comment:
        'Mandamos a hacer el rompecabezas con nuestra foto favorita de aniversario y las camisetas de Stitch. Todo llegó en tiempo récord y perfectamente empacado. Sin duda volveremos a comprar.',
    },
  ];

  return (
    <section className="bg-rose-50/70 py-14 sm:py-20 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Opiniones de Clientes Felices</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            Lo que dicen quienes ya confiaron en nosotros
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Más de 500 detalles entregados en Pereira y toda Colombia creando sonrisas y momentos inolvidables.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl border border-rose-100 bg-white p-6 flex flex-col justify-between hover:shadow-2xl hover:border-rose-300 hover:scale-[1.02] transition-all duration-300 relative group"
            >
              <div className="space-y-3">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-xs text-slate-900">
                    {rev.author}
                  </span>
                  <span title="Comprador verificado" className="inline-flex">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {rev.city}
                </div>
                <div className="mt-1 text-[10px] font-semibold text-rose-600 truncate bg-rose-50 px-2 py-0.5 rounded-md inline-block">
                  {rev.product}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
