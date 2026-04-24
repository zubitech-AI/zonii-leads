import './globals.css'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export const metadata = {
  title: 'Linkuild | Premium Editorial PR & Link Building',
  description: 'Linkuild partners with ambitious SaaS, eCommerce, and B2B brands to engineer editorial placements on the publications your buyers trust.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="logo">
              <span className="text-gradient">Linkuild</span>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/extra-services">Extra Services</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/#wins">Wins</Link>
              <Link href="/#process">Process</Link>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Book a Strategy Call</Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <Link href="/" className="logo">
                <span className="text-gradient">Linkuild</span>
              </Link>
              <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/extra-services">Extra Services</Link>
                <Link href="/case-studies">Case Studies</Link>
                <Link href="/#wins">Wins</Link>
                <Link href="/contact">Contact</Link>
                <a href="https://wa.me/447938434039?text=Hi%20Linkuild!%20I%27d%20love%20to%20talk%20about%20your%20link%20building%20services." target="_blank" rel="noreferrer">📞 WhatsApp</a>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                © {new Date().getFullYear()} Linkuild. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
