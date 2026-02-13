/**
 * 
 * que es y como funcioan el metodo toFixed()
 * 
 *  este metodo formatea un numero usando notacion de punto fijo. es util cunado es necesario el
 *  controlar el numero de decimales en un numero 
 *
 *  el metodo < toFixed() > se llama en un numero y toma un argumento opcional, que es el numero de digitos
 *  que apareceran despues del punto decimal. 
 * 
*/


//ejemplo
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"

// ! IMPORTANTE ! este metodo devuelve una cadena, no modifica el numero real
//

let num1 = 12.345;
let num2 = 67.891;

console.log((num1 + num2).toFixed(2));


