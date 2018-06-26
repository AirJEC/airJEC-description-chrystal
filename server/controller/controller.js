const express = require('express');
const bodyParser = require('body-parser');
const model = require('../model/model.js');
const path = require('path');
// const db = require(); // file depends on which database you end up choosing

const app = express();
const PORT = 8081;

const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json',
};

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/rooms/:id', express.static(path.resolve(__dirname, '../../client')));

app.get('/description', (req, res) => {
  const paramId = req.query;
  const storage = [];

  model.getDesc(paramId, (descriptionErr, descriptionResult) => {
    if (descriptionErr) {
      return res.status(404).send(descriptionErr);
    }

    storage.push(descriptionResult);

    model.getSummary(paramId, (summaryErr, summaryResult) => {
      if (summaryErr) {
        return res.status(404).send(summaryErr);
      }

      storage.push(summaryResult);

      model.getHighlights(paramId, (highlightErr, highlightResult) => {
        if (highlightErr) {
          return res.status(404).send(highlightErr);
        }

        storage.push(highlightResult);

        model.getAmen(paramId, (amenitiesErr, amenitiesResult) => {
          if (amenitiesErr) {
            return res.status(404).send(amenitiesErr);
          }

          storage.push(amenitiesResult);

          model.getRules(paramId, (rulesErr, rulesResult) => {
            if (rulesErr) {
              return res.status(404).send(rulesErr);
            }
            storage.push(rulesResult);

            res.set(headers);
            res.status(200).send(storage);
          });
        });
      });
    });
  });
});

// TODO: CRUD handler functions for different endpoints

app.post('/new', (req, res) => {
  // handler function to create a new property and its description
  // db.createData(); 
});

app.put('/edit', (req, res) => {
  // handler function for editing the description of the property
  // db.updateData();
});

app.delete('/delete', (req, res) => {
  // handler function for deleting a property from the database
  // db.deleteData();
});

app.get('/contact', (req, res) => {
  // handler function for contacting a host in the database by getting host information
});

app.listen(PORT, () => {
  console.log('Listening to ', PORT);
});
