function validateForm() {
  const errorContainer = document.getElementById("errorContainer");
  errorContainer.innerHTML = "";

  // Get form input values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const nameRegex = /^[A-Za-z]{2,}$/;
  const phoneRegex = /^\d{10}$/; 

  let isValid = true;

  if (!nameRegex.test(firstName)) {
    displayError("Error: First name must contain only alphabetic characters (A-Z and a-z) and have a minimum length of two (2) characters.");
    isValid = false;
  }

  if (!nameRegex.test(lastName)) {
    displayError("Error: Last name must contain only alphabetic characters (A-Z and a-z) and have a minimum length of two (2) characters.");
    isValid = false;
  }

  if (!email) {
    displayError("Error: Please provide your email address");
    isValid = false;
  }

  if (!phoneRegex.test(phone)) {
    displayError("Error: Please provide a valid 10-digit phone number");
    isValid = false;
  }

  if (isValid) {
    const emailBody = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const subject = "Message from Contact Form";
    const mailtoLink = `mailto:mulin912@bu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  }

  return isValid;
}

function openMailbox(event) {
  event.preventDefault();


  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

   // Regular expressions for email and phone number validation
   const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
   const phoneRegex = /^\d{10}$/;
 
   // Validate email
   if (!emailRegex.test(email)) {
     alert("Invalid email address. Please enter a valid email.");
     return;
   }
 
   // Validate phone number
   if (!phoneRegex.test(phone)) {
     alert("Invalid phone number. Please enter a 10-digit phone number.");
     return;
   }
   
  const contactMethods = [];
  const emailCheckbox = document.getElementById("value1");
  const phoneCheckbox = document.getElementById("value2");

  if (emailCheckbox.checked) {
    contactMethods.push("Email");
  }

  if (phoneCheckbox.checked) {
    contactMethods.push("Phone");
  }


  const emailBody = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail Address: ${email}\nPhone Number: ${phone}\nContact Method(s): ${contactMethods.join(", ")}\n\nMessage: ${message}`;
  const subject = "Message Lin (Lynn)";
  const mailtoURL = `mailto:mulin912@bu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;


  window.open(mailtoURL);


  document.getElementById("confirmationMessage").textContent = "Email Submitted Successfully";

  return false;
}


function displayError(errorMessage) {
  const errorContainer = document.getElementById("errorContainer");
  const errorParagraph = document.createElement("p");
  errorParagraph.className = "error-message";
  errorParagraph.textContent = errorMessage;
  errorContainer.appendChild(errorParagraph);
}
