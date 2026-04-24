import './globals.css'

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
            <div className="logo">
              <span className="text-gradient">Linkuild</span>
            </div>
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#wins">Wins</a>
              <a href="#process">Process</a>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Get Proposal</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
