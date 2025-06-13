const express = require("express");
const router = express.Router();
const db = require("../db");


// Ruta para registrar un nuevo usuario
router.post("/register", (req, res) => {
  const { nombre, apellido, correo, contraseña, telefono, direccion } = req.body;

  const sql = `
    INSERT INTO usuario (nombre, apellido, correo, contraseña, telefono, direccion)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [nombre, apellido, correo, contraseña, telefono, direccion], (err, result) => {
    if (err) {
      console.error("❌ Error al registrar usuario:", err);
      return res.status(500).send("Error al registrar el usuario");
    }

    res.status(201).send("✅ Usuario registrado correctamente");
  });
});

router.post('/login', async (req, res) => {
  const { correo, contraseña } = req.body;

  console.log('Intento de login para:', correo); // Añade esto

  if (!correo || !contraseña) {
    console.log('Faltan campos obligatorios'); // Añade esto
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    console.log('Buscando usuario en la BD con correo:', correo); // Añade esto
    const [rows] = await db.promise().query('SELECT * FROM usuario WHERE correo = ?', [correo]);

    if (rows.length === 0) {
      console.log('Correo no registrado:', correo); // Añade esto
      return res.status(401).json({ message: 'Correo no registrado' });
    }

    const usuario = rows[0];
    console.log('Usuario encontrado:', usuario.correo); // Añade esto
    console.log('Contraseña de usuario en BD:', usuario.contraseña);
    console.log('Contraseña recibida:', contraseña);

    if (usuario.contraseña !== contraseña) {
      console.log('Contraseña incorrecta para el correo:', correo); // Añade esto
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    console.log('Inicio de sesión exitoso para:', correo); // Añade esto
    const { contraseña: _, ...usuarioSinContraseña } = usuario;
    res.json({ message: 'Inicio de sesión exitoso', usuario: usuarioSinContraseña });

  } catch (error) {
    console.error('Error al iniciar sesión en el bloque try-catch:', error); // Asegúrate de que esto imprima el error completo
    res.status(500).json({ message: 'Error del servidor' });
  }
});



module.exports = router;
