export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Make your authority <span className="text-gradient">undeniable.</span></h1>
            <p className="hero-subtitle">
              Linkuild partners with ambitious SaaS, eCommerce, and B2B brands to engineer editorial placements on the publications your buyers trust. Every placement is researched, pitched, and tracked by senior strategists.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get a custom proposal</a>
              <a href="#wins" className="btn btn-secondary">See our latest wins</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Our <span className="text-gradient">Services</span></h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Our strategists orchestrate every step—from prospecting narratives that resonate with journalists to managing analytics that prove the SEO impact.
          </p>
          
          <div className="grid-3">
            <div className="card glass">
              <div className="card-icon">📣</div>
              <h3>Editorial PR Outreach</h3>
              <p>Pitch development, media lists, and journalist conversations handled by career link builders who know how to earn do-follow coverage.</p>
              <ul>
                <li>Data-backed story ideation</li>
                <li>Journalist relationship management</li>
                <li>Guaranteed pitch cadences</li>
              </ul>
            </div>
            
            <div className="card glass">
              <div className="card-icon">✍️</div>
              <h3>Authority Content</h3>
              <p>We create newsroom-ready resources—studies, reports, and expert commentary—to anchor every outreach campaign.</p>
              <ul>
                <li>Original research & surveys</li>
                <li>Expert copywriting & design</li>
                <li>On-page optimization for SEO</li>
              </ul>
            </div>
            
            <div className="card glass">
              <div className="card-icon">🔗</div>
              <h3>Strategic Link Acquisition</h3>
              <p>Beyond PR, we secure placements through curated partnerships with niche communities, newsletters, and podcasts.</p>
              <ul>
                <li>Selective guest feature program</li>
                <li>Contextual, high-authority backlinks</li>
                <li>Performance dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Wins Section */}
      <section id="wins" className="section wins-section">
        <div className="container">
          <h2>Proof that premium links unlock <span className="text-gradient">outsized growth.</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
            Recent campaigns show how a relentless focus on quality placements can transform visibility and lead generation.
          </p>
          
          <div className="grid-3">
            <div className="stat-card glass">
              <div className="stat-number text-gradient">+450%</div>
              <div className="stat-desc">Organic sessions in 6 months for a fintech platform after 35 authority links.</div>
            </div>
            <div className="stat-card glass">
              <div className="stat-number text-gradient">90 Days</div>
              <div className="stat-desc">To secure editorial features for a Series B SaaS (TechCrunch, VentureBeat).</div>
            </div>
            <div className="stat-card glass">
              <div className="stat-number text-gradient">3.2x</div>
              <div className="stat-desc">ROI on outreach investment for an eCommerce aggregator.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Process Section */}
      <section id="process" className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2>The Linkuild <span className="text-gradient">Blueprint</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Transparent, senior-led, performance obsessed. We meet you at your growth stage and assemble a pod of specialists to deliver work that your competitors struggle to replicate.
              </p>
            </div>
            
            <div>
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Deep-dive & positioning</h3>
                  <p>We audit your assets, ranking gaps, and current coverage to map a narrative and keyword strategy worth amplifying.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Campaign buildout</h3>
                  <p>Our team develops data studies, commentary, and media kits, then streamlines approvals so we can launch at pace.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Outreach & iteration</h3>
                  <p>We manage outreach in focused sprints, share weekly pipelines, and optimize angles based on journalist feedback.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Measure & scale</h3>
                  <p>Every link is tracked against rankings, traffic, and pipeline impact, informing the next round of campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section" style={{ background: 'var(--bg-color)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Growth teams trust Linkuild to turn coverage into <span className="text-gradient">compounding SEO wins.</span></h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            Hear from marketing leaders who rely on our senior-led outreach, thoughtful storytelling, and transparent performance reporting.
          </p>
          
          <div className="testimonial-grid">
            <div className="testimonial-card glass">
              <p>Linkuild helped us earn coverage on publications we'd chased for years. Within three months they turned backlinks into real revenue impact.</p>
              <div className="testimonial-author">— Marketing Leader</div>
            </div>
            
            <div className="testimonial-card glass">
              <p>The Linkuild team plugged directly into our workflows and tripled qualified coverage in a single quarter without sacrificing brand voice or compliance.</p>
              <div className="testimonial-author">— Growth VP</div>
            </div>
            
            <div className="testimonial-card glass">
              <p>They don't just pitch—Linkuild surfaces narratives editors actually want. Our fintech thought leadership now shows up in every major industry roundup.</p>
              <div className="testimonial-author">— Fintech Director</div>
            </div>
            
            <div className="testimonial-card glass">
              <p>From the first sprint we had weekly visibility, airtight reporting, and placements that moved revenue. Linkuild is the partner we lean on for every launch.</p>
              <div className="testimonial-author">— SaaS Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section" style={{ textAlign: 'center' }}>
        <div className="container glass cta-container">
          <h2>Ready to make your authority <span className="text-gradient">undeniable?</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Tell us what you need amplified and we'll craft a roadmap that compounds rankings, brand trust, and pipeline.
          </p>
          <div className="hero-buttons">
            <a href="mailto:info@linkuild.com" className="btn btn-primary">Start a project</a>
            <a href="#" className="btn btn-secondary">Book a strategy call</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <span className="text-gradient">Linkuild</span>
            </div>
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#services">Services</a>
              <a href="#wins">Wins</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
              <a href="https://wa.me/447938434039?text=Hi%20Linkuild!%20I%27d%20love%20to%20talk%20about%20your%20link%20building%20services." target="_blank" rel="noreferrer">📞 WhatsApp</a>
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              © {new Date().getFullYear()} Linkuild Clone. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
