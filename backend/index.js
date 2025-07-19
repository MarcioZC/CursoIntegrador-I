const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const productosRoutes = require("./routes/productos");
const usuariosRoutes = require("./routes/usuarios");
const categoriasRoutes = require("./routes/categorias");
const marcasRoutes = require("./routes/marcas");
const carritoRoutes = require('./routes/carrito');
const facturaRoutes = require('./routes/factura');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/carrito", carritoRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/marcas", marcasRoutes);
app.use("/api/facturas", facturaRoutes);


// Importa las tareas programadas solo si no estás en entorno de test
if (process.env.NODE_ENV !== 'test') {
  require('./tareasProgramadas');
}

module.exports = app;
