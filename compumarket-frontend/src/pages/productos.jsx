import React, { useEffect, useState } from 'react';
import './todo.css';
import { FaTiktok, FaInstagram, FaFacebook, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdLogout, MdMailOutline } from "react-icons/md";
import { FaLocationDot, FaPlus } from "react-icons/fa6";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/productos')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setProductosFiltrados(data); // Mostrar todos por defecto
      })
      .catch(err => console.error(err));
  }, []);

  const filtrarProductos = () => {
    const filtrados = productos.filter((producto) => {
      const coincideMarca = filtroMarca ? producto.nombre.toLowerCase().includes(filtroMarca.toLowerCase()) : true;
      const coincideCategoria = filtroCategoria ? producto.nombre.toLowerCase().includes(filtroCategoria.toLowerCase()) : true;
      const precio = parseFloat(producto.precio);
      const coincideMin = precioMin ? precio >= parseFloat(precioMin) : true;
      const coincideMax = precioMax ? precio <= parseFloat(precioMax) : true;

      return coincideMarca && coincideCategoria && coincideMin && coincideMax;
    });

    setProductosFiltrados(filtrados);
  };

  const toggleMenu = () => {
    document.getElementById("navLinks").classList.toggle("active");
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <a href="/"><p className="CompuMarket">CompuMarket+</p></a>
        </div>
        <nav className="nav-links" id="navLinks">
          <a href="/productos">Productos</a>
          <a href="/nosotros">Sobre Nosotros</a>
          <a href="/pagos"><FaShoppingCart /></a>
          <a href="/login"><MdLogout /></a>
        </nav>
        <div className="menu-toggle" id="menuToggle" onClick={toggleMenu}><IoMenu /></div>
      </header>

      <main>
        <section className="productos">
            <div className="filtros">
                <div className="filtro">
                <label htmlFor="marca">Marca:</label>
                <select id="marca" value={filtroMarca} onChange={(e) => setFiltroMarca(e.target.value)}>
                    <option value="">Todas</option>
                    <option value="amd">AMD</option>
                    <option value="nvidia">NVIDIA</option>
                    <option value="asus">ASUS</option>
                    <option value="msi">MSI</option>
                    <option value="gigabyte">Gigabyte</option>
                    <option value="corsair">Corsair</option>
                    <option value="kingston">Kingston</option>
                    <option value="seagate">Seagate</option>
                    <option value="western digital">Western Digital</option>
                </select>
                </div>
                <div className="filtro">
                <label htmlFor="categoria">Categoría:</label>
                <select id="categoria" value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
                    <option value="">Todas</option>
                    <option value="procesador">Procesadores</option>
                    <option value="tarjeta grafica">Tarjetas Gráficas</option>
                    <option value="placa madre">Placas Madre</option>
                    <option value="memoria ram">Memoria RAM</option>
                    <option value="almacenamiento">Almacenamiento</option>
                    <option value="fuente de poder">Fuentes de Poder</option>
                    <option value="refrigeracion">Refrigeración</option>
                </select>
                </div>
                <div className="filtro rango-precio">
                <label htmlFor="precio-min">Precio:</label>
                <input type="number" id="precio-min" placeholder="Mín." value={precioMin} onChange={(e) => setPrecioMin(e.target.value)} />
                <span> - </span>
                <input type="number" id="precio-max" placeholder="Máx." value={precioMax} onChange={(e) => setPrecioMax(e.target.value)} />
                </div>
                <button className="btn-filtrar" onClick={filtrarProductos}>Filtrar</button>
            </div>
        </section>


        <div className="productos_populares">
          <div className="contenedor_productos_populares">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((producto) => (
                <div className="carta" key={producto.id_producto}>
                  <div className="carta_imagen">
                    <img src={producto.imagen} alt={producto.nombre} />
                  </div>
                  <p className="name_producto">{producto.nombre}</p>
                  <p className="precio_producto">S/{producto.precio}</p>
                  <div className="agregar">
                    <i className="fas fa-plus"><FaPlus /> Agregar</i>
                  </div>
                </div>
              ))
            ) : (
              <p>No se encontraron productos con esos filtros.</p>
            )}
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
    </div>
  );
}

export default Productos;
