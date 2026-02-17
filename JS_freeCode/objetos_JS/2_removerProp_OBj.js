/**
 * 
 *           ----------------------------      remover propiedades de un objeto      ----------------------------
 * 
 * 
 * el operador < delete()> es el metodo mas facil y directo que hay para realizar dicha operacion, cunado se usa este metodo, se remueve la propiedad seleccionada 
 * del objeto 
 * 
 * 
 */



let person = {
    name: "alice",
    age: 30,
    city: "new york",
    job: "enginner"
};


delete person.job;

console.log(person.job); // undefined, no lo encontro porque ahora no existe. 

/**
 * otra forma es usando asignacion declaratorio con parametros rest. este metodo no elimina la propiedad como delete pero crea una copia del cobjeto sin esa propiedad 
 * 
 * 
 * 
 */

person = {
    name: "alice",
    age: 30,
    city: "new york",
    job: "designer"
};

const {job, city, ...reamingProperties} = person;

/**
 * con este metodo estamos asignando una desestrucutracion para extraer trabajo y ciudad, del objeto perosna, recopilamos las propiedades restantes en un neuvo obejro 
 * esto crea un nuevo objeto sin las propiedades de job y city
 * 
 * 
 */


/**
 * 
 *   -------------- como comprobar si un objeto tiene una propiedad ---------------------
 * 
 *  en JS existen varias manera para comprobar si un objeto contiene una propiedad especifica, esto es importantes si se esta trabajando con datos de fuentes externas, 
 * con el fin de asegurarnos que contengan las propiedades necesarias dependiendo del trabajo a realizar. 
 * 
 * exploraremos 3 casos
 * - metodo < hasOwnProperty() > 
 * - operador < in > 
 * - la comprobaciopn contra < undefined > 
 * 
 * 
*/

//operador hasOwnProperty(), este metodo regresa un booleando si el objeto tiene la propiedad. 

console.log(person.hasOwnProperty("name")); // regresa true, porque contiene esa propiedad 
console.log(reamingProperties.hasOwnProperty("job")); //false, porque este objeto le eliminaos esa propiedad. 


//operadro < in > 
//al igual que el metodo este regrea un booleano (true) si la propiedad existe en el objeto

console.log("city" in person); //obtenemos true porque contiene la propiedad 




