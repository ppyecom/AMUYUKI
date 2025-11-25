import React from 'react';
import './sidebar.css';


const menuItems = [
  {
    category: 'Exploracion',
    items: [
      { name: 'Inicio', icon: '🏠' },
      { name: 'Lengua Viva', icon: '👨‍👩‍👧‍👦' },
      { name: 'Sonido Ancestral', icon: '🎧' },
      { name: 'Mis Rutas', icon: '📈' },
      { name: 'Minijuegos', icon: '🎮' },
      { name: 'Desafios Diarios', icon: '❓' },
      { name: 'Maestro IA', icon: '💻' },
      { name: 'Oficina del Sabio', icon: '📚' },
    ]
  },
  {
    category: 'Otros',
    items: [
      { name: 'Comunidad', icon: '🗣️' },
      { name: 'Configuracion', icon: '⚙️' },
    ]
  }
];

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="logo-placeholder">
          <img src="/images/logov.png" alt="AMUYUKI Logo" className="amuyuki-logo" />
        </div>
        <div className="close-button-placeholder">
          <span className="close-icon"> &gt; </span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((section, index) => (
          <div key={index} className="menu-section">
            <h3 className="section-title">{section.category}</h3>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="nav-item">
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-name">{item.name}</span>
                </li>
              ))}
            </ul>
            {index < menuItems.length - 1 && <hr className="section-divider" />}
          </div>
        ))}
      </nav>

      <div className="profile-config">
        <span className="profile-icon">⚙️</span>
        <span>Configurar Perfil</span>
      </div>
      
      <div className="sidebar-background-graphic"></div>
    </div>
  );
};

export default SideBar;