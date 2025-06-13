import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './todo.css'; // Asegúrate de que este archivo exista
import { FaTiktok, FaInstagram, FaFacebook, FaShoppingCart, FaPhoneAlt   } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensaje('');
    try {
      const res = await axios.post('http://localhost:3001/api/login', {
        correo,
        contraseña
      });
      setMensaje('Inicio de sesión exitoso');
      console.log(res.data.usuario);
      // Si quieres guardar algo en localStorage:
      // localStorage.setItem('usuario', JSON.stringify(res.data.usuario));
      // Redirigir a otra página
      navigate('/productos'); // o a donde necesites
    } catch (err) {
      setMensaje(err.response?.data?.message || 'Error al iniciar sesión');
    }
  };
  const toggleMenu = () => {
    document.getElementById("navLinks").classList.toggle("active");
  };
  return (
    <div>
      <header className="navbar">
              <div className="logo">
                <a href="/principal">
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

      <main style={{
        paddingTop: '6rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh'
      }}>
        <form
          onSubmit={handleLogin}
          style={{
            background: '#e9ecf1',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '400px'
          }}
        >
          <h2 className="subtitulo" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Iniciar Sesión
          </h2>

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              margin: '0.5rem 0 1rem',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              margin: '0.5rem 0 1.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />

          <button className="agregar" type="submit" style={{ width: '100%' }}>
            Ingresar
          </button>

          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: 'small', color: mensaje.includes('exitoso') ? 'green' : 'red' }}>
            {mensaje}
          </p>

          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: 'small' }}>
            ¿No tienes una cuenta? <a href="/register" style={{ color: '#1561F0', textDecoration: 'underline' }}>Regístrate aquí</a>
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;