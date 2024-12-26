document.getElementById("formLog").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  var email = document.getElementById("email");
  var errorMessage = document.getElementById("target");
  var emailValue = email.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  errorMessage.textContent = "";
  email.style.borderColor = "#c2d3ff";

  if (emailRegex.test(emailValue)) {
    errorMessage.textContent = "You have successfully subscribed!";
    errorMessage.style.color = "green";
  } else {
    errorMessage.textContent = "Please provide a valid email address.";
    errorMessage.style.color = "#FF5466";
    email.style.borderColor = "#FF5466";
  }
}
