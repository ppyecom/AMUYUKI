import React from 'react'
import './home.css'
import CreateHome from './create/CreateHome'
import Explorer from './explorer/Explorer'
import About from './about/About'
import Footer from '../../common/footer/Footer'

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

        <img className='figure-home-little fig1' src="/images/home/fig1.png" alt="" />
        <img className='figure-home-little fig2' src="/images/home/fig2.png" alt="" />
        <img className='figure-home-little fig3' src="/images/home/fig3.png" alt="" />
        <img className='figure-home-little fig4' src="/images/home/fig4.png" alt="" />
        <img className='figure-home fig5' src="/images/home/fig5.png" alt="" />
        <img className='figure-home-little fig6' src="/images/home/fig6.png" alt="" />

        
      </section>
      <div className="carousel"></div>
      <CreateHome />
      <Explorer />
      <About />
      <Footer />
    </div>
  )
}

export default Home