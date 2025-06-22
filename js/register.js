// js/register.js

// Initialize Firebase (no import needed because we use <script> tags in HTML)
const firebaseConfig = {
  apiKey: "AIzaSyBvZVUW1xG7uoeHO19bESOQRQCYuPDOzRI",
  authDomain: "kolbs-website.firebaseapp.com",
  projectId: "kolbs-website",
  storageBucket: "kolbs-website.appspot.com",
  messagingSenderId: "297055725374",
  appId: "1:297055725374:web:9d5bfc9e2ea89427d86e6f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const studentNumber = document.getElementById('studentNumber').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return database.ref('users/' + user.uid).set({
        name: name,
        studentNumber: studentNumber,
        email: email
      });
    })
    .then(() => {
      alert('Registration successful! Please log in.');
      registerForm.reset();
      window.location.href = 'login.html';
    })
    .catch((error) => {
      alert('The email address is already in use by another account.');
    });
});