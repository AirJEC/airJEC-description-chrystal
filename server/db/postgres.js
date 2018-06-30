const { Client } = require('pg');
const config = require('./config.js');

const client = new Client(config.postgres);

client.connect();

const createData = (id, titleName, descriptions, space, access, interactions, notes, property_type, guests, beds, bedrooms, bath) => {
  let q = `INSERT INTO descriptions VALUES (${id}, '${titleName}', '${descriptions}', '${space}', '${access}', '${interactions}', '${notes}', '${property_type}', '${guests}', '${beds}', '${bedrooms}', '${bath}');`;
  client.query(q, (err, res) => {
    if (err) {
      console.log(err);
    }
  })
};

const readData = (id, callback) => {
  let q = `SELECT * from descriptions JOIN description_to_house_rules ON descriptions.id=description_to_house_rules.description_id JOIN description_to_amenities ON description_to_house_rules.description_id=description_to_amenities.description_id WHERE description_to_house_rules.description_id='${id}';`;
  client.query(q, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const updateData = (id, field, value) => {
  let q = `UPDATE descriptions SET ${field}='${value}' WHERE id='${id}';`;
  client.query(q, (err, res) => {
    if (err) {
      console.log(err);
    }
  });
};

const deleteData = (id) => {
  let q = `DELETE FROM descriptions WHERE id=${id};`;
  client.query(q, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(err, res);
    }
  });
};

module.exports = {
  client,
  createData,
  readData,
  updateData,
  deleteData,
};