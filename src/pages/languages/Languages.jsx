import React, { useState } from 'react';
import './languages.css';

const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languagesData = {
    aymara: {
      name: 'Aymara',
      nativeName: 'Aymar aru',
      greeting: 'Kamisaraki',
      speakers: '2.8 millones',
      countries: ['Bolivia', 'Perú', 'Chile', 'Argentina'],
      description: 'El Aymara es una lengua ancestral hablada en el altiplano andino. Con más de 2.8 millones de hablantes, representa una cosmovisión única basada en la dualidad y el equilibrio con la naturaleza.',
      history: 'El idioma Aymara tiene una antigüedad de más de 5,000 años y fue la lengua del poderoso reino de Tiahuanaco. Su sistema de pensamiento triádico (pasado-presente-futuro en un solo concepto) lo hace lingüísticamente único.',
      features: [
        'Sistema de sufijos altamente complejo',
        'Concepción del tiempo no lineal',
        'Rico vocabulario sobre la naturaleza y agricultura',
        'Sistema de respeto y cortesía integrado'
      ],
      culture: [
        {
          title: 'Cosmovisión',
          text: 'La cosmovisión Aymara se basa en el principio de la dualidad complementaria (Chacha-warmi) y la reciprocidad (Ayni), donde todo en el universo existe en pares complementarios.'
        },
        {
          title: 'Pachamama',
          text: 'La Madre Tierra es el centro de la espiritualidad Aymara. Cada acción debe estar en armonía con ella, respetando los ciclos naturales y celebrando rituales de agradecimiento.'
        },
        {
          title: 'Textilería',
          text: 'Los textiles Aymara son patrimonio cultural vivo. Cada diseño cuenta historias ancestrales, representa elementos naturales y comunica la identidad de cada comunidad.'
        }
      ],
      traditions: [
        'Alasitas - Feria de las miniaturas',
        'Año Nuevo Aymara - Machaq Mara (21 de junio)',
        'Ritual de la Challa - ofrenda a la Pachamama',
        'Tinku - encuentro ritual de comunidades'
      ],
      phrases: [
        { aymara: 'Kamisaraki', spanish: 'Buenos días / Hola', pronunciation: 'ka-mi-sa-ra-ki' },
        { aymara: 'Waliki', spanish: 'Bien / Está bien', pronunciation: 'wa-li-ki' },
        { aymara: 'Yuspajarama', spanish: 'Gracias', pronunciation: 'yus-pa-ja-ra-ma' },
        { aymara: 'Janiwa', spanish: 'No', pronunciation: 'ja-ni-wa' },
        { aymara: 'Jisa', spanish: 'Sí', pronunciation: 'ji-sa' }
      ],
      importance: 'El Aymara no es solo un idioma, es un sistema completo de pensamiento que ofrece perspectivas únicas sobre el tiempo, el espacio y las relaciones humanas. Su preservación es crucial para mantener viva una forma de conocimiento ancestral que puede contribuir a resolver desafíos contemporáneos relacionados con la sostenibilidad y la convivencia armónica.',
      currentStatus: 'Aunque es reconocido como idioma oficial en Bolivia y Perú, el Aymara enfrenta desafíos de preservación ante la globalización. Proyectos educativos y digitales buscan revitalizarlo entre las nuevas generaciones.',
      image: './images/languages/aimara.png'
    },
    quechua: {
      name: 'Quechua',
      nativeName: 'Runasimi',
      greeting: 'Rimaykullayki',
      speakers: '10 millones',
      countries: ['Perú', 'Bolivia', 'Ecuador', 'Colombia', 'Argentina', 'Chile'],
      description: 'El Quechua, conocido como Runasimi (lengua de la gente), es la lengua indígena más hablada de América. Fue el idioma oficial del Imperio Inca y continúa siendo el vehículo de una rica tradición cultural.',
      history: 'El Quechua se expandió con el Imperio Inca (Tahuantinsuyo) en el siglo XV, aunque sus raíces son anteriores. Fue usado como lengua administrativa y de unificación en uno de los imperios más grandes de la historia precolombina.',
      features: [
        'Sistema aglutinante con múltiples sufijos',
        'Tres personas gramaticales con inclusivo/exclusivo',
        'Evidencialidad gramatical (indica fuente de información)',
        'Vocabulario especializado en agricultura de altura'
      ],
      culture: [
        {
          title: 'Inti Raymi',
          text: 'La Fiesta del Sol es la celebración más importante del calendario Inca, realizada cada solsticio de invierno para honrar al dios sol (Inti) y celebrar la cosecha.'
        },
        {
          title: 'Ayni y Minka',
          text: 'Sistemas de reciprocidad y trabajo comunitario que sostienen la estructura social. El Ayni es trabajo recíproco familiar, mientras la Minka es trabajo colectivo para el bien común.'
        },
        {
          title: 'Música Andina',
          text: 'La música Quechua utiliza instrumentos ancestrales como la quena, zampoña y charango. Cada melodía cuenta historias de amor, trabajo y conexión con las montañas sagradas (Apus).'
        }
      ],
      traditions: [
        'Inti Raymi - Fiesta del Sol (24 de junio)',
        'Qoyllur Rit\'i - Peregrinación a la montaña sagrada',
        'Pago a la Tierra - Ritual de ofrenda a la Pachamama',
        'Carnaval Andino - Celebración de la cosecha'
      ],
      phrases: [
        { aymara: 'Rimaykullayki', spanish: 'Hola', pronunciation: 'ri-may-ku-llai-ki' },
        { aymara: 'Allinllachu', spanish: '¿Cómo estás?', pronunciation: 'a-llin-lla-chu' },
        { aymara: 'Sulpayki', spanish: 'Gracias', pronunciation: 'sul-pai-ki' },
        { aymara: 'Ari', spanish: 'Sí', pronunciation: 'a-ri' },
        { aymara: 'Mana', spanish: 'No', pronunciation: 'ma-na' }
      ],
      importance: 'El Quechua es un tesoro lingüístico que preserva conocimientos ancestrales sobre agricultura sostenible, astronomía, medicina tradicional y organización social. Su estudio revela sistemas de pensamiento complejos que pueden enriquecer nuestra comprensión del mundo.',
      currentStatus: 'Es idioma oficial en Perú y Bolivia. Existen esfuerzos de estandarización y educación intercultural bilingüe, aunque la vitalidad varía según regiones. La digitalización y las redes sociales están creando nuevos espacios para su uso.',
      image: './images/languages/quechua.png'
    }
  };

  const openModal = (lang) => {
    setSelectedLanguage(lang);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedLanguage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className='languages'>
      <div className="content-languages">
        <div className="left-languages">
          <img src="./images/languages/illustration-languages.png" alt="Ilustración lenguas andinas" />
        </div>
        <div className="right-languages">
          <h2>Lenguas Andinas</h2>
          <p>Sumérgete en la riqueza de las lenguas andinas <br /> y conecta con sus culturas milenarias</p>
          <div className="cards-languages">
            <div className="card-language aimara" onClick={() => openModal('aymara')}>
              <img src="./images/languages/aimara.png" alt="Idioma Aymara" />
              <h3>Aymara</h3>
              <p>El Aymara, lengua ancestral de los Andes, es un puente hacia una cultura vibrante y resiliente. Sumérgete en su historia y tradiciones únicas.</p>
              <button className="btn-learn-more">Aprender más →</button>
            </div>
            <div className="card-language quechua" onClick={() => openModal('quechua')}>
              <img src="./images/languages/quechua.png" alt="Idioma Quechua" />
              <h3>Quechua</h3>
              <p>El Quechua, hablado por millones en los Andes, es una lengua rica en historia y cultura. Aprende y conecta con sus tradiciones milenarias.</p>
              <button className="btn-learn-more">Aprender más →</button>
            </div>
          </div>
        </div>
      </div>

      {selectedLanguage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-header-content">
                <img src={languagesData[selectedLanguage].image} alt={languagesData[selectedLanguage].name} className="modal-header-img" />
                <div className="modal-header-text">
                  <h2>{languagesData[selectedLanguage].name}</h2>
                  <p className="native-name">{languagesData[selectedLanguage].nativeName}</p>
                  <div className="language-stats">
                    <div className="stat">
                      <span className="stat-label">Hablantes</span>
                      <span className="stat-value">{languagesData[selectedLanguage].speakers}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Países</span>
                      <span className="stat-value">{languagesData[selectedLanguage].countries.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="greeting-box">
                <span className="greeting-label">Saludo tradicional:</span>
                <span className="greeting-text">{languagesData[selectedLanguage].greeting}</span>
              </div>

              <section className="modal-section">
                <h3>Descripción General</h3>
                <p>{languagesData[selectedLanguage].description}</p>
              </section>

              <section className="modal-section">
                <h3>Historia</h3>
                <p>{languagesData[selectedLanguage].history}</p>
              </section>

              <section className="modal-section">
                <h3>Países donde se habla</h3>
                <div className="countries-grid">
                  {languagesData[selectedLanguage].countries.map((country, index) => (
                    <div key={index} className="country-badge">{country}</div>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <h3>Características Lingüísticas</h3>
                <ul className="features-list">
                  {languagesData[selectedLanguage].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h3>Aspectos Culturales</h3>
                <div className="culture-grid">
                  {languagesData[selectedLanguage].culture.map((item, index) => (
                    <div key={index} className="culture-card">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <h3>Tradiciones y Celebraciones</h3>
                <div className="traditions-list">
                  {languagesData[selectedLanguage].traditions.map((tradition, index) => (
                    <div key={index} className="tradition-item">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" stroke="#b8734d" strokeWidth="2"/>
                        <path d="M7 10L9 12L13 8" stroke="#b8734d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{tradition}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="modal-section phrases-section">
                <h3>Frases Básicas</h3>
                <div className="phrases-grid">
                  {languagesData[selectedLanguage].phrases.map((phrase, index) => (
                    <div key={index} className="phrase-card">
                      <div className="phrase-native">{phrase.aymara}</div>
                      <div className="phrase-pronunciation">/{phrase.pronunciation}/</div>
                      <div className="phrase-spanish">{phrase.spanish}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="modal-section importance-section">
                <h3>Importancia de su Preservación</h3>
                <p>{languagesData[selectedLanguage].importance}</p>
              </section>

              <section className="modal-section">
                <h3>Estado Actual</h3>
                <p>{languagesData[selectedLanguage].currentStatus}</p>
              </section>

              <div className="modal-footer">
                <div className="footer-cta">
                  <h3>¿Listo para aprender {languagesData[selectedLanguage].name}?</h3>
                  <p>Comienza tu viaje de aprendizaje y conecta con una cultura milenaria</p>
                  <button className="btn-start-learning">Comenzar a Aprender</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Languages;