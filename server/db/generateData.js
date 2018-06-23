const faker = require('faker');

const getRandomInt = (min, max) => {
  const mi = Math.ceil(min);
  const ma = Math.floor(max);
  return Math.floor(Math.random() * ((ma - mi) + 1)) + min;
};

const propertyTypes = () => {
  const types = [
    'entire_house',
    'private_room',
    'shared_room',
  ];
  return types[getRandomInt(0, 2)];
};

const title = faker.lorem.words;
const description = faker.lorem.words;
const space = faker.lorem.word;
const access = faker.lorem.word;
const interactions = faker.lorem.words;
const notes = faker.lorem.words;
const property_type = propertyTypes;
const guests = getRandomInt;
const beds = getRandomInt;
const bedrooms = getRandomInt;
const bath = getRandomInt;

const generateDescription = () => {
  let string = '';
  for (let i = 0; i < 10000; i++) {
    string += `${title()},${description()},${space()},${access()},${interactions()},${notes()},${property_type()},${guests(1, 10)},${beds(1, 10)},${bedrooms(1, 5)},${bath(1, 5)}\n`;
  }
  return string;
};

module.exports = {
  generateDescription,
};
