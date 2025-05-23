// arreglos (arryas)
//funciona como una lista, al aparecer 


//al aprecer se declara muy parecido a la de python, este array nos permite alamacenar una serie de datos desde la misma varibale 
let arreglo = []

//podemos crear de la sigueitne manera 

let myArray = new Array()

arreglo = [ 1 ] //esta es la manera mejor para declarar un arreglo 

//pero que hace myArray si hago lo mismo que el arreglo, loq ue hace myArray es crear un objeto de la clae Array que lo que hace es reservar espacios en memoria 

console.log(arreglo)

console.log(myArray)


// como guardar varios vaores dentro de un array 

arreglo = [1, 2, 3, 4]
console.log(arreglo)


myArray =[ 1, 2, 3, 4]
console.log(myArray)

//podemos cambiar, el tipo , el areglo puede ser como en pyhon dnde se pueden guardar varios tipos de datos dentro del arreglo 

arreglo = ["erik", "garcia", 1, 2, [45, true]]

console.log(arreglo)

//como podemos ir anaiadendo poco a poco valores al arreglo 
myArray2 = new Array(3) //asignamos 3 espacios 

//una lista en JS no es necesario decirle el tamanio de este, este puede ser tan extenso como elemento teiene en si nocomo en C que se declaran estos 
//un arreglo es ordenado, 
myArray2[0] = 'erik'
myArray2[1] = "garcia"
myArray2[2]= 'erik garcia'

console.log(myArray2)

//metodos comunes para el arreglo 
//para el array simple 

myArray3 = []

//push y pop 

//push mete elementos 

myArray3.push("erik")
myArray3.push("garcia")
myArray3.push("JS")

console.log(myArray3)


//operacion POP (elimina elementos desde el ultimo elemento )
//este pop lo elimina y devuelve el valor. 
myArray3.pop()

console.log(myArray3)


//shift y unshift 

myArray3.shift()

//elimina el primer elemento del JS y lo devuelve lo mismo que el pop 
console.log(myArray3)

//se puede agregar 1 o mas elementos al princiaip del arreglo 
myArray3.unshift('maria', [84, true])

console.log(myArray3)

//len
console.log(myArray3.length) //retorna la longitud del arreglo 


//clear 
//como borrar un array 

// myArray3= [] <- si se vuelve a declarar vacio se limpia el arreglo 


//slice 
//devuelve una copia de un rango dadod, es como en python que se tiene los [2:4] mas o menos 
myArray3.push(37)
//va desde el pedazo de inicio hasta donde quiero que llegue no lo oma en cuenta por lo que en realidad es 

// slice(start, finish-1)
let myNumArray = myArray3.slice(1,2)

console.log(myNumArray)


//splice 
//esta un rango desde donde queremos eliminar 
myArray3.splice(1,3)
console.log(myArray)


