const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'niko',
  password: 'test',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

module.exports = pool;
