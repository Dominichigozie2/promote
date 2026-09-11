import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ClientLogos from './components/ClientLogos'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import CalloutBanner from './components/CalloutBanner'
import CaseStudiesSection from './components/CaseStudiesSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import BlogSection from './components/BlogSection'
import MiniCtaBar from './components/MiniCtaBar'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState('')

  const handleOpenQuote = (topic = '') => {
    setSelectedTopic(topic)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-[#111827] selection:bg-[#2ec962] selection:text-black flex flex-col">
      {/* Navigation Bar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main className="flex-1 w-full">
          {/* Hero Section with 3D Megaphone and Orbiting Badges */}
          <HeroSection onOpenQuote={handleOpenQuote} />

          {/* Partner & Client Logos (Amazon, Dribbble, HubSpot, Notion, Netflix, Zoom) */}
          <ClientLogos />

          {/* Solutions to Grow Your Business (4 Services Cards) */}
          <ServicesSection onOpenQuote={handleOpenQuote} />

          {/* Our Working Process (4 Step Methodology) */}
          <ProcessSection />

          {/* Callout Banner: Let's Make Things Happen with Glowing Lightbulb */}
          <CalloutBanner onOpenQuote={handleOpenQuote} />

          {/* Case Studies: Real Results from Real Clients (+180%, +250%, +120%) */}
          <CaseStudiesSection onOpenQuote={handleOpenQuote} />

          {/* Pricing Plans (Monthly/Annual Toggle, 3 Tiers) */}
          <PricingSection onOpenQuote={handleOpenQuote} />

          {/* Client Testimonials */}
          <TestimonialsSection />

          {/* Frequently Asked Questions */}
          <FaqSection />

          {/* Blog & Industry Insights */}
          <BlogSection onOpenQuote={handleOpenQuote} />

          {/* Mini CTA Bar: Ready to take your digital presence to the next level? */}
          <MiniCtaBar onOpenQuote={handleOpenQuote} />
        </main>

        {/* Footer with Links and Social Icons */}
        <Footer />

      {/* Interactive Consultation / Quote Modal */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic={selectedTopic}
      />
    </div>
  )
}
