const movies = [
  { title: "Movie 1", image: "Alone.jpeg", capacity: 5, ticketsSold: 0 },
  { title: "Movie 2", image: "Dora.jpeg", capacity: 8, ticketsSold: 0 },
  { title: "Movie 3", image: "avengers.jpeg", capacity: 7, ticketsSold: 0 },
  { title: "Movie 4", image: "Nobody.jpeg", capacity: 6, ticketsSold: 0 },
  { title: "Movie 5", image: "Divi.jpeg", capacity: 9, ticketsSold: 0 },
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

    const buyTicketButton = document.createElement("button");
    buyTicketButton.textContent = "Buy Ticket";
    buyTicketButton.addEventListener("click", () => buyTicket(index));
    movieDisplay.appendChild(buyTicketButton);

    const remainingTickets = document.createElement("p");
    remainingTickets.textContent = `Remaining Tickets: ${movie.capacity - movie.ticketsSold}`;
    movieDisplay.appendChild(remainingTickets);

    addHoverEffects();
  }
}

function addHoverEffects() {
  const movieImages = document.querySelectorAll(".movie-image");

  movieImages.forEach((movieImage) => {
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
  body.style.backgroundSize = "cover";
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

function buyTicket(index) {
  const movie = movies[index];

  if (movie.ticketsSold < movie.capacity) {
    movie.ticketsSold++;
    displayMovie(index);
  } else {
    alert("Sorry, the tickets are sold out try,to buy for another movie!");
  }
}

window.onload = function () {
  displayMovie(currentIndex);
};

function searchMovies() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  displayMovie(filteredMovies.length > 0 ? 0 : currentIndex);
}
