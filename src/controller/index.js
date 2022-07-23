const service = require('../service');

const getAll = async (req, res) => {
  console.log('controller');
  const data = await service.getAll();

  return res.status(200).json(data);
};

const createForm = async (req, res) => {
  const {
    name, email, phone, message, file,
  } = req.body;
  console.log(name, email, phone, message, file);

  const createData = await service.createForm(name, email, phone, message, file);
  res.status(201).json((createData));
};

module.exports = {
  getAll,
  createForm,
};
