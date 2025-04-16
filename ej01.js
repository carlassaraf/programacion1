// Cota minima y cota maxima
const cotaMinima = -100;
const cotaMaxima = 100;

let userInput = parseInt(prompt(`Por favor ingrese un numero entre ${cotaMinima} y ${cotaMaxima}`));

// Evaluo si esta dentro del rango

if(userInput >= cotaMinima && userInput <= cotaMaxima) {
  // Ambas son verdaderas, esta dentro del rango
  alert("El numero ingresado esta dentro del rango");
}
else {
  // No esta en rango
  alert("El numero ingresado no esta dentro del rango");
}

// if(userInput % 2 == 0) {
//   alert("El numero ingresado es par");
// }
// else {
//   alert("El numero ingresado es impar");
// }

let msg = (userInput % 2 == 0)? "par" : "impar";
alert(`El numero ingresado es ${msg}`);
