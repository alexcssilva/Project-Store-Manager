const serialize = (product) => ({
  saleId: product.sale_id,
  date: product.date,
  productId: product.product_id,
  quantity: product.quantity,
});

module.exports = serialize;