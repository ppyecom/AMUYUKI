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
    },
    {
      id: 'conecta',
      type: 'medium',
      icon: './images/home/create/conectaotros.png',
      title: 'Conecta con Otros',
      description: 'Intercambia saberes y experiencias',
    },
    {
      id: 'aprende',
      type: 'full',
      icon: './images/home/create/aprendejugando.png',
      title: 'Aprende Jugando',
      description: 'Mejora tu conocimiento con desafíos interactivos',
      buttonText: 'Jugar',
    },
    {
      id: 'guia',
      type: 'medium',
      icon: './images/home/create/guiaint.png',
      title: 'Guía Inteligente',
      description: 'Te acompaña y adapta a tu ritmo',
    },
    {
      id: 'habla',
      type: 'small',
      icon: './images/home/create/ia.png',
      title: 'Habla con tu creación IA',
    },
    {
      id: 'cultura',
      type: 'full',
      icon: './images/home/create/cultura.png',
      title: 'Descubre su Cultura',
      description: 'Explora tradiciones, idiomas y costumbres',
      buttonText: 'Descubrir',
    },
    {
      id: 'idioma',
      type: 'medium',
      icon: './images/home/create/idioma.png',
      title: 'Practica el Idioma',
      description: 'Escucha, repite y aprende de forma natural',
    },
    {
      id: 'historias',
      type: 'full',
      icon: './images/home/create/historiasvivas.png',
      title: 'Explora Historias Vivas',
      description: 'Escucha cuentos, mitos y leyendas de su cultura',
      buttonText: 'Explorar',
    }
  ];

  return (
    <div className="create-home">
      <div className="header-create">
        <h1>Crea tu Personaje</h1>
        <p>Diseña un personaje único que refleje tu historia, tu <br /> estilo y tu imaginación</p>
      </div>

      <div className="body-create">
        {features.map((feature) => (
          <div key={feature.id} className={`feature-card ${feature.type} ${feature.id}`}>
            <div className="icon"><img src={feature.icon} alt="" /></div>
            <div className="text">
              <h2 className="title">{feature.title}</h2>
              {feature.description && <p className="description">{feature.description}</p>}
            </div>
            {feature.buttonText && <button className="action-button">{feature.buttonText}</button>}
          </div>
        ))}
        <img src="./images/home/create/caricatura.png" className='caricatura' alt="" />
      </div>
    </div>
  );
};

export default CreateHome;