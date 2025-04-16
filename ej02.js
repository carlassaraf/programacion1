let sueldoBasico = 0;
let sueldoFinal = 0;

// Pido y parseo las opciones posibles de sueldo basico
let categoria = parseInt(prompt("Ingrese su categoria (1: 1000usd, 2: 1500 usd o 3: 2000usd)"));
let subcategoria = prompt("Ingrese su subcategoria (A: x1.5, B: x2 o C: x2.5");

switch(categoria) {

  case 1:
    sueldoBasico = 1000;
    break;

  case 2:
    sueldoBasico = 1500;
    break;

  case 3:
    sueldoBasico = 2000;
    break;

  default:
    break;
}

switch(subcategoria.toUpperCase()) {

  case "A":
    sueldoFinal = sueldoBasico * 1.5;
    break

  case "B":
    sueldoFinal = sueldoBasico * 2;
    break;

  case "C":
    sueldoFinal = sueldoBasico * 2.5;
    break;

  default:
    break;
}


if(sueldoFinal >= 1500 && sueldoFinal <= 3000) {
  alert(`El salario de ${sueldoFinal} es de rango inicial`);
}
else if(sueldoFinal > 3000 && sueldoFinal <= 4000) {
  alert(`El salario de ${sueldoFinal} es de rango intermedio`);
}
else if(sueldoFinal > 4000) {
  alert(`El salario de ${sueldoFinal} es de rango avanzado`);
}
else {
  alert("Alguno de los datos ingresados fue equivocado");
}