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

// const DescriptionModel = mongoose.model('description', descriptionSchema);

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('connection opened');
// });

module.exports = {
  // createData,
  // readData,
  // updateData,
  // deleteData,
  db,
};