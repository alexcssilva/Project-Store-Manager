const saleService = require('../services/saleService');

const listSales = async (_req, res, _next) => {
  const sales = await saleService.getSale();
  
  return res.status(200).json(sales);
};

const listIdSales = async (req, res, _next) => {
  const { id } = req.params;
    const saleId = await saleService.getIdSale(id);
    if (saleId.length === 0) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(saleId);
};

const createNewSale = async (req, res, _next) => {
  const saleProducts = req.body; 
  
  const newSale = await saleService.createNewSale(saleProducts);
  
  return res.status(201).json(newSale);
};

module.exports = {
  listSales,
  listIdSales,
  createNewSale,
};