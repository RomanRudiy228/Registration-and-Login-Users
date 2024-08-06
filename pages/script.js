/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const signUpButton = document.getElementById("sign-Up");
const signInButton = document.getElementById("sign-In");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.getElementById("signIn").addEventListener("click", function() {
  var emailInput = document.querySelector('.sign-in-container input[type="email"]');
  var passwordInput = document.querySelector('.sign-in-container input[type="password"]');
  var emailError = document.getElementById("signInEmailError");
  var passwordError = document.getElementById("signInPasswordError");
  var emailError1 = document.getElementById("signInEmailError1");
  var passwordError1 = document.getElementById("signInPasswordError1");

  // Перевірка електронної пошти
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailError.textContent = "Please enter your email";
    emailError.classList.add("active");
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("error");
    emailError1.textContent = "Please enter a valid email address";
    emailError1.classList.add("active");
  } else {
    emailInput.classList.remove("error");
    emailError.classList.remove("active");
    emailError1.classList.remove("active");
  }

  // Перевірка пароля
  var passwordRegex = /^.{8,}$/;
  if (passwordInput.value === "") {
      passwordInput.classList.add("error");
      passwordError.textContent = "Please enter a password";
      passwordError.classList.add("active");
      hasError = true;
  } else if (!passwordRegex.test(passwordInput.value)) {
      passwordInput.classList.add("error");
      passwordError1.textContent = "Password must be at least 8 characters long and contain at least one latin letter and one digit";
      passwordError1.classList.add("active");
      hasError = true;
  } else {
      passwordInput.classList.remove("error");
      passwordError.classList.remove("active");
      passwordError1.classList.remove("active");
  }

  // Виклик функції для перевірки та перенаправлення
  validateAndRedirect();
});

document.getElementById("signUp").addEventListener("click", function() {
  var nameInput = document.querySelector('.sign-up-container input[type="text"]');
  var emailInput = document.querySelector('.sign-up-container input[type="email"]');
  var passwordInput = document.querySelector('.sign-up-container input[type="password"]');
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var emailError1 = document.getElementById("emailError1");
  var passwordError1 = document.getElementById("passwordError1");

  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameError.classList.add("active");
  } else {
    nameInput.classList.remove("error");
    nameError.classList.remove("active");
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailError.textContent = "Please enter your email";
    emailError.classList.add("active");
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("error");
    emailError1.textContent = "Please enter a valid email address";
    emailError1.classList.add("active");
  } else {
    emailInput.classList.remove("error");
    emailError.classList.remove("active");
    emailError1.classList.remove("active");
  }

  var passwordRegex = /^.{8,}$/;
  if (passwordInput.value === "") {
      passwordInput.classList.add("error");
      passwordError.textContent = "Please enter a password";
      passwordError.classList.add("active");
      hasError = true;
  } else if (!passwordRegex.test(passwordInput.value)) {
      passwordInput.classList.add("error");
      passwordError1.textContent = "Password must be at least 8 characters long and contain at least one latin letter and one digit";
      passwordError1.classList.add("active");
      hasError = true;
  } else {
      passwordInput.classList.remove("error");
      passwordError.classList.remove("active");
      passwordError1.classList.remove("active");
  }

  // Виклик функції для перевірки та перенаправлення
  validateAndRedirectSignUp();
});

function redirectToPage(event) {
  // Зупиняємо стандартну дію кнопки (відправку форми)
  event.preventDefault();

  window.location.href = '/src/index.html';
}

function validateAndRedirectSignUp() {
  var nameInput = document.querySelector('.sign-up-container input[type="text"]');
  var emailInput = document.querySelector('.sign-up-container input[type="email"]');
  var passwordInput = document.querySelector('.sign-up-container input[type="password"]');
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var emailError1 = document.getElementById("emailError1");
  var passwordError1 = document.getElementById("passwordError1");
  var hasError = false;

  // Перевірка імені
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameError.classList.add("active");
    hasError = true;
  } else {
    nameInput.classList.remove("error");
    nameError.classList.remove("active");
  }

  // Перевірка електронної пошти
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailError.textContent = "Please enter your email";
    emailError.classList.add("active");
    hasError = true;
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("error");
    emailError1.textContent = "Please enter a valid email address";
    emailError1.classList.add("active");
    hasError = true;
  } else {
    emailInput.classList.remove("error");
    emailError.classList.remove("active");
    emailError1.classList.remove("active");
  }

  // Перевірка пароля
  var passwordRegex = /^.{8,}$/; // Пароль повинен бути щонайменше 8 символів довжиною
  if (passwordInput.value === "") {
    passwordInput.classList.add("error");
    passwordError.textContent = "Please enter a password";
    passwordError.classList.add("active");
    hasError = true;
  } else if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.classList.add("error");
    passwordError1.textContent = "Password must be at least 8 characters long and contain at least one latin letter and one digit";
    passwordError1.classList.add("active");
    hasError = true;
  } else {
    passwordInput.classList.remove("error");
    passwordError.classList.remove("active");
    passwordError1.classList.remove("active");
  }

  // Перевірка чи є помилки перед відправкою запиту на сервер
  if (!hasError) {
    const formData = new FormData();
    formData.append('name', namesignup.value);
    formData.append('email', emailsignup.value);
    formData.append('password', passwordInput.value);

    fetch('/register', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
          throw new Error('Registration failed');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Registration error:', error.message);
    });
  }
}

