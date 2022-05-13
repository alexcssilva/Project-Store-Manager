const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

describe('Busca produtos no BD', () => {
  describe('quando existe um produto com o ID informado', () => {
  
    const resultExecute = [
      {
        'id': 1,
        'name': 'Martelo de Thor',
        'quantity': 10
      }
    ]
  
    before(async () => {
    sinon.stub(connection, 'execute')
      .resolves([resultExecute])
  });
  
    after(async () => {
      connection.execute.restore()
    });
  
      it('possui a propriedade "id"', async () => {
        const result = await productModel.updateProduct();
        console.log('; result', result);
        
        expect(result).to.includes.all.keys('name', 'quantity', 'id')
      })
    });
});