import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Brain, Cpu, Network, Sparkles, Fingerprint, BookOpen, Scale, Menu, X } from 'lucide-react';

const articles = [
  {
    title: "AI: What is it really?",
    description: "An exploration into the foundations of Artificial Intelligence and its rapidly evolving real-world implications.",
    slug: "ai-what-is-it-really",
    icon: <Brain size={24} color="var(--accent)" />
  },
  {
    title: "ML: What is it really?",
    description: "Demystifying Machine Learning, exploring how modern algorithms find patterns in data without explicit programming.",
    slug: "ml-what-is-it-really",
    icon: <Cpu size={24} color="var(--accent)" />
  },
  {
    title: "DL: What is it really?",
    description: "A deep dive into Deep Learning and the complex neural networks powering next-generation computational solutions.",
    slug: "dl-what-is-it-really",
    icon: <Network size={24} color="var(--accent)" />
  },
  {
    title: "GenAI: What is it really?",
    description: "Unpacking Generative AI, from creating unprecedented new content to its profound impact on business creativity.",
    slug: "genai-what-is-it-really",
    icon: <Sparkles size={24} color="var(--accent)" />
  },
  {
    title: "Superintelligence: What is it really?",
    description: "Looking towards the horizon at Artificial Superintelligence, understanding the crucial leap beyond generic cognitive capabilities.",
    slug: "superintelligence-what-is-it-really",
    icon: <Fingerprint size={24} color="var(--accent)" />
  },
  {
    title: "AI Ethics: What are they really?",
    description: "By becoming overly reliant on AI tools, we risk losing our ability to generate original ideas. Explore the ethical implications, biases, and regulations surrounding AI.",
    slug: "ai-ethics-what-are-they-really",
    icon: <Scale size={24} color="var(--accent)" />
  },
  {
    title: "AI Literacy: Key to Thriving in an AI-Driven World",
    description: "Why understanding AI is no longer optional for professionals, and how to stay highly relevant in an automated landscape.",
    slug: "ai-literacy-key-thriving-in-an-ai-driven-world",
    icon: <BookOpen size={24} color="var(--accent)" />
  }
];

function Articles() {
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
          <Link to="/" style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>MO.</Link>
          
          {/* Desktop Nav */}
          <nav className="nav-links desktop-nav">
            <Link to="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
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
          <a href="/#home" className="mobile-nav-link" onClick={closeMenu}>About</a>
          <a href="/#experience" className="mobile-nav-link" onClick={closeMenu}>Experience</a>
          <a href="/#media" className="mobile-nav-link" onClick={closeMenu}>Media</a>
          <Link to="/articles" className="mobile-nav-link" onClick={closeMenu}>AI: What is it really?</Link>
          <a href="/#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
        </nav>
      </div>

      <main className="container" style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '16px', fontSize: '2.5rem' }}>AI: What is it really?</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.1rem', marginBottom: '64px' }}>
          A growing body of work exploring what artificial intelligence actually is (and what isn't). Written for curious readers who are tired of the hype and want to understand AI on their own terms: how it thinks, where it breaks, and what it genuinely means for the way we work and live.
        </p>

        <div className="grid-2">
          {articles.map((item, index) => (
             <Link to={`/articles/${item.slug}`} className="card" key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="mb-2">{item.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flex: 1 }}>{item.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>
                  Read Article <ExternalLink size={16} />
                </div>
             </Link>
          ))}
        </div>
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 24px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Monica Odysseos. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Articles;
