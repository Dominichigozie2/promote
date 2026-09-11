import React, { useState } from 'react'
import { X, CheckCircle2, ArrowRight } from 'lucide-react'

export default function QuoteModal({ isOpen, onClose, defaultTopic }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: defaultTopic || 'Search Engine Optimization',
    message: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // auto close or reset
    }, 4000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-[#e1f8d5] text-[#2ec962] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
            <p className="text-gray-600 text-sm max-w-sm mx-auto">
              We've received your request. A digital strategist from WizardZ will reach out within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
              className="mt-4 inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors"
            >
              <span>Done</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-[#1e8a3a] bg-[#e1f8d5] uppercase tracking-wider mb-2">
                Get In Touch
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                {defaultTopic ? `Request: ${defaultTopic}` : 'Start Growing Your Business'}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Tell us about your project and we'll prepare a custom growth plan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2ec962] text-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2ec962] text-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Company / Website
                  </label>
                  <input
                    type="text"
                    placeholder="company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2ec962] text-sm"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Primary Service
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2ec962] text-sm bg-white"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Search Engine Optimization">SEO</option>
                    <option value="Pay Per Click Advertising">PPC Advertising</option>
                    <option value="Social Media Marketing">Social Media</option>
                    <option value="E-mail Marketing">E-mail Marketing</option>
                    <option value="Full Digital Strategy">Full Digital Strategy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Project Details
                </label>
                <textarea
                  rows="3"
                  placeholder="Briefly describe your goals, budget, or target timeline..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2ec962] text-sm resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#111827] hover:bg-black text-white font-semibold py-3 px-6 rounded-full text-sm transition-all duration-200 shadow-md active:scale-[0.99]"
                >
                  <span>Submit Request</span>
                  <ArrowRight className="w-4 h-4 text-[#2ec962]" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
