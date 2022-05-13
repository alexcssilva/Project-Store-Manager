const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe('Busca vendas no BD', () => {
  describe('quando existe vendas', () => {

const resultExecute = [[]];

before(() => {
  sinon.stub(connection, 'query')
    .resolves(resultExecute)
})

after(() => {
  connection.query.restore()
})

    it('retorna uma array', async () => {
      const result = await saleModel.listAllSales()

      expect(result).to.be.an('array')
    });

    it('o array está vazio',async () => {
      const result = await saleModel.listAllSales()

      expect(result).to.be.empty;
    });
  });
});