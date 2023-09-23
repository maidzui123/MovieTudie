import {
    doc,
    updateDoc,
    getDoc,
  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  import {
    getAuth,
    onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import Toasty from "./toast.js";
  import db from "./index.js"
  const toastHTMLElement = document.getElementById("toast");
  const toastContent = document.getElementById("toast-content");
  const toastMsg = new Toasty(toastHTMLElement, toastContent);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      localStorage.setItem("userId", uid)
      const docRef = doc(db, "Users", uid);
      // Get a document, forcing the SDK to fetch from the offline cache.
      async function getData() {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          localStorage.setItem("favouriteList", JSON.stringify(docSnap.data().favouriteMovie))
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
      getData()
    } else {
  
      // ...
    }
  });
  
  renderMovie()
  function renderMovie() {
    const movieRender = JSON.parse(localStorage.getItem("movieToRender"));
    document.getElementById('movieContainer').insertAdjacentHTML("beforeend", `
      <div id="movieinfoBg" class="movieinfo-outer" style="background: url(${movieRender[0].infobg}); background-repeat: no-repeat;
      background-size: cover; ">
            <div id="movieinfoDetail" class="movieinfo-inner">
              <div class="movieinfo-left">
                <div class="movieinfo-name_outer">
                  <h1 id="movieinfoName">${movieRender[0].name}</h1>
                  <input id="favouriteMovie" movieid="${movieRender[0].id}" class="favourite-movie_input" type="checkbox">
                </div>
                <div class="movieinfo-info">
                  <span id="movieinfoRating" style="color: yellow">⭐${movieRender[0].imdb}</span>
                  <span> | </span>
                  <span id="movieinfoYearRel">${movieRender[0].yearrel}</span>
                  <span> | </span>
                  <span id="movieinfoDuration">${movieRender[0].duration}</span>
                  <span> | </span>
                  <span id="movieinfoGenre">${movieRender[0].genre}</span>
                  <span> | </span>
                  <span id="movieinfoDirector">${movieRender[0].director}</span>
                </div>
                <h5 id="movieinfoOverview">
                  ${movieRender[0].overview}
                </h5>
                <a
                  href="${movieRender[0].link}"
                >
                  <button id="movieinfoButton">WATCH NOW!</button>
                </a>
              </div>
              <div class="movieinfo-right">
                <h4 class="trailer-title">TRAILER</h4>
                <iframe
                  width="300"
                  height="200"
                  src="${movieRender[0].trailer}"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
      `)
      checkFavouriteCheckbox()
  }
  
  
  const favouriteMovie = document.getElementById("favouriteMovie")
  favouriteMovie.addEventListener("click", async function () {
    const favouriteMovieList = JSON.parse(localStorage.getItem("favouriteList"))
    const uid = localStorage.getItem("userId")
    const userDb = doc(db, "Users", uid);
    if (favouriteMovie.checked == true) {
      favouriteMovieList.push(favouriteMovie.getAttribute("movieid"))
      localStorage.setItem("favouriteList", JSON.stringify(favouriteMovieList))
      await updateDoc(userDb, {
        favouriteMovie: favouriteMovieList
      });
      toastMsg.showAlert("Đã thêm phim vào Yêu Thích!", "green")
    }
    if (favouriteMovie.checked == false) {
      let favouriteMovieDeleteIndex = favouriteMovieList.indexOf(favouriteMovie.getAttribute("movieid"))
      if (favouriteMovieDeleteIndex !== -1) {
        favouriteMovieList.splice(favouriteMovieDeleteIndex, 1); // Remove 1 element at the found index
      }
      localStorage.setItem("favouriteList", JSON.stringify(favouriteMovieList))
      await updateDoc(userDb, {
        favouriteMovie: favouriteMovieList
      });
      toastMsg.showAlert("Đã xóa phim khỏi Yêu Thích!", "red")
  
    }
  })
  
  function checkFavouriteCheckbox() {
    const favouriteMovie = document.getElementById("favouriteMovie")
    const favouriteMovieList = JSON.parse(localStorage.getItem("favouriteList"))
    for(let i in favouriteMovieList)
    {
      if(favouriteMovie.getAttribute("movieid") == favouriteMovieList[i])
      {
        favouriteMovie.checked = true;
      }
    }
  }