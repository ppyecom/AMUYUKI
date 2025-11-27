import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const menuItems = [
  {
    category: 'Exploracion',
    items: [
      { name: 'Inicio', icon: '🏠', path: '/dashboard' },
      { name: 'Lengua Viva', icon: '👨‍👩‍👧‍👦', path: '/system/lengua' },
      { name: 'Sonido Ancestral', icon: '🎧', path: '/system/sonido' },
      { name: 'Mis Rutas', icon: '📈', path: '/system/rutas' },
      { name: 'Minijuegos', icon: '🎮', path: '/system/minijuegos' },
      { name: 'Desafios Diarios', icon: '❓', path: '/system/desafios' },
      { name: 'Maestro IA', icon: '💻', path: '/learnia' },
      { name: 'Oficina del Sabio', icon: '📚', path: '/system/oficina' },
    ]
  },
  {
    category: 'Otros',
    items: [
      { name: 'Comunidad', icon: '🗣️', path: '/system/comunidad' },
      { name: 'Configuracion', icon: '⚙️', path: '/system/configuracion' },
    ]
  }
];

const SideBar = () => {
  return (
    <aside className="sidebar-container">
      <div>
        <div className="sidebar-header">
          <img src="/images/logov.png" alt="AMUYUKI Logo" className="amuyuki-logo" />
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((section, index) => (
            <div key={index} className="menu-section">
              <h3 className="section-title">{section.category}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? 'nav-item active' : 'nav-item'
                      }
                    >
                      <span className="item-icon">{item.icon}</span>
                      <span className="item-name">{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              {index < menuItems.length - 1 && <hr className="section-divider" />}
            </div>
          ))}
        </nav>
      </div>

      <div className="profile-config">
        <div className="profile-left">
          <span className="profile-icon">⚙️</span>
          <span className="profile-text">Configurar Perfil</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
