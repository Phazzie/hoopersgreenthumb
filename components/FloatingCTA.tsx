'use client'

import { useState, useEffect } from 'react'

// Set your Google Voice number here when ready
const PHONE: string = ''

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`
        md:hidden fixed bottom-0 left-0 right-0 z-50
        bg-dark/95 backdrop-blur-md
        border-t border-gold/15
        flex items-center gap-3 px-4 py-3
        transition-all duration-300
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      {PHONE ? (
        <a
          href={`tel:${PHONE.replace(/\D/g, '')}`}
          className="
            flex-1 flex items-center justify-center gap-2
            bg-forest border border-gold/20
            text-cream font-display font-semibold text-sm
            py-3 rounded-lg
            active:opacity-80 transition-opacity
          "
        >
          📞 Call Thomas
        </a>
      ) : (
        <a
          href="mailto:thomas@hoopersgreenthumb.com"
          className="
            flex-1 flex items-center justify-center gap-2
            bg-forest border border-gold/20
            text-cream font-display font-semibold text-sm
            py-3 rounded-lg
            active:opacity-80 transition-opacity
          "
        >
          ✉️ Email Thomas
        </a>
      )}

      <a
        href="#contact"
        className="
          flex-1 flex items-center justify-center
          bg-gold text-dark
          font-display font-bold text-sm
          py-3 rounded-lg
          active:opacity-80 transition-opacity
        "
      >
        Get a Free Quote →
      </a>
    </div>
  )
}
