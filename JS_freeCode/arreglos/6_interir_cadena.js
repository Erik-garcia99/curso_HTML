
/**
 * 
 * para lograr este paso es necesario relaizar 3 pados 
 * 
 * - dividir la cadena en un arreglo de caractres 
 * - invertir el arreglo 
 * - unir de nuevo los caractrees en una cadena. 
 * 
 * para esto usaremos los metodos < split(), reverse(), join() > -> lo bueno de js es que ya hay muchas funciones que relaizan muchas cosas, igual en C pero si es necesario conocer 
 * muchas mas cosas como aspectos de apuntadores, etc.. 
 * 
 * 
 * - metodo < split() > divide una cadena en un arreglo de subcadenas y especifica en donde debe ocurrie cada divisio. 
 * por lo que un ejemplo de como se utilizarioa este metodo seria < ejmp.split("") > le estamos indicando una cadena vacia, por lo que tomara la cadena ejemp
 * y lo converitra e un arreglo de caracteres, donde cada letra va a rpresetnar un elemento dentro del arreglo, pero este separador puede ser cualquier valor 
 * siempre y cuando tenga un poco de sentido y se encunetre, porque si pongo <%> pues nunca va a separar nada si tengo por ejemplo "hola", me devolvera "hola"
 * 
 * 
 * 
 * 
*/

let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]

//el metodo reverse pues no tiene m ucha ciencia, invierte los elementos de un arreglo 

charArray.reverse();
console.log(charArray);

/**
 * por ultimo uniremos el arreglo en una sola cadena usando el metodo < join() >  
 * 
 * 
*/
//el metodo une en cada separador indicado, como con split peor en vez de separar ahora unira, en este caso una cadena vacia por lo que unira cada letra, si son mas de 2 palabras
//quedaran todas unidas pa
//este metodo devulve una nueva cadena, recuerda que en JS las cadenas son inmutables pero las funciones crean nuevas cadenas
let reverse = charArray.join(""); 
console.log(reverse);












