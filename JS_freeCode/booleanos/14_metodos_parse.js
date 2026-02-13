/**
 * como trabaja los metodos < parseFloat() y parseInt()
 * 
 * son funciones para pasar cadenas en numeros, estos son escencialmente utilices 
 * porque la entrada de datos desde un formulario en HTML JS lo recibe como texto, por lo que
 * debemos de convertir eso en numero en el caso que se esperaba un valor numerico como entero o decimal. 
 * 
 * 
 * -> parseFloat(), recibe una cadena y regresa un numero con punto flotante. 
 * este metodo comienza en el inicio de la caden ay finaliza cunado encunetre un caracter que no 
 * corresponda a un numero, en el caso de que tenga que empezar con caracteres este devilvera un "NaN"
 *
*/


console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("3.14.5"));   // 3.14
console.log(parseFloat("abc 3.14")); // NaN

/**
 * 
 * metodo < parseIint() > este funcioan de la misma manera solo que regresa un numero entero.
 * 
 */

console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc123"));   // NaN



