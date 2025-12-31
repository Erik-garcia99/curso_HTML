//en JS se tiene una estrucutra llamada set -> 
// ---> MIN 2:45:52 


//un set es un tipo de estrucutra parecido a un arreglo solo que este no contiene datos duplicados en su estrucutra 

//declaracion 

//para declarar un set este si se declara como objeto tal, creo que no vale las 2 formas como con un arreglo 


let mySet = new Set()

/**
 * unque la represetnacion de un set sus valores es medinate las llaves 
 * {} <- si declaracion << let mySet_2 = {} >> para querer represneta un 
 * set vacio no es correcto esto no nos dara eso es otro tipo de dato 
 * la unica forma es creando el objeto como tal. 
 * 
 * un set para que pueda inicializarse sus datos deben de ir entre corchectes como se muesta en el ejemplo
 * 
 * 
 * 
*/
//sin los corchetes -> Set(4) { 'e', 'r', 'i', 'k' }
//con corchetes -> Set(5) { 'erik', 'garcia', 'chavez', 37, false }

mySet = new Set(["erik", "garcia", "chavez", 37, false])




//metodos comunes 

// a direfencia con los arreglos qie tenemos los metoos pop y push para poder aniadir elementos dentro de nuestro arreglo 

//para los sets tenemos los metdos << add() >> y << delete() >>

mySet.add("https://xhamster.com")


//la peculiridad con los sets es que el metodo << delete() >> debemos de especificar cual es el elementos que este tendra que eliminar no es un pop, pero este no funciona con un indice, IMPORTANTE -> EL METODO DELETE REQUIERE QUE LE PASEMOS CUAL ES EL VALOR DEL DATO QUE QUEREMOS ELIMINAR 


console.log(mySet)

//EL METODO retorna un boolean, true si es elemento existe o false si no existe el elemeto 
mySet.delete("https://xhamster.com");

console.log(mySet)






