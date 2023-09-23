import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
  collection,
  onSnapshot,
  query,
  addDoc,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import Toasty from "./toast.js";
import db from "./index.js"

const signUpEmail = document.getElementById("signup-email");
const signUpUsername = document.getElementById("signup-username");
const signUpPass = document.getElementById("signup-password");
const signUpConfirmPassword = document.getElementById("signup-confirm");
const signUpBtn = document.getElementById("signup-btn");
const toastHTMLElement = document.getElementById("toast");
const toastContent = document.getElementById("toast-content");
const auth = getAuth();

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var emailValueSU = signUpEmail.value;
  var passwordValueSU = signUpPass.value;
  let vietThuong = /[a-z]/g;
  let vietHoa = /[A-Z]/g;
  let chuSo = /[0-9]/g;
  const signUpToast = new Toasty(toastHTMLElement, toastContent);
  if (
    signUpUsername.value.trim().length == 0 ||
    signUpEmail.value.trim().length == 0 ||
    signUpPass.value.trim().length == 0 ||
    signUpConfirmPassword.value.trim().length == 0
  ) {
    signUpToast.showAlert("Something still empty :(", "red");
  } else if (signUpPass.value.trim().length < 8) {
    signUpToast.showAlert("Password must be at least 8 characters :(", "red");
  } else if (!signUpPass.value.trim().match(vietThuong)) {
    signUpToast.showAlert("Password must have at least 1 lowercase character :(", "red")
  } else if (!signUpPass.value.trim().match(vietHoa)) {
    signUpToast.showAlert("Password must have at least 1 uppercase character :(", "red")
  } else if (!signUpPass.value.trim().match(chuSo)) {
    signUpToast.showAlert("Password must have at least 1 alphanumeric character :(", "red")
  } else if (signUpPass.value.trim() != signUpConfirmPassword.value.trim()) {
    signUpToast.showAlert("Password isn't match :(", "red")
  } else {
    createUserWithEmailAndPassword(auth, emailValueSU, passwordValueSU)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: signUpUsername.value
        }).then(() => {
          async function signUp() {
            console.log(user.uid)
            await setDoc(doc(db, "Users", user.uid), dataUser);
            signUpToast.showAlert("Register Successful!", "green")
            await new Promise(resolve => setTimeout(resolve, 1000));
            window.location.href = 'signin.html'
          }
          signUp();
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          signUpToast.showAlert("Something went wrong when update :(", "red")
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        signUpToast.showAlert("Something went wrong :(", "red")
        console.log(errorMessage);
        // ..
      });
  }
});
