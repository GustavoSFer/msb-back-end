const { expect } = require('chai');
const Sinon = require('sinon');
const model = require('../../model');
const service = require('../../service');
const { bodycreate, dataDb } = require('../Mock');


describe('#Service', () => {
  describe('#Find', function () {
    it('Deve retornar uma lista quando tem dados no banco', async () => {
      Sinon.stub(model, 'getAll').resolves(dataDb);
      const data = await service.getAll();
      expect(data).to.deep.eq(dataDb);
      Sinon.restore();
    });
    it('Sem dados no Db deve retornar um array vazio', async () => {
      Sinon.stub(model, 'getAll').resolves([]);
      const data = await service.getAll();
      expect(data).to.be.empty;
    });
  });
  describe('#Create', function () {
    it('Enviando dados para o banco quando esta correto', async () => {
      Sinon.stub(model, 'createForm').resolves(dataDb[0]);
      const data = await service.createForm(bodycreate);
      expect(data).to.deep.eq(dataDb[0]);
      Sinon.restore();
    });
  });
});