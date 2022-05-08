const productService = require('../services/productService');

const listProducts = async (req, res, _next) => {
    const products = await productService.getProduct();
    
    return res.status(200).json(products);
};

const listIdProducts = async (req, res, _next) => {
  const { id } = req.params;
    const [productId] = await productService.getIdProduct(id);
    if (!productId) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(productId);
};

module.exports = {
  listProducts,
  listIdProducts,
};