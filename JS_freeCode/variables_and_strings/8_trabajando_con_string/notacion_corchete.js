/***
 *
 *  en JS al igual que C un string es una secuencia de caracteres dentro de un arreglo 
 * 
 * la opreacion bajo indices de giual fortma se pueden usar en JS como en C
*/

let greting = "hello";

console.log(greting[1]); // -> nos da e por el indice de igual forma de 0 -> n-1

/**
 * en JS tenemos el meotodo < lenght > que funciona para darnos el tamanio en este caso 
 * de un arreglo, en este caso un arreglo de caracteres, nos dice de cuantos elementos se compone en arreglo en
 * donde esta guardado.  
*/


/**
 * okay al parece JS tambien acepta los caractres ASCII como en C
 * 
 * 
 * algo que puse en un archivo anterio en donde si queremos poner una palabra entrecomillaod 
 * pero estamos uando las comillas dobles < " " > para declarar el string, en el caso que queramos 
 * encerrar una palabra entre estas al igual que en C o java usamos los caracteres ASCII
 *  -> "she said \"hello!\""; <- esto es correcto
 * 
 * 
 * 
 */

/**
 * 
 * tenemos los lieterales de plantilla 
 * 
 * esto permite una manipulacion de cadenas mas sencilla, incluir el incrrustrar varibales 
 * directamentro dentro de una cadena. 
 * 
 * las literales de plantillas facilitan la creacon de cadenas que abarcan multiples lineas o 
 * incluyen expresiones 
 * 
 * estas son como en python, parecido cunado queremos hacer un strinf formateado ya sabes 
 * 
 * python -> print(f"hola ${varibale} simon")
 * 
 * 
 */

const name ="alice" 
const greeting = `hello, ${name}!`;

console.log(greeting);

/**
 * la interpolacion de string permite incrustar varibales y expresiones dentro de una 
 * cadena, esto represta una mejora significativa sobre el metodo anterior
 * donde se concatenaban cadenas y varibales utilizando el operador < + >
 * 
 * vemos unso ejemplos 
 */



//vemos que con este ejemplo tenemos una concatenacion algo tardia en este caso 
//solo son 2 vairbales pero pueden ser muchas mas entonces seria algo tardado
const age = 25
let messege = "my name is " + name + "and i am " + age + "years old";
console.log("concat : \t",messege);

//ahora con la lietalres de plantillas e interpolaciond e string 

messege = `my name is ${name} and i am ${age} years old.`;
console.log("interpolacion \t: ", messege);
/**
 * vemos como la interplacion de string es mucho mas limpia y facil de escribir
 * 
 * otra caracterisite es que sipeoran cadenas multineas. con las cadenas nromales es necesario
 * declarar explicitament con el caracter de salto de line (\n) que vamos a crear nuevas lineas 
 * 
 * con las lieteales somplement escirbirmos como queremos que se meustre y asi lo hara. 
 * 
 * 
 */

let poem =`Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`

console.log(poem)


/**
 * las literales permiten insertar expresiones de JS directamnete dentro de la cadena 
 * 
 * 
 */

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log("\n",output); 

// ` `  <- este tipo de comillas se les conoce como backtick

