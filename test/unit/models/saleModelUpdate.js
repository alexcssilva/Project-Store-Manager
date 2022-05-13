const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe('Busca vendas no BD', () => {
  describe('quando existe um venda com o ID informado para atualizar', () => {
  
    const resultExecute = [
      {
        "productId": 1,
        "quantity": 50
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
        const result = await saleModel.updateSale(1, []);
        
        expect(result).to.includes.all.keys('saleId', 'itemUpdated')
      })
    });
});