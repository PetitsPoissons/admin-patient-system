async function editUserFormHandler(event) {
  event.preventDefault();

  // collect user_id
  const idx = window.location.toString().split('/').length-1;
  const user_id = window.location.toString().split('/')[idx];

  // collect values of form elements
  const first_name = document.querySelector('#userFirstName').value.trim();
  const last_name = document.querySelector('#userLastName').value.trim();
  const dob = document.querySelector('#userDob').value.trim();
  const ssn = document.querySelector('#userSsn').value.trim();
  const username = document.querySelector('#userUsername').value.trim();
  const activeEl = document.querySelector('#userActive');
  let active;
  if (activeEl.checked) {
    active = 1;
  }
  else {
    active = 0;
  }
  const email = document.querySelector('#userEmail').value.trim();
  const primary_phone = document.querySelector('#userPrimaryPhone').value.trim();
  const alt_phone = document.querySelector('#userAltPhone').value.trim();
  const street_address = document.querySelector('#userStreetAddress').value.trim();
  const city = document.querySelector('#userCity').value.trim();
  const state = document.querySelector('#userState').value.trim();
  const zip = document.querySelector('#userZip').value.trim();
  const license_number = document.querySelector('#userLicenseNb').value.trim();
  const license_type = document.querySelector('#userLicenseType').value.trim();
  const license_expiration = document.querySelector('#userLicenseExpiration').value.trim();
  const npi_number = document.querySelector('#userNpiNb').value.trim();

  // build the PUT request
  const response = await fetch(`/api/users/${user_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      first_name,
      last_name,
      dob,
      ssn,
      username,
      active,
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
    document.location.replace(`/users/${user_id}`);
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#user-form').addEventListener('submit', editUserFormHandler);