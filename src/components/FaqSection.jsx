import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'How quickly can we expect to see tangible results?',
      a: 'PPC and paid social campaigns usually deliver qualified traffic and conversions within the first 72 hours of launch. For organic search (SEO), initial traction and indexing gains appear in 30–60 days, with exponential traffic compounding between months 3 and 6.'
    },
    {
      q: 'Do you require long-term lock-in contracts?',
      a: 'No. We believe client retention should be earned by ROI, not legal traps. After an initial 90-day onboarding runway to gather data and build foundation, our engagements continue on a flexible month-to-month or quarterly basis.'
    },
    {
      q: 'How do you communicate progress and reporting?',
      a: 'You get 24/7 access to a custom live dashboard tracking conversions, ROAS, and CAC. Additionally, we conduct bi-weekly strategy calls and maintain a shared Slack channel for rapid day-to-day coordination.'
    },
    {
      q: 'What advertising budgets do you recommend?',
      a: 'We manage ad spends ranging from $2,500/month up to $250,000+/month across Google, Meta, and LinkedIn. During our initial audit, we calculate your customer lifetime value (LTV) to recommend an optimal starting budget.'
    },
    {
      q: 'What makes WizardZ different from other agencies?',
      a: 'No junior handoffs or opaque billing. You work directly with veteran growth leads. We combine technical SEO engineering, high-converting design, and algorithmic ad bidding under a single, unified execution squad.'
    }
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-14">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#1e8a3a] bg-[#e1f8d5] uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Answers to common questions about our services, methodologies, and onboarding.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#2ec962] shadow-md'
                    : 'bg-[#f7fbf7] border-[#e3f2e5] hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#111827]">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#111827] text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
