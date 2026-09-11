import React, { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#cases' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <header className="w-full pt-6 pb-4 px-4 sm:px-8 lg:px-14">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <svg 
            viewBox="0 0 32 32" 
            className="w-7 h-7 text-black fill-current transition-transform duration-300 group-hover:rotate-12"
          >
            {/* Origami 4-point star/bowtie icon matching the mockup */}
            <path d="M16 3L19.5 12.5L29 16L19.5 19.5L16 29L12.5 19.5L3 16L12.5 12.5L16 3Z" fill="#111827"/>
            <path d="M16 3L19.5 12.5L16 16L12.5 12.5L16 3Z" fill="#1f2937"/>
            <path d="M16 29L19.5 19.5L16 16L12.5 19.5L16 29Z" fill="#374151"/>
          </svg>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 font-sans">
            WizardZ
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[15px] font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-black transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onOpenQuote('Quote')}
            className="group inline-flex items-center gap-2.5 bg-[#111827] hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            <span>Request a quote</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full text-[#2ec962] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-5 bg-white rounded-2xl shadow-xl border border-gray-100 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 text-base font-medium text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-gray-50 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenQuote('Quote')
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#111827] text-white px-5 py-3 rounded-full text-sm font-semibold shadow-sm"
            >
              <span>Request a quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#2ec962] stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
