import React from 'react'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "WizardZ transformed our inbound pipeline. Within 90 days of launching their tailored PPC and SEO campaign, our demo requests surged by 250% while slashing customer acquisition costs.",
      author: "Sarah Jenkins",
      role: "VP of Growth",
      company: "Lumina Cloud Solutions",
      avatarBg: "bg-emerald-600",
      initials: "SJ"
    },
    {
      quote: "Their data-driven strategy and weekly transparency are second to none. They didn't just deliver SEO rankings; they directly drove 7-figure revenue growth for our Shopify stores.",
      author: "David Chen",
      role: "Founder & CEO",
      company: "SwiftCart Brands",
      avatarBg: "bg-blue-600",
      initials: "DC"
    },
    {
      quote: "Our email marketing revenue went from an afterthought to 32% of total store sales in under 4 months. WizardZ feels like an elite in-house growth squad rather than a vendor.",
      author: "Elena Rostova",
      role: "Director of Digital",
      company: "Apex Retail Group",
      avatarBg: "bg-purple-600",
      initials: "ER"
    }
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#1e8a3a] bg-[#e1f8d5] uppercase">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Trusted by Ambitious Brands Worldwide
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Real feedback from founders and marketing executives who partnered with WizardZ to achieve scale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#f7fbf7] hover:bg-white border border-[#e3f2e5] hover:border-[#2ec962]/40 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#2ec962] text-[#2ec962]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-100 flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827]">
                    {t.author}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {t.role} · <span className="text-gray-700 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
