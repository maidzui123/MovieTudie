const allMoviesMain = `
<!-- ALL MOVIE -->
      <div class="home-content">
      <video class="background-video" autoplay loop muted>
        <source src="../image/bgvideo.mp4" type="video/mp4">
      </video>
      <div id="searchTV" class="all-movies_outer">
      <div class="all-movies_inner">
        <div class="all-movies_bg">
        <h2 id="allMoviesText">All Movies</h2>
        <div
              id="allMoviesContainer"
              class="all-movies_item_outer"
            >
          
          </div>
          
        </div>
        
      </div>
    </div>
      </div>
      <footer>
    <div class="ftr-content">
      <div class="contact">
        <a href="#">Quesions? Contact us.</a>
      </div>
      <div class="ftr">
        <a href="#">Gift Card Terms</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Statement</a>
      </div>
      <div class="select">
        <select>
          <option>English</option>
          <option>Tiếng Việt</option>
        </select>
      </div>
    </div>
  </footer>
`;
const homeMain = `
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <video autoplay muted loop class="d-block">
            <source src="./videos/topgun.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="carousel-caption d-none d-md-block">
            <h1 class="animate__animated animate__zoomIn">TOP GUN: MAVERICK</h1>
            <div class="carousel-movie_outer  d-none d-md-block">
              <div class="carousel-movie_inner animate__animated animate__fadeInLeft">
                <p>By Joseph Kosinski</p>
              </div>
              <div class="carousel-movie_inner animate__animated animate__fadeInUp">
                <p>2022</p>
              </div>
              <div class="carousel-movie_inner animate__animated animate__fadeInRight">
                <p>2h 10m</p>
              </div>
            </div>
          </div>
          <div class="carousel-decor">
            <h3>WHAT'S ON THE SCREEN?</h3>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <i class="fa-solid fa-arrow-left-long"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="next">
            <i class="fa-solid fa-arrow-right-long"></i>
            <span class="visually-hidden">Next</span>
          </button>
          <div class="carousel-watch_btn">
            <p>WATCH NOW!</p>
          </div>
        </div>
        <div class="carousel-item">
          <video autoplay muted loop class="d-block">
            <source src="./videos/heartofstone.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="carousel-caption d-none d-md-block">
            <h1 class="animate__animated animate__zoomIn">HEART OF STONE</h1>
            <div class="carousel-movie_outer  d-none d-md-block">
              <div class="carousel-movie_inner animate__animated animate__fadeInLeft">
                <p>By Tom Harper</p>
              </div>
              <div class="carousel-movie_inner animate__animated animate__fadeInUp">
                <p>2023</p>
              </div>
              <div class="carousel-movie_inner animate__animated animate__fadeInRight">
                <p>2h 2m</p>
              </div>
            </div>
          </div>
          <div class="carousel-decor">
            <h3>WHAT'S ON THE SCREEN?</h3>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <i class="fa-solid fa-arrow-left-long"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="next">
            <i class="fa-solid fa-arrow-right-long"></i>
            <span class="visually-hidden">Next</span>
          </button>
          <div class="carousel-watch_btn">
            <p>WATCH NOW!</p>
          </div>
        </div>
        <div class="carousel-item">
          <video autoplay muted loop class="d-block">
            <source src="./videos/theuncannycounter.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="carousel-caption d-none d-md-block">
            <h1 class="animate__animated animate__zoomIn">The Uncanny Counter</h1>
            <div class="carousel-movie_outer  d-none d-md-block">
              <div class="carousel-movie_inner animate__animated animate__fadeInLeft">
                <p>By Yoo Seon-dong</p>
              </div>
              <div class="carousel-movie_inner animate__animated animate__fadeInUp">
                <p>2023</p>
              </div>
              <div class="carousel-movie_inner animate__animated animate__fadeInRight">
                <p>2 Season</p>
              </div>
            </div>
          </div>
          <div class="carousel-decor">
            <h3>WHAT'S ON THE SCREEN?</h3>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <i class="fa-solid fa-arrow-left-long"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="next">
            <i class="fa-solid fa-arrow-right-long"></i>
            <span class="visually-hidden">Next</span>
          </button>
          <div class="carousel-watch_btn">
            <p>WATCH NOW!</p>
          </div>
        </div>
        <div class="carousel-item">
          <video autoplay muted loop class="d-block">
            <source src="./videos/jujustsukaisen.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="carousel-caption d-none d-md-block">
            <h1 class="animate__animated animate__zoomIn">Jujutsu Kaisen</h1>
            <div class="carousel-movie_outer  d-none d-md-block">
              <div class="carousel-movie_inner animate__animated animate__fadeInLeft">
                <p>By Akutami Gege</p>
              </div>
              <div class="carousel-movie_inner animate__animated animate__fadeInUp">
                <p>2023</p>
              </div>
              <div class="carousel-movie_inner animate__animated animate__fadeInRight">
                <p>2 Season</p>
              </div>
            </div>
          </div>
          <div class="carousel-decor">
            <h3>WHAT'S ON THE SCREEN?</h3>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <i class="fa-solid fa-arrow-left-long"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="next">
            <i class="fa-solid fa-arrow-right-long"></i>
            <span class="visually-hidden">Next</span>
          </button>
          <div class="carousel-watch_btn">
            <p>WATCH NOW!</p>
          </div>
        </div>
      </div>
    </div>
        
        <div class="home-content">
        <video class="background-video" autoplay loop muted>
          <source src="../image/bgvideo.mp4" type="video/mp4">
        </video>
        <!-- TV SHOW -->
        <div id="tvShows" class="tvshows-outer">
          <div class="tvshows-inner">
            <div class="tvshows-toptrend_outer">
              <h2>TV Series</h2>
              <div class="tvshows-toptrend_header">
                <div class="movies-home_title">
                  <h4>Now Playing</h4>
                  <a class="navtext" onclick="renderTvShows()"><span>See More</span><i class="fa-solid fa-caret-right fa-xl"></i></i></a>
                </div>
                <div class="tvshows-toptrend_btn">
                  <button id="tvshowsPrev" class="" type="button">
                    <i class="fa-solid fa-chevron-left"></i>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button id="tvshowsNext" class="" type="button">
                    <i class="fa-solid fa-chevron-right"></i>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="tvshows-toptrend_wrapper">
                <div id="tvshows-toptrend_item1" class="tvshows-toptrend_item_outer"></div>
                <div id="tvshows-toptrend_item2" class="tvshows-toptrend_item_outer"></div>
              </div>
        
              <div class="tvshows-toptrend_header">
                <div class="movies-home_title">
                  <h4>Top IMDB TV Series</h4>
                  <a class="navtext" onclick="renderTopImdb()"><span>See More</span><i class="fa-solid fa-caret-right fa-xl"></i></i></a>
                </div>
                <div class="tvshows-toptrend_btn">
                  <button id="tvshowsImdbPrev" class="" type="button">
                    <i class="fa-solid fa-chevron-left"></i>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button id="tvshowsImdbNext" class="" type="button">
                    <i class="fa-solid fa-chevron-right"></i>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="tvshows-topimdb_wrapper tvshows-toptrend_wrapper">
                <div id="tvshows-topimdb_item1" class="tvshows-toptrend_item_outer"></div>
                <div id="tvshows-topimdb_item2" class="tvshows-toptrend_item_outer"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="line-inner"></div>
        </div>
        <!-- MOVIES -->
        <div id="movies" class="tvshows-outer">
          <div class="tvshows-inner">
            <div class="tvshows-toptrend_outer">
              <h2>Movies</h2>
              <div class="tvshows-toptrend_header">
                <div class="movies-home_title">
                  <h4>Now Playing</h4>
                  <a class="navtext" onclick="renderMovies()"><span>See More</span><i class="fa-solid fa-caret-right fa-xl"></i></i></a>
                </div>
                <div class="tvshows-toptrend_btn">
                  <button id="moviesPrev" class="" type="button">
                    <i class="fa-solid fa-chevron-left"></i>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button id="moviesNext" class="" type="button">
                    <i class="fa-solid fa-chevron-right"></i>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="movies-toptrend_wrapper">
                <div id="movies-toptrend_item1" class="tvshows-toptrend_item_outer"></div>
                <div id="movies-toptrend_item2" class="tvshows-toptrend_item_outer"></div>
              </div>
        
              <div class="tvshows-toptrend_header">
                <div class="movies-home_title">
                  <h4>Top IMDB Movies</h4>
                  <a class="navtext" onclick="renderTopImdb()"><span>See More</span><i class="fa-solid fa-caret-right fa-xl"></i></i></a>
                </div>
                <div class="tvshows-toptrend_btn">
                  <button id="moviesImdbPrev" class="" type="button">
                    <i class="fa-solid fa-chevron-left"></i>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button id="moviesImdbNext" class="" type="button">
                    <i class="fa-solid fa-chevron-right"></i>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="movies-topimdb_wrapper movies-toptrend_wrapper">
                <div id="movies-topimdb_item1" class="tvshows-toptrend_item_outer"></div>
                <div id="movies-topimdb_item2" class="tvshows-toptrend_item_outer"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <footer>
    <div class="ftr-content">
      <div class="contact">
        <a href="#">Quesions? Contact us.</a>
      </div>
      <div class="ftr">
        <a href="#">Gift Card Terms</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Statement</a>
      </div>
      <div class="select">
        <select>
          <option>English</option>
          <option>Tiếng Việt</option>
        </select>
      </div>
    </div>
  </footer>
`;


