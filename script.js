const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const card = document.getElementById('signup-card');
const successMessage = document.getElementById('success-message');
const dismissBtn = document.getElementById('dismiss-btn');
const userEmailSpan = document.getElementById('user-email');

// Email Regex Validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showError() {
  emailInput.classList.add('error');
  emailError.style.display = 'block';
  emailInput.setAttribute('aria-invalid', 'true');
}

function clearError() {
  emailInput.classList.remove('error');
  emailError.style.display = 'none';
  emailInput.setAttribute('aria-invalid', 'false');
}
