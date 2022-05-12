const express = require('express');
const productController = require('../../controllers/productController');
const { compareName, validateName, lengthName } = require('../../middlewares/validateProduct');

const productRouter = express.Router();

productRouter.get('/', productController.listProducts);
productRouter.get('/:id', productController.listIdProducts);

productRouter.post('/', validateName, lengthName, compareName, productController.createNewProduct);

productRouter.put('/:id', productController.idProducts, productController.updateProduct);

productRouter.delete('/:id', productController.idProducts, productController.deleteProduct);

module.exports = productRouter;