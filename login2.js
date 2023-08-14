const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkEmail(input) {
  const regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regEx.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email not valid");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([email, password]);

  checkLength(password, 6, 25);
  checkEmail(email);
});
