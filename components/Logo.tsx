
import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-16 h-16 text-xl',
    md: 'w-32 h-32 text-4xl',
    lg: 'w-48 h-48 text-6xl',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`relative flex items-center justify-center border-2 border-[#D4AF37] rounded-full ${sizes[size]} p-4 animate-pulse`}>
        {/* Decorative inner rings */}
        <div className="absolute inset-1 border border-[#D4AF37]/30 rounded-full"></div>
        <div className="absolute inset-2 border border-[#D4AF37]/10 rounded-full"></div>
        
        <span className="font-serif gold-text italic tracking-widest font-light">PPP</span>
      </div>
    </div>
  );
};
