'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#about',    label: 'About'    },
    { href: '#work',     label: 'Our Work' },
  ]

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 h-20
        flex items-center justify-between px-[5%]
        transition-all duration-300
        ${scrolled
          ? 'bg-dark/92 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-[1.1rem] text-cream no-underline">
        <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-base flex-shrink-0">
          🌿
        </span>
        Hooper&apos;s Green Thumb
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex list-none gap-10 items-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-cream-muted no-underline text-sm font-medium hover:text-cream transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="btn btn-gold px-6 py-2.5 text-sm">
            Get a Quote
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-cream rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-cream rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-cream rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-dark/97 backdrop-blur-md border-b border-gold/10 px-[5%] py-8 flex flex-col gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-cream-muted no-underline text-base font-medium hover:text-cream"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-gold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}
