const sinon = require('sinon');
const { expect } = require('chai');
const { User } = require('../../../models');
const { bodycreate, dataDb } = require('../Mock');
const model = require('../../model');

describe('Models', () => {
  beforeEach(() => sinon.restore());
  describe('#FindAll', () => {
    it('Quando tiver dados, deve retornar um array com as informações', async () => {
      sinon.stub(User, 'findAll').resolves(dataDb);
      const data = await model.getAll();
      expect(data).to.be.equal(dataDb);
    });
    it('Quando não tiver dados, deve retornar um array vazio', async () => {
      sinon.stub(User, 'findAll').resolves([]);
      const data = await model.getAll();
      expect(data).to.be.empty;
    });
  });

  describe('#Create', () => {
    it('Cadastrando no Banco de dados', async () => {
      sinon.stub(User, 'create').resolves(dataDb[0]);
      const data = await model.createForm(bodycreate);
      expect(data).to.be.equal(dataDb[0]);
    });
    // it('Quando não tiver dados, deve retornar um array vazio', async () => {
    //   sinon.stub(User, 'findAll').resolves([]);
    //   const data = await model.getAll();
    //   expect(data).to.be.empty;
    // });
  });

});