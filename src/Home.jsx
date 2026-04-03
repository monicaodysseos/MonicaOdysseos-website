import React, { useState } from 'react';
import { Mail, ExternalLink, PlayCircle, Activity, Database, Users, Code, Award, Target, BookOpen, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from './assets/profile.jpg';

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`header ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="header-content relative-z">
          <div style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>MO.</div>
          
          {/* Desktop Nav */}
          <nav className="nav-links desktop-nav">
            <a href="#home" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#media" className="nav-link">Media</a>
            <Link to="/articles" className="nav-link">AI: What is it really?</Link>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#home" className="mobile-nav-link" onClick={closeMenu}>About</a>
          <a href="#experience" className="mobile-nav-link" onClick={closeMenu}>Experience</a>
          <a href="#media" className="mobile-nav-link" onClick={closeMenu}>Media</a>
          <Link to="/articles" className="mobile-nav-link" onClick={closeMenu}>AI: What is it really?</Link>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
        </nav>
      </div>

      <main className="container">
        {/* HERO SECTION */}
        <section id="home" className="section" style={{ paddingTop: '180px', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="avatar-container">
            <img src={profileImg} alt="Monica Odysseos" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Monica+Odysseos&background=141415&color=fff&size=200'; }} />
          </div>
          <h1 style={{ marginBottom: '16px' }}>Monica Odysseos.</h1>
          <h2 style={{ color: 'var(--text-secondary)' }}>AI Leader | Educator | Speaker</h2>
          <p style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '32px' }}>
            Monica Odysseos is an AI and Data leader, educator, and speaker working at the intersection of technology, human potential, and organisational change. With a foundation spanning mathematics, computer science, and chartered accountancy, she brings rare cross-disciplinary depth to the challenge of making AI work in the real world, not just technically, but ethically and humanly. Based in Cyprus and active internationally, Monica builds AI-driven solutions for organisations, trains professionals to think critically about intelligent systems, and advocates for a future where technology amplifies human skills rather than replaces them.
          </p>
        </section>

        {/* ABOUT & EXPERTISE */}
        <section id="about" className="section">
          <h2>Core Expertise</h2>
          <div className="grid-2">
            <div className="card">
              <div className="mb-2"><BookOpen size={24} color="var(--accent)" /></div>
              <h3>AI Training</h3>
              <p>Designing and delivering programmes that actually build AI fluency, not just awareness. Workshops for executives, hands-on sessions for teams, certified courses for entire organisations. People walk away thinking differently about what's possible.</p>
            </div>
            <div className="card">
              <div className="mb-2"><Code size={24} color="var(--accent)" /></div>
              <h3>AI Development</h3>
              <p>Building AI systems that solve real problems, from custom applications and intelligent automation to decision support tools that change how organisations work. Ideas that become production.</p>
            </div>
            <div className="card">
              <div className="mb-2"><Target size={24} color="var(--accent)" /></div>
              <h3>AI Strategy</h3>
              <p>Helping organisations think through the big questions before they build. Where does AI fit? What's the roadmap? How do you stay ahead? Advisory work that shapes what comes next.</p>
            </div>
            <div className="card">
              <div className="mb-2"><Users size={24} color="var(--accent)" /></div>
              <h3>Public Speaking</h3>
              <p>Talks and panels on AI's real impact. The opportunities, the risks, the skills that matter. Speaking at conferences and events locally and internationally. Making the complex feel clear.</p>
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
              <p>Developed and leads Grant Thornton Cyprus's AI and Data Lab, building intelligent solutions, driving AI adoption across client organisations, and establishing the firm's capabilities in an entirely new practice area. Bridges the gap between technical possibility and real-world business value.</p>
              
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ paddingLeft: '16px', borderLeft: '2px solid var(--border)' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>EU AI Trainer &middot; EULEP <span style={{ color: 'var(--text-secondary)', fontWeight: 'normal' }}>(2024)</span></h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Contributed to building AI training capacity across Europe, with a focus on ethical adoption, regulatory literacy, and preparing professionals to engage critically with intelligent systems. Brought a practitioner's perspective to pan-European curriculum development.</p>
                </div>
                <div style={{ paddingLeft: '16px', borderLeft: '2px solid var(--border)' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Official AI Trainer &middot; Cyprus Chamber of Commerce and Industry (CCCI) <span style={{ color: 'var(--text-secondary)', fontWeight: 'normal' }}>(2024 &ndash; Present)</span></h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Serves as the official AI trainer for CCCI, delivering structured AI literacy and applied AI programmes to business professionals across Cyprus, helping organisations across sectors understand and act on the opportunities and risks that AI presents.</p>
                </div>
                <div style={{ paddingLeft: '16px', borderLeft: '2px solid var(--border)' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Founder & President &middot; Grant Thornton Cyprus Vocational Training Centre (KEK) <span style={{ color: 'var(--text-secondary)', fontWeight: 'normal' }}>(2025 &ndash; Present)</span></h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Established and heads Grant Thornton Cyprus' HRDA-accredited Vocational Training Centre. Oversees the design and delivery of subsidised training programmes for Cypriot organisations.</p>
                </div>
              </div>

              <div className="mt-4">
                <span className="tag">AI Strategy</span>
                <span className="tag">Solution Development</span>
                <span className="tag">Organisational Change</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">Jul 2024 &ndash; Present</p>
              <h3>Ethics Standards Committee Member</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>ICAEW, London</p>
              <p>Shapes professional standards at the intersection of AI and ethics within one of the world's leading chartered accountancy bodies. Advises on how the profession should respond to the ethical challenges posed by intelligent systems.</p>
              <div className="mt-4">
                <span className="tag">Professional Standards</span>
                <span className="tag">AI Governance</span>
                <span className="tag">Ethics</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">2021 &ndash; Present</p>
              <h3>Data Analytics Community Member</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>ICAEW, London</p>
              <p>Contributes to ICAEW's Data Analytics Community, helping shape the conversation around how data and AI are transforming the finance and accounting profession. Engages with practitioners and policymakers at the intersection of technical capability and professional practice.</p>
              <div className="mt-4">
                <span className="tag">Data Analytics</span>
                <span className="tag">Professional Community</span>
                <span className="tag">Finance & AI</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">2022 &ndash; Present</p>
              <h3>Author &mdash; "AI: What Is It Really?" Series</h3>
              <p>A growing body of work exploring what artificial intelligence actually is (and what isn't). Written for curious readers who are tired of the hype and want to understand AI on their own terms: how it thinks, where it breaks, and what it genuinely means for the way we work and live.</p>
              <div className="mt-4" style={{ marginBottom: '16px' }}>
                <span className="tag">Writing</span>
                <span className="tag">AI Literacy</span>
                <span className="tag">Thought Leadership</span>
              </div>
              <Link to="/articles" className="btn btn-outline" style={{ display: 'inline-flex', width: 'fit-content', padding: '6px 16px', fontSize: '0.9rem' }}>
                Read Series <ArrowRight size={16} />
              </Link>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">Dec 2020 &ndash; Feb 2024</p>
              <h3>Data Scientist, Data and Artificial Intelligence Lab</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>PwC Cyprus</p>
              <p>Designed and delivered advanced AI models both on local and international level, including a deep learning model developed for the European Food Safety Authority (EFSA) to detect food safety risks and food fraud incidents across EU member states. Operated at the frontier of applied AI in a high-stakes, cross-border setting.</p>
              <div className="mt-4">
                <span className="tag">Machine Learning</span>
                <span className="tag">Regulatory AI</span>
                <span className="tag">EU Institutions</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="text-muted">2013 &ndash; 2020</p>
              <h3>Foundational Roles in Finance, Risk & Software Development</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>PwC, Computershare, IPL</p>
              <p>Built expertise across financial analysis, risk and quality management, and software development, including UK government-level IT solutions recognised with an IT Innovation of the Year award.</p>
              <div className="mt-4">
                <span className="tag">Finance</span>
                <span className="tag">Risk Management</span>
                <span className="tag">Software Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* MEDIA & SPEAKING */}
        <section id="media" className="section">
          <h2>Media & Speaking</h2>
          <p style={{ maxWidth: '700px', marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Monica speaks, writes, and creates because explaining AI well is just as important as building it. From international keynotes to short-form video, she brings the same commitment to clarity, honesty, and making complex ideas genuinely accessible.
          </p>
          
          <div className="grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
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
                    <PlayCircle size={16} /> Podcast
                  </div>
                  <h3 style={{ fontSize: '1.2rem' }}>The World of Digital Transformation: Artificial Intelligence Demystified</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>Prime Analysis &middot; Strategy International SI Ltd</p>
                  <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>A conversation on what AI actually means for modern organisations, cutting through the noise to focus on practical application, real risk, and the human decisions that still matter most.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 500, margin: 0 }}>
                      📺 Shorts on TikTok &mdash; <a href="https://www.tiktok.com/@monicaodysseos" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Follow here</a>
                    </p>
                    <a href="https://www.youtube.com/watch?v=J0TqP6R8DLo" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', width: 'fit-content', padding: '6px 16px', fontSize: '0.9rem' }}>
                      Watch on YouTube <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#000' }}>
                  <iframe 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    src="https://www.youtube.com/embed/J80Xc8Zn-18?start=1154" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div style={{ padding: '24px' }}>
                  <div className="flex items-center gap-4 mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <PlayCircle size={16} /> Podcast
                  </div>
                  <h3 style={{ fontSize: '1.2rem' }}>Fostering Inclusion: Being Me</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>PwC Cyprus &middot; Episode 4</p>
                  <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>An honest conversation about identity, career path, and what it takes to carve out your own direction in a profession that doesn't always make space for it. Monica shares her journey, from mathematics, software development to chartered accountancy and AI and what "being me" has meant at each stage.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <a href="https://www.youtube.com/watch?v=J80Xc8Zn-18&t=1154s" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', width: 'fit-content', padding: '6px 16px', fontSize: '0.9rem' }}>
                      Watch on YouTube <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div className="card" style={{ padding: '24px' }}>
                <div className="flex items-center gap-4 mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <Users size={16} /> Keynote Speaking
                </div>
                <h3 style={{ fontSize: '1.2rem' }}>AI & Analytics Live Presentation</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>ICAEW Event &middot; October 2024</p>
                <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>A keynote on AI's real impact on business analytics. What it changes, what it doesn't, and what finance professionals need to understand right now. Received the highest speaker rating at the event.</p>
                <a href="https://www.icaew.com/groups-and-networks/communities/data-analytics-community/community-insights-and-announcements/ai-analytics-live-recap" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', width: 'fit-content', padding: '6px 16px', fontSize: '0.9rem' }}>
                  Read Recap <ExternalLink size={16} />
                </a>
              </div>

              <div className="card" style={{ padding: '24px', position: 'relative' }}>
                <div className="flex items-center gap-4 mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <BookOpen size={16} /> Article Series
                </div>
                <h3 style={{ fontSize: '1.2rem' }}>AI: What Is It Really?</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>Recognised as the most-read article in ICAEW's Annual Report 2022. A series for professionals who want to understand AI on their own terms &mdash; without the hype, without the fear, and without the jargon.</p>
                <Link to="/articles" className="btn btn-outline" style={{ display: 'inline-flex', width: 'fit-content', padding: '6px 16px', fontSize: '0.9rem' }}>
                  Read the series <ArrowRight size={16} />
                </Link>
              </div>

              <div className="card" style={{ padding: '24px', position: 'relative' }}>
                <div className="flex items-center gap-4 mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <PlayCircle size={16} /> Short-Form Video
                </div>
                <h3 style={{ fontSize: '1.2rem' }}>TikTok</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>Bite-sized clips from Monica's podcast and speaking appearances for when you want the insight without the hour-long commitment.</p>
                <a href="https://www.tiktok.com/@monicaodysseos" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', width: 'fit-content', padding: '6px 16px', fontSize: '0.9rem' }}>
                  Watch on TikTok <ExternalLink size={16} />
                </a>
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
            <a href="mailto:monicaodysseos@gmail.com" className="btn">
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

export default Home;
