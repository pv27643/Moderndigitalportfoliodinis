import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import profileImg from '../imports/WhatsApp_Image_2026-06-02_at_15.57.19.jpeg';
import './styles/portfolio.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<'main' | 'special'>('main');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainProjects = [
    { id: 1, name: 'MyProject 1', url: 'http://193.137.7.33/~aluno28377/MyProject1/', description: 'Mecânicas de gameplay inovadoras' },
    { id: 2, name: 'MyProject 2', url: 'http://193.137.7.33/~aluno28377/MyProject2/', description: 'Física avançada e interatividade' },
    { id: 3, name: 'MyProject 3', url: 'http://193.137.7.33/~aluno28377/MyProject3/', description: 'Sistemas de inteligência artificial' },
    { id: 4, name: 'MyProject 4', url: 'http://193.137.7.33/~aluno28377/MyProject4/', description: 'Interface e experiência do usuário' },
    { id: 5, name: 'MyProject 5', url: 'http://193.137.7.33/~aluno28377/MyProject5/', description: 'Partículas e efeitos visuais' },
    { id: 6, name: 'MyProject 6', url: 'http://193.137.7.33/~aluno28377/MyProject6/', description: 'Animações e cinemática' },
    { id: 7, name: 'MyProject 8', url: 'http://193.137.7.33/~aluno28377/MyProject8/', description: 'Mecânicas multiplayer' },
    { id: 8, name: 'MyProject 9', url: 'http://193.137.7.33/~aluno28377/MyProject9/', description: 'Otimização e performance' },
    { id: 9, name: 'MyProject 10', url: 'http://193.137.7.33/~aluno28377/MyProject10/', description: 'Jogo interativo completo' }
  ];

  const specialProjects = [
    { id: 1, name: 'Banner', url: 'http://193.137.7.33/~aluno28377/Banner/', description: 'Design gráfico com animações dinâmicas' },
    { id: 2, name: 'Quiz', url: 'http://193.137.7.33/~aluno25405/Quiz/', description: 'Sistema de quiz interativo' }
  ];

  return (
    <div className="portfolio-container">
      {/* Header/Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="profile-image-wrapper">
            <ImageWithFallback
              src={profileImg}
              alt="Dinis Alves"
              className="profile-image"
            />
            <div className="profile-image-border"></div>
          </div>
          <h1 className="hero-title">Estudante de TDM</h1>
          <p className="hero-name">Dinis Alves</p>
          <div className="title-underline"></div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="section-content">
          <h2 className="section-title">Sobre Mim</h2>
          <div className="about-card">
            <p className="about-text">
              Olá! O meu nome é <strong>Dinis Alves</strong>, tenho 20 anos e sou estudante da licenciatura em <strong>Tecnologias e Design de Multimédia (TDM)</strong>.
            </p>
            <p className="about-text">
              Sempre me entusiasmou a forma como a tecnologia e a criatividade se cruzam para transformar ideias em experiências.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-content">
          <h2 className="section-title">Meus Projetos</h2>

          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab-button ${activeTab === 'main' ? 'active' : ''}`}
                onClick={() => setActiveTab('main')}
              >
                <span>Projetos Principais</span>
                <div className="tab-indicator"></div>
              </button>
              <button
                className={`tab-button ${activeTab === 'special' ? 'active' : ''}`}
                onClick={() => setActiveTab('special')}
              >
                <span>Projetos Especiais</span>
                <div className="tab-indicator"></div>
              </button>
            </div>

            <div className="tab-content-wrapper">
              {activeTab === 'main' && (
                <div className="tab-content active">
                  <div className="projects-grid">
                    {mainProjects.map((project, index) => (
                      <div
                        key={project.id}
                        className="project-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="project-glow"></div>
                        <div className="project-number">{String(project.id).padStart(2, '0')}</div>

                        <div className="project-preview-wrapper">
                          <iframe
                            src={project.url}
                            title={project.name}
                            className="project-preview-iframe"
                          />
                        </div>

                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>

                        <div className="project-footer">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-button"
                          >
                            <span>Abrir Completo</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'special' && (
                <div className="tab-content active">
                  <div className="projects-grid special-grid">
                    {specialProjects.map((project, index) => (
                      <div
                        key={project.id}
                        className="project-card special-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="project-glow special-glow"></div>
                        <div className="project-number special-number">{String(project.id).padStart(2, '0')}</div>
                        <div className="special-badge">DESTAQUE</div>

                        <div className="project-preview-wrapper special-preview-wrapper">
                          <iframe
                            src={project.url}
                            title={project.name}
                            className="project-preview-iframe"
                          />
                        </div>

                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>

                        <div className="project-footer">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-button special-link-button"
                          >
                            <span>Abrir Completo</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="social-section">
        <div className="section-content">
          <h2 className="section-title">Redes Sociais</h2>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Dinis Alves. Todos os direitos reservados.</p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      )}
    </div>
  );
}
