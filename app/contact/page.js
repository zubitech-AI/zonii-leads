"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Let's map the backlinks that unlock <span className="text-gradient">your next stage.</span></h1>
            <p className="hero-subtitle">Share your priorities, and our strategists will return within one business day with a suggested roadmap and next steps.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-4" style={{ marginBottom: '4rem' }}>
            <div className="card glass" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="card-icon" style={{ margin: '0 auto 1rem auto' }}>✉️</div>
                <h3>Email Us</h3>
                <p style={{ margin: '1rem 0' }}>info@zoniileads.com</p>
              </div>
              <a href="mailto:info@zoniileads.com" className="btn btn-primary" style={{ marginTop: 'auto' }}>Send an email</a>
            </div>

            <div className="card glass" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="card-icon" style={{ margin: '0 auto 1rem auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ color: '#25D366' }}>
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.407 2.454 1.134 3.424l-.741 2.709 2.78-.728c.937.609 2.046.961 3.238.961 3.18 0 5.766-2.586 5.766-5.766s-2.586-5.766-5.766-5.766zm3.326 8.21c-.137.387-.704.707-1.014.757-.272.043-.618.069-1.02-.061-.252-.08-.57-.2-.969-.371-1.698-.732-2.772-2.479-2.857-2.593-.085-.114-.69-.918-.69-1.75 0-.832.435-1.242.59-1.41.15-.168.33-.21.44-.21.11 0 .22 0 .31.004.1.005.23-.039.36.27.135.322.46 1.12.5 1.21.04.09.07.195.01.31-.06.115-.09.185-.18.29-.09.105-.19.235-.27.315-.09.09-.185.19-.08.37.105.18.47.775 1.01 1.258.697.62 1.284.812 1.464.9.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.4-.09.165.06 1.045.495 1.225.585.18.09.3.135.345.21.045.075.045.435-.092.822zM12 2C6.477 2 2 6.477 2 12c0 1.954.562 3.778 1.53 5.32L2.03 22l4.83-.1.1.03C8.42 22.86 10.15 23.3 12 23.3c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 19.3c-1.66 0-3.2-.45-4.52-1.24l-.32-.2-2.85.07.76-2.78-.22-.35A8.25 8.25 0 013.7 12c0-4.58 3.72-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 4.58-3.72 8.3-8.3 8.3z"/>
                  </svg>
                </div>
                <h3>WhatsApp Chat</h3>
                <p style={{ margin: '1rem 0' }}>+44 7458 979941</p>
              </div>
              <a href="https://wa.me/447458979941" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 'auto', background: '#25D366', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)' }}>Chat now</a>
            </div>

            <div className="card glass" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="card-icon" style={{ margin: '0 auto 1rem auto' }}>📅</div>
                <h3>Schedule a Call</h3>
                <p style={{ margin: '1rem 0' }}>Grab time on our calendar to review your goals.</p>
              </div>
              <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 'auto' }}>Schedule now</a>
            </div>

            <div className="card glass" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="card-icon" style={{ margin: '0 auto 1rem auto' }}>🤝</div>
                <h3>Connect With Us</h3>
                <p style={{ margin: '1rem 0' }}>Follow Zonii Leads or connect with Saqlain.</p>
              </div>
              <div className="hero-buttons" style={{ justifyContent: 'center', marginTop: 'auto', gap: '0.5rem' }}>
                <a href="https://www.facebook.com/DxbSqlnch0" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem' }}>Facebook</a>
                <a href="https://www.linkedin.com/in/dxbsaqlain405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem' }}>LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <h2>Give us context so we can <span className="text-gradient">prepare.</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Remote-first team with anchors in Austin, TX and London, UK. We respond Monday–Friday within 24 hours. Existing clients receive Slack support.</p>
              
              {submitted ? (
                <div className="card glass" style={{ textAlign: 'center', padding: '3rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Jane Smith" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Work Email</label>
                    <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="jane@company.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} placeholder="Company Inc." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Tell us about your goals</label>
                    <textarea id="message" rows="5" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="We're looking to increase organic visibility for..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>
              )}
            </div>

            <div>
              <h2>Before you reach out, <span className="text-gradient">FAQ</span></h2>
              <div className="faq-grid">
                <div className="card glass">
                  <h3>How soon can we get started?</h3>
                  <p>We typically onboard new retainers within two weeks. Launch Sprints can kick off faster depending on asset requirements.</p>
                </div>
                <div className="card glass">
                  <h3>Do you work with agencies?</h3>
                  <p>Yes, we partner with SEO and PR agencies needing specialized link-building fulfillment under white-label agreements.</p>
                </div>
                <div className="card glass">
                  <h3>Will we have a dedicated point of contact?</h3>
                  <p>Every engagement is led by a senior strategist who remains your point person, supported by outreach and analytics leads.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container glass cta-container">
          <h2>Need something <span className="text-gradient">custom?</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>If none of our standard engagements fit, tell us what success looks like and we'll architect a bespoke sprint.</p>
          <div className="hero-buttons">
            <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Plan a workshop</a>
            <a href="mailto:info@zoniileads.com" className="btn btn-secondary">Email a strategist</a>
          </div>
        </div>
      </section>
    </main>
  )
}
