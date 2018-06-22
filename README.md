# airjec-description-chrystal

The schema is not automatically created for you. You need to enter the pg shell in order to access it and run the file postgresschema.sql in order to create it. Connect to the pg shell and create the database by executing the following command:

psql postgres
CREATE DATABASE airjec_description;
/c airjec_description;

Then exit out of the pg shell, and create your tables by executing the following command:

psql airjec_description < ./server/db/postgresschema.sql

Your tables will be created and populated with the relevant data.