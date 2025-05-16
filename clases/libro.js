class Libro {

  #isbn;

  constructor(isbn, nombre, autor, editorial, portada, sinopsis) {

    this.#isbn = isbn;
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.portada = portada;
    this.sinopsis = sinopsis;
  }

  // Metodos estaticos

  static pedirISBN() {

    let isbn;
    do {

      do {
        isbn = parseInt(prompt("Ingrese el ISBN"));
        // Le delego a Validator que me diga si es o no un number
      } while(!Validator.validarNumber(isbn));

    } while(isbn.toString().length < 10 || isbn.toString().length > 13);

    return isbn;
  }

  static pedirNombre() {
    let nombre;
    do {
      nombre = prompt("Ingrese el nombre");
    } while(!Validator.validarString(nombre));
    return nombre;
  }

  static pedirAutor() {
    let autor;
    do {
      autor = prompt("Ingrese el autor");
    } while(!Validator.validarString(autor));
    return autor;
  }

  static pedirEditorial() {
    let editorial;
    do {
      editorial = prompt("Ingrese la editorial");
    } while(!Validator.validarString(editorial));
    return editorial;
  }

  getISBN() {
    return this.#isbn;
  }

  setISBN(isbn) {
    if(!isNaN(isbn)) {
      this.#isbn = isbn;
    }
  }

  toHTML() {

    let html = `<div class="card" style="width: 18rem;">`;
    html += `<img src="${this.portada}" class="card-img-top" alt="${this.nombre}">`;
    html += `<div class="card-body">`;
    html += `<h5 class="card-title">${this.nombre}</h5>`;
    html += `<p class="card-text">${this.sinopsis}</p>`;
    html += `</div>`;
    html += `<ul class="list-group list-group-flush">`;
    html += `<li class="list-group-item">Autor: ${this.autor}</li>`;
    html += `<li class="list-group-item">Editorial: ${this.editorial}</li>`;
    html += `<li class="list-group-item">ISBN: ${this.#isbn}</li>`;
    html += `</ul>`;
    html += `<div class="card-body">`;
    html += `<a href="#" class="card-link">Card link</a>`;
    html += `<a href="#" class="card-link">Another link</a>`;
    html += `</div>`;
    html += `</div>`;

    return html;
  }

}