const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('Busca produtos no BD', () => {
  describe('quando existe produdos', () => {

    const resultExecute = ([])

before(() => {
  sinon.stub(productModel, 'listAllProducts')
    .resolves(resultExecute)
})

after(() => {
  productModel.listAllProducts.restore()
})

    it('retorna uma array', async () => {
      const result = await productService.getProduct()

      expect(result).to.be.an('array')
    });

    it('o array está vazio',async () => {
      const result = await productService.getIdProduct()

      expect(result).to.be.empty;
    });
  });
});