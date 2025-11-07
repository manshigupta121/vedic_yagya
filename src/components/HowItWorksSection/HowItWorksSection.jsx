import React from 'react';
import { User, ScrollText, Video, Package, ArrowRight, MapPin } from 'lucide-react';

const STEPS = [
  {
    icon: User,
    title: "Share Your Details & Purpose",
    desc: "Provide your birth details and the specific intent (Sankalp) for the ritual.",
    color: "text-amber-700",
    bg: "bg-amber-100",
    shadow: "shadow-amber-300"
  },
  {
    icon: ScrollText,
    title: "Sankalp & Muhurat Preparation",
    desc: "Our Kashi Pandits analyze your Kundali to prepare your specific Sankalp and find the most auspicious time (Muhurat).",
    color: "text-red-700",
    bg: "bg-red-100",
    shadow: "shadow-red-300"
  },
  {
    icon: MapPin,
    title: "Yagya Conducted in Kashi / Trimbakeshwar",
    desc: "The ritual is performed live in the sacred location as per tradition, ensuring potent spiritual results.",
    color: "text-purple-700",
    bg: "bg-purple-100",
    shadow: "shadow-purple-300"
  },
  {
    icon: Video,
    title: "Receive Live Video & Completion Report",
    desc: "Witness the ceremony live and get a detailed report of the proceedings, mantras chanted, and offerings made.",
    color: "text-teal-700",
    bg: "bg-teal-100",
    shadow: "shadow-teal-300"
  },
  {
    icon: Package,
    title: "Get Your Prasadam & Blessings at Home",
    desc: "The sacred Prasadam and energized Yantra/Talisman are securely dispatched to your address.",
    color: "text-blue-700",
    bg: "bg-blue-100",
    shadow: "shadow-blue-300"
  },
];

// Custom CSS for animations and layout
const customStyles = `
  .step-card {
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .step-card:hover {
    transform: translateY(-8px) scale(1.02);
    z-index: 10;
  }
  /* Animation for the dotted connecting line (Vertical Mobile View) */
  @keyframes lineAnimate {
    0% { background-position: 0 0; }
    100% { background-position: 0 100%; }
  }
  .dotted-line {
    background-image: linear-gradient(to top, #fcd34d 50%, transparent 50%);
    background-size: 100% 16px;
    animation: lineAnimate 10s linear infinite;
  }
`;

const StepCard = ({ icon: Icon, title, desc, color, bg, shadow, number }) => (
  <div className="flex relative justify-center lg:justify-start">
    {/* The Card */}
    <div className={`
      step-card p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl 
      w-full border-b-4 border-r-4 ${shadow} ${bg}
      flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-start
      relative z-10
    `}>
      
      {/* Icon Area */}
      <div className={`
        p-4 rounded-full mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 
        shadow-lg ${bg.replace('100', '300')} border-2 border-white
      `}>
        <Icon className={`w-8 h-8 ${color}`} strokeWidth={2.5} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  </div>
);

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white font-inter relative overflow-hidden">
      <style>{customStyles}</style>

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 opacity-0 md:opacity-10" 
           style={{ backgroundImage: `radial-gradient(circle at center, #fefce8 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-amber-800 mb-4 drop-shadow-sm">
          The Yagya Process
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Experience a smooth, authentic, and transparent spiritual service in just five simple steps.
        </p>

        {/* Timeline Grid Layout (Desktop/Large Screens) - NOW HORIZONTAL ARROWS */}
        <div className="hidden lg:grid grid-cols-5 gap-0 relative">
          
          {STEPS.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative px-2">
              {/* Icon & Connector */}
              <div className="relative z-10">
                <div className={`
                  p-5 rounded-full shadow-xl mb-4 flex-shrink-0 
                  border-4 border-white transform transition-all duration-300 hover:scale-105
                  ${step.bg.replace('100', '600')}
                `}>
                  <step.icon className={`w-8 h-8 text-white`} strokeWidth={2} />
                </div>
              </div>

              {/* Step Title and Description */}
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600 px-1">{step.desc}</p>
              
              {/* Horizontal Arrow Connector between steps */}
              {index < STEPS.length - 1 && (
                // Positioned absolutely between steps, centered vertically on the icon
                <div className="absolute top-[35px] right-[-10%] w-[20%] flex items-center justify-center z-5">
                  <ArrowRight className="w-8 h-8 text-amber-500 animate-pulse" style={{animationDelay: `${index * 0.2}s`}}/>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Adjusted Timeline Grid Layout (Tablet/Mobile Screens - Vertical Stack) */}
        <div className="lg:hidden relative">
          {/* Vertical dotted line connector */}
          <div className="absolute left-6 top-0 bottom-0 w-1 dotted-line z-0"></div>
          
          <div className="space-y-12">
            {STEPS.map((step, index) => (
              <div key={index} className="flex items-start">
                {/* Visual Step Indicator (Left side) */}
                <div className="flex flex-col items-center z-10 mr-6">
                  <div className={`
                    w-12 h-12 rounded-full shadow-xl flex items-center justify-center 
                    border-4 border-white font-bold text-lg text-white 
                    ${step.bg.replace('100', '600')}
                  `}>
                    {index + 1}
                  </div>
                  {/* Small connector for vertical spacing */}
                  {index < STEPS.length - 1 && (
                    <div className="h-10 w-1 dotted-line"></div>
                  )}
                </div>

                {/* Step Content Card (Right side) */}
                <div className="flex-1 mt-1">
                  <div className={`
                    step-card p-5 rounded-xl shadow-lg hover:shadow-xl w-full 
                    border-l-4 ${step.bg.replace('100', '300')} border-${step.color.split('-')[1]}-600
                  `}>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;