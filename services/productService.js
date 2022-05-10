const productModel = require('../models/productModel');

const getProduct = async () => {
  const products = await productModel.listAllProducts();

  return products;
};

const getIdProduct = async (id) => {
  const productsId = await productModel.listIdProducts(id);

  return productsId;
};

const compareName = async (name) => {
  const nameProduct = await productModel.compareName(name);

  return nameProduct;
};

const createProduct = async (name, quantity) => {
  const newProduct = await productModel.createProduct(name, quantity);

  return newProduct;
};

const updateProduct = async (id, name, quantity) => {
  const editProduct = await productModel.updateProduct(id, name, quantity);

  return editProduct;
};

module.exports = {
  getProduct,
  getIdProduct,
  compareName,
  createProduct,
  updateProduct,
};