const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airjec');

const descriptionSchema = new mongoose.Schema({
  id: Number,
  title: String,
  descriptons: String,
  space: String,
  access: String,
  interactions: String,
  notes: String,
  property_type: String,
  guests: Number,
  beds: Number,
  bedrooms: Number,
  bath: Number,
});

const DescriptionModel = mongoose.model('description', descriptionSchema);

const firstInstance = new DescriptionModel({
  id: 567,
  title: 'this is the listing title',
  descriptons: 'this is the listing description',
  space: 'this is the space',
  access: 'this is access',
  interactions: 'these are the interactions with host',
  notes: 'notes',
  property_type: 'whole house',
  guests: 6,
  beds: 4,
  bedrooms: 3,
  bath: 3,
});

// refactor to insert randomly generated data into csv

// import the csv into the mongo collection

firstInstance.save((err, small) => {
  if (err) {
    console.log('an error occurred trying to save to db');
  } else if (small) {
    console.log('successfully saved to db');
  }
});

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connection opened');
});
