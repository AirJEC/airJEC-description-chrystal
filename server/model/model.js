const db = require('../db/postgres.js');
// const mongo = require('../db/mongo.js');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const faker = require('../db/generateData.js');

// const descriptionsFile = fs.createWriteStream(path.join(__dirname, '../db/descriptions.csv'));
// descriptionsFile.write(`id,title,descriptions,space,access,interactions,notes,property_type,guests,beds,bedrooms,bath\n`);

// const amenitiesFile = fs.createWriteStream(path.join(__dirname, '../db/amenities.csv'));
// amenitiesFile.write(`description_id, amenities_id, amenities\n`);

// const houseRulesFile = fs.createWriteStream(path.join(__dirname, '../db/houserules.csv'));
// houseRulesFile.write(`description_id, house_rules_id, house_rules\n`);

// const writeTenMillionRows = (writeStream, rows, encoding, callback) => {
//   let k = 1000;
//   writeData();
//   function writeData() {
//     let ok = true;
//     do {
//       k--;
//       if (k === 0) {
//         writeStream.write(rows().string, encoding, callback);
//       } else {
//         ok = writeStream.write(rows().string, encoding);
//       }
//     } while (k > 0 && ok);
//     if (k > 0) {
//       writeStream.once('drain', writeData);
//     }
//   }
// };

// const mongoAddTenMillionRows = (attribute, generateData, timesRemaining, callback) => {
//   if (timesRemaining === 0) {
//     return;
//   }
//   attribute.insertMany(generateData().array, (err) => {
//     if (err) {
//       console.log('error writing to database');
//     } else {
//       console.log(timesRemaining);
//       mongoAddTenMillionRows(attribute, generateData, timesRemaining - 1);
//     }
//   });
// };

const writeToDescriptions = `
COPY descriptions (id, title, descriptions, space, access, interactions, notes, property_type, guests, beds, bedrooms, bath) FROM '/Users/chrystalzou/hackreactor/airjec/airjec-description-chrystal/server/db/descriptions.csv' DELIMITER ',' CSV HEADER;
`;

const writeToAmenities = `
COPY description_to_amenities (description_id, amenities_id, amenities) FROM '/Users/chrystalzou/hackreactor/airjec/airjec-description-chrystal/server/db/amenities.csv' DELIMITER ',' CSV HEADER;
`;

const writeToHouseRules = `
COPY description_to_house_rules (description_id, house_rules_id, house_rules) FROM '/Users/chrystalzou/hackreactor/airjec/airjec-description-chrystal/server/db/houserules.csv' DELIMITER ',' CSV HEADER;
`;

// mongo.db.once('open', () => {

  // db.client.query('CREATE INDEX property_id ON descriptions (id)', (err, res) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(err, res);
  //   }
  // })

  // mongoAddTenMillionRows(mongo.HouseRule, faker.generateHouseRules, 1000);
  // mongoAddTenMillionRows(mongo.Amenity, faker.generateAmenities, 1000);  

  // writeTenMillionRows(descriptionsFile, faker.generateDescription, null, (err, results) => {
  //   if (err) {
  //     console.log("error generating data");
  //   } else {
  //     db.client.query(writeToDescriptions, (err, res) => {
  //       console.log(err, res);
  //     });
      // exec('mongoimport --db airjec --collection descriptions --headerline --type csv --file /Users/chrystalzou/hackreactor/airjec/airjec-description-chrystal/server/db/descriptions.csv', (error, stdout, stderr) => {
      //   if (error) {
      //     console.error(`exec error: ${error}`);
      //     return;
      //   }
      //   console.log(`stdout: ${stdout}`);
      //   console.log(`stderr: ${stderr}`);
      // });
  //   }
  // });

  // writeTenMillionRows(amenitiesFile, faker.generateAmenities, null, (err, results) => {
  //   if (err) {
  //     console.log("error generating data");
  //   } else {
  //     db.client.query(writeToAmenities, (err, res) => {
  //       console.log(err, res);
  //     });
  //   }
  // });

//   writeTenMillionRows(houseRulesFile, faker.generateHouseRules, null, (err, results) => {
//     if (err) {
//       console.log("error generating data");
//     } else {
//       db.client.query(writeToHouseRules, (err, res) => {
//         console.log(err, res);
//       });
//     }
//   });
// });

module.exports = {
  getDesc: (params, callback) => {
    const descriptionParams = [params.id];

    const q = `SELECT descriptions, space, access, interactions, notes
      FROM descriptions
      WHERE id = ?;`;

    db.con.query(q, descriptionParams, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  getSummary: (params, callback) => {
    const summaryParams = [params.id];
    const q = `SELECT property_type AS propertyType, title, guests, beds, bedrooms, bath
      FROM descriptions
      WHERE id = ?;`;

    db.con.query(q, summaryParams, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  getHighlights: (params, callback) => {
    const highlightParams = [params.id];
    const q = `SELECT sparkling_clean AS sparklingClean, checkin_exp AS checkinExp, great_location AS greatLocation
      FROM descriptions
      WHERE id = ?;`;

    db.con.query(q, highlightParams, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  getAmen: (params, callback) => {
    const amenitiesParams = [params.id];
    const q = `SELECT amenities
      FROM amenities a
      INNER JOIN description_to_amenities da
      ON da.amenities_id = a.id
      WHERE da.description_id = ?;`;

    db.con.query(q, amenitiesParams, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  getRules: (params, callback) => {
    const rulesParams = [params.id];
    const q = `SELECT house_rules AS houseRules
      FROM house_rules hr
      INNER JOIN description_to_house_rules dhr
      ON dhr.house_rules_id = hr.id
      WHERE dhr.description_id = ?;`;

    db.con.query(q, rulesParams, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
};
