const model = require('../model');

const getAll = async () => {
  console.log('Service');

  const data = await model.getAll();
  return data;
};

const createForm = async (name, email, phone, message, file, myip) => {
  let mensagem = message;
  if (!message) mensagem = 'Sem mensagem!';
  const createData = await model.createForm(name, email, phone, mensagem, file, myip);
  return createData;
};

module.exports = {
  getAll,
  createForm,
};
