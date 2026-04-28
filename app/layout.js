import './globals.css'
import Link from 'next/link'
import Navbar from './Navbar'

export const metadata = {
  title: 'Zonii Leads | Premium Editorial PR & Link Building',
  description: 'Zonii Leads partners with ambitious brands to engineer editorial placements on the publications your buyers trust.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <Link href="/" className="logo">
                  <span className="text-gradient">Zonii Leads</span>
                </Link>
                <p className="footer-desc">
                  Performance-focused lead generation and growth services—built for clarity, consistency, and measurable results.
                </p>
              </div>

              <div className="footer-col" aria-label="Footer navigation">
                <div className="footer-title">Company</div>
                <div className="footer-list">
                  <Link href="/">Home</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/extra-services">Extra Services</Link>
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
                  <a href="mailto:info@zoniileads.com">info@zoniileads.com</a>
                  <a href="https://www.facebook.com/DxbSqlnch0" target="_blank" rel="noreferrer">Facebook</a>
                  <a href="https://www.linkedin.com/in/dxbsaqlain405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div>© {new Date().getFullYear()} Zonii Leads. All rights reserved.</div>
              <div className="footer-bottom-links">
                <a href="mailto:info@zoniileads.com">Email</a>
                <a href="https://www.facebook.com/DxbSqlnch0" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.linkedin.com/in/dxbsaqlain405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
