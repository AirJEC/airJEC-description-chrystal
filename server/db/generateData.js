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

const amenities = [
  'Wifi',
  'Air Conditioning', 
  'Indoor fireplace', 
  'Dryer', 
  'Washer', 
  'Laptop friendly workplace',
  'TV', 
  'Iron',
  'Essentials', 
  'Heating', 
  'Free parking on premises',
  'Elevator',
  'Pool',
  'Hot tub',
  'Gym',
  'Kitchen',
  'Breakfast',
  'Private entrance',
  'Hangers',
  'Hair Dryer',
  'Shampoo',
  'First Aid kit',
  'Fire extinguisher',
  'Carbon monoxide detector',
  'Smoke detector',
];

const houseRules = [
  'Dangerous animals on property',
  'Pet(s) live on property',
  'Amenity limitations',
  'No parking on property',
  'Potential for noise',
  'Must climb stairs',
  'Some spaces are shared',
  'Surveillance or recording devices on property',
  'Weapons on property',
];

let descriptionId = 1;
let amenityId = 1;
let houseRulesId = 1;
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
    string += `${descriptionId},${title()},${description()},${space()},${access()},${interactions()},${notes()},${property_type()},${guests(1, 10)},${beds(1, 10)},${bedrooms(1, 5)},${bath(1, 5)}\n`;
    descriptionId += 1;
  }
  return string;
};

const generateAmenities = () => {
  let result = {
    string: '',
    array: [],
  };
  for (let i = 0; i < 10000; i++) {
    let property = {
      id: amenityId,
      amenities: [],
    };
    for (let k = 0; k < 5; k++) {
      let amenityIndex = getRandomInt(1, 25);
      result.string += `${amenityId}, ${amenityIndex}, ${amenities[amenityIndex - 1]}\n`;
      property.amenities.push(amenities[amenityIndex]);
    }
    result.array.push(property);
    amenityId += 1;
    console.log(amenityId);
  }
  return result;
}

const generateHouseRules = () => {
  let result = {
    string: '',
    array: [],
  };
  for (let i = 0; i < 10000; i++) {
    let property = {
      id: houseRulesId,
      houserules: [],
    };
    for (let k = 0; k < 3; k++) {
      let index = getRandomInt(1, 9);
      result.string += `${houseRulesId}, ${index}, ${houseRules[index - 1]}\n`;
      property.houserules.push(houseRules[index]);
    }
    result.array.push(property);
    houseRulesId += 1;
    console.log(houseRulesId);
  }
  return result;
}

module.exports = {
  generateDescription,
  generateAmenities,
  generateHouseRules,
};
