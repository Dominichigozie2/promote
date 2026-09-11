import React, { useState } from 'react'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

export default function PricingSection({ onOpenQuote }) {
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: 'Starter Growth',
      description: 'Perfect for small businesses and startups looking to kickstart organic growth.',
      monthlyPrice: 1499,
      annualPrice: 1199,
      popular: false,
      features: [
        'Core Technical & On-Page SEO',
        'Google Business Profile Optimization',
        '4 High-Intent SEO Articles / mo',
        'Google Ads Campaign Management',
        'Monthly Performance Analytics Report',
        'Email Support (24h response)'
      ]
    },
    {
      name: 'Scale Pro',
      description: 'Comprehensive multi-channel growth suite designed for scaling brands.',
      monthlyPrice: 3299,
      annualPrice: 2639,
      popular: true,
      features: [
        'Advanced Technical & International SEO',
        'Full Google, Meta & LinkedIn Ad Ops',
        '8 Authority Content Articles / mo',
        'Conversion Rate Optimization (CRO)',
        'Bi-weekly Strategic Review Calls',
        'Dedicated Senior Account Strategist',
        'Custom GA4 & Looker Studio Dashboard'
      ]
    },
    {
      name: 'Enterprise Domination',
      description: 'Tailored omni-channel acceleration for established industry leaders.',
      monthlyPrice: 5999,
      annualPrice: 4799,
      popular: false,
      features: [
        'Omni-Channel Acquisition Strategy',
        'Unlimited Ad Spend Management',
        'Full Email Marketing & Flow Automation',
        'Weekly Executive Briefings & Testing',
        'Private Slack Channel with Founders',
        'Custom Creative Assets & Video Ads',
        'Guaranteed SLA & Priority Execution'
      ]
    }
  ]

  return (
    <section id="pricing" className="w-full py-16 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-block">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#1e8a3a] bg-[#e1f8d5] uppercase">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Choose a plan designed to accelerate your growth without hidden fees or lock-in contracts.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-4 text-sm font-semibold">
            <span className={!annual ? 'text-[#111827]' : 'text-gray-500'}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#2ec962] shadow-sm transform transition-transform duration-200 ${
                  annual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={annual ? 'text-[#111827] flex items-center gap-1.5' : 'text-gray-500 flex items-center gap-1.5'}>
              Annually
              <span className="text-[11px] font-bold text-[#1e8a3a] bg-[#e1f8d5] px-2 py-0.5 rounded-full uppercase">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#0b120d] text-white border-2 border-[#2ec962] shadow-2xl shadow-[#2ec962]/20 lg:-translate-y-2'
                    : 'bg-[#f7fbf7] text-[#111827] border border-[#e3f2e5] hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#2ec962] text-[#0f1712] text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" /> Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      ${price}
                    </span>
                    <span className={`text-sm font-medium ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                      / month
                    </span>
                  </div>

                  {/* Divider */}
                  <div className={`border-t mb-6 ${plan.popular ? 'border-gray-800' : 'border-gray-200'}`} />

                  {/* Features */}
                  <ul className="space-y-3.5 text-xs sm:text-sm mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2ec962]/20 text-[#2ec962] flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span className={plan.popular ? 'text-gray-200' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => onOpenQuote(`${plan.name} Plan`)}
                    className={`w-full py-3.5 px-6 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                      plan.popular
                        ? 'bg-[#2ec962] hover:bg-[#34d668] text-[#0f1712]'
                        : 'bg-[#111827] hover:bg-black text-white'
                    }`}
                  >
                    <span>Get Started Today</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
