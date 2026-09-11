import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function CalloutBanner({ onOpenQuote }) {
  return (
    <section className="w-full py-8 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#0b2414] via-[#12381f] to-[#07190d] p-8 sm:p-12 lg:p-14 shadow-2xl border border-[#2ec962]/20">
          
          {/* Subtle Ambient Radial Lights */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#2ec962]/20 blur-[100px] pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-72 h-72 rounded-full bg-[#2ec962]/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Let's Make Things Happen
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Contact us today to learn more about how our digital marketing services can help your business grow.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote('Proposal')}
                  className="group inline-flex items-center gap-3 bg-[#2ec962] hover:bg-[#34d668] text-[#0f1712] px-6 py-3.5 rounded-full text-sm sm:text-[15px] font-bold transition-all duration-300 shadow-lg shadow-[#2ec962]/30 active:scale-95"
                >
                  <span>Get Your Free Proposal</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0f1712] text-white group-hover:translate-x-1 transition-transform duration-200">
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Graphic: 3D Glowing Lightbulb & Gears */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center">
                {/* Luminous Glow behind bulb */}
                <div className="absolute w-56 h-56 rounded-full bg-[#2ec962]/25 blur-3xl pointer-events-none" />
                <img
                  src="/callout-lightbulb.png"
                  alt="WizardZ Glowing Idea Lightbulb"
                  className="w-full h-auto object-contain select-none drop-shadow-2xl relative z-10"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
