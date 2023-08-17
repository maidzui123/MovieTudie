import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Scroll header color change
function changeHeaderBg() {
  var headerOuter = document.getElementById("header_outer");
  var scrollValue = window.scrollY;
  if (scrollValue < 150) {
    headerOuter.classList.remove("scroll-active");
  } else {
    headerOuter.classList.add("scroll-active");
  }
}

window.addEventListener("scroll", changeHeaderBg);

// Check Sign In
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    document.getElementById("dropdownAccount").classList.remove("is-signin");
    const displayName = user.displayName;
    document.getElementById("accountBtn").innerHTML = "Hi, " + displayName
  } else {
    // User is signed out
    document.getElementById("signinBtnDropdown").classList.remove("is-signin");
    // ...
  }
});

// Log out
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.reload()

    })
    .catch((error) => {
      // An error happened.
    });
});
