const { Router } = require('express');
const controller = require('../controller');
// const validacoes = require('../middleware/validacoes');

const route = Router();

route.get('/', controller.getAll);
route.post('/', controller.createForm);

module.exports = route;