function renderDetailMovie(index) {
  window.location.href = "movie.html"
  const movieList = JSON.parse(localStorage.getItem("allMovies"));
  const movieToRender = [{
    id: movieList[index].id,
    name: movieList[index].name,
    infobg: movieList[index].infobg,
    imdb: movieList[index].imdb,
    yearrel: movieList[index].yearrel,
    duration: movieList[index].duration,
    genre: movieList[index].genre,
    director: movieList[index].director,
    overview: movieList[index].overview,
    link: movieList[index].link,
    trailer: movieList[index].trailer
  }]
  localStorage.setItem("movieToRender", JSON.stringify(movieToRender))
}

const mainContainer = document.getElementById("mainContainer");
function getHomeMovies() {
  const allMoviesList = JSON.parse(localStorage.getItem("allMovies"));
  let countTvMovies = 0;
  let countTvMoviesImdb = 0;
  let countMovies = 0;
  let countMoviesImdb = 0;
  for (let i in allMoviesList) {
    if (allMoviesList[i].type == "tvshows") {
      if (countTvMovies < 5) {
        renderMovie("tvshows-toptrend_item1", allMoviesList[i].poster, allMoviesList[i].name, allMoviesList[i].yearrel, i)
      }
      else if (countTvMovies < 10) {
        renderMovie("tvshows-toptrend_item2", allMoviesList[i].poster, allMoviesList[i].name, allMoviesList[i].yearrel, i)
      }
      countTvMovies++;
    }
    if (allMoviesList[i].type == "tvshows" && allMoviesList[i].imdb >= 8) {
      if (countTvMoviesImdb < 5) {
        renderMovie("tvshows-topimdb_item1", allMoviesList[i].poster, allMoviesList[i].name, allMoviesList[i].yearrel, i)
      }
      else if (countTvMoviesImdb < 10) {
        renderMovie("tvshows-topimdb_item2", allMoviesList[i].poster, allMoviesList[i].name, allMoviesList[i].yearrel, i)
      }
      countTvMoviesImdb++;
    }
    if (allMoviesList[i].type == "movies") {
      if (countMovies < 5) {
        renderMovie("movies-toptrend_item1", allMoviesList[i].poster, allMoviesList[i].name, allMoviesList[i].yearrel, i)
      }
      else if (countMovies < 10) {
        renderMovie("movies-toptrend_item2", allMoviesList[i].poster, allMoviesList[i].name, allMoviesList[i].yearrel, i)
      }
      countMovies++;
    }
    if (allMoviesList[i].type == "movies" && allMoviesList[i].imdb >= 8) {
      if (countMoviesImdb < 5) {
        renderMovie("movies-topimdb_item1", allMoviesList[i].poster, allMoviesList[i].name, allMoviesList[i].yearrel, i)
      }
      else if (countMoviesImdb < 10) {
        renderMovie("movies-topimdb_item2", allMoviesList[i].poster, allMoviesList[i].name, allMoviesList[i].yearrel, i)
      }
      countMoviesImdb++;
    }
  }
}

