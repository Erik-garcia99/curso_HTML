/**
 * en este codigo abarcaremos concpetos basicos cosas que ya sabemos de otros lenguajes
 * como bucles, condiciones, arreglos, etcc.. lo que los diferencia en JS para despues pasar a 
 * lo improtante el amnejo del DOM y todo el concepto con WEB 
 * 
 * 
 */


/**
 * metodo para cambiar de minisuclas a mayusculas -> <toLowerCase)>
 * metodo para cambiar de mayusuclas a minusculas - > <toUpperCase) >
 * 
 * estos metodos devuelve una cadena, no modifican la cadena original.
 */


/**
 * eliminacion de los espacios en blanco
 * 
 * tenemos los metodos 
 * - trim(): este metodo elimina espacios en blanco tanto al inicio como al final
 * -trimStart() : elmina los esapcios en blanco del principio
 * -trimEnd() : elimina los espacios en blanco del final. 
 * 
 * 
 */

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// 13 - metodos de modificacion de cadenas

/**
 * el metodo replace permite enceontrar un valro especifico en una cadena y 
 * reemplazarlo con otro valor. este metodo devuelve una nueva cadena con el reemplazo
 * y dejando la original sin cambiso 
 * 
 * este recibce 2 parametros 
 * 
 * -> string.repalce(searchValue, newValue);
 * donde searchValue: es el valor a buscar
 * -> newValue: es por lo que quieres cambiar una vez encontrado el string o caracter 
*/

//ejemplo:
//este emetodo es sencible con las mayusculas. 
let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"

//este metodo solo reemplaza la peimra coincidencia por lo que si hay mas solo 
//lo hara con la primera que se tope



