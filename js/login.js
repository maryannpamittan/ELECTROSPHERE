// js/login.js
const firebaseConfig = {
  apiKey: "AIzaSyBvZVUW1xG7uoeHO19bESOQRQCYuPDOzRI",
  authDomain: "kolbs-website.firebaseapp.com",
  projectId: "kolbs-website",
  storageBucket: "kolbs-website.firebasestorage.app",
  messagingSenderId: "297055725374",
  appId: "1:297055725374:web:9d5bfc9e2ea89427d86e6f"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginForm = document.getElementById('login-form');
const resetLink = document.getElementById('reset-link');

// Log In user
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Login successful!');
      window.location.href = 'dashboard.html'; // Redirect after login
    })
    .catch(error => {
      alert('Wrong email or password. Try again');
    });
});

// Forgot password
resetLink.addEventListener('click', () => {
  const email = prompt("Enter your registered email address:");
  if (email) {
    auth.sendPasswordResetEmail(email)
      .then(() => {
        alert('Password reset email sent.');
      })
      .catch(error => {
        alert('wrong credential');
      });
  }
});
