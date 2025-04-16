
// Bucle

// Este no nos sirvio ☹️
// for(let i = 0; i < 10; i+=2) {
//   // i = 0    i < 10? Si
//   // i = 2    i < 10? Si
//   // i = 4    i < 10? Si
//   // i = 6    i < 10? Si
//   // i = 8    i < 10? Si
//   // i = 10   i < 10? No
// }

// Puede ir 😄
// let sigo = true;

// while(sigo) {


//   sigo = confirm("Otra nota?");
// }

let acuDesaprobados = 0, acuAprobados = 0, acuPromocionados = 0;
let cDesaprobados = 0, cAprobados = 0, cPromocionados = 0;

let notaMax = 1, notaMin = 10;


do {
  // Pido al usuario la nota
  let nota = parseInt(prompt("Ingrese una nota (1 a 10)"));

  // Esta desaprobado?
  if(nota < 4) {
    // Desaprobado
    acuDesaprobados += nota;  // acuDesaprobados = acuDesaprobados + nota;
    cDesaprobados++;
  }
  else {
    // Aprobado
    acuAprobados += nota;
    cAprobados++;

    // Esta ademas de aprobado, promocionado?
    if(nota >= 7) {
      // Promocionado
      acuPromocionados += nota;
      cPromocionados++;
    }
  }

  // Miro cual es la nota mas grande y la mas chica
  if(nota > notaMax) {
    notaMax = nota;
  }
  // notaMax = (nota > notaMax)? nota : notaMax;
  if(nota < notaMin) {
    notaMin = nota;
  }
  // notaMin = (nota < notaMin)? nota : notaMin;

} while(confirm("Otra nota?"));

console.log(`Hubo ${cDesaprobados} desaprobados y su promedio es de ${acuDesaprobados / cDesaprobados}`);
console.log(`Hubo ${cAprobados} aprobados y su promedio es de ${acuAprobados / cAprobados}`);
console.log(`Hubo ${cPromocionados} promocionados y su promedio es de ${acuPromocionados / cPromocionados}`);

console.log(`La nota maxima del curso fue un ${notaMax}`);
console.log(`La nota mas baja del curso fue un ${notaMin}`);