// #########      newsletter form



  // JavaScript code to handle newsletter subscription form

function subscribeToNewsletter() {
    // Validate input
  var email = document.getElementById("email").value;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Send email
  var params = {
    email_id: email
  };

  emailjs
    .send("service_mpp3rjc", "template_rir8bpk", params)
    .then(function (response) {
    // Display success message to user
    alert("Thank you for subscribing to our newsletter!");

    // Clear form fields
    document.getElementById("email").value = "";
    })

    .catch(function (error) {
    // Handle error
    if (error.status >= 400) {
    alert("An error occurred. Please try again later.");
    } else {
        alert("An unexpected error occurred. Please try again later.");
    }
    });
}

