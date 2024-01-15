const movies = [
  { title: "Movie 1", image: "Alone.jpeg" },
  { title: "Movie 2", image: "Dora.jpeg" },
  { title: "Movie 3", image: "avengers.jpeg" },
  { title: "Movie 4", image: "Nobody.jpeg" },
  { title: "Movie 5", image: "Divi.jpeg" },

];

let currentIndex = 0;
function displayMovie(index) {
  const movieDisplay = document.getElementById("movieDisplay");
  movieDisplay.innerHTML = ""; 

  const movie = movies[index];

  if (movie) {
      const movieImage = document.createElement("img");
      movieImage.src = movie.image;
      movieImage.alt = movie.title;
      movieImage.classList.add("movie-image");
      movieDisplay.appendChild(movieImage);
      addHoverEffects(); 
  }
}

function addHoverEffects() {
  const movieImages = document.querySelectorAll(".movie-image");

  movieImages.forEach(movieImage => {
      movieImage.addEventListener("mouseover", function () {
          this.style.opacity = 0.8;
      });

      movieImage.addEventListener("mouseout", function () {
          this.style.opacity = 1;
      });
  });
}

function changeBackground() {
  const body = document.body;
  body.style.backgroundImage = `url(${movies[currentIndex].image})`;
  body.style.backgroundSize = 'cover';
}


function showNextMovie() {
  currentIndex = (currentIndex + 1) % movies.length;
  displayMovie(currentIndex);
  changeBackground();
}

function showPreviousMovie() {
  currentIndex = (currentIndex - 1 + movies.length) % movies.length;
  displayMovie(currentIndex);
  changeBackground();
}

window.onload = function () {
  displayMovie(currentIndex);
};


function searchMovies() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();

  const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm)
  );

  displayMovie(filteredMovies.length > 0 ? 0 : currentIndex);
}
