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
          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            <div className="card glass" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 1rem auto' }}>✉️</div>
              <h3>Email Us</h3>
              <p>info@zoniileads.com</p>
              <a href="mailto:info@zoniileads.com" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send an email</a>
            </div>
            <div className="card glass" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 1rem auto' }}>📅</div>
              <h3>Schedule a Call</h3>
              <p>Grab time on our calendar to review your goals and see if we're the right fit.</p>
              <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>Schedule now</a>
            </div>
            <div className="card glass" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 1rem auto' }}>🤝</div>
              <h3>Connect With Us</h3>
              <p>Follow Zonii Leads on Facebook or connect with Saqlain on LinkedIn.</p>
              <div className="hero-buttons" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                <a href="https://www.facebook.com/DxbSqlnch0" target="_blank" rel="noreferrer" className="btn btn-secondary">Facebook</a>
                <a href="https://www.linkedin.com/in/dxbsaqlain405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
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
