INSERT INTO `Access` (`access_id`,`access_type`,`access_desc`,`createdAt`,`updatedAt`)
VALUES (1,'superuser','complete access throughout','2020-08-27 07:02:33','2017-08-27 07:02:33');
INSERT INTO `Access` (`access_id`,`access_type`,`access_desc`,`createdAt`,`updatedAt`)
VALUES (2,'administrator','access and edit all data, except for access privileges and data related to security and authentication','2020-08-27 07:02:33','2017-08-27 07:02:33');
INSERT INTO `Access` (`access_id`,`access_type`,`access_desc`,`createdAt`,`updatedAt`)
VALUES (3,'clinician','access and edit own clients only (documentation, notes, billing, and reports)','2020-08-27 07:02:33','2017-08-27 07:02:33');
INSERT INTO `Access` (`access_id`,`access_type`,`access_desc`,`createdAt`,`updatedAt`)
VALUES (4,'basic','access and edit user, client descriptive data as well diagnosis and procedure libraries but cannot see any data related to clinical interventions (documentation, notes and reports on clients)','2020-08-27 07:02:33','2017-08-27 07:02:33');
INSERT INTO `Access` (`access_id`,`access_type`,`access_desc`,`createdAt`,`updatedAt`)
VALUES (5,'biller','manage billing for all clients, but cannot see any data related to clinical interventions (documentation, notes and reports on clients)','2020-08-27 07:02:33','2017-08-27 07:02:33');

INSERT INTO User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000000, 'bdanby0', 'AUNllq85Yd', 'bdanby0@oaic.gov.au', 'Bette-ann', 'Danby', '1997-08-06 19:31:54', '479-06-5306', '210-195-6478', '405-693-3497', '914 Mifflin Alley', 'San Antonio', 'Texas', '78235', 5, true, null, null, null, null);
insert into User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000001, 'ndunstall1', 'IZ2hAcUCJv', 'ndunstall1@engadget.com', 'Niko', 'Dunstall', '1962-07-27 10:03:06', '865-02-6672', '253-442-0902', '901-463-0592', '53 Knutson Crossing', 'Olympia', 'Washington', '98516', 3, false, 'aBMdiiaZ', 'ayhokxwvrqkxdhwo', '1952-02-19 16:02:31', null);
insert into User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000002, 'creavell2', 'GO13UtwSa1cT', 'creavell2@nhs.uk', 'Corly', 'Reavell', '1966-01-09 15:23:38', '227-99-6149', '228-649-0814', null, '38 Everett Junction', 'Biloxi', 'Mississippi', '39534', 4, false, null, null, null, null);
insert into User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000003, 'mcraig3', 'ir1kcqJjbM', 'mcraig3@accuweather.com', 'Marc', 'Craig', '1962-02-13 06:31:58', '738-35-3850', '502-851-9211', '559-892-8651', '3866 Eggendart Place', 'Louisville', 'Kentucky', '40287', 1, true, 'ZQ6Snx0k', 'cojzpbipdrvfosxx', '1997-05-04 07:53:28', null);
insert into User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000004, 'sborwick4', 'O7a2Ky', 'sborwick4@taobao.com', 'Salli', 'Borwick', '1996-08-15 11:21:58', '734-37-9855', '937-503-3302', '256-470-8352', '97 Surrey Parkway', 'Dayton', 'Ohio', '45432', 5, false, 'mQcMZcwv', 'wvmefxxtwyepddkc', '1992-01-27 03:39:47', null);
insert into User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000005, 'lcolwell5', 'jgZldLJxj', 'lcolwell5@fc2.com', 'Lillis', 'Colwell', '1956-11-13 08:01:16', '129-17-4573', '860-370-4967', '206-292-9279', '0857 Erie Crossing', 'West Hartford', 'Connecticut', '06127', 2, false, '9crbPRS4', 'cqxuujanuzguhbpf', '1979-12-26 20:00:12', null);
insert into User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000006, 'rpetras6', 'hE0tWCwqyw', 'rpetras6@cam.ac.uk', 'Rosy', 'Petras', '1976-12-04 09:23:52', '705-72-4946', '423-642-6252', null, '4115 Clyde Gallagher Court', 'Chattanooga', 'Tennessee', '37410', 3, true, '0doHNhHU', 'ezdfwqbpihzzrthf', '1955-06-26 16:01:00', null);
insert into User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000007, 'jlowther7', 't7c5ydeQu7N', 'jlowther7@google.co.uk', 'John', 'Lowther', '1984-11-14 01:14:42', '453-98-0748', '202-124-3484', '518-723-4092', '55 Sheridan Drive', 'Silver Spring', 'Maryland', '20904', 1, true, null, null, null, null);
insert into User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000008, 'ckelling8', 'SuFCcIKSELCX', 'ckelling8@cargocollective.com', 'Clareta', 'Kelling', '1986-03-05 12:16:40', '219-19-9112', '712-779-4500', null, '173 Lillian Place', 'Sioux City', 'Iowa', '51110', 4, false, 'c9iLofyG', 'mzebukevgscfqmvg', '1967-02-14 03:43:58', null);
insert into User (user_id, username, password, email, first_name, last_name, dob, ssn, primary_phone, alt_phone, street_address, city, state, zip, access_id, active, license_number, license_type, license_expiration, npi_number) values (5f48359bfc13ae304e000009, 'asimnett9', 'ODSh9fyToEGZ', 'asimnett9@businessinsider.com', 'Ashbey', 'Simnett', '1971-06-14 00:20:23', '771-43-6832', '713-582-2090', null, '3 Washington Avenue', 'Houston', 'Texas', '77223', 1, true, 'k0ujtfPm', 'hyjpmgjyfewqxajc', '1969-08-02 08:36:04', null);

