const connection = require('./connection');
const serialize = require('./serialize');

const listAllSales = async () => {
  const [result] = await connection.query(`
  SELECT 
    sp.sale_id,
    s.date,
    sp.product_id,
    sp.quantity
  FROM sales_products AS sp
  INNER JOIN sales AS s
    ON sp.sale_id = s.id`);

    return result.map(serialize);
};

const listIdSales = async (id) => { 
  const [result] = await connection.query(`
  SELECT 
  s.date,
  sp.product_id,
  sp.quantity
FROM sales_products AS sp
INNER JOIN sales AS s
  ON sp.sale_id = s.id
WHERE sale_id=?`, [id]);
  return result.map(serialize);
};

module.exports = {
  listAllSales,
  listIdSales,
};