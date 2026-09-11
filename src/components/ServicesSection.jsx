import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection({ onOpenQuote }) {
  const services = [
    {
      title: 'Search Engine Optimization',
      description: 'Improve your rankings and drive organic traffic.',
      icon: (
        <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto select-none">
          {/* Green outer glow circle */}
          <circle cx="60" cy="55" r="42" fill="#dcfce7" />
          <circle cx="60" cy="55" r="34" fill="#ffffff" />
          
          {/* Bar Chart Columns */}
          <rect x="42" y="58" width="7" height="22" rx="3.5" fill="#cbd5e1" />
          <rect x="53" y="46" width="7" height="34" rx="3.5" fill="#2ec962" />
          <rect x="64" y="38" width="7" height="42" rx="3.5" fill="#94a3b8" />
          <rect x="75" y="48" width="7" height="32" rx="3.5" fill="#e2e8f0" />

          {/* Magnifying Glass with Lime Rim */}
          <circle cx="56" cy="50" r="22" fill="none" stroke="#2ec962" strokeWidth="6" />
          <path d="M72 65 L88 81" stroke="#2ec962" strokeWidth="6" strokeLinecap="round" />
          <path d="M50 42 A 12 12 0 0 1 62 42" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        </svg>
      )
    },
    {
      title: 'Pay Per Click Advertising',
      description: 'Get targeted traffic and increase conversions.',
      icon: (
        <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto select-none">
          {/* Browser Window */}
          <rect x="25" y="32" width="68" height="48" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.04))" />
          {/* Browser Header */}
          <rect x="25" y="32" width="68" height="12" rx="8" fill="#111827" />
          <circle cx="31" cy="38" r="1.5" fill="#ef4444" />
          <circle cx="36" cy="38" r="1.5" fill="#f59e0b" />
          <circle cx="41" cy="38" r="1.5" fill="#10b981" />
          
          {/* Content lines inside browser */}
          <rect x="33" y="50" width="26" height="18" rx="3" fill="#f1f5f9" />
          <rect x="63" y="50" width="22" height="4" rx="2" fill="#cbd5e1" />
          <rect x="63" y="58" width="16" height="4" rx="2" fill="#e2e8f0" />

          {/* Lime Green 3D Mouse Cursor Arrow */}
          <g transform="translate(68, 52) rotate(-15)">
            <path
              d="M 0,0 L 22,22 L 13,23 L 18,34 L 11,37 L 6,26 L 0,31 Z"
              fill="#2ec962"
              stroke="#ffffff"
              strokeWidth="2.5"
              filter="drop-shadow(2px 6px 8px rgba(46,201,98,0.4))"
            />
          </g>
        </svg>
      )
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience and build your brand.',
      icon: (
        <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto select-none">
          {/* Dark Main Speech Bubble */}
          <path
            d="M 30,38 C 30,30 36,24 44,24 L 76,24 C 84,24 90,30 90,38 L 90,62 C 90,70 84,76 76,76 L 45,76 L 33,85 L 34,76 C 31,76 30,71 30,62 Z"
            fill="#111827"
            filter="drop-shadow(0 6px 12px rgba(0,0,0,0.12))"
          />
          {/* Three White Dots */}
          <circle cx="48" cy="50" r="3.5" fill="#ffffff" />
          <circle cx="60" cy="50" r="3.5" fill="#ffffff" />
          <circle cx="72" cy="50" r="3.5" fill="#ffffff" />

          {/* Lime Green Floating Heart 1 */}
          <g transform="translate(74, 18) scale(0.9)">
            <rect x="0" y="0" width="22" height="22" rx="6" fill="#bbf7d0" />
            <path
              d="M 11,16 C 6,12 4,9 4,6.5 C 4,4.5 5.5,3 7.5,3 C 8.8,3 10,3.7 11,4.7 C 12,3.7 13.2,3 14.5,3 C 16.5,3 18,4.5 18,6.5 C 18,9 16,12 11,16 Z"
              fill="#2ec962"
            />
          </g>

          {/* Lime Green Floating Heart 2 */}
          <g transform="translate(68, 62) scale(0.75)">
            <rect x="0" y="0" width="22" height="22" rx="6" fill="#bbf7d0" />
            <path
              d="M 11,16 C 6,12 4,9 4,6.5 C 4,4.5 5.5,3 7.5,3 C 8.8,3 10,3.7 11,4.7 C 12,3.7 13.2,3 14.5,3 C 16.5,3 18,4.5 18,6.5 C 18,9 16,12 11,16 Z"
              fill="#2ec962"
            />
          </g>
        </svg>
      )
    },
    {
      title: 'E-mail Marketing',
      description: 'Nurture leads and boost customer retention.',
      icon: (
        <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto select-none">
          {/* Paper Sheet popping out */}
          <rect x="36" y="24" width="48" height="40" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          
          {/* Lime @ Sign Circle Badge */}
          <circle cx="60" cy="42" r="14" fill="#dcfce7" />
          <text x="60" y="47" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="#15803d">
            @
          </text>

          {/* Envelope Body */}
          <path
            d="M 26,45 L 60,68 L 94,45 L 94,84 C 94,88 90,92 86,92 L 34,92 C 30,92 26,88 26,84 Z"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="2"
            filter="drop-shadow(0 6px 10px rgba(0,0,0,0.06))"
          />
          {/* Envelope Flap Lines */}
          <path d="M 26,48 L 60,70 L 94,48" fill="none" stroke="#2ec962" strokeWidth="2.5" />
          <path d="M 26,90 L 52,65" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
          <path d="M 94,90 L 68,65" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="w-full py-16 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#1e8a3a] bg-[#e1f8d5] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Solutions to Grow Your Business
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            We offer a range of services to help businesses thrive in the digital world.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-[#f7fbf7] hover:bg-white border border-[#e3f2e5] hover:border-[#2ec962]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5"
            >
              <div>
                {/* Card Icon Graphic */}
                <div className="h-32 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#111827] leading-snug mb-2 group-hover:text-black">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action: Learn more + Circle Arrow */}
              <div className="pt-6 mt-4 border-t border-gray-100/80 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuote(item.title)}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-gray-900 group-hover:text-black"
                >
                  <span>Learn more</span>
                  <span className="w-6 h-6 rounded-full bg-[#111827] group-hover:bg-[#2ec962] text-white group-hover:text-black flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
