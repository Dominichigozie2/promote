import React from 'react'
import { ArrowRight, ShoppingBag, Laptop, Store } from 'lucide-react'

export default function CaseStudiesSection({ onOpenQuote }) {
  const cases = [
    {
      type: 'E-commerce Brand',
      icon: <ShoppingBag className="w-5 h-5 text-[#2ec962]" />,
      stat: '+180%',
      desc: 'increase in organic traffic within 6 months.'
    },
    {
      type: 'SaaS Company',
      icon: <Laptop className="w-5 h-5 text-[#2ec962]" />,
      stat: '+250%',
      desc: 'boost in leads through PPC campaigns.'
    },
    {
      type: 'Retail Business',
      icon: <Store className="w-5 h-5 text-[#2ec962]" />,
      stat: '+120%',
      desc: 'revenue growth with email marketing automation.'
    }
  ]

  return (
    <section id="cases" className="w-full py-12 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-block mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider text-[#1e8a3a] bg-[#e1f8d5] uppercase">
              Case Study
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Real Results from Real Clients
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-md md:text-right">
              Explore how we've helped businesses achieve measurable growth.
            </p>
          </div>
        </div>

        {/* 3-Column Dark Container */}
        <div className="bg-[#0b120d] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-2xl border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800/80">
            {cases.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between space-y-6 ${
                  idx === 0
                    ? 'md:pr-8 pb-8 md:pb-0'
                    : idx === 1
                    ? 'md:px-8 py-8 md:py-0'
                    : 'md:pl-8 pt-8 md:pt-0'
                }`}
              >
                <div>
                  {/* Tag with Green Icon */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-[#2ec962]/10 border border-[#2ec962]/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-200 tracking-wide">
                      {item.type}
                    </span>
                  </div>

                  {/* Percentage Metric */}
                  <div className="text-4xl sm:text-5xl font-black text-[#2ec962] tracking-tight mb-3">
                    {item.stat}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-4">
                  <button
                    onClick={() => onOpenQuote(`${item.type} Case Study`)}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#2ec962] transition-colors"
                  >
                    <span>Learn more</span>
                    <span className="w-5 h-5 rounded-full bg-[#2ec962] text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ArrowRight className="w-3 h-3 stroke-[3]" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
