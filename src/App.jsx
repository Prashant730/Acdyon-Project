import React, { useRef } from 'react';
import './index.css';

function App() {
  const mockupRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!mockupRef.current) return;
    
    const rect = mockupRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mockupRef.current.style.setProperty('--x', `${x}px`);
    mockupRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="app">
      <nav className="navbar container">
        <a href="/" className="logo">
          Zenith <div className="logo-dot"></div>
        </a>
        <a href="#early-access" className="btn btn-secondary">Get Early Access</a>
      </nav>

      <main>
        <section className="hero container">
          <div className="ambient-glow"></div>
          <div className="hero-pill">Introducing Zenith v1.0</div>
          <h1 className="hero-title">Write at the speed of thought.</h1>
          <p className="hero-subtitle">
            A minimalist, distraction-free markdown environment designed for focus. 
            No clutter, no friction—just you and your words.
          </p>
          <div className="hero-cta">
            <a href="#download" className="btn btn-primary">Download for Mac</a>
          </div>
        </section>

        <section className="container">
          <div className="mockup-wrapper">
            <div 
              className="mockup-container" 
              ref={mockupRef}
              onMouseMove={handleMouseMove}
            >
              <div className="mockup-header">
                <div className="mockup-dots">
                  <div className="mockup-dot"></div>
                  <div className="mockup-dot"></div>
                  <div className="mockup-dot"></div>
                </div>
              </div>
              <div className="mockup-body">
                <div className="mockup-sidebar">
                  <div className="mockup-sidebar-item active">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Drafts
                  </div>
                  <div className="mockup-sidebar-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    Projects
                  </div>
                  <div className="mockup-sidebar-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    Settings
                  </div>
                </div>
                <div className="mockup-editor">
                  <h2 className="editor-title">The Future of Writing</h2>
                  <div className="editor-content">
                    <p>Writing is a process of discovery. We believe that the best tools get out of your way and let the ideas flow naturally.</p>
                    <p>With Zenith, we removed every distraction. There are no formatting ribbons, no complex menus, and no cluttered sidebars. Just a blank canvas for your thoughts.</p>
                    <p>This is what clarity feels like<span className="cursor-blink"></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
