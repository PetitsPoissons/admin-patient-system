async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    console.log(username, password)
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('*************** response', response);
    if (response.ok) {
      console.log('*************** response ok');
      document.location.replace('/');
    } else {
      console.log('*************** response NOT ok');
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);