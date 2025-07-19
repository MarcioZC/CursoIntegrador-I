const request = require('supertest');
const app = require('../index'); // Asegúrate de que apunte correctamente a tu app

describe('Pruebas de la API de productos', () => {
  it('Debe obtener todos los productos', async () => {
    const response = await request(app).get('/api/productos');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    console.log('✅ Productos obtenidos:', response.body);
  });

  it('Debe registrar un nuevo producto', async () => {
    const nuevoProducto = {
      nombre: 'Producto de Prueba',
      descripcion: 'Este es un producto de prueba',
      precio: 99.99,
      stock: 50,
      id_categoria: 1, // Asegúrate de que exista esta categoría en tu BD
      id_marca: 1,     // Asegúrate de que exista esta marca en tu BD
      imagen: 'https://sahuaperu.com.pe/wp-content/uploads/2022/09/GIGABYTE-H510M-H-LGA-1200-a.jpg'
    };

    const response = await request(app)
      .post('/api/productos')
      .send(nuevoProducto);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('mensaje', 'Producto creado exitosamente');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nombre', nuevoProducto.nombre);

    console.log('✅ Producto registrado:', response.body);
  });
});
