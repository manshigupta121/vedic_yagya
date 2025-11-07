import React, { useState, useEffect } from 'react';
import { Leaf, Flame, Sparkles, BookOpen, Target, Wallet, ChevronLeft, ChevronRight } from 'lucide-react';
import hero from '../../assets/hero.png';

// Custom CSS for smooth transitions and hover effects
const customStyles = `
  .carousel-item-fade {
    transition: opacity 0.8s ease-in-out;
  }
  .shine-on-hover {
    transition: all 0.3s ease-in-out;
  }
  .shine-on-hover:hover {
    box-shadow: 0 0 15px rgba(251, 191, 36, 0.7);
    filter: brightness(1.1);
  }
`;

// Define the content for the rotating carousel
const CAROUSEL_ITEMS = [
  { 
    icon: Flame, 
    title: "Cleansing Karma", 
    description: "Purify your inner self and remove obstacles with the sacred fire ceremony.",
    color: "text-red-600"
  },
  { 
    icon: Target, 
    title: "Planetary Harmony", 
    description: "Align your life path with divine forces based on your precise astrological chart.",
    color: "text-blue-600"
  },
  { 
    icon: Wallet, 
    title: "Invite Prosperity", 
    description: "Open pathways to wealth, abundance, and holistic well-being in all aspects of life.",
    color: "text-green-600"
  },
  { 
    icon: BookOpen, 
    title: "Vedic Authenticity", 
    description: "Rituals are performed strictly according to ancient Shastras by Kashi Pandits.",
    color: "text-purple-600"
  },
];

const YagyaHeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        (prevIndex + 1) % CAROUSEL_ITEMS.length
      );
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_ITEMS.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  const currentItem = CAROUSEL_ITEMS[activeIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-inter 
                        bg- py-20">
                          <img src={hero} alt="Hero" className="absolute inset-0 object-cover w-full h-full" />
      <style>{customStyles}</style>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-white leading-tight">
          <span className="text-amber-400">Experience Sacred Yagyas</span>
          <br className="hidden lg:block text-white"/> for Profound Life Change
        </h1>

        

        {/* CTA Button */}
        <button
          className="inline-flex items-center justify-center px-10 py-4 text-xl sm:text-2xl font-bold rounded-full shadow-xl transition duration-300 transform hover:scale-[1.05] shine-on-hover
            bg-gradient-to-r from-amber-500 to-orange-500 text-white border-4 border-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-500/50"
        >
          <Leaf className="w-5 h-5 sm:w-6 sm:h-6 mr-3 animate-spin-slow" /> 
          Book My Personalized Yagya
        </button>
        
        
            

           
         

      </div>
    </section>
  );
};

export default YagyaHeroSection;