function togglePassword() {
  var passwordInput = document.getElementById("passwordInput");
  var togglePasswordBtn = document.getElementById("togglePasswordBtn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.querySelector("img").src = "/pages/pngs/eye.png";
    togglePasswordBtn.querySelector("img").alt = "Hide Password";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.querySelector("img").src = "/pages/pngs/eye-slash.png";
    togglePasswordBtn.querySelector("img").alt = "Show Password";
  }
}

function togglePassword1() {
  var passwordInput = document.getElementById("passwordInputSignIn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function validateAndRedirect() {
  var emailInput = document.querySelector('.sign-in-container input[type="email"]');
  var passwordInput = document.querySelector('.sign-in-container input[type="password"]');
  var emailError = document.getElementById("signInEmailError");
  var passwordError = document.getElementById("signInPasswordError");
  var emailError1 = document.getElementById("signInEmailError1");
  var passwordError1 = document.getElementById("signInPasswordError1");
  var hasError = false;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailError.textContent = "Please enter your email";
    emailError.classList.add("active");
    hasError = true;
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("error");
    emailError1.textContent = "Please enter a valid email address";
    emailError1.classList.add("active");
    hasError = true;
  } else {
    emailInput.classList.remove("error");
    emailError.classList.remove("active");
    emailError1.classList.remove("active");
  }

  var passwordRegex = /^.{8,}$/;
  if (passwordInput.value === "") {
    passwordInput.classList.add("error");
    passwordError.textContent = "Please enter your password";
    passwordError.classList.add("active");
    hasError = true;
  } else if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.classList.add("error");
    passwordError1.textContent = "Login or password are uncorrect";
    passwordError1.classList.add("active");
    hasError = true;
  } else {
    passwordInput.classList.remove("error");
    passwordError.classList.remove("active");
    passwordError1.classList.remove("active");
  }

  if (!hasError) {
    const form = document.getElementById('signin-form');
    const formData = new FormData(form);

    fetch('/login', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
          throw new Error('Login failed');
      }
      return response.json();
    })
    
    .catch(error => {
      console.error('Login error:', error.message);
    });
  }
}

function calculatePasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) {
    strength += 1;
  }
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    strength += 1;
  }
  if (/\d/.test(password)) {
    strength += 1;
  }
  if (/[^A-Za-z0-9]/.test(password)) {
    strength += 1;
  }
  return strength;
}

function updatePasswordStrength() {
  const password = document.getElementById('passwordInput').value;
  const strength = calculatePasswordStrength(password);
  const progressBar = document.getElementById('progressBar');
  // Змінюємо класи прогрес-бара в залежності від сили пароля
  progressBar.className = 'progress-bar';
  if (strength === 1 || strength === 2) {
    progressBar.classList.add('weak');
  } else if (strength === 3) {
    progressBar.classList.add('medium');
  } else if (strength === 4) {
    progressBar.classList.add('strong');
  }
  // Зміна ширини прогрес-бара в залежності від сили пароля
  progressBar.style.width = `${strength * 25}%`;
}

const emailInput = document.querySelector('#emailInputSignIn');
const passInput = document.querySelector('#passwordInputSignIn');
const signin = document.querySelector("#signIn");

emailInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
      e.preventDefault();
      signin.click();
  }
});

passInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
      e.preventDefault();
      signin.click();
  }
});

const nameInputsignUp = document.querySelector("#namesignup");
const emailInputsignUp = document.querySelector('#emailsignup');
const passInputsignUp = document.querySelector('#passwordInput');
const signup = document.querySelector("#signUp");

nameInputsignUp.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
      e.preventDefault();
      signup.click();
  }
});

emailInputsignUp.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
      e.preventDefault();
      signup.click();
  }
});

passInputsignUp.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
      e.preventDefault();
      signup.click();
  }
});

function showAlert(message, type) {
  const alertBox = document.createElement('div');
  alertBox.className = `alert ${type}`;
  alertBox.textContent = message;

  document.body.insertBefore(alertBox, document.querySelector('form'));

  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}