import React from 'react';
import { Sun, HeartHandshake, ScrollText, ArrowRight } from 'lucide-react';

// Custom CSS for advanced effects and animations
const customStyles = `
  /* Gradient Border/Glow effect for the main card */
  .golden-border {
    padding: 3px;
    background: linear-gradient(145deg, #fefce8, #f59e0b, #d97706);
    /* Luminous shadow, simulating sacred glow */
    box-shadow: 0 5px 20px rgba(253, 224, 71, 0.7), 0 0 40px rgba(217, 119, 6, 0.5); /* Reduced shadow intensity */
  }
  
  /* Metallic Text Effect for the main headline */
  .metallic-text {
    background: linear-gradient(180deg, #fef3c7 0%, #d97706 60%, #b45309 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
  }

  /* Luminous Button Pulse Animation */
  @keyframes luminousPulse {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: 0 0 15px rgba(253, 230, 138, 0.9), 0 0 20px rgba(217, 119, 6, 0.7); 
    }
    50% { 
      transform: scale(1.03); 
      box-shadow: 0 0 25px rgba(252, 211, 77, 1), 0 0 40px rgba(217, 119, 6, 0.9); 
    }
  }

  .cta-button-luminous {
    animation: luminousPulse 2.0s infinite ease-in-out;
  }
  
  /* Subtle shimmer/glow for icons */
  @keyframes iconGlow {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; transform: scale(1.05); }
  }

  .shimmer-icon {
      animation: iconGlow 4s infinite alternate ease-in-out;
  }
`;

const YagyaCTABlock = () => {
  return (
    // Reduced overall vertical padding from py-24 md:py-36 to py-12 md:py-16
    <section className="py-12 md:py-16 bg-amber-50 font-inter relative overflow-hidden">
      <style>{customStyles}</style>

      {/* Main Container - The Golden Artifact Frame */}
      <div className="max-w-3xl mx-auto rounded-3xl golden-border"> {/* Reduced max-width slightly */}
        
        {/* Inner Content Block */}
        {/* Reduced inner padding from p-10 md:p-16 to p-6 md:p-10 */}
        <div className="bg-white p-6 md:p-10 rounded-[1.8rem] text-center relative 
                       border border-amber-200 shadow-inner shadow-amber-100">

          <div className="relative z-10">
            
            {/* Main Headline - Reduced font size and margins */}
            <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight leading-snug metallic-text">
              {/* Reduced icon size */}
              <Sun className="inline w-8 h-8 md:w-12 md:h-12 mb-1 mr-2 text-amber-500 shimmer-icon" />
              Invite Divine Energy.
            </h1>
            
            {/* Reduced font size and margins */}
            <h2 className="text-lg md:text-2xl font-extrabold mb-6 text-gray-800 metallic-text">
              Heal Karmic Blocks. Transform Your Destiny. 
            </h2>

            {/* Feature Callouts - Reduced margins and font size */}
            <div className="flex justify-center space-x-6 mb-8">
              <div className="flex items-center text-base md:text-lg text-gray-700 font-bold">
                <HeartHandshake className="w-5 h-5 mr-1 text-amber-600 shimmer-icon" /> Karmic Healing
              </div>
              <div className="flex items-center text-base md:text-lg text-gray-700 font-bold">
                <ScrollText className="w-5 h-5 mr-1 text-amber-600 shimmer-icon" /> Destined Path Unlocked
              </div>
            </div>

            {/* Sub-Headline / Core Action - Reduced font size and margins */}
            <p className="text-xl md:text-3xl font-extrabold mb-8 
                          text-amber-500 max-w-2xl mx-auto leading-tight">
              <span className="text-4xl md:text-6xl text-amber-700 mr-2"></span>
              Book Your Personalized Yagya with Kashi Pandits Today.
            </p>

            {/* Luminous CTA Button - Reduced padding, font size, and badge size */}
            <a href="#action-start" className="inline-block">
              <button
                className="cta-button-luminous 
                           inline-flex items-center justify-center 
                           px-10 py-4 text-xl font-extrabold 
                           rounded-full 
                           text-gray-900 
                           bg-gradient-to-r from-yellow-300 to-amber-500 
                           hover:from-yellow-400 hover:to-amber-600 transition duration-300 
                           shadow-xl active:scale-95 transform tracking-wide 
                           border-4 border-amber-800"
                aria-label="Book Now - Starting ₹2100/-"
              >
                <span className="mr-3">Book Now</span>
                {/* Reduced badge font size and padding */}
                <span className="text-lg font-bold ml-1 px-2 py-0.5 bg-amber-700 text-white rounded-full">
                    Starting ₹2100/-
                </span>
                {/* Reduced icon size */}
                <ArrowRight className="w-6 h-6 ml-2 transform translate-y-px" />
              </button>
            </a>
            
            <p className="mt-4 text-sm text-gray-500 font-medium">
              Limited Yagya slots available per day. Secure your booking now.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default YagyaCTABlock;