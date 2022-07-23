const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'o nome precisa ser String',
    'any.required': 'Nome obrigatório',
  }),
  email: Joi.string().required().messages({
    'string.base': 'email precisa ser uma string',
    'any.required': 'email obrigatório',
  }),
  phone: Joi.string().required().messages({
    'string.base': 'Telefone precisa ser uma string',
    'any.required': 'Telefone obrigatório',
  }),
  message: Joi.string().messages({
    'string.base': 'mensagem precisa ser uma string',
  }),
  file: Joi.string().required().messages({
    'string.base': 'file precisa ser uma string',
    'any.required': 'file obrigatório',
  }),
});

module.exports = schema;
