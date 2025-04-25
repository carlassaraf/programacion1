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


/*

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

*/

// Lista completa de alumnos
const alumnos = [];

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