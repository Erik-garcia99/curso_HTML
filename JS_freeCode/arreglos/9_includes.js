

/**
 * el metodo < includes() > es un metodo en donde se verifica si un arreglo contiene un valor especifico. este devulve un valor booleanod < true/false> 
 * 
 * este metodo solo indica si existe mas no nos da mas infromacion como su posicion. 
 * 
 * este metodo distingue entre mayusculas y minusculas, por lo que es importante el ingresar exactamente el nombre correcto de lo que queremos buscar. 
 * 
 * esta funcion puede recibir un segundo parametro en donde se indica apartir de que posicion puede buscar  
 * 
 * 
 * 
*/


let numbers = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers.includes(30, 3)); // true
console.log(numbers.includes(30, 4)); // true

/**
 * 10 - QUE ES UN COPIA SUPERFICIAL DE UN ARRAY, CUALES SON ALGUNAS FORMAS DE CREAR ESTAS COPIAS
 * 
 * es un nuevo arreglo que contiene los mismso elementos que el arreglo original. 
 * 
 * - si se tienene datos primitivos ambos valores son totalmente independietes
 * 
 * -pero sis e tienen datos como otros arreglos, tanto ene l original como en la copia si se hace un cambio en alguno de estos arreglos, objetos, etc.
 * el cambio se vera reflejado en ambos arreglos. 
 * 
 * tenemos varias formar de relaizar esta copia tenemos
 * 
 * -concat(): este crea un nuevo arreglo al fusionar 2 o mas arreglos. 
 * 
 * -slice(): cunado se llama a este metodo devuvlve una copai superficial de todo el arreglo
 * 
 * -operador de propagacion : (...), este operador expande los elementos de un arreglo a uno nuevo, creadno una copia superficial. 
 * 
 * por lo que esto ayuda a modificar el arreglo orignal o la copia sin afectar a uno o al otro. 
 * 
 * 
 * 
 * 
 * 
 */

//concact:
let originalArray = [1, 2, 3];
let copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false

//slice()

originalArray = [1, 2, 3];
copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false

/**
 *  
 * operador de propagacion
 * 
*/

originalArray = [1, 2, 3];
copyArray = [...originalArray];

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
