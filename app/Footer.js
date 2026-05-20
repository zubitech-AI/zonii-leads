"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isDevServices = pathname === '/developer-services'

  const email = isDevServices ? 'zubitech906@gmail.com' : 'info@zoniileads.com'
  const whatsappNumber = isDevServices ? '923084737171' : '447458979941'
  const whatsappLabel = isDevServices ? '+92 308 4737171' : '+44 7458 979941'

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="text-gradient">Zonii Leads</span>
            </Link>
            <p className="footer-desc">
              {isDevServices 
                ? "Full-Stack Development, App Development, DevOps Infrastructure, and Intelligent Agentic AI engineering services."
                : "Performance-focused lead generation and growth services—built for clarity, consistency, and measurable results."
              }
            </p>
          </div>

          <div className="footer-col" aria-label="Footer navigation">
            <div className="footer-title">Company</div>
            <div className="footer-list">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/extra-services">Extra Services</Link>
              <Link href="/developer-services">Dev Services</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-title">Explore</div>
            <div className="footer-list">
              <Link href="/#wins">Wins</Link>
              <Link href="/#process">Process</Link>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-title">Contact</div>
            <div className="footer-list">
              <a href={`mailto:${email}`}>{email}</a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank" 
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ color: '#25D366' }}>
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.407 2.454 1.134 3.424l-.741 2.709 2.78-.728c.937.609 2.046.961 3.238.961 3.18 0 5.766-2.586 5.766-5.766s-2.586-5.766-5.766-5.766zm3.326 8.21c-.137.387-.704.707-1.014.757-.272.043-.618.069-1.02-.061-.252-.08-.57-.2-.969-.371-1.698-.732-2.772-2.479-2.857-2.593-.085-.114-.69-.918-.69-1.75 0-.832.435-1.242.59-1.41.15-.168.33-.21.44-.21.11 0 .22 0 .31.004.1.005.23-.039.36.27.135.322.46 1.12.5 1.21.04.09.07.195.01.31-.06.115-.09.185-.18.29-.09.105-.19.235-.27.315-.09.09-.185.19-.08.37.105.18.47.775 1.01 1.258.697.62 1.284.812 1.464.9.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.4-.09.165.06 1.045.495 1.225.585.18.09.3.135.345.21.045.075.045.435-.092.822zM12 2C6.477 2 2 6.477 2 12c0 1.954.562 3.778 1.53 5.32L2.03 22l4.83-.1.1.03C8.42 22.86 10.15 23.3 12 23.3c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 19.3c-1.66 0-3.2-.45-4.52-1.24l-.32-.2-2.85.07.76-2.78-.22-.35A8.25 8.25 0 013.7 12c0-4.58 3.72-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 4.58-3.72 8.3-8.3 8.3z"/>
                </svg>
                WhatsApp: {whatsappLabel}
              </a>
              {isDevServices ? (
                <>
                  <a href="https://www.linkedin.com/in/zubaidrasool95/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ color: '#0077B5' }}>
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/ur_zubi?igsh=NHdpZ2N4bm56d3Rs" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#E1306C' }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </a>
                </>
              ) : (
                <>
                  <a href="https://www.facebook.com/DxbSqlnch0" target="_blank" rel="noreferrer">Facebook</a>
                  <a href="https://www.linkedin.com/in/dxbsaqlain405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Zonii Leads. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href={`mailto:${email}`}>Email</a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
            {isDevServices ? (
              <>
                <a href="https://www.linkedin.com/in/zubaidrasool95/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/ur_zubi?igsh=NHdpZ2N4bm56d3Rs" target="_blank" rel="noreferrer">Instagram</a>
              </>
            ) : (
              <>
                <a href="https://www.facebook.com/DxbSqlnch0" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.linkedin.com/in/dxbsaqlain405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
