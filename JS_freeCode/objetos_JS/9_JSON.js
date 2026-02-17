/**
 * 
 * ---------- que es JSON y como accedes a los valores usando notacion de corchetes y notacion de puntos -----------
 * 
 * JSON es un formato de datos ligero, basado en texto que se usa comunmnete para intercambiar datos entre un servidor y una aplicacion web.  
 * 
 * JSON es independiente del lenguaje, peuden enviarse datos desde una aplicacion JAV a una en python, o desde una de JS  aotra de C# 
 * 
 * JSON soportan muchos tipos de datos incluyendo objetos, arreglos, cadenas, booleanso, nulo y numeros. veamos un ejemplo de un objeto JSON
*/

/*

    {
    "name": "Alice",
    "age": 30,
    "isStudent": false,
    "list of courses": ["Mathematics", "Physics", "Computer Science"]
    }

*/

/**
 * JSON usa pares clave-valor para alamcenar informacion, y cada una esta separa por una coma. 
 * 
 * para poder acceder a un objeto JSON, se puede usar la notacion de puntos o corchetes, veamos un ejemplo de esto:
 * 
 * 
 */

import data from "./example.json" with {type: "json"}; //estamos importando la informacion y asignandole el alias de "data"

console.log("edad",data.age);

//igualmanera se puede acceder usando la notacion de corchetes para acceder a la infromacion de los objetos JSON. 

console.log(data["list of courses"])


/***
 * 
 *   ------------- como funciona JSON.parse() y JSON.stringify() ---------------
 * 
 * 
 * tenemos 2 metodos potentes en JS para manerar datos JSON. < JSON.parse() y JSON.stringify() > 
 * estos metodos se utilizan para convertir cadenas JSON y objetos de JS
 * 
 * 
 * - JSON.stringify() se usa para convertir un objeto JS en una caden JSON. es util cunaod se requiere almacenar o trasmitir datos en un 
 * formato que pueda copartirse o trasferirse entre sistemas 
 * 
 * veamos un ejemplo:
 * 
 * 
 */

const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

let jsonString = JSON.stringify(user);
console.log(jsonString); // se convierte su salida en como un diccionario en python 

/**
 *  este metodo acepta un parametro opcional, llamado < replacer > que puede ser una funcion o arreglo. 
 * 
 * 
 */
const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

// result: {"firstName":"Jessica","country":"USA"}
console.log(JSON.stringify(developerObj, ["firstName", "country"]));

/**
 * en este ejemplo, recibe primero el objero, despues un arreglo en donde se especifican las propiedades que queremos convertir en formato 
 * JSON,por lo que solo obtendremos esos 2 propiedades como salida JSOn 
 * 
 * 
 * otro parametro es < spacer >, este permite controlar el esapcio del resultado de la cadena. 
 * 
 */
console.log(JSON.stringify(developerObj, null, 2));

/**
 * 
 * otro metodo usado es < JSON.parser() > convierte una cadena JSON de nuevo en un objeto JS (este hace el contrario que JSON.stringify)
 * 
 * es util cinado se recuperan datos JS de un servidor, y es necesaio manipular los datos de la aplicacion. veamos un ejemplo
 * 
 * 
 */


jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);






