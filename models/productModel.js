const connection = require('./connection');

const listAllProducts = async () => {
  const [result] = await connection.query('SELECT * FROM products;');

  return result;
};

const listIdProducts = async (id) => {
  const [result] = await connection.query(`
    SELECT id,name,quantity FROM products WHERE id=?;`, [id]);
  
  return result;
};

const createProduct = async (name, quantity) => {
  const [result] = await connection.execute(`
    INSERT INTO products (name, quantity)
    VALUES (?, ?)
  `, [name, quantity]);

  return {
    id: result.id,
    name,
    quantity,
  };
};

module.exports = {
  listAllProducts,
  listIdProducts,
  createProduct,
};