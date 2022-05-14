const { expect } = require('chai');
const sinon = require('sinon');
const saleModel = require('../../../models/saleModel');
const saleService = require('../../../services/saleService');

describe('Busca produtos no BD', () => {
  describe('quando existe produdos', () => {

    const resultExecute = [
      {
        'id': 1,
        'name': 'Martelo de Thor',
        'quantity': 10
      }
    ]

    before(() => {
      sinon.stub(saleModel, 'listIdSales')
        .resolves(resultExecute)
    });
    
      after(() => {
        saleModel.listIdSales.restore();
      });
    
        it('possui a propriedade "id"', async () => {
          const [result] = await saleService.getIdSale(1);
          
          expect(result).to.include.all.keys('id')
        })
      });
  });