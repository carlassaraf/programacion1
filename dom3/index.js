let movies = [];

fetch("./movies.json")
.then(response => response.json())
.then(json => {

  let genres = [];
  movies = json;

  json.forEach(movie => {
  
    showMovie(movie);
    // Reviso que generos hay en el json y armo una lista
    movie.genres.forEach(genre => {
      if(!genres.includes(genre)) { genres.push(genre); }
    })
  })

  // Tengo la lista con todos los generos sin repetir
  genres.forEach(genre => {
    // Por cada genero, creo un option
    const option = document.createElement("option");
    option.setAttribute("value", genre);
    option.innerText = genre;
    // Agrego el option al select
    document.querySelector("#genres").append(option);
  })
});


function showMovie(movie) {
  const card = document.createElement("div");
  card.setAttribute("class", "card mb-3");
  card.setAttribute("style", "max-width: 540px;");

  const row0 = document.createElement("div");
  row0.setAttribute("class", "row g-0");

  const col0 = document.createElement("div");
  col0.setAttribute("class", "col-md-4");

  const cover = document.createElement("img");
  cover.setAttribute("src", movie.cover);
  cover.setAttribute("alt", `Portada de ${movie.name}`);
  cover.setAttribute("class", "img-fluid rounded-start");

  const col1 = document.createElement("div");
  col1.setAttribute("class", "col-md-8");

  const row10 = document.createElement("div");
  row10.setAttribute("class", "row");

  const name = document.createElement("h5");
  name.setAttribute("class", "card-title");
  name.innerText = movie.name;

  const row11 = document.createElement("div");
  row11.setAttribute("class", "row");

  const col110 = document.createElement("div");
  col110.setAttribute("class", "col");

  const pYear = document.createElement("p");
  pYear.setAttribute("class", "card-text");  
  const year = document.createElement("small");
  year.setAttribute("class", "text-body-secondary");
  year.innerText = movie.year;

  const col111 = document.createElement("div");
  col111.setAttribute("class", "col");

  const pDuration = document.createElement("p");
  pDuration.setAttribute("class", "card-text");  
  const duration = document.createElement("small");
  duration.setAttribute("class", "text-body-secondary");
  duration.innerText = movie.duration;

  const row12 = document.createElement("div");
  row11.setAttribute("class", "row");

  const col120 = document.createElement("div");
  col120.setAttribute("class", "col");

  const pRating = document.createElement("p");
  pRating.setAttribute("class", "card-text");  
  const rating = document.createElement("small");
  rating.setAttribute("class", "text-body-secondary");
  rating.innerText = movie.rating;

  const col121 = document.createElement("div");
  col121.setAttribute("class", "col");

  const pGenres = document.createElement("p");
  pGenres.setAttribute("class", "card-text");  
  const genres = document.createElement("small");
  genres.setAttribute("class", "text-body-secondary");
  genres.innerText = movie.genres.join(", ");

  const row1 = document.createElement("div");
  row1.setAttribute("class", "row");

  const synopsis = document.createElement("p");
  synopsis.setAttribute("class", "card-text");
  synopsis.innerText = movie.synopsis;

  pGenres.append(genres);
  col121.append(pGenres);
  pRating.append(rating);
  col120.append(pRating);
  row12.append(col120, col121);

  pDuration.append(duration);
  col111.append(pDuration);
  pYear.append(year);
  col110.append(pYear);
  row11.append(col110, col111);

  row10.append(name);
  col1.append(row10, row11, row12);
  col0.append(cover);
  row0.append(col0, col1);
  row1.append(synopsis);
  card.append(row0, row1);
  document.querySelector("#movies").append(card);
}

document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#genres").addEventListener("change", (e) => {
    // Capturo el genero seleccionado
    const genre = e.target.value;
    let filteredMovies = [];

    if(genre !== "") {
      filteredMovies = movies.filter(movie => movie.genres.includes(genre));
    }
    else {
      filteredMovies = movies;
    }
    document.querySelector("#movies").innerHTML = "";
    filteredMovies.forEach(movie => {
      showMovie(movie);
    });
  })

  document.querySelector("#sortByRating").addEventListener("change", (e) => {
    // Capturo la opcion de filtro
    const sortBy = e.target.value;

    if(sortBy === "") {
      return;
    }

    if(sortBy === "ascendente") { movies.sort((a, b) => a.rating - b.rating); }
    else { movies.sort((a, b) => b.rating - a.rating); }

    document.querySelector("#movies").innerHTML = "";
    movies.forEach(movie => {
      showMovie(movie);
    });
  })
});