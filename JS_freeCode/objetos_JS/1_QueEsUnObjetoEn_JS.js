/**
 * en JS es un lenguaje que soporta programacion orientada a objetos, por lo que soporta todo lo que tiene qu ver con POO
 * 
 * los 4 pilares de POO 
 * 
 * - encapsulamineto
 * - la abstraccion 
 * - la herencia 
 * - polimorfismo
 * 
 * 
 * en JS un objeto es una estrucutra de dato que permite almacenar y organizar datos y funcionalidades relaciondas. 
 * 
 * en JS los miembros de la clase se les llama propiedades y consisten en un una clave-valor, parecido a un diccionario de python 
 * 
 * en JS casi todo es un objeto o se puede tratar como uno, esto incluye, funciones e incluso tipo de datos primitvos como cadenas y numeros cunado se usan de cierta manera
 * 
 * veamos un ejemplo de como se crea un objeto 
 * 
*/

const person = {
    name: "alice",
    age: 30,
    city: "new york"
};

//bien es algo mucho mas sencillo que con JAVA, la forma de poder acceder a un atributo de esa clase es muy parecido igual que a JAVA 

/// sintaxis : ObjetctName.propertyName

console.log("notacion punto: ",person.name); //estamos consultando el atributo nombre. 

/**
 * esta forma de entrar se le conoce como la notacion punto, pero se tiene la notacion pro corchete, en este se permite acceder a la propiedad usando una cadena dentro de corchetes
 * de igual forma es necesario conocer el nombre exacto de la propiedad que se quiere consultar.  
 * 
 * 
 * 
*/

console.log("\ncorchete: ",person["age"]); 

/**
 *  este tipo de consultacion para acceder a las propiedades resulta mucho mas conveniente cunado la clave, el atributo tiene numero, o espacios en su nombre, en ese 
 * escenario, resultara mucho mas conveniento usar la notacion. 
 * 
 * otra ventaja es que se puede asignar la propiedad a una varibale y acceder mediante esta 
 * 
*/

let propertyName = "city";
console.log("varibale: ",person[propertyName]);









