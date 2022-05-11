const express = require('express');
const saleController = require('../../controllers/saleController');

const saleRouter = express.Router();

saleRouter.get('/', saleController.listSales);
saleRouter.get('/:id', saleController.listIdSales);

saleRouter.post('/', saleController.createNewSale);

module.exports = saleRouter;