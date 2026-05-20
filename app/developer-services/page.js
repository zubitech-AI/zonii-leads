import Link from 'next/link'

export const metadata = {
  title: 'Developer, DevOps & Agentic AI Services | ZubiTech',
  description: 'Premium Full-Stack development, mobile apps, DevOps pipelines, and Agentic AI workflow automation built by ZubiTech.',
}

export default function DeveloperServicesPage() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              End-to-End Software, DevOps & <span className="text-gradient">Agentic AI.</span>
            </h1>
            <p className="hero-subtitle">
              Hi, I'm a Senior Full-Stack Developer, Mobile App Developer, DevOps Architect, and Agentic AI Engineer. I design and build production-ready digital engines—from cloud-native web and mobile applications to multi-agent AI ecosystems.
            </p>
            <div className="hero-buttons">
              <a href="#contact-dev" className="btn btn-primary">Start a Project</a>
              <a href="#services-dev" className="btn btn-secondary">Explore Capabilities</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-dev" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>My Specialist <span className="text-gradient">Domains</span></h2>
          <p className="section-subtitle">
            From coding frontends to orchestrating containerized clouds and training intelligent AI agents, I own the entire engineering lifecycle.
          </p>

          <div className="grid-2" style={{ marginTop: '3rem' }}>
            {/* Full-Stack Web Development */}
            <div className="card glass">
              <div className="card-icon" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15))' }}>💻</div>
              <h3>Full-Stack Development</h3>
              <p>High-performance, secure, and SEO-optimized web systems. I design modular frontends and distributed APIs that deliver exceptional user experience.</p>
              <ul>
                <li>React, Next.js, and Node.js ecosystems</li>
                <li>State management & responsive UI design</li>
                <li>PostgreSQL, MongoDB, and Redis integrations</li>
                <li>Restful APIs & real-time WebSockets</li>
              </ul>
            </div>

            {/* Mobile App Development */}
            <div className="card glass">
              <div className="card-icon" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.15))' }}>📱</div>
              <h3>Mobile App Development</h3>
              <p>Native-speed cross-platform mobile apps for iOS and Android. Clean UI rendering, local database caching, and native hardware API integrations.</p>
              <ul>
                <li>Flutter & React Native frameworks</li>
                <li>Offline-first local storage & sync</li>
                <li>Push notifications & background tasks</li>
                <li>App Store & Google Play publishing</li>
              </ul>
            </div>

            {/* DevOps & Cloud Infrastructure */}
            <div className="card glass">
              <div className="card-icon" style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.15))' }}>⚙️</div>
              <h3>DevOps & Cloud Orchestration</h3>
              <p>Automate your delivery and guarantee 99.9% uptime. I build infrastructure as code, secure continuous delivery pipelines, and configure cluster nodes.</p>
              <ul>
                <li>CI/CD Automation (GitHub Actions, GitLab CI)</li>
                <li>Docker containerization & Kubernetes orchestration</li>
                <li>AWS, GCP, Azure, and Vercel infrastructure</li>
                <li>Terraform IaC & Prometheus/Grafana monitoring</li>
              </ul>
            </div>

            {/* AI & Agentic AI Specialist */}
            <div className="card glass">
              <div className="card-icon" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15))' }}>🤖</div>
              <h3>AI & Agentic AI Engineering</h3>
              <p>Move beyond simple prompts. I build autonomous AI agent systems that collaborate to solve complex business operations, read databases, and write code.</p>
              <ul>
                <li>Multi-Agent Frameworks (CrewAI, AutoGen, LangChain)</li>
                <li>Retrieval-Augmented Generation (RAG) vector pipelines</li>
                <li>LLM fine-tuning, embeddings, and prompting systems</li>
                <li>Cognitive workflows & database-driven agents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="section wins-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>My Technical <span className="text-gradient">Stack</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            A curated list of modern technologies, libraries, and frameworks I leverage daily.
          </p>

          <div className="grid-3">
            <div className="card glass" style={{ padding: '2rem' }}>
              <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Frontend & Mobile</h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>Next.js / React</span> <strong style={{ color: 'var(--text-secondary)' }}>Expert</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>Flutter / Dart</span> <strong style={{ color: 'var(--text-secondary)' }}>Expert</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>React Native</span> <strong style={{ color: 'var(--text-secondary)' }}>Senior</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>TypeScript / JS</span> <strong style={{ color: 'var(--text-secondary)' }}>Expert</strong></li>
              </ul>
            </div>

            <div className="card glass" style={{ padding: '2rem' }}>
              <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Backend & Devops</h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>Node.js / Express</span> <strong style={{ color: 'var(--text-secondary)' }}>Expert</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>Docker / K8s</span> <strong style={{ color: 'var(--text-secondary)' }}>Senior</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>Terraform / AWS</span> <strong style={{ color: 'var(--text-secondary)' }}>Senior</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>Python / Django</span> <strong style={{ color: 'var(--text-secondary)' }}>Expert</strong></li>
              </ul>
            </div>

            <div className="card glass" style={{ padding: '2rem' }}>
              <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#10B981' }}>Artificial Intelligence</h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>Agentic Workflows</span> <strong style={{ color: 'var(--text-secondary)' }}>Expert</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>CrewAI / AutoGen</span> <strong style={{ color: 'var(--text-secondary)' }}>Expert</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>Vector DBs (pgvector)</span> <strong style={{ color: 'var(--text-secondary)' }}>Senior</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}><span>LangChain / LLMs</span> <strong style={{ color: 'var(--text-secondary)' }}>Expert</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>My Engineering <span className="text-gradient">Blueprint</span></h2>
          <p className="section-subtitle">
            How I turn ideas into reliable, scalable software products.
          </p>

          <div className="grid-2" style={{ marginTop: '4rem' }}>
            <div>
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Architecture Design</h3>
                  <p>Modeling system components, database schemas, and cloud topology before writing code.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Sprint Development</h3>
                  <p>Building scalable frontends and secure backends with continuous unit and integration tests.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>CI/CD Deployment</h3>
                  <p>Deploying microservices using Docker/Kubernetes directly to optimized clusters with zero-downtime.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>AI & Automation</h3>
                  <p>Integrating cognitive AI models and agent swarms to run manual business operations autonomously.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-dev" className="section wins-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Let's Build Your <span className="text-gradient">Next Project</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            Get in touch directly to discuss your software architecture, DevOps automation, or Agentic AI roadmap.
          </p>

          <div className="grid-4" style={{ marginBottom: '4rem' }}>
            {/* Email Card */}
            <div className="card glass" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="card-icon" style={{ margin: '0 auto 1rem auto' }}>✉️</div>
                <h3>Email Me</h3>
                <p style={{ margin: '1rem 0', fontSize: '0.95rem' }}>zubitech906@gmail.com</p>
              </div>
              <a href="mailto:zubitech906@gmail.com" className="btn btn-primary" style={{ marginTop: 'auto' }}>Send Email</a>
            </div>

            {/* WhatsApp Card */}
            <div className="card glass" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="card-icon" style={{ margin: '0 auto 1rem auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ color: '#25D366' }}>
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.407 2.454 1.134 3.424l-.741 2.709 2.78-.728c.937.609 2.046.961 3.238.961 3.18 0 5.766-2.586 5.766-5.766s-2.586-5.766-5.766-5.766zm3.326 8.21c-.137.387-.704.707-1.014.757-.272.043-.618.069-1.02-.061-.252-.08-.57-.2-.969-.371-1.698-.732-2.772-2.479-2.857-2.593-.085-.114-.69-.918-.69-1.75 0-.832.435-1.242.59-1.41.15-.168.33-.21.44-.21.11 0 .22 0 .31.004.1.005.23-.039.36.27.135.322.46 1.12.5 1.21.04.09.07.195.01.31-.06.115-.09.185-.18.29-.09.105-.19.235-.27.315-.09.09-.185.19-.08.37.105.18.47.775 1.01 1.258.697.62 1.284.812 1.464.9.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.4-.09.165.06 1.045.495 1.225.585.18.09.3.135.345.21.045.075.045.435-.092.822zM12 2C6.477 2 2 6.477 2 12c0 1.954.562 3.778 1.53 5.32L2.03 22l4.83-.1.1.03C8.42 22.86 10.15 23.3 12 23.3c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 19.3c-1.66 0-3.2-.45-4.52-1.24l-.32-.2-2.85.07.76-2.78-.22-.35A8.25 8.25 0 013.7 12c0-4.58 3.72-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 4.58-3.72 8.3-8.3 8.3z"/>
                  </svg>
                </div>
                <h3>WhatsApp Chat</h3>
                <p style={{ margin: '1rem 0', fontSize: '0.95rem' }}>+92 308 4737171</p>
              </div>
              <a href="https://wa.me/923084737171" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 'auto', background: '#25D366', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)' }}>Chat Now</a>
            </div>

            {/* LinkedIn Card */}
            <div className="card glass" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="card-icon" style={{ margin: '0 auto 1rem auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ color: '#0077B5' }}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h3>LinkedIn Profile</h3>
                <p style={{ margin: '1rem 0', fontSize: '0.95rem' }}>Connect on LinkedIn</p>
              </div>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 'auto', background: '#0077B5', boxShadow: '0 4px 14px rgba(0, 119, 181, 0.3)' }}>Connect</a>
            </div>

            {/* Instagram Card */}
            <div className="card glass" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="card-icon" style={{ margin: '0 auto 1rem auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#E1306C' }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <h3>Instagram</h3>
                <p style={{ margin: '1rem 0', fontSize: '0.95rem' }}>Follow on Instagram</p>
              </div>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 'auto', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', boxShadow: '0 4px 14px rgba(220, 39, 67, 0.3)' }}>Follow</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
