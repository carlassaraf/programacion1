// Coleccion de personas
// let personas = ["Fabrizio", "Julieta", "Marcos", "Romina", "Lautaro"];

const nombres = [];
const notas = [];

do {

  let nombre = prompt("Nombre del alumno/a");
  nombres.push(nombre);
  let nota = parseInt(prompt("Ingrese una nota (1 al 10)"));
  notas.push(nota);

} while(confirm("Otra nota?"));

// Aca esta el array cargado

function mostrarNotas() {

  // let cantidadLi = notas.length;

  let html = '<ol class="list-group-numbered list-group">';

  // for(let i = 0; i < cantidadLi; i++) {

  //   html += `<li class="list-group-item">Nota ${i + 1}: ${notas[i]}</li>`
  // }

  // for(let foo of notas) {
  //   html += `<li class="list-group-item">Nota: ${foo}</li>`;
  // }

  for(let i in notas) {
    html += `<li class="list-group-item">${nombres[i]} - Nota: ${notas[i]}</li>`
  }

  html += '</ol>';
  html += '<button onclick="cambiarNota()" type="button" class="btn btn-dark">Editar nota</button>'
  html += `<button onclick="cambiarNombre()" type="button" class="btn btn-primary">Cambiar nombre</button>`;

  // document.write(html);
  document.querySelector("main").innerHTML = html;
}

function cambiarNota() {
  let indice = parseInt(prompt("Que nota quiere cambiar?")) - 1;
  let nota = parseInt(prompt("Ingrese la nueva nota"));

  notas[indice] = nota;
  mostrarNotas();
}

function cambiarNombre() {
  let nombre = prompt("Nombre del alumno/a que desea cambiar");
  let newNombre = prompt("Nuevo nombre");
  // Quiero buscar en nombres (array) el elemento nombre (string)
  // let index = indiceDe(nombres, nombre);
  let index = nombres.indexOf(nombre);
  if(index >= 0) {
    nombres[index] = newNombre;
    mostrarNotas();
  }
  else {
    // -1 es porque no lo encontro
    alert("No se encuentra ese nombre en la lista")
  }
}

function indiceDe(array, string) {
  // Recorrer el array de principio a fin
  for(let i in array) {
    // Comparar nombre con nombres[i]
    if(string.toLowerCase() === array[i].toLowerCase()) {
      // Si coinciden, devolver el valor de i
      return i;
    }
  }
  // Si no coinciden, devolver -1
  return -1;
}

mostrarNotas();
