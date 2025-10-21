import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
            <img src="/images/logot.png" alt="Logo" className="logo-image" width={"150px"}/>
        </div>
        <div className="options">
            <nav className="nav">
                <a href="#inicio" className="nav-link">Inicio</a>
                <a href="#lenguas" className="nav-link">Lenguas</a>
                <a href="#comunidad" className="nav-link">Comunidad</a>
                <a href="#explorar" className="nav-link">Explorar</a>
                <a href="#quienes-somos" className="nav-link">Quienes somos</a>
            </nav>
            <button className="btn-login">Iniciar Sesión</button>
        </div>
        
      </div>
    </header>
  )
}

export default Header