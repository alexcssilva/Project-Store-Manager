const sinon = require('sinon');
const { expect } = require('chai');
const saleController = require('../../../controllers/saleController');
const saleService = require('../../../services/saleService');

describe('Chamada do controller saleProducts', () => {
  describe('quando não existe vendas no BD', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(saleService, 'getSale').resolves([{
        "productId": 1,
        "quantity": 50
      }])
    });

    after(() => {
      saleService.getSale.restore();
    });

    it('é chamado o metodo "status" passando o código 200', async () => {
      await saleController.listSales(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('é retornado o metodo "json" contendo um array', async () => {
      await saleController.listSales(req, res);

      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});