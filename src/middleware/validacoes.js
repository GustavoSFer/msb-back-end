const schema = require('../joi');
const statusErrorString = require('../joi/statusError');

const validationCreate = (req, _res, next) => {
  console.log('validaçoes >>>>', req.body);
  const { error } = schema.validate(req.body);
  if (error !== undefined) {
    const erroStatus = statusErrorString(error.details[0].type);
    const middlewareError = { error: erroStatus, message: error.details[0].message };

    return next(middlewareError);
  }
  return next();
};

module.exports = {
  validationCreate,
};
