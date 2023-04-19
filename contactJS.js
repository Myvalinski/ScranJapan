// #########      contact form


// emailJS

function sendMail() {
    // Validate input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (!name) {
      alert("Please enter your name");
      return;
    }
  
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    if (!message) {
      alert("Please enter a message");
      return;
    }
  
    // Send email
    var params = {
      from_name: name,
      email_id: email,
      message: message
    };
  

    // using ElasticEmail SMTP Server ######
    
    emailjs
        .send("service_mpp3rjc", "template_h4jbfu8", params)
        .then(function (response) {
        // Display success message to user
        alert("Success! Your message has been sent.");
  
        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
        .catch(function (error) {
        // Handle error
        if (error.status >= 400) {
        alert("An error occurred while sending the email. Please try again later.");
        } else {
            alert("An unexpected error occurred while sending the email. Please try again later.");
        }
    });
}

