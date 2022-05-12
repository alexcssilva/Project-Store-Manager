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

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const lengthName = async (req, res, next) => {
  const { name } = req.body;

  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  compareName,
  validateName,
  lengthName,
};