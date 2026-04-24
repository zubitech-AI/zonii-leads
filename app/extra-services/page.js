import Link from 'next/link'

export const metadata = {
  title: 'Extra Services | Linkuild',
  description: 'Expand your growth stack with local SEO, technical SEO, web development, and Google Ads services from Linkuild.',
}

export default function ExtraServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Expand your <span className="text-gradient">growth stack.</span></h1>
            <p className="hero-subtitle">
              Beyond link building, Linkuild operates specialist pods that strengthen every part of your performance engine—from local visibility to conversion-ready landing pages and paid demand.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Plan a custom bundle</Link>
              <a href="#services" className="btn btn-secondary">Explore capabilities</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Specialist <span className="text-gradient">Pods</span></h2>
          <p className="section-subtitle">
            Pick the channels you need and we'll spin up a dedicated squad with the same senior oversight and transparency as our core link-building engagements.
          </p>

          <div className="grid-2">
            <div className="card glass">
              <div className="card-icon">📍</div>
              <h3>Local SEO</h3>
              <p>Dominate maps and local search packs. Structured citation management, localized content hubs, and review acceleration tuned for multi-location brands.</p>
              <ul>
                <li>GBP optimization & reputation workflows</li>
                <li>Hyperlocal keyword & landing page buildouts</li>
                <li>Geo-targeted link acquisition sprints</li>
              </ul>
            </div>

            <div className="card glass">
              <div className="card-icon">⚙️</div>
              <h3>Technical SEO</h3>
              <p>Fix crawl debt and unlock faster rankings. Sitewide audits, structured data implementation, and sprint-based remediation.</p>
              <ul>
                <li>Comprehensive diagnostics & prioritization</li>
                <li>Schema, CWV, and log-file analysis</li>
                <li>Implementation support & QA sign-off</li>
              </ul>
            </div>

            <div className="card glass">
              <div className="card-icon">💻</div>
              <h3>Web Development</h3>
              <p>High-performance sites engineered for growth. Modular design systems, conversion-driven UX, and headless builds that scale.</p>
              <ul>
                <li>Discovery, UX research, and wireframing</li>
                <li>Webflow, Next.js, or Shopify execution</li>
                <li>QA, analytics, and launch support</li>
              </ul>
            </div>

            <div className="card glass">
              <div className="card-icon">💰</div>
              <h3>Google Ads</h3>
              <p>Paid search campaigns that convert efficiently. Full-funnel strategy, creative testing, and smart bidding aligned to revenue.</p>
              <ul>
                <li>Account rebuilds & keyword expansion</li>
                <li>Audience layering & creative experimentation</li>
                <li>Live dashboards tied to CAC & LTV</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="section wins-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Integrated execution, <span className="text-gradient">shared intelligence.</span></h2>
          <p className="section-subtitle">
            No silos—every extra service squad syncs with your Linkuild account strategist to share insights, assets, and campaign data.
          </p>

          <div className="grid-2" style={{ marginTop: '3rem' }}>
            <div className="card glass">
              <div className="card-icon">📊</div>
              <h3>Unified Dashboards</h3>
              <p>Organic, paid, and dev metrics aggregated into a single live workspace for faster decision-making.</p>
            </div>
            <div className="card glass">
              <div className="card-icon">🎨</div>
              <h3>Shared Creative Bench</h3>
              <p>Writers, designers, and engineers collaborate so landing pages, ads, and outreach assets stay on-brand.</p>
            </div>
            <div className="card glass">
              <div className="card-icon">💵</div>
              <h3>Revenue Accountability</h3>
              <p>Every program is scoped with quantified targets tied to pipeline, not just channel-level KPIs.</p>
            </div>
            <div className="card glass">
              <div className="card-icon">🧪</div>
              <h3>Quarterly Innovation Sprints</h3>
              <p>Experimentation roadmap led by Linkuild strategists to test new channels, betas, and automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container glass cta-container">
          <h2>Bundle the services you need and <span className="text-gradient">get to market faster.</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Tell us the KPIs you're chasing and we'll assemble a pod with the specialists, assets, and dashboards to hit them.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">Build my bundle</Link>
            <a href="mailto:info@linkuild.com" className="btn btn-secondary">Email a strategist</a>
          </div>
        </div>
      </section>
    </main>
  )
}
