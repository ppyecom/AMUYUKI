import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/images/logot.png" alt="Logo" className="logo-image" width={"150px"}/>
          </Link>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`options ${isMenuOpen ? 'mobile-open' : ''}`}>
          <nav className="nav">
            <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
            <Link to="/lenguas" className="nav-link" onClick={closeMenu}>Lenguas</Link>
            <Link to="/comunidad" className="nav-link" onClick={closeMenu}>Comunidad</Link>
            <Link to="/explorar" className="nav-link" onClick={closeMenu}>Explorar</Link>
            <Link to="/somos" className="nav-link" onClick={closeMenu}>Quienes Somos</Link>
          </nav>
          <Link to="/login" onClick={closeMenu}>
            <button className="btn-login">Iniciar Sesión</button>
          </Link>
        </div>

        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  )
}

export default Header