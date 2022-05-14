const { expect } = require('chai');
const sinon = require('sinon');
const saleModel = require('../../../models/saleModel');
const saleService = require('../../../services/saleService');


describe('Busca produtos no BD', () => {
  describe('quando existe um produto com o ID informado', () => {
  
    const resultExecute = [
      {
        "productId": 1,
        "quantity": 50
      }
    ]
  
    before(() => {
    sinon.stub(saleModel, 'updateSale')
      .resolves(resultExecute)
  });
  
    after(() => {
      saleModel.updateSale.restore();
    });
  
      it('possui a propriedade "id"', async () => {
        const [result] = await saleService.updateSale();
        
        expect(result).to.include.all.keys('productId', 'quantity')
      })
    });
});