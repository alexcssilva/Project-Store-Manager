const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

describe('Busca produtos no BD', () => {
  describe('quando existe produdos', () => {

const resultExecute = [[]];

before(() => {
  sinon.stub(connection, 'query')
    .resolves(resultExecute)
})

after(() => {
  connection.query.restore()
})

    it('retorna uma array', async () => {
      const result = await productModel.listAllProducts()

      expect(result).to.be.an('array')
    });

    it('o array está vazio',async () => {
      const result = await productModel.listAllProducts()

      expect(result).to.be.empty;
    });
  });
});