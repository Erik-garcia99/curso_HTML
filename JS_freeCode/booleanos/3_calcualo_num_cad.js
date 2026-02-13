/**
 * que ocurre cunado se intentea hacer calculos con numeros y cadenas
 * 
 * en JS tiene cosas peculiares, entre ellas esta el poder operar con numeros 
 * y cadenas, pero si realizamos una suma aritemetica normal, 
 * 
 * se estan combinando las 2 funciones que puede tener el simmbilo de la suma, la cual es la 
 * concatenacion y la suma ordinaria, 
*/

//lo que pasara es que los operandos se van a contatenar no se vana a sumar 
let result = 5 + '10'; 
console.log(result); // 510

//lo que hace es convertir el numero en una cadena y por eso lo contatena. 

/**
 * cunado se inetna relializar otras operacion aritmeticas como resta, multiplicacion o divicion 
 * con una cadena y un numero, en estos casos ahora JS intenta convertir la cadena en un numero lo que se 
 * le conoce como coercion de tipos. 
*/


let subtractionResult = '10' - 5;
console.log(subtractionResult); // 5

let multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20

let divisionResult = '20' / 2;
console.log(divisionResult); // 10

/**
 * pero la cosa cambia cunado intentamos hacer lo mismo con una cadena que no pareza un numero 
 * alguna palabra o caracteres al azar, entonces JS no puede convertirlo a un numero significativo 
 * JS devuvle NaN lo que singifica "Not a Number" un valor especial de tipo Number, por eso si imprimiros 
 * si tipo (typeof) indica number
 * 
 * 
*/
subtractionResult = 'abc' - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

multiplicationResult = 'abc' * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

divisionResult = 'abc' / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number


/**
 * 
 * JS convierte el tipo de numero automaticamente como numeros, cadenas y booleanod de formar aveces inesperadas
 * para entender estas conversiones es crucial para evitar errores y excribir codigo robusco en los proyecot s 
 * 
*/


