import Link from 'next/link'

export const metadata = {
  title: 'Case Studies | Zonii Leads',
  description: 'See how Zonii Leads turns strategic backlinks into measurable pipeline.',
}

export default function CaseStudiesPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Backlinks into <span className="text-gradient">measurable pipeline.</span></h1>
            <p className="hero-subtitle">Every engagement pairs senior outreach with data-backed storytelling to earn coverage that influences rankings, brand authority, and revenue.</p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Plan my campaign</Link>
              <a href="#highlights" className="btn btn-secondary">View highlights</a>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Campaign <span className="text-gradient">Highlights</span></h2>
          <p className="section-subtitle">From scaling SaaS search visibility to powering breakout eCommerce launches, our case studies demonstrate how high-trust links drive momentum.</p>
          <div className="grid-3">
            <div className="stat-card glass">
              <div className="stat-number text-gradient">+180%</div>
              <div className="stat-desc">Average 12-month organic growth across retainer clients.</div>
              <ul style={{ textAlign: 'left', marginTop: '1.5rem' }}>
                <li>82% of backlinks from DR70+ domains</li>
                <li>Weekly visibility into outreach pipeline</li>
                <li>Revenue impact tracked in GA4 &amp; CRM</li>
              </ul>
            </div>
            <div className="stat-card glass">
              <div className="stat-number text-gradient">42</div>
              <div className="stat-desc">Average tier-1 editorial placements per launch sprint.</div>
              <ul style={{ textAlign: 'left', marginTop: '1.5rem' }}>
                <li>Top-tier tech, finance, marketing outlets</li>
                <li>Multi-wave outreach to warm media lists</li>
                <li>Integrated influencer &amp; community boosts</li>
              </ul>
            </div>
            <div className="stat-card glass">
              <div className="stat-number text-gradient">4.1x</div>
              <div className="stat-desc">Median return on outreach investment managed by Zonii Leads.</div>
              <ul style={{ textAlign: 'left', marginTop: '1.5rem' }}>
                <li>Attribution modeling connected to pipeline</li>
                <li>Link velocity dashboards refreshed daily</li>
                <li>Iterative testing across narratives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section wins-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Stories from teams who <span className="text-gradient">partnered with us.</span></h2>
          <div className="case-study-grid">
            <div className="card glass case-study-card">
              <div className="case-tag">SaaS</div>
              <h3>Outboundly triples inbound demos with authority press.</h3>
              <p>We created a data-driven cold email benchmark report amplified through 60+ PR placements, unlocking a 182% lift in organic sessions and 3.4x growth in inbound demos.</p>
              <div className="case-stats">
                <div><strong className="text-gradient">60+</strong><span>PR Placements</span></div>
                <div><strong className="text-gradient">182%</strong><span>Organic Lift</span></div>
                <div><strong className="text-gradient">3.4x</strong><span>Demo Growth</span></div>
              </div>
              <Link href="/contact" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>Request full breakdown</Link>
            </div>
            <div className="card glass case-study-card">
              <div className="case-tag">Fintech</div>
              <h3>Fintive Capital earns front-page finance coverage.</h3>
              <p>We secured 38 tier-1 placements—including TechCrunch and CNBC—in 45 days, leading to a 60% increase in SQL volume.</p>
              <div className="case-stats">
                <div><strong className="text-gradient">38</strong><span>Tier-1 Links</span></div>
                <div><strong className="text-gradient">45</strong><span>Days</span></div>
                <div><strong className="text-gradient">60%</strong><span>SQL Growth</span></div>
              </div>
              <Link href="/contact" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>Request full breakdown</Link>
            </div>
            <div className="card glass case-study-card">
              <div className="case-tag">eCommerce</div>
              <h3>RippleCommerce gains keyword dominance in 90 days.</h3>
              <p>Our authority content program pushed 25 commercial terms to page one, boosting revenue from organic search by 140%.</p>
              <div className="case-stats">
                <div><strong className="text-gradient">25</strong><span>Page 1 Keywords</span></div>
                <div><strong className="text-gradient">90</strong><span>Days</span></div>
                <div><strong className="text-gradient">140%</strong><span>Revenue Boost</span></div>
              </div>
              <Link href="/contact" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>Request full breakdown</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Deep Dive: <span className="text-gradient">GreenGrid</span></h2>
          <p className="section-subtitle">How we scaled a climate tech marketplace to nationwide awareness.</p>
          <div className="grid-3" style={{ marginTop: '3rem' }}>
            <div className="card glass"><div className="case-tag">Challenge</div><h3>Outranking incumbents</h3><p>GreenGrid launched a marketplace for commercial solar but struggled to outrank incumbents with larger PR teams.</p></div>
            <div className="card glass"><div className="case-tag">Solution</div><h3>Data-driven outreach</h3><p>We built an insights report on solar retrofit ROI, combining proprietary data with expert commentary.</p></div>
            <div className="card glass"><div className="case-tag">Delivery</div><h3>Cross-vertical coverage</h3><p>Zonii Leads handled asset production, media pitching, and partnerships with renewable energy publications.</p></div>
          </div>
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div className="stat-card glass"><div className="stat-number text-gradient">85+</div><div className="stat-desc">Editorial backlinks across energy, finance, and sustainability outlets.</div></div>
            <div className="stat-card glass"><div className="stat-number text-gradient">+210%</div><div className="stat-desc">Increase in qualified inbound deals from organic sources.</div></div>
            <div className="stat-card glass"><div className="stat-number text-gradient">5.2x</div><div className="stat-desc">Return on investment within the first 6 months.</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container glass cta-container">
          <h2>Want a playbook like this <span className="text-gradient">for your brand?</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>We'll walk you through the outreach narratives, assets, and partnership channels that drove these results.</p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
            <a href="mailto:info@zoniileads.com" className="btn btn-secondary">Email our analysts</a>
          </div>
        </div>
      </section>
    </main>
  )
}
