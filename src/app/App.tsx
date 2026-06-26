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
        {/* Animated Bubbles */}
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

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
                      <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="project-glow"></div>
                        <div className="project-number">{String(project.id).padStart(2, '0')}</div>

                        <div className="project-info">
                          <h3 className="project-name">{project.name}</h3>
                          <p className="project-description">{project.description}</p>
                        </div>

                        <div className="project-arrow">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'special' && (
                <div className="tab-content active">
                  <div className="projects-grid special-grid">
                    {specialProjects.map((project, index) => (
                      <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card special-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="project-glow special-glow"></div>
                        <div className="project-number special-number">{String(project.id).padStart(2, '0')}</div>
                        <div className="special-badge">DESTAQUE</div>

                        <div className="project-info">
                          <h3 className="project-name">{project.name}</h3>
                          <p className="project-description">{project.description}</p>
                        </div>

                        <div className="project-arrow special-arrow">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                        </div>
                      </a>
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
            <a href="https://www.instagram.com/dinis_alves_/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094412580490" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
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
