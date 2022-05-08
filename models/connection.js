const mysql = require('mysql2/promise');

require('dotenv').config(); 

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || '127.0.0.1',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'trybe',
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;