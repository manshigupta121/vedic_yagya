import React from 'react';
import { Sun, HeartHandshake, ScrollText, ArrowRight } from 'lucide-react';

// Custom CSS for advanced effects and animations
const customStyles = `
  /* Gradient Border/Glow effect for the main card */
  .golden-border {
    padding: 3px;
    background: linear-gradient(145deg, #fefce8, #f59e0b, #d97706);
    /* Luminous shadow, simulating sacred glow */
    box-shadow: 0 10px 30px rgba(253, 224, 71, 0.7), 0 0 60px rgba(217, 119, 6, 0.5);
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
      box-shadow: 0 0 25px rgba(253, 230, 138, 0.9), 0 0 40px rgba(217, 119, 6, 0.7); 
    }
    50% { 
      transform: scale(1.03); 
      box-shadow: 0 0 35px rgba(252, 211, 77, 1), 0 0 60px rgba(217, 119, 6, 0.9); 
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
    <section className="py-24 md:py-36 bg-amber-50 font-inter relative overflow-hidden">
      <style>{customStyles}</style>

      {/* Main Container - The Golden Artifact Frame */}
      <div className="max-w-4xl mx-auto rounded-3xl golden-border">
        
        {/* Inner Content Block */}
        <div className="bg-white p-10 md:p-16 rounded-[1.8rem] text-center relative 
                        border border-amber-200 shadow-inner shadow-amber-100">

          <div className="relative z-10">
            
            {/* Main Headline - Metallic Gold Text */}
            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-snug metallic-text">
              <Sun className="inline w-12 h-12 md:w-16 md:h-16 mb-2 mr-3 text-amber-500 shimmer-icon" />
              Invite Divine Energy.
            </h1>
            
            <h2 className="text-lg md:text-3xl font-extrabold mb-8 text-gray-800 metallic-text">
              Heal Karmic Blocks. Transform Your Destiny. 
            </h2>

            {/* Feature Callouts (Spiritual Benefits) */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="flex items-center text-lg md:text-xl text-gray-700 font-bold">
                <HeartHandshake className="w-6 h-6 mr-2 text-amber-600 shimmer-icon" /> Karmic Healing
              </div>
              <div className="flex items-center text-lg md:text-xl text-gray-700 font-bold">
                <ScrollText className="w-6 h-6 mr-2 text-amber-600 shimmer-icon" /> Destined Path Unlocked
              </div>
            </div>

            {/* Sub-Headline / Core Action - Highlighting the Yagya */}
            <p className="text-2xl md:text-4xl font-extrabold mb-10 
                       text-amber-500 max-w-3xl mx-auto leading-tight">
              <span className="text-5xl md:text-7xl text-amber-700 mr-4"></span>
              Book Your Personalized Yagya with Kashi Pandits Today.
            </p>

            {/* Luminous CTA Button - Intense Gold Gradient Pulse */}
            <a href="#action-start" className="inline-block">
              <button
                className="cta-button-luminous 
                           inline-flex items-center justify-center 
                           px-16 py-6 text-3xl font-extrabold 
                           rounded-full 
                           text-gray-900 
                           bg-gradient-to-r from-yellow-300 to-amber-500 
                           hover:from-yellow-400 hover:to-amber-600 transition duration-300 
                           shadow-2xl active:scale-95 transform tracking-wide 
                           border-4 border-amber-800"
                aria-label="Book Now - Starting ₹2100/-"
              >
                <span className="mr-4">Book Now</span>
                <span className="text-2xl font-bold ml-1 px-3 py-1 bg-amber-700 text-white rounded-full">
                    Starting ₹2100/-
                </span>
                <ArrowRight className="w-9 h-9 ml-2 transform translate-y-px" />
              </button>
            </a>
            
            <p className="mt-6 text-base text-gray-500 font-medium">
              Limited Yagya slots available per day. Secure your booking now.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default YagyaCTABlock;