function renderAllMovies() {
  mainContainer.innerHTML = "";
  const movieList = JSON.parse(localStorage.getItem("allMovies"));
  mainContainer.insertAdjacentHTML("beforeend", allMoviesMain);
  document.getElementById("allMoviesText").innerHTML = "All"
  for (let i in movieList) {
    renderMovie(
      "allMoviesContainer",
      movieList[i].poster,
      movieList[i].name,
      movieList[i].yearrel,
      i
    );
  }
}

function renderFavouriteMovies() {
  mainContainer.innerHTML = "";
  const moviesList = JSON.parse(localStorage.getItem("allMovies"));
  const favouriteMoviesList = JSON.parse(localStorage.getItem("favouriteList"));
  mainContainer.insertAdjacentHTML("beforeend", allMoviesMain);
  document.getElementById("allMoviesText").innerHTML = "Your Favourite Movies"
  for (let i in moviesList) {
      for(let j in favouriteMoviesList) {
          if (moviesList[i].id == favouriteMoviesList[j]) {
            renderMovie("allMoviesContainer", moviesList[i].poster, moviesList[i].name, moviesList[i].yearrel, i)
          }
      }
    
  }
}

function renderMovies() {
  mainContainer.innerHTML = "";
  const moviesList = JSON.parse(localStorage.getItem("allMovies"));
  mainContainer.insertAdjacentHTML("beforeend", allMoviesMain);
  document.getElementById("allMoviesText").innerHTML = "All Movies"
  for (let i in moviesList) {
    if (moviesList[i].type == "movies") {
      renderMovie("allMoviesContainer", moviesList[i].poster, moviesList[i].name, moviesList[i].yearrel, i)
    }
  }
}

