class Pokemon {

  constructor(name, id, sprite, types) {
    this.name = name;
    this.id = id;
    this.sprite = sprite;
    this.types = types;
  }

  toHTML() {
    let html = `<div class="card" style="width: 18rem;">`;
    html += `<img src="${this.sprite}" class="card-img-top" alt="${this.name}">`;
    html += `<div class="card-body">`;
    html += `<h5 class="card-title">${capitalizeString(this.name)}</h5>`;
    html += `<p class="card-text">ID de Pokedex Nacional: ${this.id}</p>`;
    html += `</div>`;
    html += `<ul class="list-group list-group-flush">`;
    this.types.forEach(type => {
      html += `<li class="list-group-item">${capitalizeString(type)}</li>`
    });
    html += `</ul>`;
    html += `</div>`;

    return html;
  }
}