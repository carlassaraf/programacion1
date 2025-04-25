// Array para almacenar tareas
const tareas = [];


function agregarTarea() {
  // En el documento, busco un elemento con la etiqueta input y obtengo el valor
  const tarea = document.querySelector("input").value;
  // Agrego la tarea al array
  tareas.push(tarea);
  // Limpio el input
  document.querySelector("input").value = "";
  mostrarTareas();
}

function mostrarTareas() {
  // Encontrar el contenedor de tareas
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  // Tengo que recorrer el array y generar un li por cada tarea
  for(let tarea of tareas) {
    // String para concatenar HTML
    let html = `<li class="list-group-item" aria-disabled="true">`;
    html += `<span>${tarea}</span>`;
    html += `<div class="btn-group" role="group">`;
    html += `<button type="button" class="btn btn-danger" onclick="borrarTarea('${tarea}')">Borrar</button>`;
    html += `<button type="button" class="btn btn-secondary" onclick="editarTarea('${tarea}')">Editar</button>`;
    html += `</div>`;
    html += `</li>`;
    // Agrego el li al ul
    ul.innerHTML += html;
  }
}

function borrarTarea(tarea) {
  // Hacer una busqueda de la tarea en el array y encontrar la posicion
  let index = tareas.indexOf(tarea);
  // Eliminar del array ese elemento
  tareas.splice(index, 1);
  // Recargar el ul con la nueva lista de tareas
  mostrarTareas();
}

function editarTarea(tarea) {
  // Pedimos por prompt el texto que reemplaza la tarea
  newTarea = prompt("Escriba la tarea nueva");
  // Hacer una busqueda de la tarea en el array y encontrar la posicion
  let index = tareas.indexOf(tarea);
  // Cambio el elemento
  tareas[index] = newTarea;
  // Recargar ul
  mostrarTareas();
}

/*

<li class="list-group-item" aria-disabled="true">
  <span>Tarea 1</span>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-danger">Borrar</button>
    <button type="button" class="btn btn-secondary">Editar</button>
  </div>
</li>

*/