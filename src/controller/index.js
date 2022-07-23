const service = require('../service');

const getAll = async (req, res) => {
  console.log('controller');
  const data = await service.getAll();

  return res.status(200).json(data);
};

const createForm = async (req, res) => {
  const {
    name, email, phone, mensagem, nomeFile, myip,
  } = req.body;
  // const { file } = req.file;
  console.log(req.body);
  console.log('>>>>>>>>>>>>>>', name, email, phone, mensagem, nomeFile, myip);
  console.log('===============');

  const createData = await service.createForm(name, email, phone, mensagem, nomeFile, myip);
  res.status(201).json((createData));
};

module.exports = {
  getAll,
  createForm,
};
