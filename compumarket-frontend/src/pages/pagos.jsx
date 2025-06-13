import React, { useState } from 'react';
import './todo.css';
import { FaTiktok, FaInstagram, FaFacebook, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdLogout, MdMailOutline } from "react-icons/md";
import { FaLocationDot, FaPlus } from "react-icons/fa6";

function Pagos() {
  const [menuActivo, setMenuActivo] = useState(false);
  const toggleMenu = () => setMenuActivo(!menuActivo);

  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [region, setRegion] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [metodoPago, setMetodoPago] = useState('Tarjeta de crédito');
  const [nombreTarjeta, setNombreTarjeta] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaExp, setFechaExp] = useState('');
  const [cvv, setCvv] = useState('');

  const realizarPago = () => {
    console.log('Datos de envío y pago enviados:', {
      direccion, ciudad, region, codigoPostal, metodoPago,
      nombreTarjeta, numeroTarjeta, fechaExp, cvv
    });
    alert("✅ Pago procesado (simulado)");
  };

  return (
    <div>
      <header className="navbar">
              <div className="logo">
                <a href="/principal"><p className="CompuMarket">CompuMarket+</p></a>
              </div>
              <nav className="nav-links" id="navLinks">
                <a href="/productos">Productos</a>
                <a href="/nosotros">Sobre Nosotros</a>
                <a href="/pagos"><FaShoppingCart /></a>
                <a href="/login"><MdLogout /></a>
              </nav>
              <div className="menu-toggle" id="menuToggle" onClick={toggleMenu}><IoMenu /></div>
            </header>

      <main className="pago-main">
  <div className="formulario-pago">
    <h2 className="subtitulo">Dirección de Envío</h2>
    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="direccion" className="visually-hidden">Dirección</label>
        <input type="text" id="direccion" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="ciudad" className="visually-hidden">Ciudad</label>
        <input type="text" id="ciudad" placeholder="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="region" className="visually-hidden">Región/Provincia</label>
        <input type="text" id="region" placeholder="Región/Provincia" value={region} onChange={(e) => setRegion(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="codigoPostal" className="visually-hidden">Código Postal</label>
        <input type="text" id="codigoPostal" placeholder="Código Postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} required />
      </div>
    </div>

    <h2 className="subtitulo">Método de Pago</h2>
    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="metodoPago" className="visually-hidden">Método de Pago</label>
        <select id="metodoPago" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)} required>
          <option value="">Seleccione un método</option>
          <option>Tarjeta de crédito</option>
          <option>Tarjeta de débito</option>
          <option>Yape/Plin</option>
          <option>Transferencia bancaria</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="nombreTarjeta" className="visually-hidden">Nombre en la tarjeta</label>
        <input type="text" id="nombreTarjeta" placeholder="Nombre en la tarjeta" value={nombreTarjeta} onChange={(e) => setNombreTarjeta(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="numeroTarjeta" className="visually-hidden">Número de tarjeta</label>
        <input type="text" id="numeroTarjeta" placeholder="Número de tarjeta" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="fechaExp" className="visually-hidden">Fecha Expiración</label>
        <input type="text" id="fechaExp" placeholder="MM/AA" value={fechaExp} onChange={(e) => setFechaExp(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="cvv" className="visually-hidden">CVV</label>
        <input type="text" id="cvv" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
      </div>
    </div>

    <button className="btn-pagar" onClick={realizarPago}>Realizar Pago</button>
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
    </div>
  );
}

export default Pagos;
