const { Client } = require('pg');
const config = require('./config.js');
const q = require('./queries.js');

const client = new Client(config.postgres);

client.connect();

client.query(q.writeToDatabase, (err, res) => {
  console.log(err, res);
  client.end();
});

// look into streams to optimize write time to the database
