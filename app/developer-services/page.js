import Link from 'next/link'

export const metadata = {
  title: 'Senior Developer & AI Engineer Portfolio | ZubiTech',
  description: 'Premium Full-Stack development, mobile apps, DevOps pipelines, and Agentic AI systems built by ZubiTech, Tech Lead at NCAI Lahore.',
}

export default function DeveloperServicesPage() {
  return (
    <main 
      id="main" 
      className="stitch-bg stitch-font-body min-h-screen relative overflow-hidden" 
      style={{ 
        background: 'var(--stitch-bg)', 
        color: 'var(--stitch-text)', 
        transition: 'background-color 0.3s ease, color 0.3s ease' 
      }}
    >
      {/* Grid Background Pattern */}
      <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}></div>
      
      {/* Ambient Glows */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {/* Hero Section */}
      <section className="relative z-10" style={{ 
        padding: '1.5rem 0', 
        minHeight: 'calc(100vh - 96px)', 
        display: 'flex', 
        alignItems: 'center' 
      }}>
        <div className="container" style={{ width: '100%' }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            {/* Left Side Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              {/* Availability Badge */}
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                backgroundColor: 'var(--stitch-surface-highest)', 
                padding: '0.4rem 0.8rem', 
                borderRadius: '9999px',
                border: '1px solid var(--stitch-border)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
              }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--stitch-gradient-end)', 
                  boxShadow: '0 0 10px var(--stitch-gradient-end)' 
                }} className="pulse-dot"></div>
                <span style={{ 
                  fontSize: '0.7rem', 
                  fontWeight: 700, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em', 
                  color: 'var(--stitch-gradient-end)' 
                }}>Available for International Projects</span>
              </div>

              {/* Headings */}
              <h1 className="stitch-font-headline" style={{ 
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
                lineHeight: 1.15, 
                fontWeight: 900, 
                letterSpacing: '-0.04em',
                margin: 0
              }}>
                Full-Stack, DevOps & <span className="stitch-gradient-text">Agentic AI.</span>
              </h1>
              
              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--stitch-text-secondary)', 
                lineHeight: 1.5, 
                margin: 0,
                maxWidth: '560px',
                transition: 'color 0.3s ease'
              }}>
                Hi, I'm Zubaid Rasool, a Senior AI Research Engineer and Tech Lead at the <strong>National Center of Artificial Intelligence (NCAI), Lahore</strong>. I build premium web applications, native-speed mobile apps, automated DevOps systems, and collaborative multi-agent AI swarms for clients worldwide.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <a href="#contact-dev" className="btn stitch-gradient-btn" style={{ padding: '0.7rem 1.8rem', borderRadius: '9999px', fontSize: '0.9rem', textDecoration: 'none' }}>
                  Work With Me
                </a>
                <a href="#experience-dev" className="btn stitch-ghost-btn" style={{ padding: '0.7rem 1.8rem', borderRadius: '9999px', fontSize: '0.9rem', textDecoration: 'none' }}>
                  View My Journey
                </a>
              </div>

              {/* Stats Row */}
              <div style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                marginTop: '1.5rem', 
                borderTop: '1px solid var(--stitch-border)', 
                paddingTop: '1.5rem',
                width: '100%',
                transition: 'border-color 0.3s ease'
              }}>
                <div>
                  <div className="stitch-font-headline" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--stitch-text)', transition: 'color 0.3s ease' }}>NCAI</div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stitch-text-secondary)', marginTop: '0.2rem', transition: 'color 0.3s ease' }}>AI Research Lab</div>
                </div>
                <div style={{ width: '1px', backgroundColor: 'var(--stitch-border)', transition: 'background-color 0.3s ease' }}></div>
                <div>
                  <div className="stitch-font-headline" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--stitch-text)', transition: 'color 0.3s ease' }}>50+</div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stitch-text-secondary)', marginTop: '0.2rem', transition: 'color 0.3s ease' }}>Global Projects</div>
                </div>
                <div style={{ width: '1px', backgroundColor: 'var(--stitch-border)', transition: 'background-color 0.3s ease' }}></div>
                <div>
                  <div className="stitch-font-headline" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--stitch-text)', transition: 'color 0.3s ease' }}>100%</div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stitch-text-secondary)', marginTop: '0.2rem', transition: 'color 0.3s ease' }}>SLA Delivery</div>
                </div>
              </div>
            </div>

            {/* Right Side Orbiting Sphere (Hidden on mobile) */}
            <div className="hide-on-mobile" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ 
                position: 'relative', 
                width: '280px', 
                height: '280px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--stitch-surface-low)', 
                border: '1px solid var(--stitch-border)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 0 40px var(--stitch-glow-color)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
              }}>
                {/* Central Sphere Image */}
                <div style={{ 
                  width: '210px', 
                  height: '210px', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  border: '2px solid var(--stitch-surface-high)',
                  position: 'relative',
                  zIndex: 10,
                  backgroundColor: 'var(--stitch-surface-low)',
                  transition: 'border-color 0.3s ease, background-color 0.3s ease'
                }}>
                  <img 
                    alt="Abstract glowing 3D code sphere" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFs5iiL_jbhWBJHs3rlxWoqC3w7wkEdAA3MzHd_eWHxZgBBgAw0asH6Y3PWNUl6g_xc40_7zw90DTKpmHQIgTAjCuZ2U1hMpLMGLaXNzmuJjWInOaCC1VgqrYPYIUPs3AT6m9AuGn11ag2ZteiV5jmQHCjEUjJbe7sik_jrYs9zUV8c4NrprzBMPDvIU7zKPoxkmp9XDHxi27Sun_I964vIajxUIxmssGUD_zDiRlsyttPfpRAjFWq99-r07avauDiOOoOK0s0FTi0" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                  />
                </div>

                {/* Orbiting Chips */}
                {/* React */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  backgroundColor: 'var(--stitch-surface-low)', 
                  border: '1px solid var(--stitch-border)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  zIndex: 20,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}>
                  <span style={{ color: 'var(--stitch-gradient-start)', fontSize: '0.7rem', fontWeight: 'bold' }}>React / Next</span>
                </div>
                {/* Flutter */}
                <div style={{ 
                  position: 'absolute', 
                  top: '70px', 
                  right: '-35px', 
                  backgroundColor: 'var(--stitch-surface-low)', 
                  border: '1px solid var(--stitch-border)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  zIndex: 20,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}>
                  <span style={{ color: 'var(--stitch-gradient-start)', fontSize: '0.7rem', fontWeight: 'bold' }}>Flutter</span>
                </div>
                {/* AWS */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '50px', 
                  right: '-15px', 
                  backgroundColor: 'var(--stitch-surface-low)', 
                  border: '1px solid var(--stitch-border)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  zIndex: 20,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}>
                  <span style={{ color: 'var(--stitch-gradient-end)', fontSize: '0.7rem', fontWeight: 'bold' }}>AWS / DevOps</span>
                </div>
                {/* Python */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-15px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  backgroundColor: 'var(--stitch-surface-low)', 
                  border: '1px solid var(--stitch-border)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  zIndex: 20,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}>
                  <span style={{ color: 'var(--stitch-gradient-end)', fontSize: '0.7rem', fontWeight: 'bold' }}>Python / PyTorch</span>
                </div>
                {/* Docker */}
                <div style={{ 
                  position: 'absolute', 
                  top: '110px', 
                  left: '-45px', 
                  backgroundColor: 'var(--stitch-surface-low)', 
                  border: '1px solid var(--stitch-border)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  zIndex: 20,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}>
                  <span style={{ color: 'var(--stitch-gradient-start)', fontSize: '0.7rem', fontWeight: 'bold' }}>Docker / K8s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Domains Section */}
      <section id="services-dev" style={{ padding: '5rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <h2 className="stitch-font-headline" style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, color: 'var(--stitch-text)' }}>
            Specialist <span className="stitch-gradient-text">Domains</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--stitch-text-secondary)', maxWidth: '600px', margin: '0.5rem auto 3rem auto' }}>
            From low-level system design and multi-agent AI frameworks to scalable deployment patterns.
          </p>

          <div className="grid-2">
            {/* Full Stack Card */}
            <div className="stitch-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem' }}>💻</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--stitch-gradient-start)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Premium Engineering</span>
              </div>
              <h3 className="stitch-font-headline" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--stitch-text)', marginBottom: '0.75rem' }}>
                Full-Stack Architecture
              </h3>
              <p style={{ color: 'var(--stitch-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                End-to-end web system design using reliable modular structures. I develop responsive client interfaces backed by secure, distributed backend APIs.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Next.js</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>TypeScript</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Node.js</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>PostgreSQL</span>
              </div>
            </div>

            {/* Mobile App Card */}
            <div className="stitch-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem' }}>📱</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--stitch-gradient-end)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Native Performance</span>
              </div>
              <h3 className="stitch-font-headline" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--stitch-text)', marginBottom: '0.75rem' }}>
                Mobile App Engineering
              </h3>
              <p style={{ color: 'var(--stitch-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Cross-platform mobile apps built with clean rendering logic, background task handling, secure local databases, and hardware integration.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Flutter</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Dart</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>React Native</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>SQLite</span>
              </div>
            </div>

            {/* DevOps Card */}
            <div className="stitch-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem' }}>⚙️</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--stitch-gradient-start)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Infrastructure As Code</span>
              </div>
              <h3 className="stitch-font-headline" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--stitch-text)', marginBottom: '0.75rem' }}>
                Cloud & DevOps Automation
              </h3>
              <p style={{ color: 'var(--stitch-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Automating release pipelines, provisioning container clusters, configuring reverse proxies, and securing cloud infrastructure with zero downtime.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Docker</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Kubernetes</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Terraform</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>AWS</span>
              </div>
            </div>

            {/* AI Engineering Card */}
            <div className="stitch-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem' }}>🤖</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--stitch-gradient-end)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>State of the Art AI</span>
              </div>
              <h3 className="stitch-font-headline" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--stitch-text)', marginBottom: '0.75rem' }}>
                Agentic AI & LLMOps
              </h3>
              <p style={{ color: 'var(--stitch-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Autonomous agent networks and vector pipelines for reasoning tasks. I construct RAG systems that query live knowledge stores and database systems.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>CrewAI</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>LangChain</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>LLM Fine-tuning</span>
                <span className="stitch-pill" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Vector DBs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Table */}
      <section style={{ padding: '5rem 0', position: 'relative', zIndex: 10 }} className="wins-section">
        <div className="container">
          <h2 className="stitch-font-headline" style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, color: 'var(--stitch-text)' }}>
            Curated <span className="stitch-gradient-text">Tech Stack</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--stitch-text-secondary)', maxWidth: '600px', margin: '0.5rem auto 3rem auto' }}>
            Preconfigured tools and systems I leverage to build software systems rapidly.
          </p>

          <div className="grid-3">
            <div className="stitch-card" style={{ padding: '2rem', minHeight: 'auto' }}>
              <h3 className="stitch-font-headline" style={{ color: 'var(--stitch-gradient-start)', borderBottom: '1px solid var(--stitch-border)', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem', transition: 'color 0.3s ease, border-color 0.3s ease' }}>Frontend / Mobile</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--stitch-border)', transition: 'border-color 0.3s ease' }}><span>Next.js / React</span> <span style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600 }}>Expert</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--stitch-border)', transition: 'border-color 0.3s ease' }}><span>Flutter & Dart</span> <span style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600 }}>Expert</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--stitch-border)', transition: 'border-color 0.3s ease' }}><span>React Native</span> <span style={{ color: 'var(--stitch-gradient-start)', fontWeight: 600 }}>Senior</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}><span>TypeScript</span> <span style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600 }}>Expert</span></li>
              </ul>
            </div>

            <div className="stitch-card" style={{ padding: '2rem', minHeight: 'auto' }}>
              <h3 className="stitch-font-headline" style={{ color: 'var(--stitch-gradient-end)', borderBottom: '1px solid var(--stitch-border)', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem', transition: 'color 0.3s ease, border-color 0.3s ease' }}>Backend / DevOps</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--stitch-border)', transition: 'border-color 0.3s ease' }}><span>Node.js / Express</span> <span style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600 }}>Expert</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--stitch-border)', transition: 'border-color 0.3s ease' }}><span>Docker / Kubernetes</span> <span style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600 }}>Senior</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--stitch-border)', transition: 'border-color 0.3s ease' }}><span>Terraform / IaC</span> <span style={{ color: 'var(--stitch-gradient-start)', fontWeight: 600 }}>Senior</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}><span>AWS / GCP</span> <span style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600 }}>Senior</span></li>
              </ul>
            </div>

            <div className="stitch-card" style={{ padding: '2rem', minHeight: 'auto' }}>
              <h3 className="stitch-font-headline" style={{ color: 'var(--stitch-gradient-start)', borderBottom: '1px solid var(--stitch-border)', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem', transition: 'color 0.3s ease, border-color 0.3s ease' }}>AI & Data</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--stitch-border)', transition: 'border-color 0.3s ease' }}><span>Agentic CrewAI / AutoGen</span> <span style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600 }}>Expert</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--stitch-border)', transition: 'border-color 0.3s ease' }}><span>LangChain / RAG</span> <span style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600 }}>Expert</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--stitch-border)', transition: 'border-color 0.3s ease' }}><span>Python / PyTorch</span> <span style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600 }}>Expert</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}><span>Vector Databases</span> <span style={{ color: 'var(--stitch-gradient-start)', fontWeight: 600 }}>Senior</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Timeline Section */}
      <section id="experience-dev" style={{ padding: '5rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <h2 className="stitch-font-headline" style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, color: 'var(--stitch-text)' }}>
            Professional <span className="stitch-gradient-text">Journey</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--stitch-text-secondary)', maxWidth: '600px', margin: '0.5rem auto 4rem auto' }}>
            A track record of engineering leadership, academic AI research, and global system deployments.
          </p>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Timeline center line */}
            <div className="stitch-timeline-line"></div>

            {/* Experience Item 1 (NCAI Lahore) */}
            <div style={{ display: 'flex', position: 'relative', marginBottom: '3rem', flexDirection: 'column' }} className="timeline-block">
              {/* Point Indicator */}
              <div style={{ 
                position: 'absolute', 
                left: '22px', 
                top: '0', 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--stitch-bg)', 
                border: '3px solid var(--stitch-gradient-end)',
                zIndex: 20,
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
              }} className="timeline-point"></div>

              {/* Card Container */}
              <div className="stitch-card" style={{ marginLeft: '4rem', padding: '1.5rem 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 className="stitch-font-headline" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--stitch-text)', margin: 0, transition: 'color 0.3s ease' }}>Senior AI Research Engineer & Tech Lead</h3>
                    <div style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem', transition: 'color 0.3s ease' }}>National Center of Artificial Intelligence (NCAI), Lahore</div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 'bold', backgroundColor: 'var(--stitch-surface-highest)', color: 'var(--stitch-gradient-end)', padding: '0.3rem 0.8rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
                    2023 - Present
                  </span>
                </div>
                <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--stitch-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, transition: 'color 0.3s ease' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Lead generative AI research and software architecture for national-scale intelligent computing pipelines.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Engineered localized RAG systems and autonomous agent workflows to handle massive internal data systems.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Designed automated compliance tools and financial performance tracking platforms for institutional operations.</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 (International Clients) */}
            <div style={{ display: 'flex', position: 'relative', marginBottom: '3rem', flexDirection: 'column' }} className="timeline-block">
              {/* Point Indicator */}
              <div style={{ 
                position: 'absolute', 
                left: '22px', 
                top: '0', 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--stitch-bg)', 
                border: '3px solid var(--stitch-gradient-start)',
                zIndex: 20,
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
              }} className="timeline-point"></div>

              {/* Card Container */}
              <div className="stitch-card" style={{ marginLeft: '4rem', padding: '1.5rem 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 className="stitch-font-headline" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--stitch-text)', margin: 0, transition: 'color 0.3s ease' }}>Lead Full-Stack & DevOps Consultant</h3>
                    <div style={{ color: 'var(--stitch-gradient-start)', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem', transition: 'color 0.3s ease' }}>International Freelancing & Remote Projects</div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 'bold', backgroundColor: 'var(--stitch-surface-highest)', color: 'var(--stitch-gradient-start)', padding: '0.3rem 0.8rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
                    2021 - 2023
                  </span>
                </div>
                <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--stitch-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, transition: 'color 0.3s ease' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Consulted US, UK, and Middle East startups on cloud migration strategies, infrastructure setups, and API designs.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Built high-speed Next.js web platforms and set up automated, secure Kubernetes clusters, dropping operation costs by 35%.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Integrated payment gateways, authentication layers, and real-time dashboard data visuals for international businesses.</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3 (Mobile Development) */}
            <div style={{ display: 'flex', position: 'relative', marginBottom: '1rem', flexDirection: 'column' }} className="timeline-block">
              {/* Point Indicator */}
              <div style={{ 
                position: 'absolute', 
                left: '22px', 
                top: '0', 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--stitch-bg)', 
                border: '3px solid var(--stitch-gradient-end)',
                zIndex: 20,
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
              }} className="timeline-point"></div>

              {/* Card Container */}
              <div className="stitch-card" style={{ marginLeft: '4rem', padding: '1.5rem 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 className="stitch-font-headline" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--stitch-text)', margin: 0, transition: 'color 0.3s ease' }}>Senior Mobile Application Developer</h3>
                    <div style={{ color: 'var(--stitch-gradient-end)', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem', transition: 'color 0.3s ease' }}>Software Hub & Tech Agencies</div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 'bold', backgroundColor: 'var(--stitch-surface-highest)', color: 'var(--stitch-gradient-end)', padding: '0.3rem 0.8rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
                    2019 - 2021
                  </span>
                </div>
                <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--stitch-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, transition: 'color 0.3s ease' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Coded responsive cross-platform applications in Flutter and React Native.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Engineered offline caching sync processes, native background services, and real-time push engines.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Delivered over 12 projects on the Google Play Store and App Store with optimized build sizing.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Process Section */}
      <section style={{ padding: '5rem 0', position: 'relative', zIndex: 10 }} className="wins-section">
        <div className="container">
          <h2 className="stitch-font-headline" style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, color: 'var(--stitch-text)' }}>
            Engineering <span className="stitch-gradient-text">Blueprint</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--stitch-text-secondary)', maxWidth: '600px', margin: '0.5rem auto 3rem auto' }}>
            A systematic roadmap to take software architecture from concept to live production.
          </p>

          <div className="grid-2">
            <div>
              <div className="process-step" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div className="stitch-font-headline" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--stitch-gradient-start)', opacity: 0.3, lineHeight: 1 }}>01</div>
                <div>
                  <h3 className="stitch-font-headline" style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--stitch-text)' }}>System Blueprinting</h3>
                  <p style={{ color: 'var(--stitch-text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>Drafting sequence diagrams, cloud topology, schema definitions, and model layers before shipping code.</p>
                </div>
              </div>

              <div className="process-step" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div className="stitch-font-headline" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--stitch-gradient-end)', opacity: 0.3, lineHeight: 1 }}>02</div>
                <div>
                  <h3 className="stitch-font-headline" style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--stitch-text)' }}>Sprint & Clean Code</h3>
                  <p style={{ color: 'var(--stitch-text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>Developing modular components, writing strict TypeScript typings, setting unit validations, and lint checking.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="process-step" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div className="stitch-font-headline" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--stitch-gradient-start)', opacity: 0.3, lineHeight: 1 }}>03</div>
                <div>
                  <h3 className="stitch-font-headline" style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--stitch-text)' }}>Automated Pipelines</h3>
                  <p style={{ color: 'var(--stitch-text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>Setting up docker build targets, setting branch release pipelines, deploying nodes, and triggering monitoring telemetry.</p>
                </div>
              </div>

              <div className="process-step" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div className="stitch-font-headline" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--stitch-gradient-end)', opacity: 0.3, lineHeight: 1 }}>04</div>
                <div>
                  <h3 className="stitch-font-headline" style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--stitch-text)' }}>Cognitive Agent Integration</h3>
                  <p style={{ color: 'var(--stitch-text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>Orchestrating agent runtimes with CrewAI, defining tool access boundaries, and deploying vector store indexing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-dev" style={{ padding: '5rem 0 7rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <h2 className="stitch-font-headline" style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, color: 'var(--stitch-text)' }}>
            Start a <span className="stitch-gradient-text">Project</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--stitch-text-secondary)', maxWidth: '600px', margin: '0.5rem auto 4rem auto' }}>
            Discuss custom application builds, container deployments, or multi-agent automation workflows.
          </p>

          <div className="grid-4">
            {/* Email Card */}
            <div className="stitch-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px' }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✉️</div>
                <h3 className="stitch-font-headline" style={{ fontSize: '1.25rem', color: 'var(--stitch-text)', margin: '0 0 0.5rem 0' }}>Email</h3>
                <p style={{ color: 'var(--stitch-text-secondary)', fontSize: '0.85rem', wordBreak: 'break-all', margin: '0 0 1rem 0' }}>info@zoniileads.com</p>
              </div>
              <a href="mailto:info@zoniileads.com" className="btn stitch-gradient-btn" style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', borderRadius: '9999px', fontSize: '0.85rem' }}>Send Email</a>
            </div>

            {/* WhatsApp Card */}
            <div className="stitch-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px' }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor" style={{ color: '#25D366' }}>
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.407 2.454 1.134 3.424l-.741 2.709 2.78-.728c.937.609 2.046.961 3.238.961 3.18 0 5.766-2.586 5.766-5.766s-2.586-5.766-5.766-5.766zm3.326 8.21c-.137.387-.704.707-1.014.757-.272.043-.618.069-1.02-.061-.252-.08-.57-.2-.969-.371-1.698-.732-2.772-2.479-2.857-2.593-.085-.114-.69-.918-.69-1.75 0-.832.435-1.242.59-1.41.15-.168.33-.21.44-.21.11 0 .22 0 .31.004.1.005.23-.039.36.27.135.322.46 1.12.5 1.21.04.09.07.195.01.31-.06.115-.09.185-.18.29-.09.105-.19.235-.27.315-.09.09-.185.19-.08.37.105.18.47.775 1.01 1.258.697.62 1.284.812 1.464.9.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.4-.09.165.06 1.045.495 1.225.585.18.09.3.135.345.21.045.075.045.435-.092.822zM12 2C6.477 2 2 6.477 2 12c0 1.954.562 3.778 1.53 5.32L2.03 22l4.83-.1.1.03C8.42 22.86 10.15 23.3 12 23.3c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 19.3c-1.66 0-3.2-.45-4.52-1.24l-.32-.2-2.85.07.76-2.78-.22-.35A8.25 8.25 0 013.7 12c0-4.58 3.72-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 4.58-3.72 8.3-8.3 8.3z"/>
                  </svg>
                </div>
                <h3 className="stitch-font-headline" style={{ fontSize: '1.25rem', color: 'var(--stitch-text)', margin: '0 0 0.5rem 0' }}>WhatsApp</h3>
                <p style={{ color: 'var(--stitch-text-secondary)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>+44 7458 979941</p>
              </div>
              <a href="https://wa.me/447458979941" target="_blank" rel="noreferrer" className="btn" style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', borderRadius: '9999px', fontSize: '0.85rem', backgroundColor: '#25D366', color: '#ffffff', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)' }}>Chat Now</a>
            </div>

            {/* LinkedIn Card */}
            <div className="stitch-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px' }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor" style={{ color: '#0077B5' }}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h3 className="stitch-font-headline" style={{ fontSize: '1.25rem', color: 'var(--stitch-text)', margin: '0 0 0.5rem 0' }}>LinkedIn</h3>
                <p style={{ color: 'var(--stitch-text-secondary)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>Professional Network</p>
              </div>
              <a href="https://www.linkedin.com/in/zubaidrasool95/" target="_blank" rel="noreferrer" className="btn" style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', borderRadius: '9999px', fontSize: '0.85rem', backgroundColor: '#0077B5', color: '#ffffff', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0, 119, 181, 0.2)' }}>Connect</a>
            </div>

            {/* Instagram Card */}
            <div className="stitch-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px' }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#E1306C' }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <h3 className="stitch-font-headline" style={{ fontSize: '1.25rem', color: 'var(--stitch-text)', margin: '0 0 0.5rem 0' }}>Instagram</h3>
                <p style={{ color: 'var(--stitch-text-secondary)', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>Social & Creative Updates</p>
              </div>
              <a href="https://www.instagram.com/ur_zubi?igsh=NHdpZ2N4bm56d3Rs" target="_blank" rel="noreferrer" className="btn" style={{ textDecoration: 'none', padding: '0.6rem 1.5rem', borderRadius: '9999px', fontSize: '0.85rem', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#ffffff', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(220, 39, 67, 0.2)' }}>Follow</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
