"use client"

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/extra-services', label: 'Extra Services' },
  { href: '/developer-services', label: 'Dev Services' },
  { href: '/case-studies', label: 'Case Studies' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const pathname = usePathname()

  const isDevServices = pathname === '/developer-services'

  const whatsappNumber = isDevServices ? '923084737171' : '447458979941'
  const whatsappLabel = isDevServices ? '+92 308 4737171' : '+44 7458 979941'
  const ctaLink = isDevServices ? '#contact-dev' : '/contact'
  const ctaLabel = isDevServices ? 'Work With Me' : 'Book a Strategy Call'

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <nav className="navbar" ref={menuRef}>
      <a href="#main" className="skip-link">Skip to content</a>

      <div className="container navbar-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="text-gradient">Zonii Leads</span>
        </Link>

        <div className="nav-actions">
          <div className="nav-links desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="nav-whatsapp-link"
              title="Chat on WhatsApp"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                color: 'var(--text-secondary)', 
                marginRight: '0.5rem',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ color: '#25D366' }}>
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.407 2.454 1.134 3.424l-.741 2.709 2.78-.728c.937.609 2.046.961 3.238.961 3.18 0 5.766-2.586 5.766-5.766s-2.586-5.766-5.766-5.766zm3.326 8.21c-.137.387-.704.707-1.014.757-.272.043-.618.069-1.02-.061-.252-.08-.57-.2-.969-.371-1.698-.732-2.772-2.479-2.857-2.593-.085-.114-.69-.918-.69-1.75 0-.832.435-1.242.59-1.41.15-.168.33-.21.44-.21.11 0 .22 0 .31.004.1.005.23-.039.36.27.135.322.46 1.12.5 1.21.04.09.07.195.01.31-.06.115-.09.185-.18.29-.09.105-.19.235-.27.315-.09.09-.185.19-.08.37.105.18.47.775 1.01 1.258.697.62 1.284.812 1.464.9.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.4-.09.165.06 1.045.495 1.225.585.18.09.3.135.345.21.045.075.045.435-.092.822zM12 2C6.477 2 2 6.477 2 12c0 1.954.562 3.778 1.53 5.32L2.03 22l4.83-.1.1.03C8.42 22.86 10.15 23.3 12 23.3c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 19.3c-1.66 0-3.2-.45-4.52-1.24l-.32-.2-2.85.07.76-2.78-.22-.35A8.25 8.25 0 013.7 12c0-4.58 3.72-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 4.58-3.72 8.3-8.3 8.3z"/>
              </svg>
              <span>{whatsappLabel}</span>
            </a>
            <Link
              href={ctaLink}
              className="btn btn-primary nav-cta"
              style={{ padding: '0.5rem 1.25rem' }}
            >
              {ctaLabel}
            </Link>
          </div>

          <ThemeToggle />

          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="nav-toggle-icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav ${open ? 'open' : ''}`}
        aria-hidden={!open}
      >
        <div className="container mobile-nav-inner">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            onClick={() => setOpen(false)}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.5rem', 
              width: '100%', 
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)'
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ color: '#25D366' }}>
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.407 2.454 1.134 3.424l-.741 2.709 2.78-.728c.937.609 2.046.961 3.238.961 3.18 0 5.766-2.586 5.766-5.766s-2.586-5.766-5.766-5.766zm3.326 8.21c-.137.387-.704.707-1.014.757-.272.043-.618.069-1.02-.061-.252-.08-.57-.2-.969-.371-1.698-.732-2.772-2.479-2.857-2.593-.085-.114-.69-.918-.69-1.75 0-.832.435-1.242.59-1.41.15-.168.33-.21.44-.21.11 0 .22 0 .31.004.1.005.23-.039.36.27.135.322.46 1.12.5 1.21.04.09.07.195.01.31-.06.115-.09.185-.18.29-.09.105-.19.235-.27.315-.09.09-.185.19-.08.37.105.18.47.775 1.01 1.258.697.62 1.284.812 1.464.9.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.4-.09.165.06 1.045.495 1.225.585.18.09.3.135.345.21.045.075.045.435-.092.822zM12 2C6.477 2 2 6.477 2 12c0 1.954.562 3.778 1.53 5.32L2.03 22l4.83-.1.1.03C8.42 22.86 10.15 23.3 12 23.3c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 19.3c-1.66 0-3.2-.45-4.52-1.24l-.32-.2-2.85.07.76-2.78-.22-.35A8.25 8.25 0 013.7 12c0-4.58 3.72-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 4.58-3.72 8.3-8.3 8.3z"/>
            </svg>
            Chat on WhatsApp
          </a>
          <Link
            href={ctaLink}
            className="btn btn-primary"
            onClick={() => setOpen(false)}
            style={{ textAlign: 'center', width: '100%' }}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </nav>
  )
}

