import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import Toasty from "./toast.js";

const signInEmail = document.getElementById("signin-email");
const signInPass = document.getElementById("signin-password");
const signInBtn = document.getElementById("signin-btn");
const toastHTMLElement = document.getElementById("toast");
const toastContent = document.getElementById("toast-content");
const auth = getAuth();

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var emailValueSI = signInEmail.value;
  var passwordValueSI = signInPass.value;
  const f1 = new Toasty(toastHTMLElement, toastContent);
  if (
    signInEmail.value.trim().length == 0 ||
    signInPass.value.trim().length == 0
  ) {
    f1.showAlert("Không được để trống!", "red");
  } else {
    signInWithEmailAndPassword(auth, emailValueSI, passwordValueSI)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href = 'index.html'
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        f1.showAlert("Email/Password không chính xác", "red")
      });
  }
});

