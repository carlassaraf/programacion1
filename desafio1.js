const maxIntentos = 5;

// Agarro un numero aleatorio del 1 al 100

// 1. Numero de 0 a casi 1
let random = Math.random();
// 2. Lo escalo para que vaya de 0 a casi 100
random = 100 * random;
// 3. Lo redondeo para arriba para tener de 1 a 100
random = Math.ceil(random);

// Cantidad de intentos
for(let i = 0; i < maxIntentos; i++) {

  const userInput = parseInt(prompt("Ingrese un numero del 1 al 100"));
  
  if(userInput === random) {
    // Adivino!
    alert(`Adivinaste el numero en ${i + 1} intentos!`);
    break;
  }
  else {
    if(userInput > random) {
      alert("Elegiste un numero muy alto");
    }
    else {
      alert("Elegiste un numero muy chico");
    }
    
    alert(`Este fue tu intento numero ${i + 1}. Te quedan ${maxIntentos - i - 1} intentos`);
    
    if(i == maxIntentos - 1) {
      alert(`Se te acabaron los intentos! El numero era ${random}`);
    }
  }
}