
import React from 'react';
import { SLICES, ICONS } from '../constants';

export const SliceSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[60vh] border-y border-[#D4AF37]/20">
      {SLICES.map((slice) => (
        <a
          key={slice.id}
          href={slice.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex-1 flex flex-col items-center justify-center p-8 border-[#D4AF37]/20 border-b md:border-b-0 md:border-r last:border-0 overflow-hidden transition-all duration-500 hover:flex-[1.5] bg-black hover:bg-zinc-900"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37] to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <div className="transform transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-2">
              {ICONS[slice.iconName]}
            </div>
            
            <div>
              <h3 className="text-3xl font-serif gold-text mb-2 italic group-hover:tracking-wider transition-all duration-500">
                {slice.title}
              </h3>
              <p className="text-gray-400 text-sm max-w-[200px] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {slice.description}
              </p>
            </div>

            <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <span className="px-6 py-2 border border-[#D4AF37] gold-text text-xs uppercase tracking-widest">
                Explore {slice.id}
              </span>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};
