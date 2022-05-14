const { expect } = require('chai');
const sinon = require('sinon');
const saleModel = require('../../../models/saleModel');
const saleService = require('../../../services/saleService');

describe('Busca produtos no BD', () => {
  describe('quando existe produdos', () => {

    const resultExecute = ([])

before(() => {
  sinon.stub(saleModel, 'listAllSales')
    .resolves(resultExecute)
})

after(() => {
  saleModel.listAllSales.restore()
})

    it('retorna uma array', async () => {
      const result = await saleService.getSale()

      expect(result).to.be.an('array')
    });

    it('o array está vazio',async () => {
      const result = await saleService.getSale()

      expect(result).to.be.empty;
    });
  });
});