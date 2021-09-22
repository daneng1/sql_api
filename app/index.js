'use strict';

// const { Pool } = require('pg');

// const credentials = {
//   user: 'engeldb',
//   host: 'localhost',
//   database: 'api',
//   password: '*Oscar1229',
//   port: 5432,
// };

// function poolDemo() {
//   const pool = new Pool(credentials);
//   const now = pool.query('SELECT * FROM users;', (err, res) => {
//     console.log(err, res);
//   });
//   pool.end();

//   return now;
// }

// (async () => {
//   await poolDemo();
//   console.log("Up on server");
// })();

const PORT = process.env.PORT || 8080;
const app = require('./server');
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});