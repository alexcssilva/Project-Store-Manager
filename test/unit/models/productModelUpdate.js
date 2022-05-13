const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

describe('Busca produtos no BD', () => {
  describe('quando existe um venda com o ID informado para atualizar', () => {
  
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
  
      it('possui a propriedade "id" para atualzar', async () => {
        const result = await productModel.updateProduct();
        
        expect(result).to.includes.all.keys('name', 'quantity', 'id')
      })
    });
});