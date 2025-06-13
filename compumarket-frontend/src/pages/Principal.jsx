import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './todo.css';
import { FaTiktok, FaInstagram, FaFacebook, FaShoppingCart, FaPhoneAlt   } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot, FaPlus  } from "react-icons/fa6";
import axios from 'axios';

const Principal = () => {
  const [productos, setProductos] = useState([]);
  
    const toggleMenu = () => {
      document.getElementById("navLinks").classList.toggle("active");
    };
  
    useEffect(() => {
      fetch('http://localhost:3001/api/productos')
        .then((res) => res.json())
        .then((data) => setProductos(data))
        .catch((err) => console.error(err));
    }, []);
    
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
        <div className="promocion">
          <img src="https://img.freepik.com/psd-gratis/plantilla-diseno-banners-ventas-viernes-negro-redes-sociales_47987-24564.jpg?semt=ais_hybrid&w=740" alt="Promoción" />
        </div>

        <div className="productos_populares">
            <h1>Productos Populares</h1>
          <div className="contenedor_productos_populares">
            {productos.map((producto) => (
              <div className="carta" key={producto.id}>
                <div className="carta_imagen">
                  <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <p className="name_producto">{producto.nombre}</p>
                <p className="precio_producto">S/{producto.precio}</p>
                <div className="agregar">
                  <i className="fas fa-plus"> <FaPlus /> Agregar</i>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default Principal;
