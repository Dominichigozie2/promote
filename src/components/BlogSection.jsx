import React from 'react'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'

export default function BlogSection({ onOpenQuote }) {
  const articles = [
    {
      title: 'Mastering Organic Search in the Era of AI Overviews',
      category: 'SEO Strategy',
      readTime: '6 min read',
      date: 'Sep 2026',
      snippet: 'Why semantic entity mapping and topical authority outperform legacy keyword stuffing on next-gen search engines.',
      gradient: 'from-emerald-500/20 to-lime-500/10'
    },
    {
      title: '5 High-Impact PPC Bidding Tweaks That Doubled Client ROAS',
      category: 'Paid Media',
      readTime: '8 min read',
      date: 'Aug 2026',
      snippet: 'A breakdown of value-based smart bidding, negative audience sculpting, and attribution modeling that actually scales.',
      gradient: 'from-blue-500/20 to-emerald-500/10'
    },
    {
      title: 'The Anatomy of B2B Email Automation That Converts at 34%',
      category: 'Lifecycle & CRM',
      readTime: '5 min read',
      date: 'Aug 2026',
      snippet: 'How behavioral event triggers and tailored buyer-journey sequences beat standard batch-and-blast newsletters.',
      gradient: 'from-purple-500/20 to-teal-500/10'
    }
  ]

  return (
    <section id="blog" className="w-full py-16 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-block mb-3">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#1e8a3a] bg-[#e1f8d5] uppercase">
                Our Blog
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Latest Insights & Playbooks
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md md:text-right">
            Actionable frameworks and market research from our digital marketing practitioners.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((post, index) => (
            <article
              key={index}
              className="group bg-[#f7fbf7] hover:bg-white border border-[#e3f2e5] hover:border-[#2ec962]/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Header Banner */}
                <div className={`h-48 bg-gradient-to-br ${post.gradient} p-6 flex flex-col justify-between relative overflow-hidden border-b border-gray-100`}>
                  <div className="flex items-center justify-between">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-800 px-3 py-1 rounded-full shadow-xs">
                      {post.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-gray-700">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] group-hover:text-[#16a34a] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {post.snippet}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <button
                  onClick={() => onOpenQuote(`Article: ${post.title}`)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-900 group-hover:text-black"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2ec962] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
