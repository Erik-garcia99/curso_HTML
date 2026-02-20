/**
 * 
 *      -----------  QUE ES UN OPERADOR DE ENCADENAMINETO OPCIONAL Y COMO FUNCIONA ----------------
 * 
 * 
 *  el operador de encadenamineto opcional < .? > es un forma de acceder de manera segura a propiedades de objetos en JS, es una red de seguridad para trabajar con objeto que podria 
 * tener partes faltantes 
 * 
 * veamos un ejemplo:
 * 
 */

let person = {
  name: "Alice",
  age: 30
};

console.log(person.name); // "Alice"
console.log(person.job); // undefined

/**
 * 
 * en este ejemplo que pasamos, la propiedad job no cuenta con la propieadas < job > por lo que JS nos lanza un < inderfined > 
 * 
 * ahora si tratamos de acceder a una propiedad de un objeto que puede que no exista, esto puede gnerar un error y terminar el programa.
 * 
 * 
 */

// console.log(person.address.street); 

/**
 * veamos un ejemplo de como se emplea el operadro de encadenmaineto opcional
 * 
 * 
 */
const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
};

console.log(user?.profile?.address?.street); // "123 Main St"
console.log(user?.profile?.phone?.number);   // undefined

/**
 * lo que le estamos indicando es que este siga por el encadenamineto, solo si la propiedad o el objetio que esta consultando existe, como vemos en la consulta 2, solo llegara
 * hasta < profile > porque el objeto <phone> no existe, por loq ue nos alerta solo un undefined. 
 * 
 * 
 * 
 */



/**
 *  11 --------- QUE ES LA DESESTRUCUTRUACION DE OBJETOS Y COMO FUNCIONA? --------------
 * 
 * 
 * la desestrucuturacion de objetos es una caracterisitica de JS que permite extraer valores de objetos y asginarlos a varibales de una manera mas concisa y legible 
 * 
 * facilita el extraer multiples valores de un objeto a la vez. 
 * 
 * esto no es mas que desempaquetar valores de objetos en valores distintas, en lugar de acceder a las propiedades del objeto ua por una. se pueden extrarer multiples propiedades
 * de una sola declaracion. 
 * 
 * veamos un ejemplo de esto:
 * 
 */

//creason de un objeto
const person_2 = { name: "Alice", age: 30, city: "New York" };

//como se haria con el tomar multiples valores de un arrelo, pero ahora con objetos, extraemos las propiedades del objeto en este caos < name > y < age >
let { name, age } = person_2;

console.log(name); // Alice
console.log(age);  // 30

/**
 * podemos asingar los valores extraidos a varibales  con nombres diferents, esto puede ser util cunado se trabaja con objetos cutos nombres de propiedades pueden entrar en conflicto con 
 * varibales existentes 
 * 
 * 
 * 
*/
let person_3 = { name: "Alice", age: 30, city: "New York" };

//extraemos la propiedad < name > y lo asignamos a la varibale < personName> como un ejemplo. 
let { name: personName, age: personAge } = person;

console.log(personName); // Alice
console.log(personAge); //  30

/**
 *  como voy viendo su funcionamineto, la forma de como se realiza la extraccion de datos, es muy parecido a con los arreglos y la forma de extrar diferentes datos 
 * al igual que con los arreglos, podemos extraer datos y asginar valores predeterminados, si una propiedad no existe en el objeto que se esta desestrucuturando 
 * 
 */

// let person_4 = { name: "Alice", age: 30, city: "New York" };
// let { name_2, age, country = "Unknown" } = person_4;

// console.log(country); // Unknown

/**
 * se puede hacer la desestructuracion de objetos anidados, esto se puede hacer usando el conjutno de llaves
 * 
 * 
 */

const recipe = {
  name: "Chocolate Cake",
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
};

// Extract `flour` from `ingredients`
const { ingredients: { flour } } = recipe;

console.log(flour); // "2 cups"

/**
 * cunado los nombres de las varibales se parecen a los nomebres de las propiedadesd e un objeto se puede usanr una sitaxis abreviada
 * veamos algo como:
 */

let name_2 = "Bob";
let age_2 = 25;

//toma como propiedadesd las varibales creadas y se las agrega como propiedad
let person_5 = { name_2, age_2 };

console.log(person_5); // { name: "Bob", age: 25 }


/**
 * esto es util cunado se esta devolviendo objetos desde funciones o creando objetos con multiples propiedades:
 * 
 * 
 * 
 */

function createPerson(name, age) {
  return { name, age };
}

let person_6 = createPerson("Charlie", 35);
console.log(person_6); // { name: "Charlie", age: 35 }













