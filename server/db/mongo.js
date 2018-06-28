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
  beds: Number,
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
    "id" : id,
    "title" : title,
    "descriptions" : description,
    "space" : space,
    "access" : access,
    "interactions" : interactions,
    "notes" : notes,
    "property_type" : property_type,
    "guests" : guests,
    "beds" : beds,
    "bedrooms" : bedrooms,
    "bath" : bath,
  });

  property.save((err) => {
    if (err) {
      console.log(err);
    }
  });
};

const readData = (id) => {
  Description.findOne({id: id}, (err) => {
    if (err) {
      console.log(err);
    }

  })
};

const updateData = (id, field, value) => {
  Description.find({id: id}, (err, description) => {
    if (err) {
      console.log(err);
    } else {
      description[0][field] = value;
      description[0].save((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
};

const deleteData = (id) => {
  Description.deleteOne({ id }, (err) => {
    if (err) {
      console.log(err);
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
