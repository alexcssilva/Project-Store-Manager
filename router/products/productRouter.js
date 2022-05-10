const express = require('express');
const productController = require('../../controllers/productController');
const { compareName } = require('../../middlewares/validateProduct');

const productRouter = express.Router();

productRouter.get('/', productController.listProducts);
productRouter.get('/:id', productController.listIdProducts);

productRouter.post('/', compareName, productController.createNewProduct);

module.exports = productRouter;