const sinon = require('sinon');
const { expect } = require('chai');
const productController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('Chamada do controller listProducts', () => {
  describe('quando existe produdos no BD', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      req.params = {
        id: 1,
      }

      sinon.stub(productService, 'getIdProduct').resolves([
        {
          "id": 1,
          "name": "Martelo de Thor",
          "quantity": 10
        }
      ])
    });

    after(() => {
      productService.getIdProduct.restore();
    });

    it('é chamado o metodo "status" passando o código 200', async () => {
      await productController.listIdProducts(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('é retornado o metodo "json" contendo um array', async () => {
      await productController.listIdProducts(req, res);

      expect(res.json.calledWith(sinon.match.array)).to.be.equal(false);
    });
  });
});