const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airjec');

const descriptionsSchema = new mongoose.Schema({
  id: {type: [Number], index: true},
  title: String,
  descriptions: String,
  space: String,
  access: String,
  interactions: String,
  notes: String,
  property_type: String,
  guests: Number,
  bed: Number,
  bedrooms: Number,
  bath: Number,
});
const Description = mongoose.model('Description', descriptionsSchema);

const amenitiesSchema = new mongoose.Schema({
  id: {type: [Number], index: true},
  amenities: String,
});
const Amenity = mongoose.model('Amenity', amenitiesSchema);

const houseRulesSchema = new mongoose.Schema({
  id: {type: [Number], index: true},
  houserules: String,
});
const HouseRule = mongoose.model('HouseRule', houseRulesSchema)

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));

const createData = (id, title, descriptions, space, access, interactions, notes, property_type, guests, beds, bedrooms, bath) => {
  console.time("Create Data");
  let property = new Description({
    "id" : 98,
    "title" : "impedit ipsa quia",
    "descriptions" : "non sequi magni",
    "space" : "dolores",
    "access" : "quaerat",
    "interactions" : "in rerum laboriosam",
    "notes" : "dicta quia ut",
    "property_type" : "entire_house",
    "guests" : 10,
    "beds" : 6,
    "bedrooms" : 5,
    "bath" : 4,
  });
  property.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.timeEnd("Create Data");
    }
  });
};

const readData = (id) => {
  console.time("Read Data");
  Description.findOne({id: id}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.timeEnd("Read Data");
    }
  })
};

const updateData = (id, field, value) => {
  console.time("Update Data");
  Description.find({id: id}, (err, description) => {
    if (err) {
      console.log(err);
    } else {
      description[0].field = value;
      description[0].save((err) => {
        if (err) {
          console.log(err);
        }
        console.timeEnd("Update Data");
      });
    }
  });
};

const deleteData = (id) => {
  console.time("Delete Data");
  Description.deleteOne({id: id}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.timeEnd("Delete Data");
    }
  });
};

module.exports = {
  createData,
  readData,
  updateData,
  deleteData,
  db,
  Amenity,
  HouseRule,
};
