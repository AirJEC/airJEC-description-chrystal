require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const model = require('../model/model.js');
const path = require('path');
const db = require('../db/postgres.js');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const redis = require('redis');
const axios = require('axios');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const REDIS_PORT = process.env.REDIS_PORT;
  const client = redis.createClient(REDIS_PORT);

  const app = express();
  const PORT = 8081;
  app.listen(PORT);

  console.log(`Worker ${process.pid} started`);
  
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use('/rooms/:id', express.static(path.resolve(__dirname, '../../client/')));
  
  let descriptionId;
  let descriptionBody;
  
  cache = (req, res, next) => {
    let request = req.params.id;
    client.get(request, (err, data) => {
      if (err) {
      } else if (data != null) {
        res.send(JSON.stringify(descriptionBody));
      } else {
        next();
      }
    }); 
  };

  app.get('/rooms/:id/description', cache, (req, res) => {
    db.readData(req.params.id, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        let amenities = [];
        let houseRules = [];
        for (let i = 0; i < results.rows.length; i++) {
          if (!amenities.includes(results.rows[i].amenities)) {
            amenities.push(results.rows[i].amenities);
          }
          if (!houseRules.includes(results.rows[i].house_rules)) {
            houseRules.push(results.rows[i].house_rules);
          }
        }
        descriptionBody = results.rows[0];
        descriptionId = descriptionBody.description_id;
        descriptionBody.amenities = amenities;
        descriptionBody.house_rules = houseRules;
        res.send(JSON.stringify(descriptionBody));
        client.set(descriptionId, JSON.stringify(descriptionBody));
      }
    });
  });

  
  app.post('/new/:id', (req, res) => {
    // if the result of querying the table for the id is null
    let r = req.params;
    db.createData(r.id, r.titleName, r.descriptions, r.space, r.access, r.interactions, r.notes, r.property_type, r.guests, r.beds, r.bedrooms, r.bath); 
  });
  
  app.put('/edit', (req, res) => {
    // handler function for editing the description of the property
    db.updateData();
  });
  
  app.delete('/delete', (req, res) => {
    // handler function for deleting a property from the database
    db.deleteData();
  });
  
  app.get('/contact', (req, res) => {
    // handler function for contacting a host in the database by getting host information
  });
}

const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json',
};


// app.get('/description', (req, res) => {
//   const paramId = req.query;
//   const storage = [];

//   model.getDesc(paramId, (descriptionErr, descriptionResult) => {
//     if (descriptionErr) {
//       return res.status(404).send(descriptionErr);
//     }

//     storage.push(descriptionResult);

//     model.getSummary(paramId, (summaryErr, summaryResult) => {
//       if (summaryErr) {
//         return res.status(404).send(summaryErr);
//       }

//       storage.push(summaryResult);

//       model.getHighlights(paramId, (highlightErr, highlightResult) => {
//         if (highlightErr) {
//           return res.status(404).send(highlightErr);
//         }

//         storage.push(highlightResult);

//         model.getAmen(paramId, (amenitiesErr, amenitiesResult) => {
//           if (amenitiesErr) {
//             return res.status(404).send(amenitiesErr);
//           }

//           storage.push(amenitiesResult);

//           model.getRules(paramId, (rulesErr, rulesResult) => {
//             if (rulesErr) {
//               return res.status(404).send(rulesErr);
//             }
//             storage.push(rulesResult);

//             res.set(headers);
//             res.status(200).send(storage);
//           });
//         });
//       });
//     });
//   });
// });


