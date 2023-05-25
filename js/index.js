// Variable transitions
const formEnter = document.querySelector(".form-enter");
const formSignUp = document.querySelector(".form-sign-up");
const contentLeft = document.querySelector(".content-left");
const contentRigth = document.querySelector(".content-rigth");

// Variable icons
const iconEyeLogin = document.querySelector(".fa-eye");
const iconEyeSlashLogin = document.querySelector(".fa-eye-slash");
const iconEye = document.querySelector(".eye");
const iconEyeSlash = document.querySelector(".eye-slash");

// Variable form validation
const inputEmailLogin = document.querySelector(".input-email-login");
const inputPasswordLogin = document.querySelector(".input-password-login");
const validationEmailLogin = document.querySelector(".validation-email-login");
const validationPasswordLogin = document.querySelector(
  ".validation-password-login"
);
const inputPassword = document.querySelector(".password");
const inputEmail = document.querySelector(".email");
const inputName = document.querySelector(".name");

// Variable buttons
const subscribeBtn = document.querySelector(".subscribe-btn");
const btnToEnter = document.querySelector(".btn-to-enter");

document.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("btn-sing-up")) {
    // Class add
    formEnter.classList.add("animation");
    formSignUp.classList.add("animation-two");
    contentRigth.classList.add("animation-fourth");
    contentLeft.classList.add("animation-third");

    // Opacity
    contentLeft.style.opacity = "1";
    contentRigth.style.opacity = "1";
    formEnter.style.opacity = "0";
    formSignUp.style.opacity = "0";

    // Z-index
    contentLeft.style.zIndex = "3";
    contentRigth.style.zIndex = "2";
    formSignUp.style.zIndex = "0";
    formEnter.style.zIndex = "0";
  } else if (element.classList.contains("btn-sing-in")) {
    // Class remove
    formEnter.classList.remove("animation");
    formSignUp.classList.remove("animation-two");
    contentRigth.classList.remove("animation-fourth");
    contentLeft.classList.remove("animation-third");

    // Opacity
    formEnter.style.opacity = "1";
    formSignUp.style.opacity = "1";
    contentLeft.style.opacity = "0";
    contentRigth.style.opacity = "0";

    // Z-index
    formEnter.style.zIndex = "3";
    formSignUp.style.zIndex = "3";
    contentLeft.style.zIndex = "0";
  }
});

// Show and hide password
const showPasswordLogin = () => {
  iconEyeSlashLogin.style.display = "block";
  inputPasswordLogin.setAttribute("type", "text");
  inputPassword.setAttribute("type", "text");
};

const removeShowPasswordLogin = () => {
  iconEyeLogin.style.display = "block";
  iconEyeSlashLogin.style.display = "none";
  inputPasswordLogin.setAttribute("type", "password");
  inputPassword.setAttribute("type", "password");
};

const showPassword = () => {
  iconEyeSlash.style.display = "block";
  inputPassword.setAttribute("type", "text");
};

const removeShowPassword = () => {
  iconEye.style.display = "block";
  iconEyeSlash.style.display = "none";
  inputPassword.setAttribute("type", "password");
};

// Form validation
const inputValidationLoginEmail = () => {
  const validationLogin = inputEmailLogin.value.trim().length > 0;

  if (validationLogin) {
    validationEmailLogin.classList.remove("error");
    validationEmailLogin.classList.add("validation-email-login");
  } else {
    validationEmailLogin.classList.add("error");
    validationEmailLogin.classList.remove("validation-email-login");
  }
};

const inputValidationLoginPasswrod = () => {
  const validationLogin = inputPasswordLogin.value.trim().length > 0;

  if (validationLogin) {
    validationPasswordLogin.classList.remove("error");
    validationPasswordLogin.classList.add("validation-password-login");
  } else {
    validationPasswordLogin.classList.add("error");
    validationPasswordLogin.classList.remove("validation-password-login");
  }
};

const inputValidationEmail = () => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputEmail.value.match(emailRegex)) {
    inputEmail.style.borderBottom = "2px solid #8758ff";
  } else {
    inputEmail.style.borderBottom = "2px solid red";
  }
};

const inputValidationPasswrod = () => {
  const mediumRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );
  if (inputPassword.value.match(mediumRegex)) {
    inputPassword.style.borderBottom = "2px solid #8758ff";
  } else {
    inputPassword.style.borderBottom = "2px solid red";
  }
};

const inputValidationName = () => {
  const regName = /^[a-zA-Z ]+ [a-zA-Z ]+$/;
  if (inputName.value.match(regName)) {
    inputName.style.borderBottom = "2px solid #8758ff";
  } else {
    inputName.style.borderBottom = "2px solid red";
  }
};

iconEyeLogin.addEventListener("click", showPasswordLogin);
iconEyeSlashLogin.addEventListener("click", removeShowPasswordLogin);
iconEye.addEventListener("click", showPassword);
iconEyeSlash.addEventListener("click", removeShowPassword);

btnToEnter.addEventListener("click", inputValidationLoginEmail);
btnToEnter.addEventListener("click", inputValidationLoginPasswrod);

subscribeBtn.addEventListener("click", inputValidationName);
subscribeBtn.addEventListener("click", inputValidationEmail);
subscribeBtn.addEventListener("click", inputValidationPasswrod);