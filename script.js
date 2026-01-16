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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (emailValue === '' || !validateEmail(emailValue)) {
    showError();
  } else {
    // Valid submission
    clearError();
    userEmailSpan.textContent = emailValue;

    // Switch views
    card.style.display = 'none';
    successMessage.classList.remove('hidden');
  }
});

// Clear error on input
emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('error')) {
    clearError();
  }
});

dismissBtn.addEventListener('click', () => {
  // Reset everything
  successMessage.classList.add('hidden');
  card.style.display = 'flex';
  form.reset();
  clearError();
});
