const registerForm = document.querySelector('#register-form');
const loginForm = document.querySelector('#login-form');
const messageDiv = document.querySelector('#message');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;
  
  fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Registration failed');
    }
  })
  .then(data => {
    const {id, token} = data;
    messageDiv.innerHTML = `Registration successful. ID: ${id}, Token: ${token}`;
    messageDiv.classList.remove('error');
  
  })
  .catch(error => {
    messageDiv.innerHTML = error.message;
    messageDiv.classList.add('error');
  });
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  
  fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Login failed');
    }
  })
  .then(data => {
    const {token} = data;
    messageDiv.innerHTML = `Login successful. Token: ${token}`;
    messageDiv.classList.remove('error');
  })
  .catch(error => {
    messageDiv.innerHTML = error.message;
    messageDiv.classList.add('error');
  });
});






// Get a reference to the form and the output element
      const form = document.getElementById('example-form');
      const output = document.getElementById('api-response');
      
      // Define the URL of the API endpoint to make the POST request to
      const url = 'https://reqres.in/api/users';
      
      // Define the headers for the POST request
      const headers = {
        'Content-Type': 'application/json'
      };
      
      // Define the function to handle the form submission
      function handleSubmit(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Get the values of the form inputs
        const name = form.elements.name.value;
        const job = form.elements.job.value;
        
        // Define the data to send in the POST request body
        const data = {
          name: name,
          job: job
        };
        
        // Define the options for the fetch request
        const options = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
        };
        
        // Send the fetch request to the API endpoint
        fetch(url, options)
          .then(response => response.json())
          .then(data => {
            // Stringify the response data and display it in the output element
            output.textContent = JSON.stringify(data, null, 2);
          })
          .catch(error => {
            // Handle any errors that occur during the fetch request
            console.error(error);
          });
      }
      
      // Attach the handleSubmit function to the form's submit event
      form.addEventListener('submit', handleSubmit);