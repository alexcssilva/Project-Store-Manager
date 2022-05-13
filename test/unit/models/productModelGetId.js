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
  
    before(() => {
    sinon.stub(connection, 'query')
      .resolves([resultExecute])
  });
  
    after(() => {
      connection.query.restore()
    });
  
      it('possui a propriedade "id"', async () => {
        const [result] = await productModel.listIdProducts(1);
        
        expect(result).to.include.all.keys('id')
      })
    });
});