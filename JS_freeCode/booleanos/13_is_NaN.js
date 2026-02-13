/**
 * como funciona < isNaN > 
 * 
 * NaN es un tipo  de "numero especial:, el cual significa "not a Number" es un valor numeroco 
 * no represetable o indefinido. 
 * 
 * este valor es tipicamente el resutlado de operacores que deberian retorna un numero pero no 
 * pueden repreoducir un valor numerico significativo. 
 * 
 * como:
*/

let result = 0 / 0;
console.log(result); // NaN

/**
 * la propiedad de la funcion < isNaN()> se usa para determinar si un valor es <NaN> o no. 
 * 
 * lo que hara la funcion es primero intentar convertir el parametro a un numero. si no lo puede convertir 
 * devuelve un < true> 
 */

console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(isNaN("37"));      // false: "37" is converted to 37
console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
console.log(isNaN(""));        // false: empty string is converted to 0
console.log(isNaN(" "));       // false: string with a space is converted to 0

/**
 * se ha introducido el metodo para converir el parametroa  un numero antes de probar
 * 
 * < Number.isNaN() > solo devuelve true si es el valor es exactamente NaN
 * 
 */

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN({}));         // false
console.log(Number.isNaN("blabla"));   // false
