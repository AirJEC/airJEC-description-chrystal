const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('../model/model.js');

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

app.listen(PORT, () => {
  console.log('Listening to ', PORT);
});
