function validate() {
  const names = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;
  const submit = document.getElementById("submit");

  if (names.trim() === "") {
    showError("Name can not be empty");
    return false;
  }
  if (email.trim() === "") {
    showError("Email can not be empty");
    return false;
  }
  if (phone.trim() === "" || isNaN(phone) || phone.length !== 10) {
    showError("Phone number must be 10 digit");
    return false;
  }

  if (subject === "0") {
    showError("Select your subject");
    return false;
  }

  if (password.trim() === "") {
    showError("password can not be empty");
    return false;
  }

  if (confirmPassword.trim() === "") {
    showError("confirmPassword field can not be empty");
    return false;
  }

  if (confirmPassword !== password) {
    showError("Passord did not matched");
    return false;
  }

  if (!terms) {
    showError("Please check the box");
    return false;
  }

  alert(" Congratulations!!! Form Successfully Submitted");

  function showError(message) {
    const errorElement = document.getElementById("demo");
    errorElement.style.color = "red";
    errorElement.textContent = message;
    errorElement.style.textAlign = "center";
  }
}
