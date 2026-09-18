import React from 'react';
import type { ProductCategory } from '../types';
import { CATEGORIES } from '../data/products';

interface CategoryBubblesProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
}

export const CategoryBubbles: React.FC<CategoryBubblesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="bg-white border-b border-rose-100 py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as ProductCategory)}
                className="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none transition-transform active:scale-95"
              >
                {/* Circular image with gradient ring */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-tr from-rose-600 via-pink-500 to-amber-400 shadow-md scale-105 ring-2 ring-rose-300'
                      : 'bg-slate-200 group-hover:bg-gradient-to-tr group-hover:from-rose-400 group-hover:to-pink-400'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5 border-2 border-white">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Category label */}
                <span
                  className={`text-[11px] sm:text-xs font-bold tracking-tight text-center max-w-[76px] sm:max-w-[88px] leading-tight transition-colors line-clamp-2 ${
                    isSelected ? 'text-rose-600 font-extrabold' : 'text-slate-700 group-hover:text-rose-600'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
