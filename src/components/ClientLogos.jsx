import React from 'react'

export default function ClientLogos() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#f3f4f6] rounded-2xl sm:rounded-3xl py-7 px-8 sm:px-12 flex flex-wrap items-center justify-between gap-8 md:gap-12 transition-all">
          
          {/* Amazon Logo */}
          <div className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
            <svg className="h-6 sm:h-7 w-auto fill-current text-[#111827]" viewBox="0 0 110 32">
              <text x="0" y="20" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.5">amazon</text>
              <path d="M56 24 C45 29, 25 31, 10 24 C8.5 23, 7.5 24.5, 8.5 25.5 C22 33, 44 32, 57 26 C58.2 25.2, 57.2 23.5, 56 24 Z" fill="#111827" />
              <polygon points="57,22 62,26 55,27" fill="#111827" />
            </svg>
          </div>

          {/* Dribbble Logo */}
          <div className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
            <svg className="h-6 sm:h-7 w-auto fill-current text-[#111827]" viewBox="0 0 110 32">
              {/* Cursive Dribbble style vector text */}
              <text
                x="0"
                y="23"
                fontFamily="'Segoe Script', 'Brush Script MT', 'Snell Roundhand', cursive, sans-serif"
                fontStyle="italic"
                fontWeight="700"
                fontSize="24"
                letterSpacing="-0.5"
              >
                dribbble
              </text>
            </svg>
          </div>

          {/* HubSpot Logo */}
          <div className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] font-sans">
                HubSp
              </span>
              <div className="relative mx-0.5 flex items-center justify-center w-5 h-5">
                {/* HubSpot Sprocket Ring */}
                <div className="w-4 h-4 rounded-full border-[2.5px] border-[#111827] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#111827]" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#111827]" />
                <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 rounded-full bg-[#111827]" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] font-sans">
                t
              </span>
            </div>
          </div>

          {/* Notion Logo */}
          <div className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#111827] text-white flex items-center justify-center font-serif font-black text-sm border border-gray-400/20 shadow-xs">
                N
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#111827] font-sans">
                Notion
              </span>
            </div>
          </div>

          {/* Netflix Logo */}
          <div className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
            <span className="text-lg sm:text-xl font-black tracking-widest text-[#111827] uppercase font-sans">
              NETFLIX
            </span>
          </div>

          {/* Zoom Logo */}
          <div className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
            <span className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#111827] font-sans lowercase">
              zoom
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
