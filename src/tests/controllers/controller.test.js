const { expect } = require('chai');
const Sinon = require('sinon');
const { bodycreate, dataDb } = require('../Mock');
const service = require('../../service');
const controller = require('../../controller');

describe('Controller', function () {
  const response = {};
  const request = {};
  before(function () {
    request.body = { };
    response.status = Sinon.stub().returns(response);
    response.json = Sinon.stub().returns();
  });

  describe('#Find', function () {
    it('Quando existe dados - Deve retornar o status 200', async () => {
      Sinon.stub(service, 'getAll').resolves(dataDb);
      await controller.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      Sinon.restore();
    });
    it('Deve retornar um array vazio', async () => {
      Sinon.stub(service, 'getAll').resolves([]);
      await controller.getAll(request, response);
      expect(response.json.calledWith([])).to.be.equal(true);
    });  
  });
  describe('#Create', () => {
    describe('Cadastrando uma nova informação', () => {
      before(() => {
        request.body = { bodycreate };
        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
      });
      after(() => {
        Sinon.restore();
      });
      it('Deve retornar o status 201', async () => {
        Sinon.stub(service, 'createForm').resolves(dataDb[0]);
        await controller.createForm(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });
    });
  });
});