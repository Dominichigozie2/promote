import React from 'react'

export default function Footer() {
  const navLinks = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#cases' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <footer className="w-full pt-6 pb-12 px-4 sm:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 32 32" className="w-6 h-6 text-black fill-current">
            <path d="M16 3L19.5 12.5L29 16L19.5 19.5L16 29L12.5 19.5L3 16L12.5 12.5L16 3Z" fill="#111827"/>
            <path d="M16 3L19.5 12.5L16 16L12.5 12.5L16 3Z" fill="#1f2937"/>
            <path d="M16 29L19.5 19.5L16 16L12.5 19.5L16 29Z" fill="#374151"/>
          </svg>
          <span className="text-xl font-bold tracking-tight text-gray-900 font-sans">
            WizardZ
          </span>
        </div>

        {/* Center Nav Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 rounded-full bg-[#111827] hover:bg-[#2ec962] text-white hover:text-black flex items-center justify-center transition-colors duration-200 text-xs font-bold"
          >
            f
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full bg-[#111827] hover:bg-[#2ec962] text-white hover:text-black flex items-center justify-center transition-colors duration-200 text-xs font-bold"
          >
            in
          </a>

          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="w-8 h-8 rounded-full bg-[#111827] hover:bg-[#2ec962] text-white hover:text-black flex items-center justify-center transition-colors duration-200 text-xs font-bold"
          >
            𝕏
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 rounded-full bg-[#111827] hover:bg-[#2ec962] text-white hover:text-black flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  )
}
