const model = require('../model');

const getAll = async () => {
  console.log('Service');

  const data = await model.getAll();
  return data;
};

const createForm = async (name, email, phone, message, file) => {
  const createData = await model.createForm(name, email, phone, message, file);
  return createData;
};

module.exports = {
  getAll,
  createForm,
};
