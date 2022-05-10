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

const compareName = async (name) => {
  const [result] = await connection.query(`
    SELECT id,name,quantity FROM products WHERE name = ?;`, [name]);

  return result;
};

const createProduct = async (name, quantity) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO products (name, quantity)
    VALUES (?, ?)
  `, [name, quantity]);

  return {
    id: insertId,
    name,
    quantity,
  };
};

const updateProduct = async (id, name, quantity) => {
  const query = 'UPDATE products SET name = ?, quantity = ? WHERE id = ?;';

  await connection.execute(query, [name, quantity, id]); 
  console.log('; name', name);

  return {
    id,
    name,
    quantity,
  };
};

module.exports = {
  listAllProducts,
  listIdProducts,
  compareName,
  createProduct,
  updateProduct,
};