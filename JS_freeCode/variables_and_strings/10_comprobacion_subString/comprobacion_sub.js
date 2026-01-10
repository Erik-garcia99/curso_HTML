/**
 * 
 * si queremos verificar si la entrada de un uusario contieien una palabra o caracter
 * especificoantes de realizar alguna accion podemos verificar esto con el metodo < includes() >
 * 
 * este metodo se utiliza para verificar si una cadena contuene una subcadena especifica
 * si se encuentra devuvle < true > de lo contrario devuvle < false >
 * 
 * 
 * 
 * 
 * 
 */

let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome"); //este metodo es sencible a masyusculas
//por lo que se queremos buscar " Awesome " aunque este pero esta en minusuclas devolvera un false

console.log(result);  // true

/**
 * este metodo tambien podemos empezar a abuscar a apartir de un indice indicado. este
 * como su segundo parametro. 
 * 
 * 
*/

let text = "Hello, JavaScript world!";
result = text.includes("JavaScript", 7);

console.log(result);  // true


/**
 * 
 *para extraer una parte de una palabra tenemos el metodo < slide() (ubuera sido mas facil como en python)> 
 * 
 * este metodo permite extrar una porcion de una cadena, devulve esta, sin modificar la cadena original 
 * este toma 2 parametros, el indice de inciio y el final opcioal 
 * 
 * cunado indicq uqe el indice final es opcional es que va a inicar desde un indce y tomara de este hasta n-1 que mida
 * la cadena original. 
 * 
 * 
 * 
*/

let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);

//un ejemplo de solo el dinice de inicio 

greeting = message.slice(3);

console.log(greeting);


