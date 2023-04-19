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
    .send("YOUR_SERVICE_ID", "YOUR_NEWSLETTER_TEMPLATE_ID", params)
    .then(function (response) {
      
      alert("Thank you for subscribing to our newsletter!");
      document.getElementById("email").value = "";
    })

    .catch(function (error) {
      alert("An error occurred while subscribing to the newsletter. Please try again later.");
    });
}

