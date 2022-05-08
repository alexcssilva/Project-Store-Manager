const saleModel = require('../models/saleModel');

const getSale = async () => {
  const sales = await saleModel.listAllSales();

  return sales;
};

const getIdSale = async (id) => {
  const salesId = await saleModel.listIdSales(id);

  return salesId;
};

module.exports = {
  getSale,
  getIdSale,
};