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