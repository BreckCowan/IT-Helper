document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  // Create an object with the form data
  var formData = {
    name: name,
    phone: phone,
    email: email,
    date: date,
    time: time
  };

  // Send the form data to the server-side script using AJAX or fetch API
  // Replace 'server-script-url' with the actual URL of your server-side script
  fetch('server-script-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(function(response) {
    if (response.ok) {
      // Reset the form after successful submission
      document.getElementById('bookingForm').reset();
      alert('Your booking request has been submitted successfully. We will contact you soon.');
    } else {
      throw new Error('An error occurred while submitting the form.');
    }
  })
  .catch(function(error) {
    console.error(error);
    alert('Sorry, there was an error submitting the form. Please try again later.');
  });
});
