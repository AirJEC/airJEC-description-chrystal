CREATE TABLE descriptions (
  id SERIAL,
  title TEXT NOT NULL,
  descriptions TEXT NOT NULL,
  space TEXT NOT NULL,
  access TEXT NOT NULL,
  interactions TEXT NOT NULL,
  notes TEXT,
  property_type VARCHAR(2000) NOT NULL,
  guests INT NOT NULL,
  beds INT NOT NULL, 
  bedrooms INT NOT NULL,
  bath INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE amenities (
  id SERIAL,
  amenities VARCHAR(100), 
  PRIMARY KEY (id) 
);

CREATE TABLE house_rules (
  id SERIAL, 
  house_rules VARCHAR(50), 
  PRIMARY KEY(id)    
);

CREATE TABLE description_to_amenities (
  description_id INT NOT NULL,
  amenities_id INT NOT NULL,
  FOREIGN KEY (description_id) 
    REFERENCES descriptions (id),
  FOREIGN KEY (amenities_id) 
    REFERENCES amenities (id)
);

CREATE TABLE description_to_house_rules (
  description_id INT NOT NULL,
  house_rules_id INT NOT NULL,
  FOREIGN KEY (description_id)
    REFERENCES descriptions (id), 
  FOREIGN KEY (house_rules_id)
    REFERENCES house_rules (id)
);

INSERT INTO amenities (amenities) VALUES 
  ('Wifi'), 
  ('Air Conditioning'), 
  ('Indoor fireplace'), 
  ('Dryer'), 
  ('Washer'), 
  ('Laptop friendly workplace'),
  ('TV'), 
  ('Iron'),
  ('Essentials'), 
  ('Heating'), 
  ('Free parking on premises'),
  ('Elevator'),
  ('Pool'),
  ('Hot tub'),
  ('Gym'),
  ('Kitchen'),
  ('Breakfast'),
  ('Private entrance'),
  ('Hangers'),
  ('Hair Dryer'),
  ('Shampoo'),
  ('First Aid kit'),
  ('Fire extinguisher'),
  ('Carbon monoxide detector'),
  ('Smoke detector');

INSERT INTO house_rules (house_rules) VALUES 
  ('Dangerous animals on property'),
  ('Pet(s) live on property'),
  ('Amenity limitations'),
  ('No parking on property'),
  ('Potential for noise'),
  ('Must climb stairs'),
  ('Some spaces are shared'),
  ('Surveillance or recording devices on property'),
  ('Weapons on property'); 