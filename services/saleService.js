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
  const newSale = await saleModel.createNewSale(saleProducts);

  return newSale;
};

const updateSale = async (id, saleProducts) => {
  const editSale = await saleModel.updateSale(id, saleProducts);

  return editSale;
};

module.exports = {
  getSale,
  getIdSale,
  createNewSale,
  updateSale,
};