// 🌗 Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter Game
let count = 0;
const counter = document.getElementById("counter");

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// ❓ FAQ Section (toggle answers)
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("open");
  });
});

// 📋 Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from refreshing
  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Name validation (at least 3 characters)
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation (min 6 chars, at least 1 number)
  const password = document.getElementById("password").value.trim();
  const passPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passPattern.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 chars and contain a number.";
    valid = false;
  }

  // If all validations pass
  if (valid) {
    document.getElementById("successMessage").textContent = "✅ Form submitted successfully!";
    document.getElementById("signupForm").reset();
  }
});
