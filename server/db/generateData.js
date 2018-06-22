const faker = require('faker');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const propertyTypes = () => {
  let types = [
    'entire_house',
    'private_room',
    'shared_room',
  ];
  return types[getRandomInt(0, 2)];
}

const title = faker.random.words;
const description = faker.lorem.words;
const space = faker.random.word;
const access = faker.random.word;
const interactions = faker.random.word;
const notes = faker.random.words;
const property_type = propertyTypes;
const guests = getRandomInt;
const beds = getRandomInt;
const bedrooms = getRandomInt;
const bath = getRandomInt;

const generateDescription = () => {
  let string = "";
  for (var i = 0; i < 100000; i++) {
    string += `${title()}|${description()}|${space()}|${access()}|${interactions()}|${notes()}|${property_type()}|${guests(1, 10)}|${beds(1, 10)}|${bedrooms(1, 5)}|${bath(1, 5)}` + "\n";
  }
  return string;
};

module.exports = {
  generateDescription,
};
