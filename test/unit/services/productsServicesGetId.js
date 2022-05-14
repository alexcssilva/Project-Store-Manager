const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('Busca produtos no BD', () => {
  describe('quando existe um produto com o ID informado', () => {
  
    const resultExecute = [
      {
        'id': 1,
        'name': 'Martelo de Thor',
        'quantity': 10
      }
    ]
  
    before(() => {
    sinon.stub(productModel, 'listIdProducts')
      .resolves(resultExecute)
  });
  
    after(() => {
      productModel.listIdProducts.restore();
    });
  
      it('possui a propriedade "id"', async () => {
        const [result] = await productService.getIdProduct(1);
        
        expect(result).to.include.all.keys('id')
      })
    });
});