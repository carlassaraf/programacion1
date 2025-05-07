// const alumno = {
//   nombre: "Fabrizio Carlassara",
//   matricula: 704466,
//   es_regular: true,
//   carrera: "Ingenieria Electronica",
//   materias_incriptas: [
//     "Electronica Aplicada III",
//     "Teoria de Circuitos",
//     "Tecnicas Digitales II"
//   ]
// };

// const al = {};

// al.nombre = "Jorgito Perez";
// al.matricula = 807777;
// al.es_regular = false;
// al["carrera"] = "Ingenieria Industrial";
// // al["Es regular?"]

// const materias = [];
// // pedis y push
// al.materias_inscriptas = materias;

// Lista completa de alumnos
// const alumnos = [];
const alumnos = [
  { nombre: "Juan Pérez", matricula: 1001, regular: true, carrera: "ELECTRONICA", materias: [] },
  { nombre: "María López", matricula: 1002, regular: false, carrera: "INDUSTRIAL", materias: [] },
  { nombre: "Carlos Fernández", matricula: 1003, regular: true, carrera: "MECANICA", materias: [] },
  { nombre: "Ana García", matricula: 1004, regular: false, carrera: "QUIMICA", materias: [] },
  { nombre: "Luis Torres", matricula: 1005, regular: true, carrera: "NAVAL", materias: [] },
  { nombre: "Laura Martínez", matricula: 1006, regular: false, carrera: "ELECTRONICA", materias: [] },
  { nombre: "Pedro Sánchez", matricula: 1007, regular: true, carrera: "INDUSTRIAL", materias: [] },
  { nombre: "Sofía Ruiz", matricula: 1008, regular: false, carrera: "MECANICA", materias: [] },
  { nombre: "Diego Morales", matricula: 1009, regular: true, carrera: "QUIMICA", materias: [] },
  { nombre: "Valentina Jiménez", matricula: 1010, regular: false, carrera: "NAVAL", materias: [] }
];

function nuevaEntrada() {
  // Pido datos
  const nombre = pedirNombre();
  const matricula = pedirMatricula();
  const regular = pedirRegularidad();
  const carrera = pedirCarrera();
  // Creo objeto alumno
  const alumno = {
    nombre: nombre,
    matricula: matricula,
    regular: regular,
    carrera: carrera
  };
  // Lo meto en la lista
  alumnos.push(alumno);
}

function mostrarEntradas() {

  const div = document.querySelector("#alumnos");
  div.innerHTML = "";

  for(let alumno of alumnos) {
    let html = `<div class="card" style="width: 18rem;">`;
    html += `<div class="card-body">`;
    html += `<h4 class="card-title">${alumno.nombre}</h4>`;
    html += `<p class="card-text">${alumno.carrera}</p>`;
    html += `<p class="card-text">${alumno.matricula}</p>`;
    html += `<p class="card-text">Es regular? ${(alumno.regular)? "Si" : "No"}</p>`;
    html += `<h5 class="card-title">Materias que cursa</h5>`;
    html += `<ul class="list-group list-group-flush">`;
    // Genero tantos li como materias curse el alumno
    alumno.materias.forEach((materia, i) => {
      html += `<li class="list-group-item">${i + 1}. ${materia.nombre} | ${materia.tipo}</li>`;
    });
    // for(let materia of alumno.materias) {
      // html += `<li class="list-group-item">${materia.nombre} | ${materia.tipo}</li>`;
    // }
    html += `</ul>`;
    html += `</div>`;
    html += `</div>`;
    div.innerHTML += html;
  }
}

/*

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">${alumno.nombre}</h4>
    <p class="card-text">${alumno.carrera}</p>
    <p class="card-text">${alumno.matricula}</p>
    <p class="card-text">Es regular? ${alumno.regular}</p>
  </div>
  <h5 class="card-title">Materias que cursa</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${materia.nombre} | ${materia.tipo}</li>
    <li class="list-group-item">${materia.nombre} | ${materia.tipo}</li>
    <li class="list-group-item">${materia.nombre} | ${materia.tipo}</li>
  </ul>
</div>

*/

function inscribirMateria() {
  // Pido la matricula con la que voy a buscar al alumno
  const matricula = pedirMatricula();
  // Reviso la lista de alumnos a ver si hay alguno con esa matricula
  const listaFiltrada = alumnos.filter(alumno => alumno.matricula === matricula);
  if(listaFiltrada.length > 0) {
    // Lo guardo en una variable para que sea mas comodo
    const alumno = listaFiltrada[0];
    // Hay una coincidencia
    if(!confirm(`El alumno/a es ${alumno.nombre}?`)) {
      return;
    }
    // Inscribo a una materia
    let materia = pedirMateria(alumno.carrera);
    alumno.materias.push(materia);
    // console.log(alumno);
    mostrarEntradas();
  }
  else {
    // No hay
    alert(`No hay alumno registrado con la matricula ${matricula}`);
  }
}
