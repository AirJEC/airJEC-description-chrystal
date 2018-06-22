const { Client } = require('pg');
const config = require('./config.js');
const q = require('./queries.js');
const path = require('path');
const faker = require('./generateData.js');
const fs = require('fs');

const client = new Client(config.postgres);

client.connect();

// for (var i = 0; i < 100; i++) {
//   console.log(faker.generateDescription());
//   fs.appendFileSync(path.join(__dirname, './descriptions.csv'), faker.generateDescription());
// };  

// look into streams to optimize write time to the database

client.query(q.writeToDatabase, (err, res) => {
  console.log(err);
  client.end();
});