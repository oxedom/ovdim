const pg = require('pg')

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'development',
})


module.exports = pool
// export const query = (text, params, callback) => {
//   return pool.query(text, params, callback)
// }
