"use client"

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/extra-services', label: 'Extra Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/#wins', label: 'Wins' },
  { href: '/#process', label: 'Process' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

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
            <Link
              href="/contact"
              className="btn btn-primary nav-cta"
              style={{ padding: '0.5rem 1.25rem' }}
            >
              Book a Strategy Call
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
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
            style={{ textAlign: 'center', width: '100%' }}
          >
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </nav>
  )
}

