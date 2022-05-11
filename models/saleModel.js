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

const createNewSale = async (saleProducts) => {
console.log('; saleProducts', saleProducts);
  const [{ insertId }] = await connection.query('INSERT INTO sales (date) VALUES (NOW());');
  
  saleProducts.forEach(async ({ productId, quantity }) => { 
    await connection.execute(`
    INSERT INTO 
      sales_products (sale_id, product_id, quantity) 
    VALUES (?, ?, ?);`, [insertId, productId, quantity]);
  });
  
  return {
    id: insertId,
    itemsSold: saleProducts,
  };
};

module.exports = {
  listAllSales,
  listIdSales,
  createNewSale,
};

// {
//   "id": 1,
//   "itemsSold": [
//     {
//       "productId": 1,
//       "quantity": 2
//     },
//     {
//       "productId": 2,
//       "quantity": 5
//     }
//   ]
// }