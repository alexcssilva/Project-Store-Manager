const express = require('express');
const productRouter = require('./products/productRouter');
const saleRouter = require('./sales/saleRouter');

const router = express();

router.use('/products', productRouter);
router.use('/sales', saleRouter);

module.exports = router;