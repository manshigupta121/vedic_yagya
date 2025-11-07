import React from 'react'
import YagyaHeroSection from './components/YagyaHeroSection/YagyaHeroSection.jsx'
import YagyaAboutSection from './components/YagyaAboutSection/YagyaAboutSection.jsx'
import YagyaTypesSection from './components/YagyaTypesSection/YagyaTypesSection.jsx'
import PricingSection from './components/PricingSection/PricingSection.jsx'
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection.jsx'
import ForWhomSection from './components/ForWhomSection/ForWhomSection.jsx'
import ClosingCTASection from './components/ClosingCTASection/ClosingCTASection.jsx'
import TestimonialCarousel from './components/TestimonialCarousel/TestimonialCarousel.jsx'
import FaqAccordion from './components/FaqAccordion/FaqAccordion.jsx'
import TrustAuthenticitySection from './components/TrustAuthenticitySection/TrustAuthenticitySection.jsx'

const App = () => {
  return (
    <>
    <YagyaHeroSection />
    <YagyaAboutSection />
    <YagyaTypesSection />
    <PricingSection />
    <HowItWorksSection />
    <ForWhomSection />
    <TrustAuthenticitySection />
    <TestimonialCarousel />
    <FaqAccordion />
    <ClosingCTASection />
    </>
  )
}

export default App