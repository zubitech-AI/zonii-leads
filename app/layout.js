import './globals.css'
import Link from 'next/link'
import Navbar from './Navbar'
import WhatsAppWidget from './WhatsAppWidget'
import Footer from './Footer'

export const metadata = {
  title: 'Zonii Leads | Premium Editorial PR & Link Building',
  description: 'Zonii Leads partners with ambitious brands to engineer editorial placements on the publications your buyers trust.',
  icons: {
    icon: '/zonii-logo.png',
    shortcut: '/zonii-logo.png',
    apple: '/zonii-logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  )
}
