
/**
 * el metodo < indexOf() > es util para encontrar el primer indice de un elemento especificio dentro de un arreglo. si no lo encuentra devuevel -1
 * 
 * sintaxis: < array.indexOf(element, formIndex) > le indicamos, que queremos encontrar y apartir de que indice empiece a buscar este ultimo es opcional si no se 
 * pone se empieza desde el inicio del arreglo  
 * 
 * 
*/

let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana");
console.log(index); // 1

/**
 * 
 * 8 - como agregar y eliminar elemetnos del medio de un arreglo
 * 
 * el metodo < splice() > permite elminar o agregar elementos desde cualquier posicion del arreglo. 
 * 
 * el valor de retorno de este emtodo es un arreglo de elemetnos eliminadso del arreglo. si no elimino nada entonces devolvera un arreglo vacio 
 * 
 * este metodo si modifica el arreglo original, por lo que es alfo al tener en cuenta 
 * 
 * si sintaxis seria: < array.splice(startIndex, itemsToRemove, item1, item2) >
 *  
 * - startIndex: especifica el indice en el que comienza a modificar el arreglo 
 * -itemsToRemove: este se omite, este eliminara todos los elemtnos desde el starIndex hasya el final 
 * 
 * -item1, item2, etc, son los elemetnos a aniadir al arreglo comenzando desde startIndex.
 * 
 * 
 * 
 */

//en este ejemplo empeiza desde el indice 2 y elimina el resto del arreglo

fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]

//en este quiere agregar, por lo que indicamos que no elimina nada y empieza a agregar desde el indice 1
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
