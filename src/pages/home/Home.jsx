import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              El <span className="highlight">Futuro</span> de nuestra cultura, en tus <span className="highlight">Manos</span>
            </h1>
            <p className="hero-description">
              Una plataforma digital dedicada a preservar, difundir y fortalecer las lenguas, tradiciones y conocimientos ancestrales de nuestros pueblos originarios...
            </p>
            
            <div className="hero-actions">
              <div className="email-input">
                <svg className="email-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4L10 11L17 4M3 4H17V16H3V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input type="email" placeholder="Introduzca tu correo" />
              </div>
              <button className="btn-continuar">Continuar</button>
            </div>
          </div>

          <div className="hero-image">
            <img src="/images/home/indimages.png" alt="Niños de comunidades indígenas" />
          </div>
        </div>

        <div className="group333"></div>

      </section>

    </div>
  )
}

export default Home