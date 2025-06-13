import React from "react";
import "./todo.css"; // Asegúrate de que la ruta sea correcta
import { FaTiktok, FaInstagram, FaFacebook, FaShoppingCart, FaPhoneAlt   } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";





const Nosotros = () => {
  const toggleMenu = () => {
    document.getElementById("navLinks").classList.toggle("active");
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <a href="/">
            <p className="CompuMarket">CompuMarket+</p>
          </a>
        </div>
        <nav className="nav-links" id="navLinks">
          <a href="/productos">Productos</a>
          <a href="/nosotros">Sobre Nosotros</a>
          <a href="/pagos">
            <FaShoppingCart />
          </a>
          <a href="/login">
            <MdLogout />
          </a>
        </nav>
        <div className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </header>

      <main>
        <section className="sobre-nosotros">
          <div className="container_sobre">
            <h1>Sobre Nosotros</h1>

            <p className="intro">
              En CompuMarket entendemos que el mundo del hardware para
              computadoras evoluciona constantemente, impulsado por gamers,
              profesionales del diseño, editores de contenido y usuarios que
              buscan rendimiento sin compromisos. Sin embargo, también sabemos
              que encontrar componentes confiables, compatibles y a buen precio
              puede convertirse en un verdadero desafío.
            </p>

            <p>
              Por eso, nuestro propósito es claro: ofrecer una experiencia de
              compra digital moderna, segura y especializada. Sabemos que muchos
              usuarios pierden tiempo valioso buscando entre múltiples tiendas,
              comparando precios y sin recibir la asesoría adecuada. En
              CompuMarket cambiamos eso.
            </p>

            <p>
              Nuestra tienda nació con la visión de brindar no solo productos
              originales y de alta calidad, sino también orientación experta en
              cada paso del proceso. Con nuestra plataforma web, queremos
              facilitar la búsqueda, visualización y adquisición de componentes,
              permitiéndote conocer las características técnicas,
              compatibilidades y recomendaciones desde cualquier dispositivo.
            </p>

            <p>
              Con esta transformación digital, no solo modernizamos nuestro
              negocio, sino que también fortalecemos nuestra presencia en un
              mercado cada vez más exigente. CompuMarket busca posicionarse como
              un referente en la venta online de hardware, ofreciendo una
              plataforma clara, confiable y fácil de usar.
            </p>

            <p className="final">
              Bienvenido a la evolución digital de CompuMarket: donde la
              tecnología y la confianza se encuentran.
            </p>
          </div>
        </section>
        <br />
        <br />
      </main>

      <footer className="footer">
        <div className="footer_container">
          <div className="footer_section">
            <h2 className="footer_logo">CompuMarket+</h2>
            <p>
              Tu tienda de tecnología de confianza. Ofrecemos productos de
              calidad al mejor precio.
            </p>
          </div>

          <div className="footer_section">
            <h3>Enlaces</h3>
            <ul>
              <li>
                <a href="/principal">Inicio</a>
              </li>
              <li>
                <a href="/productos">Productos</a>
              </li>
              <li>
                <a href="/nosotros">Sobre Nosotros</a>
              </li>
            </ul>
          </div>

          <div className="footer_section">
            <h3>Contacto</h3>
            <p>
              <FaPhoneAlt /> +51 987 654 321
            </p>
            <p>
              < MdMailOutline /> soporte@CompuMarket.pe
            </p>
            <p>
              <FaLocationDot /> Lima, Perú
            </p>
          </div>

          <div className="footer_section">
            <h3>Síguenos</h3>
            <div className="social_icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTiktok />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <p>© 2024 CompuMarket. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Nosotros;
