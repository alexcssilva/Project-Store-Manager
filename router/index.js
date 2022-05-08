const express = require('express');
const productRouter = require('./products/productRouter');

const router = express();

router.use('/products', productRouter);

module.exports = router;