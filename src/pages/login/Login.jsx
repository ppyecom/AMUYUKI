import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image-section">
          <div className="login-image-overlay">
            <h2 className="login-brand-title">
              Preservando <span className="login-highlight">Nuestras Raíces</span>
            </h2>
            <p className="login-brand-subtitle">
              Conectando generaciones a través de la cultura y tradiciones ancestrales
            </p>
          </div>
          <img 
            src="/images/home/indimages.png" 
            alt="Cultura indígena" 
            className="login-bg-image"
          />
        </div>

        <div className="login-form-section">
          <div className="login-form-container">
            <div className="login-header">
              <h1 className="login-title">
                {isLogin ? 'Bienvenido' : 'Crear Cuenta'}
              </h1>
              <p className="login-subtitle">
                {isLogin 
                  ? 'Ingresa tus credenciales para continuar' 
                  : 'Únete a nuestra comunidad cultural'}
              </p>
            </div>

            <div className="login-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor"/>
                      <path d="M10 12C5.58172 12 2 15.5817 2 20H18C18 15.5817 14.4183 12 10 12Z" fill="currentColor"/>
                    </svg>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 4L10 11L17 4M3 4H17V16H3V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10V7C5 4.23858 7.23858 2 10 2C12.7614 2 15 4.23858 15 7V10M4 10H16C17.1046 10 18 10.8954 18 12V17C18 18.1046 17.1046 19 16 19H4C2.89543 19 2 18.1046 2 17V12C2 10.8954 2.89543 10 4 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10V7C5 4.23858 7.23858 2 10 2C12.7614 2 15 4.23858 15 7V10M4 10H16C17.1046 10 18 10.8954 18 12V17C18 18.1046 17.1046 19 16 19H4C2.89543 19 2 18.1046 2 17V12C2 10.8954 2.89543 10 4 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Recordarme</span>
                  </label>
                  <button type="button" className="forgot-password">¿Olvidaste tu contraseña?</button>
                </div>
              )}

              <Link to="/learnia"><button /*onClick={handleSubmit}*/ className="btn-submit">
                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
              </button>
              </Link>

              <div className="divider">
                <span>o continúa con</span>
              </div>

              <div className="social-buttons">
                <button type="button" className="btn-social">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4"/>
                    <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853"/>
                    <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0 8.36008 0 9.96565C0 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05"/>
                    <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335"/>
                  </svg>
                  Google
                </button>
                <button type="button" className="btn-social">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#1877F2"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            <div className="login-footer">
              <p>
                {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
                {' '}
                <button 
                  type="button"
                  className="toggle-link"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Regístrate' : 'Inicia Sesión'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img className="login-decoration fig-login-1" src="/images/home/fig1.png" alt="" />
      <img className="login-decoration fig-login-2" src="/images/home/fig2.png" alt="" />
      <img className="login-decoration fig-login-3" src="/images/home/fig3.png" alt="" />
    </div>
  );
};

export default Login;