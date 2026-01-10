/**
 * 
 * el metodo < prompt() es una de las fromas mas simples de obtener entradas de un usuario
 * a traves de una pequenia ventada de diglaogo emergente 
 * 
 * este metodo toma 2 arguemntos:
 * 1- el mensaje que aparecera dentro del cuadro de dialogo
 * 2- un valor predetermiando que es opcional y llenrara el campo de entrad indinalmente
 * 
 * para esto neceitaremos HTML y traremos elementos de HTML
 * 
*/

const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");

btn.addEventListener("click", () =>{
    const userName = prompt("cual es tu nombre?", "guest");
    output.textContent = "hello ," + userName + "!"
});

/**
 * 
 * este es un metodo bloqueante por lo que detendrea la ejecucion de scritp hasta que el usuario intereactue con
 * el cuadeo de dialogo
 * 
 * 
 * 
 * 
 */


