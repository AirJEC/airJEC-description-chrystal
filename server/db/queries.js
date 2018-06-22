const writeToDatabase = `
  COPY descriptions (title, descriptions, space, access, interactions, notes, property_type, guests, beds, bedrooms, bath) FROM '/Users/chrystalzou/hackreactor/airjec/airjec-description-chrystal/server/db/descriptions.csv' (DELIMITER '|');
`;

module.exports = {
  writeToDatabase,
};
