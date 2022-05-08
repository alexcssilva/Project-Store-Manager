const express = require('express');
const saleController = require('../../controllers/saleController');

const saleRouter = express.Router();

saleRouter.get('/', saleController.listSales);
saleRouter.get('/:id', saleController.listIdSales);

module.exports = saleRouter;