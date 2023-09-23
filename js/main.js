import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import Toasty from "./toast.js";
import db from "./index.js"
const toastHTMLElement = document.getElementById("toast");
const toastContent = document.getElementById("toast-content");
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

//CHECK SIGN IN
const toastMsg = new Toasty(toastHTMLElement, toastContent);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    document.getElementById("searchBar").classList.remove("hide")
    document.getElementById("navSelection").classList.remove("hide");
    document.getElementById("dropdownAccount").classList.remove("is-signin");
    const displayName = user.displayName;
    document.getElementById("dropdownMenuButton1").innerHTML = "Hi, " + displayName
    localStorage.setItem("userId", uid)
    const docRef = doc(db, "Users", uid);
    // Get a document, forcing the SDK to fetch from the offline cache.
    async function getData() {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        localStorage.setItem("favouriteList", JSON.stringify(docSnap.data().favouriteMovie))
        console.log(docSnap.data().favouriteMovie);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getData()
    // ...
  } else {
    // User is signed out
    const navText = document.getElementsByClassName("navtext")
    const allMoviesItem = document.getElementsByClassName("tvshows-toptrend_item")
    document.getElementById("searchBar").classList.add("hide")
    document.getElementById("navSelection").classList.add("hide")
    document.getElementById("signinBtnDropdown").classList.remove("is-signin");
    for (let i = 0; i < allMoviesItem.length; i++) {
      allMoviesItem[i].onclick = function () { toastMsg.showAlert("Cần phải đăng nhập!", "red") };
    }
    for (let i = 0; i < navText.length; i++) {
      navText[i].classList.add("hide")
    }
    // ...
  }
});

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      localStorage.setItem("favouriteList", JSON.stringify([]))
      localStorage.setItem("userId", null)
      window.location.href = "index.html"
    })
    .catch((error) => {
      // An error happened.
    });
});

