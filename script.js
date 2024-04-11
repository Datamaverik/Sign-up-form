const form = document.getElementById("formElement");

const email = document.querySelector(".emailInput");
const password = document.querySelector(".pass");
const rePassword = document.querySelector(".rePass");
const firstName = document.querySelector(".fName");
const lastName = document.querySelector(".lName");
const phoneNumber = document.querySelector(".num");

const emailError = document.getElementById("email");
const passError = document.getElementById("password");
const rePassError = document.getElementById("confirmPassword");
const fNameError = document.getElementById("firstName");
const lNameError = document.getElementById("lastName");
const numError = document.getElementById("phoneNumber");

document
  .querySelector(".submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (!email.checkValidity()) {
      emailError.textContent = "Enter valid email!";
    } else {
      emailError.textContent = "";
    }

    if (password.value !== rePassword.value) {
      password.classList.add("isInValid");
      rePassword.classList.add("isInValid");
      passError.textContent = "Passwords do not match!";
      rePassError.textContent = "Passwords do not match!";
    } else {
      password.classList.remove("isInValid");
      rePassword.classList.remove("isInValid");
      passError.textContent = "";
      rePassError.textContent = "";
    }

    if (!firstName.checkValidity()) {
      fNameError.textContent = "The field is required";
    } else {
      fNameError.textContent = "";
    }

    if (!lastName.checkValidity()) {
      lNameError.textContent = "The filed is required";
    } else {
      lNameError.textContent = "";
    }

    if (phoneNumber.value.toString().length !== 10) {
      numError.textContent = "Enter a valid phone number!";
    } else {
      numError.textContent = "";
    }
  });

function changeTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  const currentTheme = root.className === "dark" ? "dark" : "light";
  root.className = newTheme;
  const themeButton = document.querySelector(".change-theme");
  themeButton.textContent = currentTheme;
}

document.querySelector(".change-theme").addEventListener("click", changeTheme);
