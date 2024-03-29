const buttonEl = document.getElementById("button");
const nameErrorEl = document.getElementById("name-error");
const passwordErrorEl = document.getElementById("password-error");
const emailErrorEl = document.getElementById("email-error");
const phoneErrorEl = document.getElementById("phone-error");

// Name error
function nameError() {
  nameErrorEl.textContent =
    "❌ name should contain only alphabet & min length of 6";
  nameErrorEl.style.color = "red";
}

// Name success
function nameSuccess() {
  nameErrorEl.textContent = "✅ Constraint satisfied";
  nameErrorEl.style.color = "green";
}

// password Error
function passwordError() {
  passwordErrorEl.textContent = "Password must be at least 6 characters long";
  passwordErrorEl.style.color = "red";
}

// password Success
function passwordSuccess() {
  passwordErrorEl.textContent = "✅ Constraint satisfied";
  passwordErrorEl.style.color = "green";
}

// email Error
function emailError() {
  console.log("error");
  emailErrorEl.textContent = "Invalid email address";
  emailErrorEl.style.color = "red";
}

// email Success
function emailSuccess() {
  emailErrorEl.textContent = "✅ Constraint satisfied";
  emailErrorEl.style.color = "green";
}

// phone Error
function phoneError() {
  console.log("error");
  phoneErrorEl.textContent = "Invalid phone no";
  phoneErrorEl.style.color = "red";
}

// phone Success
function phoneSuccess() {
  phoneErrorEl.textContent = "✅ Constraint satisfied";
  phoneErrorEl.style.color = "green";
}
///////////////////////////////////////////////////////////////

// Name Validation
function isValidUsername(str) {
  let alphabetRegex = /^[a-zA-Z]+$/;
  return str.length > 6 && alphabetRegex.test(str);
}

// Email Validation
function isValidEmail(emailId) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(emailId);
}

// Phone Validation
function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}
//////////////////////////////////////////////////////////////

// onSubmit
buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  // Name Check & action
  const nameEl = document.getElementById("name").value;
  isValidUsername(nameEl) ? nameSuccess() : nameError();

  //  Password Check & Action
  const passwordEl = document.getElementById("password").value;
  passwordEl.length < 6 ? passwordError() : passwordSuccess();

  // Email Check & Action
  const emailEl = document.getElementById("email").value;
  isValidEmail(emailEl) ? emailSuccess() : emailError();

  // Phone Check & Action
  const phoneEl = document.getElementById("phone").value;
  console.log(isValidPhone(phoneEl));
  isValidPhone(phoneEl) ? phoneSuccess() : phoneError();
});
