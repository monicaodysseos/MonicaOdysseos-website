import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { articlesData } from './data/articles';
import { ArrowLeft, Menu, X } from 'lucide-react';

function ArticleView() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = articlesData.find(a => a.slug === slug);
    if (!found) {
      navigate('/articles');
    } else {
      setArticle(found);
    }
    
    // Scroll progress bar listener
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll * 100);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, navigate]);

  if (!article) return null;

  let cleanContent = article.content;
  const navEndingIndex = cleanContent.indexOf('/insights/ai-and-data-lab/');
  if (navEndingIndex !== -1) {
     const nextDoubleNewline = cleanContent.indexOf('\n\n', navEndingIndex);
     if (nextDoubleNewline !== -1) {
        cleanContent = cleanContent.substring(nextDoubleNewline + 2).trim();
     }
  }

  cleanContent = cleanContent.replace(/\]\(\/(?!cdn-cgi)/g, '](https://www.grantthornton.com.cy/');
  cleanContent = cleanContent.replace(/\]\(\/cdn-cgi/g, '](https://www.grantthornton.com.cy/cdn-cgi');

  return (
    <>
      <header className={`header ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="header-content relative-z">
          <Link to="/" style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>MO.</Link>
          
          {/* Desktop Nav */}
          <nav className="nav-links desktop-nav">
             <Link to="/articles" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Back to Series
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

      {/* Reading Progress Bar */}
      <div className="progress-container">
         <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <main className="container" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh', maxWidth: '850px', margin: '0 auto' }}>
          
          <div className="art-hero animate-fade-up">
            <h1 className="art-title">{article.title}</h1>
            <div className="art-excerpt">{article.excerpt}</div>
            
            <div className="art-byline">
               <img src="https://media.licdn.com/dms/image/v2/D4D03AQE6k_vY8I610g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714574971488?e=1738195200&v=beta&t=H3Hl3wXw27Z0D_s_E_I24o28IqWw0T0aG_HwZ_Z199c" alt="Monica Odysseos" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Monica+Odysseos&background=fff&color=1a1a1a&size=200'; }} />
               <div className="art-byline-text">
                  <div className="art-author">Monica Odysseos</div>
                  <div className="art-meta">AI & Data Lab Leader · 5 min read</div>
               </div>
            </div>
          </div>

          <div className="article-content animate-fade-up" style={{ animationDelay: '0.2s' }}>
             <ReactMarkdown 
                components={{
                  h2: ({node, ...props}) => <h2 style={{ marginTop: '64px', marginBottom: '24px', fontSize: '2rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }} {...props} />,
                  h3: ({node, ...props}) => <h3 style={{ marginTop: '48px', marginBottom: '16px', fontSize: '1.5rem', color: 'var(--text-primary)' }} {...props} />,
                  h4: ({node, ...props}) => <h4 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.25rem' }} {...props} />,
                  p: ({node, ...props}) => <p style={{ marginBottom: '24px', color: '#2b2a29' }} {...props} />,
                  ul: ({node, ...props}) => <ul style={{ marginBottom: '32px', paddingLeft: '24px', listStyleType: 'disc' }} {...props} />,
                  li: ({node, ...props}) => <li style={{ marginBottom: '12px' }} {...props} />,
                  a: ({node, ...props}) => {
                    let href = props.href || "";
                    // Catch links pointing to the article series
                    if (href.includes('/insights/ai-and-data-lab/')) {
                      const parts = href.split('/');
                      let slugPart = parts[parts.length - 1] === "" ? parts[parts.length - 2] : parts[parts.length - 1];
                      if (slugPart) {
                        slugPart = slugPart.toLowerCase();
                        const found = articlesData.find(a => a.slug.toLowerCase() === slugPart);
                        if (found) {
                          // Route internally!
                          return <Link to={`/articles/${found.slug}`} style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: 500 }}>{props.children}</Link>;
                        }
                      }
                    }
                    return <a style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: 500 }} target="_blank" rel="noreferrer" {...props} />;
                  }
                }}
             >
                {cleanContent}
             </ReactMarkdown>
          </div>
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 24px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', backgroundColor: '#faf9f6' }}>
        <p>&copy; {new Date().getFullYear()} Monica Odysseos. All rights reserved.</p>
      </footer>
    </>
  );
}

export default ArticleView;
