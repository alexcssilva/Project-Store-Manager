const connection = require('./connection');

const listAllProducts = async () => {
  const [result] = await connection.query('SELECT * FROM products;');
  console.log('; result', result);

  return result;
};

const listIdProducts = async (id) => {
  const [result] = await connection.query(`
    SELECT id,name,quantity FROM products WHERE id=?;`, [id]);
  
  return result;
};

module.exports = {
  listAllProducts,
  listIdProducts,
};