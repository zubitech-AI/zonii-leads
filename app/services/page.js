import Link from 'next/link'

export const metadata = {
  title: 'Services | Zonii Leads',
  description: 'Explore how Zonii Leads blends digital PR, data journalism, and authority partnerships to deliver compounding organic growth.',
}

export default function ServicesPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Services built to <span className="text-gradient">scale authority.</span></h1>
            <p className="hero-subtitle">
              Explore how our team blends digital PR, data journalism, and authority partnerships to deliver compounding organic growth for SaaS, eCommerce, and B2B brands.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Build my campaign</Link>
              <a href="#packages" className="btn btn-secondary">View service packages</a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Service <span className="text-gradient">Packages</span></h2>
          <p className="section-subtitle">
            Whether you need sustained momentum or rapid-fire launches, every package is led by senior strategists who stay embedded with your team.
          </p>

          <div className="grid-3">
            <div className="card glass pricing-card">
              <div className="card-icon">🚀</div>
              <h3>Authority Growth Pod</h3>
              <p>Our flagship program for companies ready to dominate high-intent keywords through predictable link velocity.</p>
              <ul>
                <li>Quarterly roadmap aligned to revenue goals</li>
                <li>Guaranteed 10-15 tier-1 links per month</li>
                <li>Weekly pipeline & performance reporting</li>
                <li>Dedicated strategist, outreach lead, analyst</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', textAlign: 'center' }}>Request pricing</Link>
            </div>

            <div className="card glass pricing-card">
              <div className="card-icon">⚡</div>
              <h3>Launch Sprint</h3>
              <p>A 90-day campaign engineered for product launches or funding announcements that demand immediate visibility.</p>
              <ul>
                <li>Data study or thought leadership asset creation</li>
                <li>Multi-wave PR outreach to curated outlets</li>
                <li>Influencer & community amplification</li>
                <li>Campaign wrap report with GA4 integration</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', textAlign: 'center' }}>Start a sprint</Link>
            </div>

            <div className="card glass pricing-card">
              <div className="card-icon">🎓</div>
              <h3>In-House Enablement</h3>
              <p>Power up your internal team with our playbooks, newsroom relationships, and QA support.</p>
              <ul>
                <li>Pitch reviews & on-demand journalist intel</li>
                <li>Monthly workshops for content & SEO teams</li>
                <li>Measurement frameworks and dashboards</li>
                <li>Slack channel with 24-hour response SLA</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', textAlign: 'center' }}>Discuss advisory</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section wins-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Our <span className="text-gradient">Workflow</span></h2>
          <p className="section-subtitle">
            From insights to amplification, we've refined a workflow that delivers velocity without sacrificing quality.
          </p>

          <div className="grid-2" style={{ marginTop: '3rem' }}>
            <div className="card glass">
              <div className="card-icon">🔬</div>
              <h3>Research Lab</h3>
              <p>Data strategists find narratives that plug straight into journalist beats and your ICP's pain points.</p>
            </div>
            <div className="card glass">
              <div className="card-icon">📝</div>
              <h3>Story Crafting</h3>
              <p>Writers and designers shape newsroom-ready assets with quotes from your subject matter experts.</p>
            </div>
            <div className="card glass">
              <div className="card-icon">📡</div>
              <h3>Outreach Sprints</h3>
              <p>Sequenced outreach cadences tap into hundreds of warm relationships across tech, finance, and marketing media.</p>
            </div>
            <div className="card glass">
              <div className="card-icon">📊</div>
              <h3>Attribution</h3>
              <p>Analysts connect every placement to keyword lifts, referral traffic, and assisted pipeline impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Why teams <span className="text-gradient">choose Zonii Leads</span></h2>
          <div className="grid-2" style={{ marginTop: '3rem' }}>
            <div className="card glass">
              <h3>Embedded Delivery</h3>
              <p>We embed in your workflows while owning delivery, so your team stays focused on growth initiatives.</p>
            </div>
            <div className="card glass">
              <h3>Narrative-First Strategy</h3>
              <p>We map your core narratives, personas, and keyword gaps to craft campaign opportunities with the highest upside.</p>
            </div>
            <div className="card glass">
              <h3>Quality Control</h3>
              <p>Every pitch, asset, and placement is peer-reviewed for accuracy, compliance, and brand tone before it leaves our desk.</p>
            </div>
            <div className="card glass">
              <h3>Scale What Works</h3>
              <p>We double down on what's working by replicating top-performing narratives across additional verticals and geos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section wins-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Frequently Asked <span className="text-gradient">Questions</span></h2>
          <div className="faq-grid">
            <div className="card glass">
              <h3>How quickly can we see results?</h3>
              <p>Most retainer clients see their first wave of tier-1 coverage within 30-45 days as initial narratives go live. Rankings typically begin moving in months 2-3.</p>
            </div>
            <div className="card glass">
              <h3>Do you guarantee links?</h3>
              <p>Our retainers include minimum link commitments. If we fall short in any month, we make up the delta with additional outreach at no extra cost.</p>
            </div>
            <div className="card glass">
              <h3>Can you work with our internal PR or SEO team?</h3>
              <p>Absolutely—most clients have in-house stakeholders. We collaborate on shared narratives, coordinate announcements, and integrate with your reporting cadence.</p>
            </div>
            <div className="card glass">
              <h3>What industries do you specialize in?</h3>
              <p>Our team has deep experience across SaaS, fintech, eCommerce, martech, and climate tech. We'll give an honest assessment if we're not the right fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container glass cta-container">
          <h2>Let's identify the placements that will <span className="text-gradient">move the needle</span> fastest.</h2>
          <div className="hero-buttons" style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
            <a href="mailto:info@zoniileads.com" className="btn btn-secondary">Email our team</a>
          </div>
        </div>
      </section>
    </main>
  )
}
