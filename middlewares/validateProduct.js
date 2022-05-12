const productModel = require('../models/productModel');

const compareName = async (req, res, next) => {
  const { name } = req.body;
  
  const newProduct = await productModel.compareName(name);
  if (newProduct[0]) {
    return res.status(409).json({ message: 'Product already exists' });
  }
  next();
};

const validateName = async (req, res, next) => {
  const { name } = req.body;
  console.log('; name', name);

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

module.exports = {
  compareName,
  validateName,
};