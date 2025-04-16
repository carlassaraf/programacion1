let numero1, numero2;
let res;
let operacion;

/**
 * Pide y valida un numero
 * @param {String} msg 
 * @returns 
 */
function pedirNumero(msg) {
  let num;
  do {
    num = parseInt(prompt(msg));
    // num es NaN o es Number
  } while(isNaN(num));
  return num;
}

// Funciones para onclick

function pedirPrimerNum() {
  numero1 = pedirNumero("Ingrese el primer valor");
}

function pedirSegundoNum() {
  numero2 = pedirNumero("Ingrese el segundo valor");
}

function operar(op) {

  operacion = op;

  switch(op) {

    case "+":
      res = sumar(numero1, numero2);
      break;

    case "-":
      res = restar(numero1, numero2);
      break;

    case "x":
      res = multiplicar(numero1, numero2);
      break;

    case "/":
      res = dividir(numero1, numero2);
      break;
  }
}

const resultado = () => {
  alert(`El resultado de ${numero1} ${operacion} ${numero2} fue ${res}`);
}