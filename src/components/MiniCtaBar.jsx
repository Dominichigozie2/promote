import React from 'react'
import { ChevronRight, Sparkles } from 'lucide-react'

export default function MiniCtaBar({ onOpenQuote }) {
  return (
    <section className="w-full py-8 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#daf7d0] border border-[#c3f0b4] rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          
          {/* Left Content */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#2ec962] text-black flex items-center justify-center flex-shrink-0 shadow-sm">
              <Sparkles className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#111827] tracking-tight">
                Ready to take your digital presence to the next level?
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                Partner with WizardZ and unlock your business potential.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onOpenQuote('Let\'s Talk')}
              className="group inline-flex items-center gap-3 bg-[#111827] hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm active:scale-95"
            >
              <span>Let's Talk</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#2ec962] text-black group-hover:translate-x-0.5 transition-transform">
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
