
import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { SliceSection } from './components/SliceSection';
import { InfoModal } from './components/InfoModal';
import { ICONS } from './constants';
import { ModalData } from './types';

const App: React.FC = () => {
  const [modal, setModal] = useState<ModalData>({ isOpen: false, type: null });

  const openModal = (type: 'newsletter' | 'linkedin') => {
    setModal({ isOpen: true, type });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: null });
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      {/* Hero Header */}
      <header className="container mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center space-y-12">
        <Logo size="lg" />
        
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-serif gold-text italic leading-tight tracking-wide">
            Discover Your Professional Story
          </h1>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mx-auto max-w-2xl">
            <span className="gold-text font-medium">Past Present Phuture</span> is a platform designed to help you understand your career journey and the potential path ahead. 
            <span className="italic"> Past</span> is a tool to learn about your career theme, 
            <span className="italic"> Present</span> helps you build a personal brand and 
            <span className="italic"> Phuture</span> inspires you with future opportunities.
          </p>
        </div>
      </header>

      {/* Main Experience Slices */}
      <main className="flex-grow">
        <SliceSection />
      </main>

      {/* CTA Cards (Pseudo-Modals) */}
      <section className="container mx-auto px-6 py-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter Card */}
          <div className="p-8 border border-[#D4AF37]/30 bg-zinc-950/50 hover:bg-zinc-900 transition-colors group flex flex-col items-center text-center space-y-4">
            <div className="p-3 border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors rounded-full">
              {ICONS.mail}
            </div>
            <h3 className="text-xl font-serif gold-text italic">Stay Connected</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Want more career insights? Join our community for career tips, industry insights, and exclusive content to help you narrate your Present.
            </p>
            <button 
              onClick={() => openModal('newsletter')}
              className="mt-4 px-8 py-3 border border-[#D4AF37] gold-text text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Join the Community
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="p-8 border border-[#D4AF37]/30 bg-zinc-950/50 hover:bg-zinc-900 transition-colors group flex flex-col items-center text-center space-y-4">
            <div className="p-3 border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors rounded-full">
              {ICONS.lightbulb}
            </div>
            <h3 className="text-xl font-serif gold-text italic">Explore Your Career</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Connect with me on LinkedIn to learn more about coaching and if it is right for you.
            </p>
            <button 
              onClick={() => openModal('linkedin')}
              className="mt-4 px-8 py-3 border border-[#D4AF37] gold-text text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Connect on LinkedIn
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Footer Content */}
      <footer className="bg-zinc-950 border-t border-[#D4AF37]/10 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-2xl font-serif gold-text italic mb-4">How It Works</h2>
              <div className="w-12 h-[1px] gold-bg mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 text-sm leading-relaxed">
              <div className="space-y-4">
                <h4 className="text-[#D4AF37] uppercase tracking-widest font-semibold text-xs">Site Logic</h4>
                <p>
                  PPP is built on a modular architectural framework that separates the career lifecycle into three distinct chronological states. Each "slice" represents a specific phase of professional development, allowing for focused interaction with tools tailored for that specific moment in time.
                </p>
                <p>
                  The navigation is designed to be frictionless, providing direct access to the specialized sub-platforms (Past, Present, Phuture) which reside as standalone applications, ensuring a unified yet decentralized experience for the user.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#D4AF37] uppercase tracking-widest font-semibold text-xs">AI Implementation</h4>
                <p>
                  Underpinning the platform is advanced Generative AI logic. We utilize Large Language Models (LLMs) like Gemini and GPT to analyze career narratives, identifying patterns that humans might miss. 
                </p>
                <p>
                  In 'Past', AI maps themes from your history. In 'Present', it optimizes your personal branding through sentiment analysis and keyword alignment. In 'Phuture', predictive modeling suggests career pivots based on emerging market data and your individual skill fingerprint.
                </p>
              </div>
            </div>

            <div className="text-center pt-12 border-t border-white/5">
              <p className="text-xs text-zinc-600 tracking-widest uppercase">
                &copy; {new Date().getFullYear()} PPP - Past Present Phuture. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <InfoModal
        isOpen={modal.isOpen && modal.type === 'newsletter'}
        onClose={closeModal}
        title="Stay Connected"
        description="Join our growing community of professionals and get exclusive career tips delivered directly to your inbox."
        buttonText="Join the Community"
        buttonLink="https://pastpresentphuture.substack.com"
        icon={ICONS.mail}
      />
      <InfoModal
        isOpen={modal.isOpen && modal.type === 'linkedin'}
        onClose={closeModal}
        title="Explore Your Career"
        description="Interested in personalized career coaching? Let's connect on LinkedIn to discuss your goals and how we can work together."
        buttonText="Connect on LinkedIn"
        buttonLink="https://linkedin.com/in/peretzcohen"
        icon={ICONS.lightbulb}
      />
    </div>
  );
};

export default App;
