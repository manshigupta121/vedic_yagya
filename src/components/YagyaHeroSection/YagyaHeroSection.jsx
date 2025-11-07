import React, { useState, useEffect } from 'react';
import { Leaf, Flame, Sparkles, BookOpen, Target, Wallet, ChevronLeft, ChevronRight } from 'lucide-react';

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
                        bg-gray-50 py-20">
      <style>{customStyles}</style>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Structure & Subheader */}
        <div className="mb-3 sm:mb-4 flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Authentic Vedic Services <span className="text-gray-400">| By Veda</span>
            </p>
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
        </div>
        <p className="text-md text-gray-600 mb-6">
            Rituals — Kashi Pandits for Divine Transformation.
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-gray-900 leading-tight">
          <span className="text-amber-600">Experience Sacred Yagyas</span>
          <br className="hidden lg:block"/> for Profound Life Change
        </h1>

        {/* Static Description Card (Interactive) */}
        <div className="max-w-4xl mx-auto mb-10 p-5 bg-white rounded-xl shadow-lg border-b-4 border-amber-300 transition-all duration-300 hover:shadow-xl hover:border-amber-500">
            <p className="text-base md:text-lg text-gray-700 font-medium">
                Unlock your spiritual potential with personalized Yagya ceremonies, precisely conducted in Kashi (Varanasi) based on your unique astrological needs.
            </p>
        </div>

        {/* CTA Button */}
        <button
          className="inline-flex items-center justify-center px-10 py-4 text-xl sm:text-2xl font-bold rounded-full shadow-xl transition duration-300 transform hover:scale-[1.05] shine-on-hover
            bg-gradient-to-r from-amber-500 to-orange-500 text-white border-4 border-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-500/50"
        >
          <Leaf className="w-5 h-5 sm:w-6 sm:h-6 mr-3 animate-spin-slow" /> 
          Book My Personalized Yagya
        </button>
        
        {/* --- Dynamic Carousel Section --- */}
        <div className="mt-16 w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">The Three Pillars of Transformation</h2>
          
          <div className="relative p-6 bg-white rounded-2xl shadow-2xl border border-gray-100 transition duration-500 overflow-hidden h-[180px]">
            
            {/* Carousel Content */}
            <div 
              key={activeIndex} 
              className="flex flex-col items-center justify-center h-full carousel-item-fade"
            >
              <currentItem.icon className={`w-12 h-12 mb-3 ${currentItem.color}`} />
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{currentItem.title}</h3>
              <p className="text-md text-gray-600 max-w-md">{currentItem.description}</p>
            </div>

            {/* Manual Controls (Optional, but good for interactivity) */}
            <button 
              onClick={goToPrev} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-full shadow-md transition-all duration-200"
              aria-label="Previous Benefit"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={goToNext} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-full shadow-md transition-all duration-200"
              aria-label="Next Benefit"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                {CAROUSEL_ITEMS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'bg-amber-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default YagyaHeroSection;