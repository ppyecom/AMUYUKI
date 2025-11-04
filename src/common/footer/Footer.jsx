import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ready">
        <img src="./images/footer/back.png" className="back-footer" />
        <div className="options">
          <h1>Listo para aprender ?</h1>
          <button>
            Empezar <img src="./images/footer/arrow-right.png" alt="" />{" "}
          </button>
        </div>
      </div>

      <div className="footer-general">
        <div className="top">
          <div className="logo">
            <img src="./images/logot.png" alt="" />
          </div>
          <div className="options-footer">
            <div className="selects">
              <h2>Recursos</h2>
              <nav>
                <ul>
                  <li>Videos</li>
                  <li>Fotos</li>
                  <li>Audios</li>
                  <li>Libros</li>
                </ul>
              </nav>
            </div>
            <div className="selects">
              <h2>Lenguas</h2>
              <nav>
                <ul>
                  <li>Aimara</li>
                  <li>Quechua</li>
                </ul>
              </nav>
            </div>
            <div className="selects">
              <h2>Soluciones</h2>
              <nav>
                <ul>
                  <li>Colegios</li>
                  <li>Universidades</li>
                  <li>Institutos</li>
                  <li>Estado</li>
                </ul>
              </nav>
            </div>
            <div className="selects">
              <h2>Contacto</h2>
              <nav>
                <ul>
                  <li>+51 999999999</li>
                  <li>soporte@ayumuki.com</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>AMUYUKI Todos los derechos reservados, 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
