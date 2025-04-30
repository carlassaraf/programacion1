const validarString = function(msg) {
  let str;
  let strValido = true;
  do {
    // Pido string
    str = prompt(msg);

    if(str === null) {
      // Chequeo que no haya dado cancel
      strValido = false;
      alert("Dato obligatorio");
    }
    else if(str.trim() === "") {
      // Chequeo que no sea un string vacio
      strValido = false;
      alert("No dejar vacio el campo");
    }
    else if(!isNaN(str)) {
      // Chequeo que no sea numerico
      strValido = false;
      alert("No puede ser numeros");
    }
    else {
      strValido = true;
    }

  } while(!strValido);
  return str;
}

const validarNumber = function(msg) {
  let num;
  let numValido = true;
  do {
    num = parseInt(prompt(msg));

    if(isNaN(num)) {
      // Escribieron cualquier cosa
      numValido = false;
      alert("El dato ingresado no es valido como matricula");
    }
    else {
      numValido = true;
    }
  } while(!numValido);
  return num;
}

const pedirNombre = function() {
  // Tengo que pedir un string
  const nombre = validarString("Ingrese el nombre del alumno");
  return nombre;
}

const pedirMatricula = function() {
  // Tengo que pedir un number
  let matricula;
  let valido = true;
  do {
    matricula = validarNumber("Ingrese la matricula del alumno");

    if(matricula < 1) {
      valido = false;
      alert("La matricula debe ser mayor a 0");
    }
    else {
      valido = true;
    }

  } while(!valido);
  return matricula;
}

const pedirRegularidad = function() {
  // Tengo que pedir un boolean
  return confirm("Es alumno regular?");
}

const pedirCarrera = function() {
  // Tengo que pedir un string
  let carrera;
  let carreras = ["ELECTRONICA", "INDUSTRIAL", "MECANICA", "QUIMICA", "NAVAL"];
  let valido = true;
  do {
    carrera = validarString(`Ingrese la Ingeniería que cursa (${carreras.join(" | ")})`);

    if(!carreras.includes(carrera.toUpperCase())) {
      valido = false;
      alert(`${carrera.toUpperCase()} no es una opción válida`);
    }
    else {
      valido = true;
    }

  } while(!valido);
  return carrera;
}

const materias = [
  { nombre: "Circuitos Eléctricos", codigo: "ELEC101", tipo: "virtual", carrera: "ELECTRONICA" },
  { nombre: "Termodinámica", codigo: "MECA102", tipo: "presencial", carrera: "MECANICA" },
  { nombre: "Química General", codigo: "QUI103", tipo: "presencial", carrera: "QUIMICA" },
  { nombre: "Análisis de Sistemas", codigo: "INDU104", tipo: "virtual", carrera: "INDUSTRIAL" },
  { nombre: "Mecánica de Fluidos", codigo: "MECA105", tipo: "presencial", carrera: "MECANICA" },
  { nombre: "Electromagnetismo", codigo: "ELEC106", tipo: "virtual", carrera: "ELECTRONICA" },
  { nombre: "Estadística Aplicada", codigo: "INDU107", tipo: "virtual", carrera: "INDUSTRIAL" },
  { nombre: "Sistemas de Control", codigo: "ELEC108", tipo: "presencial", carrera: "ELECTRONICA" },
  { nombre: "Reacción Química", codigo: "QUI109", tipo: "presencial", carrera: "QUIMICA" },
  { nombre: "Construcción Naval", codigo: "NAV110", tipo: "presencial", carrera: "NAVAL" }
];

function pedirMateria() {
  // Me quedo unicamente con los codigos de las materias
  let opciones = materias.map(materia => materia.codigo);
  let materia;
  let valido = true;
  do {
    codigo = validarString(`Ingrese la materia a la que se inscribe (${opciones.join(" | ")})`);

    if(!opciones.includes(codigo.toUpperCase())) {
      valido = false;
      alert(`${codigo.toUpperCase()} no es una opción válida`);
    }
    else {
      valido = true;
    }

  } while(!valido);
  return materias.filter(materia => materia.codigo === codigo.toUpperCase())[0];
}