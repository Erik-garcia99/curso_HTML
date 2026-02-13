/**
 * 
 * en JS se tienen las conficiones 
 * 
 * - if - else if - else
 * 
 * asi como el operador ternaira (muy parecido a C)
 * 
 * creo que funcionamineto basico de estas condiciones no es algo nuevo para nosotros son casi iguales o diria iguales
 * en todos los lenguajes de programacion. 
*/

//veamos algunos ejemplos de como se usaria una condicion de fi 

//de ante mano sabemos que esta condicional no se va a cumplir 
if(null){
    console.log("esto nunca correra");
}
if("freeCodeCamp"){
    console.log("siempre correra");
}
//recorando que de esta menra ponienod if-if-if-if siempre estara evaluando en cada if 

let age = 15;

//ahora tenemos la codnicion if-else, qiue sabemos que si una no cumple entonces else es el utlimo, este entrara si o si
//en la condficion si no se cumplio con la del if-else if

if(age>=18){
    console.log("puedes votar pa");
}
else{
    console.log("pa tu casa, a ver pocoyo");
}

//ahora un ejemplo con if-else if-else

let score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}

/**
 * operador ternario, es una forma compacta de escribir sentencias simples entre if/else 
 * 
 * sintaxis:
 * 
 * condition ? expresionIfTrue : expresionIfFalse; 
 * 
 * 
*/

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);






