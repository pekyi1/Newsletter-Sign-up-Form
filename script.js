const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const signupCard = document.getElementById('signup-card');
const successCard = document.getElementById('success-card');
const userEmailSpan = document.getElementById('user-email');
const dismissBtn = document.getElementById('dismiss-btn');

// Regex for email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showError() {
  emailInput.classList.add('error');
  emailError.style.display = 'block';
}

function hideError() {
  emailInput.classList.remove('error');
  emailError.style.display = 'none';
}

function handleSubmit(e) {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (emailValue === '' || !validateEmail(emailValue)) {
    showError();
  } else {
    // Valid submission
    hideError();
    userEmailSpan.textContent = emailValue;

    // Toggle cards
    signupCard.classList.add('hidden');
    successCard.classList.remove('hidden');
  }
}

function handleDismiss() {
  // Reset form
  form.reset();
  hideError();

  // Toggle cards back
  successCard.classList.add('hidden');
  signupCard.classList.remove('hidden');
}

// Event Listeners
form.addEventListener('submit', handleSubmit);

// Clear error on input
emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('error')) {
    hideError();
  }
});

dismissBtn.addEventListener('click', handleDismiss);
