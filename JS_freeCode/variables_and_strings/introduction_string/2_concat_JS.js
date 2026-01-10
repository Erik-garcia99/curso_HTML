//concatenacion de cadenas y como pueden concatenar cadenas con varibales 

/**
 * el proceso de unir 2 o mas cadenas entre si se le conoce como 
 * concatenacion 
 * 
 * no es lo mismo imprimir 2 cadenas juntas que contatenarlas, porque si
 * se imprimen juntas como un console.log("..","..") <- digamos 
 * 
 * siguen siendo 2 cadenas diferentes pero la contatenacion las une hacinedolas 1  
 * 
 * 
 * para eso se usa el operador "+" permite concatenar 2 cadenas 
 * 
 * 
*/

let firtName= "erik"
let lastName = "garcia chavez"

let fullName = firtName + " " + lastName;

console.log(fullName);

//otra forma es medinate el metodo "concat()"
//ejemplo de su uso 

let str1 = "hello"
let str2 = "world"

let result = str1.concat(' ',str2) ; //en este caso estamos usando el metodo concat para unir un espacio y str1 con str2

console.log(result)




