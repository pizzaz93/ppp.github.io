
import React from 'react';
import { X } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  icon: React.ReactNode;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  buttonText,
  buttonLink,
  icon,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-zinc-900 border border-[#D4AF37] p-8 rounded-none shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#D4AF37] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-black">
            {icon}
          </div>
          
          <h2 className="text-2xl font-serif gold-text">{title}</h2>
          
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>

          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 gold-gradient text-black font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};
