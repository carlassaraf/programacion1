/**
 * Funcion que pide por prompt un string y valida que no quede vacío
 * @param {String} msg Mensaje que aparece en el prompt
 * @param {String} err Mensaje de error cuando queda vacio el prompt
 * @returns string validado
 */
function validarString(msg, err = "No puede quedar el prompt vacio") {
  let str;
  do {

    str = prompt(msg);

    if(str.trim() === "") {
      alert(err);
    }
    
  } while(str === null || str.trim() === "");
  return str;
}

/**
 * Funcion que pide un string y valida si es igual a un caracter
 * @param {String} msg Mensaje para el prompt
 * @param {String} ch Caracter con el que comparar
 * @param {String} err Mensaje de error cuando no coincide con el caracter
 * @returns string validado
 */
function validarCaracter(msg, ch, err) {
  let str;
  do {

    str = validarString(msg);

    if(str !== ch) {
      alert(err);
    }

  } while(str !== ch);
  return str;
}

let foo = validarString();
console.log(foo);

// Pedir el nombre de la persona
let nombre = validarString("Ingrese el nombre de la persona", "El nombre de la persona es obligatorio");
// Pedir la ciudad donde vive
let ciudad = validarString("Ingrese la ciudad de residencia", "No puede faltar la ciudad de residencia");
// Pedir el sexo de la persona
let sexo = validarCaracter("Ingrese el sexo de la persona", "M", "Tiene que ser M");


validarString("Mensaje del prompt");