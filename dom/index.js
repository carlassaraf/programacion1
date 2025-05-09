

function cambiarTexto() {

  let query = prompt("Query del elemento para cambiar");
  let text = prompt("Texto para reemplazar");

  let elemento = document.querySelector(query);
  console.log(elemento);
  elemento.innerText = text;
}

function cambiarHTML() {

  let query = prompt("Query del elemento para cambiar");
  let html = prompt("HTML para reemplazar");
  let elemento = document.querySelector(query);
  elemento.innerHTML = html;
}