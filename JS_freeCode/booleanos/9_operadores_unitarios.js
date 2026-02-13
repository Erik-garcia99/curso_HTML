/**
 * 
 * los operadores unitarios actuan sobre un solo operando para relaizar operaciones 
 * como conversion de tipo, manipulacion de valores o verficacion de ciertas condiciones. 
 * 
 * 
 * operador unitario de suma (+) convierte su operando en un numero. si el operando ya es un numero permanece sin
 * cambios 
 * 
*/

let str = '42';
let strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string


/**
 * 
 * operador unitario de suma, es util cunado desea asegurarste de trabajr con un valor 
 * numerico funciona de manera similar al unitario de suma, excepto que inverite el signo 
*/

str = '42';
let strToNegativeNum = -str;

console.log(strToNegativeNum); // -42

/**
 * 
 * el operador logioc NOT, represetado por un signo de exclamacion (!), es otro operador unitario
 * inviert el valor booleando de su operasdor.  
 * 
 * 
*/

let isOnline = true;
console.log(!isOnline); // false

/**
 * operador < bitwise NOT > es un operasdor unitario menos comun. realiza el complemento a 1
 * el NOT de toda la vida en binario de inviertir cada bit del numero si es 0 -> 1, si es 1 -> 0
 * 
 * 
*/

const num = 5; // The binary for 5 is 00000101

console.log(~num); // -6

/**
 * la palabra < void > es un operador unitario que evalia una expresion y devuelve un < undefined > 
 * 
 * 
*/

const result = void (2 + 2);

console.log(result); // undefined recordando que este igual es un tipo de numero 

/**tambein se utiliza comunment en hipervinculos para evitar la navegacion
 * 
 * -> <a href="javascript:void(0);">Click Me</a>
*/



