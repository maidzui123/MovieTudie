var movieContainer = document.querySelector(".tvshows-toptrend_wrapper")
var moviePrev = document.getElementById("moviePrev")
var movieNext = document.getElementById("movieNext")

movieContainer.addEventListener("wheel", (e) => {
    e.preventDefault()
    movieContainer.scrollLeft += e.deltaY
})

movieNext.addEventListener("click", (e) => {
    movieContainer.style.scrollBehavior = "smooth"
    movieContainer.scrollLeft += 1400
})
moviePrev.addEventListener("click", (e) => {
    movieContainer.style.scrollBehavior = "smooth"
    movieContainer.scrollLeft -= 1400
})