//-> que es una cadena de JS y que es la inmutabilidad de cadena 


/**
 * 
 *en JS una cadena es una secuencia de caracteresi utilizada para representar 
 * 
 * datos de texto.
 * 
 * para crear una cadena en JS se puede usar comillas simples o dobles 
 * mes no combinar estas como de apertura o cierre
 * 
 * por ejemplo "hola a todos' <- esto es incorrecto 
 * pero si pueden ir palabras en comillas dobles o comillas simples entre ellas 
 * ejemplo:
 * 
 * 
*/

let cadena1 = "hola 'todos' como estan" //esta es una cadena valida lo que hace es marcar con comillas simples en la salida 

console.log(cadena1)


let caden2 = 'hola "todos?" si' //esto hace lo mismo. pero ahora lo remarca con comillas dobles 
//  mas no se pueden usar comillas simples si estamos usando simples para englobar la cadena lo mismo para con las doble 
console.log(caden2)

//el que una varibale sea inmutable significa que una vez que se crea no se puede cambiar directamente 

caden2 = "kk"

console.log(caden2)


