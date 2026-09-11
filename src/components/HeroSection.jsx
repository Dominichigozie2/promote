import React from 'react'
import { ChevronRight, Play, Share2, TrendingUp, MapPin } from 'lucide-react'

export default function HeroSection({ onOpenQuote }) {
  return (
    <section className="relative w-full pt-8 pb-16 px-4 sm:px-8 lg:px-14 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8 z-10">
          
          {/* Badge: DIGITAL GROWTH PARTNER */}
          <div className="inline-block">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#1e8a3a] bg-[#e1f8d5] uppercase">
              Digital Growth Partner
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
            Navigating the<br />
            Digital Landscape<br />
            <span className="text-[#2ec962]">for Success</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-normal">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Book a Consultation */}
            <button
              onClick={() => onOpenQuote('Consultation')}
              className="group inline-flex items-center gap-3 bg-[#111827] hover:bg-black text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
            >
              <span>Book a Consultation</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2ec962] text-black group-hover:translate-x-1 transition-transform duration-200">
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </span>
            </button>

            {/* View Our Services */}
            <a
              href="#services"
              className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300 px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 shadow-sm active:scale-95"
            >
              <span>View Our Services</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-700 group-hover:border-black group-hover:text-black transition-colors duration-200">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Hero Graphic Column */}
        <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
          
          {/* Ambient Glowing Green Orbit Rings in Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer thin green ring */}
            <div className="w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] rounded-full border border-[#2ec962]/35" />
            {/* Mid green ring */}
            <div className="absolute w-[290px] sm:w-[350px] h-[290px] sm:h-[350px] rounded-full border border-[#2ec962]/25" />
            {/* Soft inner glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#2ec962]/10 blur-3xl" />
          </div>

          {/* Central 3D Megaphone Graphic Container */}
          <div className="relative z-10 w-full max-w-[440px] flex items-center justify-center">
            
            {/* 3D Rendered Megaphone matching the reference with transparent background */}
            <img
              src="/hero-megaphone.png"
              alt="WizardZ Digital Growth Megaphone"
              className="w-full max-w-[390px] sm:max-w-[430px] h-auto object-contain select-none"
            />

            {/* Orbiting Node 1: Share (Top Right) */}
            <div className="absolute top-2 right-4 sm:right-8 flex items-center gap-2.5 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Share2 className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#111827] tracking-tight">
                Share
              </span>
            </div>

            {/* Orbiting Node 2: Growth (Upper Middle Right) */}
            <div className="absolute top-24 -right-1 sm:right-4 flex items-center gap-2.5 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#2ec962] text-[#0f1712] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <TrendingUp className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#111827] tracking-tight">
                Growth
              </span>
            </div>

            {/* Orbiting Node 3: Engage (Lower Middle Right) */}
            <div className="absolute top-48 -right-2 sm:right-2 flex items-center gap-2.5 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#111827] tracking-tight">
                Engage
              </span>
            </div>

            {/* Orbiting Node 4: Reach (Bottom Right) */}
            <div className="absolute bottom-14 right-8 sm:right-14 flex items-center gap-2.5 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#2ec962] text-[#0f1712] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#111827] tracking-tight">
                Reach
              </span>
            </div>

            {/* Decorative Subtle Lime Dots */}
            <div className="absolute top-12 right-28 w-2 h-2 rounded-full bg-[#2ec962] opacity-70" />
            <div className="absolute top-40 right-36 w-1.5 h-1.5 rounded-full bg-[#2ec962] opacity-80" />
            <div className="absolute bottom-28 right-24 w-2 h-2 rounded-full bg-[#2ec962] opacity-60" />
            <div className="absolute bottom-8 right-40 w-1.5 h-1.5 rounded-full bg-[#2ec962] opacity-50" />
            <div className="absolute top-28 left-4 w-2 h-2 rounded-full bg-[#2ec962] opacity-50" />
          </div>

        </div>
      </div>
    </section>
  )
}
