const request = require('supertest');
const app = require('../index'); // Asegúrate de que apunta correctamente a tu archivo principal

describe('Pruebas de la API de categorías', () => {

  it('Debe obtener todas las categorías', async () => {
    const response = await request(app).get('/api/categorias');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    console.log('Categorías:', response.body);
  });

  it('Debe registrar una nueva categoría', async () => {
    const nuevaCategoria = {
      nombre: 'CategoriaTest',
      descripcion: 'Categoría de prueba automatizada'
    };

    const response = await request(app)
      .post('/api/categorias')
      .send(nuevaCategoria);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('mensaje', 'Categoría registrada con éxito');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nombre', nuevaCategoria.nombre);
    expect(response.body).toHaveProperty('descripcion', nuevaCategoria.descripcion);

    console.log('Categoría registrada:', response.body);
  });
});
