import React from 'react';
import { Mail, ExternalLink, PlayCircle, Activity, Database, Users, Code, Award, Target, BookOpen } from 'lucide-react';

function App() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>MO.</div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#media" className="nav-link">Media</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* HERO SECTION */}
        <section id="home" className="section" style={{ paddingTop: '180px', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="avatar-container">
            {/* Using a placeholder for her excellent CV headshot until one is provided locally */}
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQE6k_vY8I610g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714574971488?e=1738195200&v=beta&t=H3Hl3wXw27Z0D_s_E_I24o28IqWw0T0aG_HwZ_Z199c" alt="Monica Odysseos" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Monica+Odysseos&background=141415&color=fff&size=200'; }} />
          </div>
          <h1 style={{ marginBottom: '16px' }}>Monica Odysseos.</h1>
          <h2 style={{ color: 'var(--text-secondary)' }}>AI & Data Leader | Executive Trainer | Speaker</h2>
          <p style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '32px' }}>
            With over 10 years of experience managing AI and IT projects, I specialize in delivering AI-driven solutions for regulatory compliance, process optimization, and decision support. 
            Passionate about bringing scalable data systems to life and empowering organizations through capacity building.
          </p>
          <div className="flex gap-4 items-center">
            <a href="#media" className="btn">
              <PlayCircle size={18} />
              Watch Podcast
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </section>

        {/* ABOUT & EXPERTISE */}
        <section id="about" className="section">
          <h2>Core Expertise</h2>
          <div className="grid-2">
            <div className="card">
              <div className="mb-2"><Database size={24} color="var(--accent)" /></div>
              <h3>AI & Data Strategy</h3>
              <p>Designing scalable data warehouse solutions and developing deep learning/NLP models for regulatory compliance and risk management.</p>
            </div>
            <div className="card">
              <div className="mb-2"><Activity size={24} color="var(--accent)" /></div>
              <h3>Process Optimization</h3>
              <p>Automating workflows with Microsoft Power Platform and streamlining operations to align technical execution with overarching strategic goals.</p>
            </div>
            <div className="card">
              <div className="mb-2"><Users size={24} color="var(--accent)" /></div>
              <h3>Capacity Building</h3>
              <p>Certified trainer delivering workshops to 200+ professionals. Fostering a culture of technological empowerment and data literacy.</p>
            </div>
            <div className="card">
              <div className="mb-2"><Target size={24} color="var(--accent)" /></div>
              <h3>Ethics & Governance</h3>
              <p>Advising on the ethical adoption of AI inside professional institutions and ensuring solutions meet rigorous regulatory standards.</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="section">
          <h2>Professional Journey</h2>
          <div className="timeline mt-8">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">Mar 2024 &ndash; Present</p>
              <h3>AI and Data Lab Leader</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Grant Thornton Cyprus</p>
              <p>Driving transformative projects leveraging AI and data analytics to deliver strategic insights. Directing NLP algorithm development for compliance and process optimization.</p>
              <div className="mt-4">
                <span className="tag">NLP</span>
                <span className="tag">Power Platform</span>
                <span className="tag">Strategy</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">Nov 2024 &ndash; Present</p>
              <h3>EU AI Trainer</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>European Learning Experience Platform (EULEP)</p>
              <p>Building trainer capacity across Europe, incorporating ethical AI adoption, regulatory compliance, and cross-border collaboration into AI curricula.</p>
              <div className="mt-4">
                <span className="tag">AI Ethics</span>
                <span className="tag">EU Collaboration</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">Jul 2024 &ndash; Present</p>
              <h3>Ethics Standards Committee Member</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>ICAEW, London</p>
              <p>Guiding the ethical adoption and use of AI within the accounting profession. Refining educational content to meet emerging ethical standards.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">Dec 2020 &ndash; Feb 2024</p>
              <h3>Data Scientist, Data and Artificial Intelligence Lab</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>PwC Cyprus</p>
              <p>Led the development of a deep learning model (integrating ML and NLP) for the European Food Safety Authority (EFSA) to detect food safety risks across EU member states.</p>
              <div className="mt-4">
                <span className="tag">Deep Learning</span>
                <span className="tag">Python</span>
                <span className="tag">Data Architecture</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">2013 &ndash; 2020</p>
              <h3>Foundational Roles in Finance, Risk & Software Dev</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>PwC, Computershare, IPL</p>
              <p>Roles spanning Financial Analyst (Deals), Risk & Quality Analyst, and Software Developer building government-level IT solutions (winner of IT Innovation of the Year).</p>
            </div>
          </div>
        </section>

        {/* MEDIA & SPEAKING */}
        <section id="media" className="section">
          <h2>Media & Speaking</h2>
          <p style={{ maxWidth: '600px', marginBottom: '32px' }}>
            I frequently share insights on the real-world application of AI, shifting the focus from theoretical hype to practical, tangible business value.
          </p>
          
          <div className="grid-2">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#000' }}>
                <iframe 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  src="https://www.youtube.com/embed/J0TqP6R8DLo" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ padding: '24px' }}>
                <div className="flex items-center gap-4 mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <PlayCircle size={16} /> Podcast Appearance
                </div>
                <h3 style={{ fontSize: '1.2rem' }}>AI in Business: Practical Applications</h3>
                <p style={{ fontSize: '0.95rem' }}>A deep dive into how modern organizations are leveraging AI to automate processes and ensure regulatory compliance.</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="card" style={{ padding: '24px' }}>
                <div className="flex items-center gap-4 mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <BookOpen size={16} /> Article Series
                </div>
                <h3>AI: What is it really?</h3>
                <p style={{ fontSize: '0.95rem' }}>Recognized as the most-read article in ICAEW's Annual Report 2022, serving as a key resource for professionals seeking accessible insights into AI.</p>
              </div>

              <div className="card" style={{ padding: '24px' }}>
                <div className="flex items-center gap-4 mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <Users size={16} /> Keynote Speaking
                </div>
                <h3>AI & Analytics Live Presentation</h3>
                <p style={{ fontSize: '0.95rem' }}>Presented on AI's transformative impact on business analytics (Oct 2024), receiving the highest speaker rating at the ICAEW event.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section id="contact" className="section" style={{ textAlign: 'center', paddingBottom: '160px' }}>
          <h2>Let's Connect</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
            Whether you're looking for AI implementation guidance, a speaker for your next event, or customized training for your team, I'd love to chat.
          </p>
          <div className="flex gap-4 items-center" style={{ justifyContent: 'center' }}>
            <a href="mailto:monica.odysseos@cy.gt.com" className="btn">
              <Mail size={18} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/monica-odysseos-73120a43/" target="_blank" rel="noreferrer" className="btn btn-outline">
              <ExternalLink size={18} />
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 24px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Monica Odysseos. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
