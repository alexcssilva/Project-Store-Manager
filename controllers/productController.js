const productService = require('../services/productService');

const listProducts = async (_req, res, _next) => {
    const products = await productService.getProduct();
    
    return res.status(200).json(products);
};

const listIdProducts = async (req, res, _next) => {
  const { id } = req.params;
    const [productId] = await productService.getIdProduct(id);
    if (!productId) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(productId);
};

const createNewProduct = async (req, res, _next) => {
  const { name, quantity } = req.body;
  
    const newProduct = await productService.createProduct(name, quantity);
    if (!newProduct) {
      return res.status(409).json({ message: 'Product already exists' });
    }
    return res.status(201).json(newProduct);
};

module.exports = {
  listProducts,
  listIdProducts,
  createNewProduct,
};