import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import Toasty from "./toast.js";

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
  const t1 = new Toasty(toastHTMLElement, toastContent);
  if (
    signUpUsername.value.trim().length == 0 ||
    signUpEmail.value.trim().length == 0 ||
    signUpPass.value.trim().length == 0 ||
    signUpConfirmPassword.value.trim().length == 0
  ) {
    t1.showAlert("Không được để trống!", "red");
  } else if (signUpPass.value.trim().length < 8) {
    t1.showAlert("Mật khẩu phải có ít nhất 8 kí tự!", "red");
  } else if (!signUpPass.value.trim().match(vietThuong)) {
    t1.showAlert("Mật khẩu phải có ít nhất 1 kí tự viết thường!", "red")
  } else if (!signUpPass.value.trim().match(vietHoa)) {
    t1.showAlert("Mật khẩu phải có ít nhất 1 kí tự viết in hoa!", "red")
  } else if (!signUpPass.value.trim().match(chuSo)) {
    t1.showAlert("Mật khẩu phải có ít nhất 1 kí tự chữ số!", "red")
  } else if (signUpPass.value.trim() != signUpConfirmPassword.value.trim()) {
    t1.showAlert("Mật khẩu không khớp!", "red")
  } else {
    createUserWithEmailAndPassword(auth, emailValueSU, passwordValueSU)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        t1.showAlert("Đăng ký thành công!", "green")
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        t1.showAlert("Đã xảy ra lỗi!", "red")
        // console.log(errorMessage);
        // ..
      });
  }
});
