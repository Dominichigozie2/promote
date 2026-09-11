import React, { useState } from 'react'
import { CheckCircle2, ChevronDown, ChevronUp, Search, Compass, Rocket, BarChart3 } from 'lucide-react'

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: '01',
      title: 'Consultation & In-Depth Audit',
      icon: <Search className="w-5 h-5 text-[#2ec962]" />,
      short: 'Analyzing your current digital footprint and competitors.',
      detail: 'We dive deep into your analytics, search visibility, conversion funnels, and competitive landscape to pinpoint low-hanging fruit and high-impact growth opportunities.'
    },
    {
      number: '02',
      title: 'Research & Strategic Roadmap',
      icon: <Compass className="w-5 h-5 text-[#2ec962]" />,
      short: 'Formulating a tailored multi-channel growth plan.',
      detail: 'Our digital strategists build an actionable 6-month roadmap with defined KPIs, keyword clusters, target demographics, messaging hierarchy, and paid acquisition models.'
    },
    {
      number: '03',
      title: 'Campaign Implementation',
      icon: <Rocket className="w-5 h-5 text-[#2ec962]" />,
      short: 'Executing SEO sprints, ad campaigns, and creative assets.',
      detail: 'We launch optimized PPC campaigns, produce high-converting landing pages, write authoritative content, and implement technical SEO enhancements.'
    },
    {
      number: '04',
      title: 'Monitoring & Optimization',
      icon: <BarChart3 className="w-5 h-5 text-[#2ec962]" />,
      short: 'Iterative A/B testing and performance scaling.',
      detail: 'Through constant multivariate testing, bid management, and funnel refinement, we continuously lower customer acquisition cost (CAC) while scaling revenue.'
    }
  ]

  return (
    <section id="about" className="w-full py-16 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#1e8a3a] bg-[#e1f8d5] uppercase">
              Our Working Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Step-by-Step Guide to Achieving Your Goals
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            A structured, transparent methodology refined through hundreds of successful digital marketing campaigns.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isOpen = activeStep === index
            return (
              <div
                key={step.number}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#2ec962] shadow-lg shadow-[#2ec962]/10'
                    : 'bg-[#f7fbf7] border-[#e3f2e5] hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setActiveStep(isOpen ? -1 : index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-2xl sm:text-3xl font-black text-[#2ec962]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#111827]">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        {step.short}
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                    isOpen ? 'bg-[#111827] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-gray-600 border-t border-gray-100 animate-in fade-in duration-200">
                    <p className="leading-relaxed">{step.detail}</p>
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
