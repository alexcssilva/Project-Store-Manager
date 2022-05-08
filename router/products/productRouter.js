const express = require('express');
const productController = require('../../controllers/productController');

const productRouter = express.Router();

productRouter.get('/', productController.listProducts);
productRouter.get('/:id', productController.listIdProducts);

module.exports = productRouter;