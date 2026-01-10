/**
 * 
 * para localizar una subcadena se puede usar el metodo < indexOf() >, este metodo permite buscar 
 * una subcadena dentro de una cadena 
 * 
 * si la subcadena se ensuentre el metodo regresa el indice de la peirmeia ocurrecion de la subcadena. 
 * si no se enucentre el metodo regresa -1. 
 * 
 * este metodo toma 2 argumenetos:
 * 1- la subcadena deseada
 * 2- la posicion incial de busqueda (opcional) <- si no se proporciona inicara la buscuqeda desde el inicio de la cadena
 * 
 * 
 * 
 */

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position);  //regresa 14 

//el 14 es la letra "a" de la palabra "awasome!", entonces si queremos la subcadena inica desde esa posicion 


