const { Router } = require('express');

const route = Router();

route.get('/', () => console.log('Chegou aqui'));

module.exports = route;
