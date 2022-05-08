const productModel = require('../models/productModel');

const getProduct = async () => {
  const products = await productModel.listAllProducts();

  return products;
};

const getIdProduct = async (id) => {
  const productsId = await productModel.listIdProducts(id);

  return productsId;
};

module.exports = {
  getProduct,
  getIdProduct,
};