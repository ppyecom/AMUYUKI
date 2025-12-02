import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
            <img src="/images/logot.png" alt="Logo" className="logo-image" width={"150px"}/>
        </div>
        <div className="options">
            <nav className="nav">
                <a className="nav-link"><Link to="/">Inicio</Link></a>
                <a href="#lenguas" className="nav-link"><Link to="lenguas">Lenguas</Link></a>
                <a href="#comunidad" className="nav-link">Comunidad</a>
                <a href="#explorar" className="nav-link">Explorar</a>
                <a href="#quienes-somos" className="nav-link">Quienes somos</a>
            </nav>
            <Link to="login"><button className="btn-login">Iniciar Sesión</button></Link>
        </div>
        
      </div>
    </header>
  )
}

export default Header