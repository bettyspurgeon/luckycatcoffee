const campusButton = document.querySelector(".campus");
const cityButton = document.querySelector(".city-centre")
const mapDiv = document.querySelector("#maps")

campusButton.addEventListener("click", function() {
    mapDiv.classList.toggle("campus-map")
})

cityButton.addEventListener("click", function() {
    mapDiv.classList.toggle("city-map")
})