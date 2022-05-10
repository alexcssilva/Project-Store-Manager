const productModel = require('../models/productModel');

const compareName = async (req, res, next) => {
  const { name } = req.body;
  
  const newProduct = await productModel.compareName(name);
  if (newProduct[0]) {
    return res.status(409).json({ message: 'Product already exists' });
  }
  next();
};

module.exports = {
  compareName,
};