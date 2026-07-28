import { showToast } from '../components/Toast.js';

export function initAuthPage() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm) {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Email Validation
      if (!emailInput.value || !validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address or phone number.');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Password Validation
      if (!passwordInput.value || passwordInput.value.length < 4) {
        showError(passwordInput, 'Your password must contain between 4 and 60 characters.');
        isValid = false;
      } else {
        clearError(passwordInput);
      }

      if (isValid) {
        // Save session state simulation
        localStorage.setItem('netflix_user', JSON.stringify({ email: emailInput.value, loggedIn: true }));
        showToast('Sign in successful! Redirecting to Netflix...');
        setTimeout(() => {
          window.location.href = '../index.html';
        }, 1500);
      }
    });
  }

  if (signupForm) {
    const nameInput = document.getElementById('signupName');
    const emailInput = document.getElementById('signupEmail');
    const passwordInput = document.getElementById('signupPassword');

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (!nameInput.value || nameInput.value.trim().length < 2) {
        showError(nameInput, 'Please enter your name.');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      if (!emailInput.value || !validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      if (!passwordInput.value || passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters.');
        isValid = false;
      } else {
        clearError(passwordInput);
      }

      if (isValid) {
        localStorage.setItem('netflix_user', JSON.stringify({ email: emailInput.value, name: nameInput.value, loggedIn: true }));
        showToast('Account created successfully! Welcome to Netflix.');
        setTimeout(() => {
          window.location.href = '../index.html';
        }, 1500);
      }
    });
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showError(input, message) {
  input.classList.add('error');
  const errorHint = input.parentElement.querySelector('.error-hint');
  if (errorHint) {
    errorHint.textContent = message;
    errorHint.classList.add('visible');
  }
}

function clearError(input) {
  input.classList.remove('error');
  const errorHint = input.parentElement.querySelector('.error-hint');
  if (errorHint) {
    errorHint.classList.remove('visible');
  }
}

// Auto-run auth setup on load
document.addEventListener('DOMContentLoaded', initAuthPage);
