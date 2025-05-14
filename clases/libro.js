class Libro {

  constructor(isbn, nombre, autor, editorial, portada, sinopsis) {

    this.isbn = isbn;
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.portada = portada;
    this.sinopsis = sinopsis;
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
    html += `<li class="list-group-item">ISBN: ${this.isbn}</li>`;
    html += `</ul>`;
    html += `<div class="card-body">`;
    html += `<a href="#" class="card-link">Card link</a>`;
    html += `<a href="#" class="card-link">Another link</a>`;
    html += `</div>`;
    html += `</div>`;

    return html;
  }

}