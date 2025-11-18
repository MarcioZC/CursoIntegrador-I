const request = require('supertest');
const app = require('../index'); // Asegúrate que 'index.js' exporta tu app

describe('Pruebas de la API de usuarios', () => {

  it('Debe obtener todos los usuarios', async () => {
    const response = await request(app).get('/api/usuarios');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    console.log('Usuarios existentes:', response.body);
  });

  it('Debe registrar un nuevo usuario', async () => {
    const nuevoUsuario = {
      nombre: 'Prueba',
      apellido: 'Test',
      correo: `prueba@ejemplo.com`,
      contrasena: 'Eduardo123@',
      telefono: '123456789',
      direccion: 'Calle Falsa 123',
      rol: 'cliente'
    };

    const response = await request(app)
      .post('/api/usuarios')
      .send(nuevoUsuario);

    expect(response.statusCode).toBe(201); // Cambia a 200 si tu backend responde con 200
    expect(response.body).toHaveProperty('mensaje');
    expect(response.body).toHaveProperty('usuario');

    console.log('Usuario registrado:', response.body.usuario);
  });
});
