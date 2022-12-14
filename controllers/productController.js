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

const idProducts = async (req, res, next) => {
  const { id } = req.params;
  
    const [productId] = await productService.getIdProduct(id);
    if (!productId) return res.status(404).json({ message: 'Product not found' });
    
    next();
};

const createNewProduct = async (req, res, _next) => {
  const { name, quantity } = req.body;
  
    const newProduct = await productService.createProduct(name, quantity);
    if (!newProduct) {
      return res.status(409).json({ message: 'Product already exists' });
    }
    return res.status(201).json(newProduct);
};

const updateProduct = async (req, res, _next) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

    const editProduct = await productService.updateProduct(id, name, quantity);
    return res.status(200).json(editProduct);
};

const deleteProduct = async (req, res, _next) => {
  const { id } = req.params;

    const delProduct = await productService.deleteProduct(id);
    
    return res.status(204).json(delProduct);
};

module.exports = {
  listProducts,
  listIdProducts,
  idProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
};