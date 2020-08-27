DROP DATABASE IF EXISTS shrinko_db;
CREATE DATABASE shrinko_db;
create table User (
	user_id VARCHAR(50),
	username VARCHAR(50),
	password VARCHAR(50),
	email VARCHAR(50),
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	dob DATE,
	ssn VARCHAR(50),
	primary_phone VARCHAR(50),
	alt_phone VARCHAR(50),
	street_address VARCHAR(50),
	city VARCHAR(50),
	state VARCHAR(50),
	zip VARCHAR(50),
	access_id VARCHAR(1),
	active VARCHAR(50),
	license_number VARCHAR(50),
	license_type VARCHAR(50),
	license_expiration DATE,
	npi_number VARCHAR(50)
);