function renderTvShows() {
  mainContainer.innerHTML = "";
  const tvshowsList = JSON.parse(localStorage.getItem("allMovies"));
  mainContainer.insertAdjacentHTML("beforeend", allMoviesMain);
  document.getElementById("allMoviesText").innerHTML = "All TV Series"
  for (let i in tvshowsList) {
    if (tvshowsList[i].type == "tvshows") {
      renderMovie("allMoviesContainer", tvshowsList[i].poster, tvshowsList[i].name, tvshowsList[i].yearrel, i)
    }
  }
}

function renderTopImdb() {
  mainContainer.innerHTML = "";
  const topImdbList = JSON.parse(localStorage.getItem("allMovies"));
  mainContainer.insertAdjacentHTML("beforeend", allMoviesMain);
  document.getElementById("allMoviesText").innerHTML = "Top Imdb Movies"
  for (let i in topImdbList) {
    if (topImdbList[i].imdb >= 8) {
      renderMovie("allMoviesContainer", topImdbList[i].poster, topImdbList[i].name, topImdbList[i].yearrel, i)
    }
  }
}

function renderMovie(id, poster, name, yearrel, index) {
  document.getElementById(id).insertAdjacentHTML(
    "beforeend",
    `
  <div onclick="renderDetailMovie(${index})" class="tvshows-toptrend_item" style="margin-bottom: 10px;">
                <div class="tvshows-toptrend_img">
                  <img src="${poster}">
                </div>
                <div class="tvshows-toptrend_info">
                  <h5 class="movie-name">${name}</h5>
                  <p>${yearrel}</p>
                </div>
              </div>
  `
  );
}

function renderHome() {
  mainContainer.innerHTML = "";
  mainContainer.insertAdjacentHTML("beforeend", homeMain);
  getHomeMovies()
  var tvshowsContainer = document.querySelector(".tvshows-toptrend_wrapper");
  var tvshowsPrev = document.getElementById("tvshowsPrev");
  var tvshowsNext = document.getElementById("tvshowsNext");

  tvshowsNext.addEventListener("click", (e) => {
    tvshowsContainer.style.scrollBehavior = "smooth";
    tvshowsContainer.scrollLeft += 1400;
  });
  tvshowsPrev.addEventListener("click", (e) => {
    tvshowsContainer.style.scrollBehavior = "smooth";
    tvshowsContainer.scrollLeft -= 1400;
  });

  var tvshowsImdbContainer = document.querySelector(".tvshows-topimdb_wrapper");
  var tvshowsImdbPrev = document.getElementById("tvshowsImdbPrev");
  var tvshowsImdbNext = document.getElementById("tvshowsImdbNext");

  tvshowsImdbNext.addEventListener("click", (e) => {
    tvshowsImdbContainer.style.scrollBehavior = "smooth";
    tvshowsImdbContainer.scrollLeft += 1400;
  });
  tvshowsImdbPrev.addEventListener("click", (e) => {
    tvshowsImdbContainer.style.scrollBehavior = "smooth";
    tvshowsImdbContainer.scrollLeft -= 1400;
  });

  var moviesImdbContainer = document.querySelector(".movies-topimdb_wrapper");
  var moviesImdbPrev = document.getElementById("moviesImdbPrev");
  var moviesImdbNext = document.getElementById("moviesImdbNext");

  moviesImdbPrev.addEventListener("click", (e) => {
    moviesImdbContainer.style.scrollBehavior = "smooth";
    moviesImdbContainer.scrollLeft -= 1400;
  });
  moviesImdbNext.addEventListener("click", (e) => {
    moviesImdbContainer.style.scrollBehavior = "smooth";
    moviesImdbContainer.scrollLeft += 1400;
  });

  var moviesContainer = document.querySelector(".movies-toptrend_wrapper");
  var moviesPrev = document.getElementById("moviesPrev");
  var moviesNext = document.getElementById("moviesNext");

  moviesNext.addEventListener("click", (e) => {
    moviesContainer.style.scrollBehavior = "smooth";
    moviesContainer.scrollLeft += 1400;
  });
  moviesPrev.addEventListener("click", (e) => {
    moviesContainer.style.scrollBehavior = "smooth";
    moviesContainer.scrollLeft -= 1400;
  });
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    renderAllMovies();
    const searchTerm = searchInput.value.toLowerCase();
    const elementContainer = document.getElementById("allMoviesContainer");
    const elements = elementContainer.getElementsByClassName("movie-name");
    document.getElementById("allMoviesText").innerHTML =
      "Result for: " + searchInput.value;
    const cards = elementContainer.getElementsByClassName(
      "tvshows-toptrend_item"
    );

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i].innerHTML;
      const name = element.toLowerCase();
      const hasNameMatch = name.includes(searchTerm);
      if (hasNameMatch) {
        cards[i].style.display = "flex";
      } else {
        cards[i].style.display = "none";
      }
    }

  }
});

window.onload = renderHome
