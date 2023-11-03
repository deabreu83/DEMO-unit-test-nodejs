const request = require('supertest');
const server = require('../index');

describe('API de Tareas', () => {
    
  it('Debería obtener una lista de tareas', async () => {
    const response = await request(server).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body.tasks).toEqual(['task1', 'task2', 'task3']);
  });



  it('Debería obtener una lista de tareas', async () => {
    const response = await request(server).put('/tasks').send();
    expect(response.status).status(400);
    expect(res.body).toHaveProperty('msg',"No se envio el id");
    expect(res.body).toHaveProperty('status',-1);
  });


});



