const { User } = require('../../models/index');

const getAll = async () => {
  console.log('model');

  const data = await User.findAll();

  return data;
};

const createForm = async (name, email, phone, message, file) => {
  const createData = await User.create({
    name, email, phone, message, file,
  });

  return createData;
};

module.exports = {
  getAll,
  createForm,
};
