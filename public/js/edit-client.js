async function editClientFormHandler(event) {
  event.preventDefault();

  // collect client_id
  const idx = window.location.toString().split('/').length-1;
  const client_id = window.location.toString().split('/')[idx];

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
  const response = await fetch(`/api/clients/${client_id}`, {
    method: 'PUT',
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
    document.location.replace(`/clients/${client_id}`);
  }
}

document.querySelector('#client-form').addEventListener('submit', editClientFormHandler);