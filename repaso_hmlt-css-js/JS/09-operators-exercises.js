/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor




// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = 'DMRX'
let pass = 'best4ever123'


if(user === 'DMRX' && pass === 'best4ever123'){
    console.log("loging exitoso");
}
else{
    console.log('Ups!\n ocurrio un error');
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log('\n');
let number = 0

if(number > 0){
    console.log("el numero es positivo")
}
else if(number < 0){
    console.log('el numero es negativo')
}
else{
    console.log("el numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log('\n');
let age = 18; 

if(age >= 18){
    console.log("puedes votar")
}
else{
    let resto = 18 -age;

    console.log(`te faltan ${resto} año/s para poder votar`);

    
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log('\n');

age = 21;

const persona = age > 18 ? "adulto" : "menor"

console.log(persona)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7