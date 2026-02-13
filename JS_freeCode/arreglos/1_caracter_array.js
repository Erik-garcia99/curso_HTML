

/**
 * para crear un array en JS, hay varias formas, esta la forma tradicional, como en C con < [] > se puede declrar el array e incializarlos si es necesario, la funcion 
 * es igual que en todos los lenguajes, una coleccion de datos ordenados, identificados por su indice dentro de la lista, pero el como trabaja se peude parecer mas a python 
 * que a C, porqeu en JS un arreglo puede guardar un grupo de valores de varios tipos por lo que su comportamiento es mucho mas amigable. 
 * 
 * para acceder a los diferentes elementos que tiene un arreglo, se puede hacer de la manera tradicional, invocando el arreglo y el indice al que queremos ingresar
 * como en C. 
 * 
 * los arreglos en JS tieen la propiedad < length > que nos indica el numero de elementos del array, como en python 
 * 
 * tiene otros metodos como pueden ser < push(), pop(), shift(), unshift(), splice() > 
 * 
 * 
 * 
*/


/**
 * 2 -> COMO SE ACCEDE Y SE ACTUALIZAN LOS ELEMENTOS DE UN ARREGLO: 
 * 
 * la forma de poder modificar un indice del arreglo, igual se puede hacer de la manera de toda la vida, conociendo su indice podemos cambiar el contenido de ese indice. 
 */

/**
 * 3- como aniadir y eliminar un elemento al inicipo y al final de un array 
 * 
 * 
 * tenemos 4 metodos principales con lo que podemos aniadir elementos o eliminar tanto al inicio como al ginal
 * 
 * -> estos funcion mas como si fuera una cola mas que una pila
 * - push() -> mete al final
 * -pop() -> saca del final 
 * 
 * 
 * -shift() -> aniade uno o mas elemetnos al prinicpio del arreglo, recibe como parametro el/los numeros a ingresar
 * -unshift() ->elimina el primer elemento de un arreglo y devuelve ese elemento. 
 * 
 * 
 * 
 * 
 * 
*/


/**
 * 4 - arreglos unidimensionales y bidimensionales 
 * 
 * 
 * dentreo de JS estos terminos son lo mismo que en cualquier lenguaje, 
 * 
 * un arreglo unidimensional comunmente llamado array es un conjunto de datos ordenaos en una fila. de una sola dimension puede ir de x -> y / y -> x por asi decirlo 
 * 
 * un arreglo bidimensional es llamado una "matriz" es un array de arrys, mientras el unidmensional solo puede ir en una direccion este tiene x , y, z 
 * 
 * por lo que es mas como una pila si lo vemos de una manera mas abstracta, en donde cada fila es un arreglo que puede ir de x - y
 * 
 * y no solo se reserva para matrizes de 3 dimensiones, pueden ser de 4, 5, 6, etc las que el problema necesite pero por lo general no se usa mas de 3 dimensiones
 * 
 * la forma en como lo declraran es de la misma manera que en otros lenguajes de programacion, pero mas como en python, porque en C se usan {}, 
 * 
 * la forma es mas como en python, una lista de listas. 
 * 
 * la forma en como acceder a un elemento ahora es necesario 2 datos la columna y la fila del elementos.  
 * 
 * 
 * 
 * 
 * 
 */

let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"]
];

console.log(chessboard[0][3]); // "Q"

// el primer indice selecciona la fila y el segunda la columna. 


/**
 * 
 * 5 - > QUE ES LA DESESTRUCTURACION DE ARREGLOS Y COMO FUNCIONA
 * 
 * es una caracterisitca en donde podemos extrar valores de arreglos y asignarlos a varibales de una manera mas consisa y legible. 
 * es una tecnica util al trabajar con arreglos y funciones que devuelven multiples valores. 
 * 
 * es como en python, como en python una funcion puede regresar multiples valores podemos asignar una lista de elementos que van a capturar el valor dependeindo de su posicion 
 * dentro de la lista y se le asignara el correspondiente del retorno de la funcion
 * 
 * 
 * 
 */

let fruits = ["apple", "banana", "orange"];

let [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"

//podemos saltar elementos agregando una coma extra

let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"

//si la funcion o el arreglo tiene menos elementos podemos asignar valores po defecto:

let numbers = [1, 2];
let [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

/**
 * 
 * los tres puntos (...<var>) permite capturar el resto de elemetnos que no han sido desestrucuturados en un nuevo arreglo 
 * 
 */
fruits = ["apple", "banana", "orange", "mango", "kiwi"];
[first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]

