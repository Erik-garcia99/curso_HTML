//operadores 

/*
que cojones sonnnn??
no cierto se claramento que son 

para realizar operaciones dependeod la funcionalidad 

*/

//operasdores aritmeticos 


let a = 5
let b = 10

let suma = a + b

console.log(suma) //suma

/*
JS tienes las operaciones aritmeticas tipicas de toda la vida 

+ suma
- resta 
* multiplicacion 
/ divicion 

tenemos las otras 

% modulo (el modulo es el resto de la divicion)

** potencias 

++ es incremento (le suma 1 al valro actual mas no se si funcion como en C incremeten post o pre)

-- decremento se le resta 1 al valor actual 


*/

//opreacores de asignacion 

/**
 * 

= asignacion el valro litereañl 



 */

let myVariable = 2
console.log(myVariable)
//varibale se aginacion que le suma al resultado de la vairbale en este caso la repsuesta seria 4 porqueseria 2 que tiene la viarbale anteroir mas los 2 se le estan sumando es como hacer  (myVaribale = myVaribale +2)

myVariable += 2 // muy parecido a C
console.log(myVariable)

//funciona de igual froma con los demas operaciones basico 

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


//opreaciodes de compracion

//muy parecido  C
// > mayor que 
// < menor que 
// >= mayor o igual 
// <= menor o igual 
// == igual que, igyuladar por valor

//=== igualdad de identidad, por tipo y valor 


// != distinco que 
//!== disintos que por identidad 


// tenemos los operadores logicos al parecer seran iguales que en C 

// tenemos el AND (&&)


a = 1
b = 1


if( a && b == 1){
    console.log("AND entro ")
}

//lo mimso esta funcionado con OR (||)

// tensmos el complementos A1 NOT (!)

// operadores terniarios 
//forma de escribir condicionales, es el mismo que el de C 
//se conforma de 2 partes el simbolo ( ? ) y los (:) que serapan los 2 posbibles valores 

//vairbile ? seCimple : noCumple


const isRainning = true 

isRainning ? console.log("llueve"): console.log(" no llueve") 



