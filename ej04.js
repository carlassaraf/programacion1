// Acumuladores para los promedios
let acEdadMujeres = 0, acEdadHombres = 0;
// Contadores
let cMujeres = 0, cHombres = 0;
let cMujeresMenores21 = 0, cHombresMayores21 = 0;

// Para maximo y minimo
let edadMujerMayor = 0, edadHombreMenor = 110;

do {
  // Booleano para validaciones
  let datoOK = true;
  let ciudad;
  do {
    ciudad = prompt("Ingrese la ciudad");
    // Primero chequeo que no hayan apretado cancel
    if(ciudad === null) {
      datoOK = false;
      alert("El dato es obligatorio");
    }
    // Si lo deja vacio
    else if(ciudad === "") {
      datoOK = false;
      alert("Por favor, no dejar vacio el campo");
    }
    // Si solamente puso espacios
    else if(ciudad.trim() === "") {
      datoOK = false;
      alert("El campo no puede ser solo espacios en blanco");
    }
    else {
      datoOK = true;
    }
  } while(!datoOK);
  
  let sexo;
  do {
    sexo = prompt("Ingrese el sexo (H/M)");
  
    // Que sea null
    if(sexo === null) {
      datoOK = false;
      alert("El dato es obligatorio");
    }
    // Que sea vacio
    else if(sexo === "") {
      datoOK = false;
      alert("Por favor, no dejar vacio el campo");
    }
    // Si solamente puso espacios
    else if(sexo.trim() === "") {
      datoOK = false;
      alert("El campo no puede ser solo espacios en blanco");
    }
    // Que sean numeros
    else if(!isNaN(sexo)) {
      datoOK = false;
      alert("Los numeros no son validos para este campo");
    }
    // Que no sea ni H, M, h, m
    else if(sexo.toUpperCase() !== "H" && sexo.toUpperCase() !== "M") {
      datoOK = false;
      alert("Solamente son validos los caracteres H y M");
    }
    else {
      datoOK = true;
    }
  } while(!datoOK);
  
  let edad;
  do {
    edad = parseInt(prompt("Ingrese la edad (0 a 110)"));
  
    // Que sea NaN
    if(isNaN(edad)) {
      datoOK = false;
      alert("Solo numeros son validos");
    }
    // Que este fuera de rango
    else if(edad < 0 || edad > 110) {
      datoOK = false;
      alert("La edad esta fuera del rango valido (0 a 110)");
    }
    else {
      datoOK = true;
    }
  
  } while(isNaN(edad) || edad < 0 || edad > 110);

  // El resto lo siguen ustedes 😄

  if(sexo.toUpperCase() === "H") {
    acEdadHombres += edad;
    cHombres++;

    if(edad > 21) {
      cHombresMayores21++;
    }

    if(edad < edadHombreMenor) {
      edadHombreMenor = edad;
    }
  }
  else {
    acEdadMujeres += edad;
    cMujeres++;

    if(edad < 21) {
      cMujeresMenores21++;
    }

    if(edad > edadMujerMayor) {
      edadMujerMayor = edad;
    }
  }


} while(confirm("Otro dato?"));


console.log(`Promedio de edad general: ${(acEdadHombres + acEdadMujeres) / (cHombres + cMujeres)}`);

if(cMujeres) {
  console.log(`Promedio edad mujeres: ${acEdadMujeres / cMujeres}`);
  console.log(`La mujer mas grande tiene ${edadMujerMayor} años`);
  console.log(`Porcentaje de mujeres menores a 21: ${100 * cMujeresMenores21 / cMujeres}%`);
}
if(cHombres) {
  console.log(`El hombre mas chico tiene ${edadHombreMenor} años`);
  console.log(`Promedio edad hombres: ${acEdadHombres / cHombres}`);
  console.log(`Porcentaje de hombres mayores a 21: ${100 * cHombresMayores21 / cHombres}%`);
} 
