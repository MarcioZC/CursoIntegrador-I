const express = require("express");
const router = express.Router();
const db = require("../db");

// Ruta GET para obtener productos (nombre, precio, imagen)
router.get("/", async (req, res) => {
  try {
    const [productos] = await db.query(
      "SELECT id_producto, nombre, precio, imagen FROM producto"
    );
    res.json(productos);
  } catch (error) {
    console.error("❌ Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

module.exports = router;
