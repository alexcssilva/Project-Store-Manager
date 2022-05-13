const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe('Busca vendas no BD', () => {
  describe('quando existe um vendas com o ID informado', () => {
  
    const resultExecute = [
      {
        "date": "2022-05-12T22:28:41.000Z",
        "productId": 1,
        "quantity": 5
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
        const [result] = await saleModel.listIdSales(1);
        
        expect(result).to.include.all.keys('date','saleId','productId','quantity')
      })
    });
});