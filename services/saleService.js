const saleModel = require('../models/saleModel');

const getSale = async () => {
  const sales = await saleModel.listAllSales();

  return sales;
};

const getIdSale = async (id) => {
  const salesId = await saleModel.listIdSales(id);

  return salesId;
};

const createNewSale = async (saleProducts) => {
  const newSale = saleModel.createNewSale(saleProducts);

  return newSale;
};

module.exports = {
  getSale,
  getIdSale,
  createNewSale,
};