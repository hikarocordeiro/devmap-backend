const { Router } = require('express');

const routes = Router();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello' });
});

module.exports = routes;
