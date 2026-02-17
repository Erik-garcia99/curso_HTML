

/**
 * 
 * -------------- que es el constructror Object() y cunado debe usarlo? ----------------
 * 
 * 
 * un constructor en JS, su funciones igual que en JAVA, inicalizar un objeto. para esto se incloca la palabra clave < new > y puede inicializar propiedades y metodos 
 * en el objeto recien creados
 * 
 * sintaxis : < new Object() > 
 * 
 * cuando se llama, ertorna un nueco objeto que puede utilizarse para almacenar valores. 
 * 
 * el constructor < Object() > puede utilizarse con o son la palabra clave < new >, cunado se llama sin la palabra clave, se comporta de manera diferente dependiendo del tipo 
 * de valor que se le pase, vemoa un ejemplo que como usar el constructor sin la palabra clave < new > 
 * 
 *
*/


const num = 42;
const numObj = Object(num);

console.log(numObj);
console.log(typeof numObj); // lo que estara haceindo es converitr el numero en un objeto 

/**
 * 
 * otro caso de uso para el constructor, es cunado trbajas con un valor de tipo desconcoido y necesitas asegurar de que sea un objeto, veamos el siguiente ejemplo:
 * 
 */
function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3]));


