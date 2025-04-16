// Todas las de abajo son declaradas como variables

/**
 * Resuelve una suma de dos numeros
 * @param {Number} n1 primer numero
 * @param {Number} n2 segundo numero
 * @returns suma de ambos
 */
const sumar = function(n1, n2) {
  return n1 + n2;
}

/**
 * Resuelve una resta de dos numeros
 * @param {Number} n1 primer numero
 * @param {Number} n2 segundo numero
 * @returns resta de ambos
 */
const restar = function(n1, n2) {
  return n1 - n2;
}

/**
 * Resuelve una multiplicacion de dos numeros
 * @param {Number} n1 primer numero
 * @param {Number} n2 segundo numero
 * @returns multiplicacion de ambos
 */
const multiplicar = function(n1, n2) {
  return n1 * n2;
}

/**
 * Resuelve una division de dos numeros
 * @param {Number} n1 primer numero
 * @param {Number} n2 segundo numero
 * @returns division de ambos
 */
const dividir = function(n1, n2) {
  if(n2 !== 0) {
    return n1 / n2;
  }
}
