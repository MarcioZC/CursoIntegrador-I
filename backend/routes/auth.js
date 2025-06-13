const express = require("express");
const router = express.Router();
const db = require("../db");

// Ruta para registrar un nuevo usuario
router.post("/register", async (req, res) => {
  const { nombre, apellido, correo, contraseña, telefono, direccion } = req.body;

  const sql = `
    INSERT INTO usuario (nombre, apellido, correo, contraseña, telefono, direccion)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  try {
    const [result] = await db.query(sql, [nombre, apellido, correo, contraseña, telefono, direccion]);
    res.status(201).send("✅ Usuario registrado correctamente");
  } catch (err) {
    console.error("❌ Error al registrar usuario:", err);
    res.status(500).send("Error al registrar el usuario");
  }
});

// Ruta para login
router.post('/login', async (req, res) => {
  const { correo, contraseña } = req.body;

  if (!correo || !contraseña) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const [rows] = await db.query('SELECT * FROM usuario WHERE correo = ?', [correo]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Correo no registrado' });
    }

    const usuario = rows[0];

    if (usuario.contraseña !== contraseña) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const { contraseña: _, ...usuarioSinContraseña } = usuario;
    res.json({ message: 'Inicio de sesión exitoso', usuario: usuarioSinContraseña });

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Obtener todos los productos
router.get("/productos", async (req, res) => {
  try {
    const [productos] = await db.query(
      "SELECT id_producto, nombre, precio, imagen FROM producto"
    );
    res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
});



module.exports = router;
