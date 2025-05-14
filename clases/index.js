let libros;

// Levantar la informacion de los libros desde un JSON
fetch("/clases/libros.json")
.then(response => response.json())
.then(json => { 
  libros = json.map(libro => new Libro(libro.isbn, libro.nombre, libro.autor, libro.editorial, libro.portada, libro.sinopsis));
  mostrarLibros();
});


function mostrarLibros() {

  const divBiblioteca = document.querySelector("#biblioteca");
  divBiblioteca.innerHTML = "";
  libros.forEach(libro => divBiblioteca.innerHTML += libro.toHTML());
}

/*

<div class="card" style="width: 18rem;">
  <img src="${libro.portada}" class="card-img-top" alt="${libro.nombre}">
  <div class="card-body">
    <h5 class="card-title">${libro.nombre}</h5>
    <p class="card-text">${libro.sinopsis}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Autor: ${libro.autor}</li>
    <li class="list-group-item">Editorial: ${libro.editorial}</li>
    <li class="list-group-item">ISBN: ${libro.isbn}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

*/