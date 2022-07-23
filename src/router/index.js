const { Router } = require('express');
const controller = require('../controller');

const route = Router();

route.get('/', controller.getAll);
route.put('/', controller.createForm);

module.exports = route;
