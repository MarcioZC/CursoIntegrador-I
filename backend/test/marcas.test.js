const request = require('supertest');
const app = require('../index'); // Asegúrate de que apunte correctamente a tu aplicación

describe('Pruebas de la API de marcas', () => {
  it('Debe obtener todas las marcas', async () => {
    const response = await request(app).get('/api/marcas');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    console.log('✅ Marcas obtenidas:', response.body);
  });

  it('Debe registrar una nueva marca', async () => {
    const nuevaMarca = {
      nombre: 'MarcaTest',
      descripcion: 'Marca de prueba automatizada'
    };

    const response = await request(app)
      .post('/api/marcas')
      .send(nuevaMarca);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('mensaje', 'Marca registrada');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nombre', nuevaMarca.nombre);
    expect(response.body).toHaveProperty('descripcion', nuevaMarca.descripcion);

    console.log('✅ Marca registrada:', response.body);
  });
});
