import React from 'react';
import './createhome.css';

const CreateHome = () => {
  const features = [
    { 
      id: 'historia', 
      type: 'full', 
      icon: './images/home/create/creatuhistoria.png', 
      title: 'Crea tu Historia', 
      description: 'Personaliza tu guía y compárte lo aprendido', 
      buttonText: 'Crear Historia',
      gradient: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
      pattern: 'aztec'
    },
    { 
      id: 'conecta', 
      type: 'medium', 
      icon: './images/home/create/conectaotros.png', 
      title: 'Conecta con Otros', 
      description: 'Intercambia saberes y experiencias',
      gradient: 'linear-gradient(135deg, #228B22 0%, #32CD32 100%)',
      pattern: 'woven'
    },
    { 
      id: 'aprende', 
      type: 'full', 
      icon: './images/home/create/aprendejugando.png', 
      title: 'Aprende Jugando', 
      description: 'Mejora tu conocimiento con desafíos interactivos', 
      buttonText: 'Jugar',
      gradient: 'linear-gradient(135deg, #1E90FF 0%, #87CEEB 100%)',
      pattern: 'geometric'
    },
    { 
      id: 'guia', 
      type: 'medium', 
      icon: './images/home/create/guiaint.png', 
      title: 'Guía Inteligente', 
      description: 'Te acompaña y adapta a tu ritmo',
      gradient: 'linear-gradient(135deg, #9932CC 0%, #DA70D6 100%)',
      pattern: 'dots'
    },
    { 
      id: 'habla', 
      type: 'small', 
      icon: './images/home/create/ia.png', 
      title: 'Habla con tu creación IA',
      gradient: 'linear-gradient(135deg, #FF4500 0%, #FFA500 100%)',
      pattern: 'lines'
    },
    { 
      id: 'cultura', 
      type: 'full', 
      icon: './images/home/create/cultura.png', 
      title: 'Descubre su Cultura', 
      description: 'Explora tradiciones, idiomas y costumbres', 
      buttonText: 'Descubrir',
      gradient: 'linear-gradient(135deg, #B22222 0%, #DC143C 100%)',
      pattern: 'aztec'
    },
    { 
      id: 'idioma', 
      type: 'medium', 
      icon: './images/home/create/idioma.png', 
      title: 'Practica el Idioma', 
      description: 'Escucha, repite y aprende de forma natural',
      gradient: 'linear-gradient(135deg, #2E8B57 0%, #3CB371 100%)',
      pattern: 'woven'
    },
    { 
      id: 'historias', 
      type: 'full', 
      icon: './images/home/create/historiasvivas.png', 
      title: 'Explora Historias Vivas', 
      description: 'Escucha cuentos, mitos y leyendas de su cultura', 
      buttonText: 'Explorar',
      gradient: 'linear-gradient(135deg, #4B0082 0%, #9370DB 100%)',
      pattern: 'geometric'
    }
  ];

  return (
    <div className="create-home">
      <div className="header-section">
        <div className="header-content">
          <h1 className="main-title">
            <span className="title-text">Preserva la Sabiduría</span>
            <span className="title-accent">Indígena</span>
          </h1>
          <p className="subtitle">Diseña un personaje único que refleje tu historia, tu estilo y tu imaginación</p>
          <div className="decorative-elements">
            <div className="deco-circle deco-1"></div>
            <div className="deco-circle deco-2"></div>
            <div className="deco-line"></div>
          </div>
        </div>
      </div>
      
      <div className="body-create">
        <div className="features-grid">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`feature-card ${feature.type}`}
              data-card={feature.id}
              style={{background: feature.gradient}}
            >
              <div className={`pattern-overlay pattern-${feature.pattern}`}></div>
              <div className="card-content">
                <div className="icon-container">
                  <div className="icon-frame">
                    <img src={feature.icon} alt={feature.title} className="feature-icon" />
                  </div>
                </div>
                <div className="text-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  {feature.description && <p className="feature-description">{feature.description}</p>}
                </div>
                {feature.buttonText && (
                  <button className="action-button">
                    <span className="button-text">{feature.buttonText}</span>
                    <span className="button-arrow">→</span>
                  </button>
                )}
              </div>
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>
        
        <div className="character-section">
          <div className="character-container">
            <div className="character-frame">
              <img 
                src="./images/home/create/caricatura.png" 
                className="character" 
                alt="Personaje principal" 
              />
            </div>
            <div className="character-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHome;