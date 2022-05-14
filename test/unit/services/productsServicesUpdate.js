const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('Busca produtos no BD', () => {
  describe('quando existe um produto com o ID informado', () => {
  
    const resultExecute = [
      {
        "productId": 1,
        "quantity": 50
      }
    ]
  
    before(() => {
    sinon.stub(productModel, 'updateProduct')
      .resolves(resultExecute)
  });
  
    after(() => {
      productModel.updateProduct.restore();
    });
  
      it('possui a propriedade "id"', async () => {
        const [result] = await productService.updateProduct();
        
        expect(result).to.include.all.keys('productId', 'quantity')
      })
    });
});