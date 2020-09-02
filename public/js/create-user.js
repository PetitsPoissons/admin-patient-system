function generateRandomStr() {
  const length = 8;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomStr = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    randomStr += charset.charAt(Math.floor(Math.random() * n));
  }
  return randomStr;
}

async function createUserFormHandler(event) {
  event.preventDefault();
  console.log('inside create-user.js');

  // collect values of form elements
  const first_name = document.querySelector('#userFirstName').value.trim();
  const last_name = document.querySelector('#userLastName').value.trim();
  const dob = document.querySelector('#userDob').value.trim();
  const ssn = document.querySelector('#userSsn').value.trim();
  const email = document.querySelector('#userEmail').value.trim();
  const primary_phone = document.querySelector('#userPrimaryPhone').value.trim();
  const alt_phone = document.querySelector('#userAltPhone').value.trim();
  const street_address = document.querySelector('#userStreetAddress').value.trim();
  const city = document.querySelector('#userCity').value.trim();
  const state = document.querySelector('#userState').value.trim();
  const zip = document.querySelector('#userZip').value.trim();
  const license_number = document.querySelector('#userLicenseNb').value.trim();
  const license_type = document.querySelector('#userLicenseType').value.trim();
  const npi_number = document.querySelector('#userNpiNb').value.trim();

  // get license_expiration
  let license_expiration = document.querySelector('#userLicenseExpiration').value.trim();
  if (!license_expiration) {
    license_expiration = null;
  }
  
  // get active status
  let active = false;
  if (document.querySelector('#userActive').value === 'on') {
    active = true;
  }
  // get access_id
  const access_type = document.querySelector('#userAccessType').value;
  let access_id;
  switch(access_type) {
    case 'superuser':
      access_id = 1;
      break;
    case 'administrator':
      access_id = 2;
      break;
    case 'clinician':
      access_id = 3;
      break;
    case 'basic':
      access_id = 4;
      break;
    case 'biller':
      access_id = 5;
      break;
  }
  // generate a random username and password
  const username = generateRandomStr();
  const password = generateRandomStr();
  

  // build the PUT request
  const response = await fetch(`/api/users`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      first_name,
      last_name,
      active,
      access_id,
      dob,
      ssn,
      email,
      primary_phone,
      alt_phone,
      street_address,
      city,
      state,
      zip,
      license_number,
      license_type,
      license_expiration,
      npi_number
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/users');
  }
}

document.querySelector('#create-user-form').addEventListener('submit', createUserFormHandler);