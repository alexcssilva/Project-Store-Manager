const sinon = require('sinon');
const { expect } = require('chai');
const productController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('Chamada do controller listProducts', () => {
  describe('quando não existe produdos no BD', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getProduct').resolves([])
    });

    after(() => {
      productService.getProduct.restore();
    });

    it('é chamado o metodo "status" passando o código 200', async () => {
      await productController.listProducts(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('é retornado o metodo "json" contendo um array', async () => {
      await productController.listProducts(req, res);

      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});