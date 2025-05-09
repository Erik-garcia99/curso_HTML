/* 
en JS tenemos 3 palabras reservadas quenos sirven para guardar las varibales las cuales son 

-var 
-let
-const
*/

//as variables se deben de crear con lowerCamelCase 
// osea la primera letra de la perimra palabra empieza en minuscula  despues de la segunda palabra sus letras inciales 
// empiezan con mayusculas  

var helloWorld = "Hello JS!"

//las vriables las podemos psar por parametros como puede ser en C, JAVA, python etc.
console.log(helloWorld)

//las variabels en JS son debilmente tipadas 
/*
lo que nos dice que los valores de estas pueden variar de valores nuericos a string o viceversa y como cualquier variable esta cambia de valor 
*/
helloWorld ="hola de nuevo JS"

console.log(helloWorld)

//usar var causa muchos problemas, por lo que surguiron las nuevas verciones, 


//usando <let>, ara crear una varibale con let es la mism gata que con var

//las varibales declaradas con let solo son accesibles dentro de un bloque 
let helloWorld2 = "hola de nuevo 2"
console.log(helloWorld2);


//const, este evita el probelma al igual que let no se puede acceder antes de ser declarara, la diferencia con let es que son constantes, no pueden ser reasignadas es una constante 

const  helloWorld3= "hello worls 3"

console.log(helloWorld3)




