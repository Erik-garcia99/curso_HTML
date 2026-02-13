/**
 * 
 * son los operadoes logicos usados en conficionales/ciclos para evaliar dos expresiones 
 * son igual como en C, AND (&&), OR (||)
 * 
 * AND - para que la condicion pueda ser cierta los 2 operadores deben de ser verdaderos 
 * si ambos operandos son verdaderos, regresa el segundo valor, el operador de la derecha 
 * 
 */
let sresult = true && 'hello';

console.log(result); // hello


 /*
 * 
 * 
 * OR - uno de los 2 operadores debe de cumplir. 
 * 
 * si el primer operando es verdadero, devuelve ee valor.   
 * 
*/
result = 'This is truthy' || false;

console.log(result); // This is truthy

/**
 * tenemos un nuevo operador ( operador de fusion nula.) representado por una doble signo de interrogacion (??)
 * 
 * ayuda en escenarios donde quieres devlver un valor solo si el primero es NULL o undefined.  
 * 
*/


const result = null ?? 'default';

console.log(result); // default

/**
 * este operador es util en situaciones donde null o undefined son lls univos valores que deben activar 
 * un valor de reserva o por defecto.  
 * 
 * 
*/

//**********************************************8 */
/**
 * 13 - objeto Math
 * 
 * en JS ofrece un objeto < Math > incoporado para abordar retos matematicos mas complejos 
 * 
 * es util para porporcionar una variedad de metodos que facilitan realizar calcualo avanzados 
 * y manipulacion de numeros. 
 * 
 * (creo que aqui ya sera como revisar la documentacion y tomar el que necesitamos)
 * 
 */