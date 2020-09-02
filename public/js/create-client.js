async function createClientFormHandler(event) {
  event.preventDefault();

  // collect values of form elements
  const first_name = document.querySelector('#clientFirstName').value.trim();
  const last_name = document.querySelector('#clientLastName').value.trim();
  const active = document.querySelector('#clientActive').value;
  const dob = document.querySelector('#clientDob').value.trim();
  const ssn = document.querySelector('#clientSsn').value.trim();
  const email = document.querySelector('#clientEmail').value.trim();
  const primary_phone = document.querySelector('#clientPrimaryPhone').value.trim();
  const alt_phone = document.querySelector('#clientAltPhone').value.trim();
  const street_address = document.querySelector('#clientStreetAddress').value.trim();
  const city = document.querySelector('#clientCity').value.trim();
  const state = document.querySelector('#clientState').value.trim();
  const zip = document.querySelector('#clientZip').value.trim();

  // build the PUT request
  const response = await fetch(`/api/clients`, {
    method: 'POST',
    body: JSON.stringify({
      first_name,
      last_name,
      active,
      dob,
      ssn,
      email,
      primary_phone,
      alt_phone,
      street_address,
      city,
      state,
      zip
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/clients');
  }
}

document.querySelector('#create-client-form').addEventListener('submit', createClientFormHandler);