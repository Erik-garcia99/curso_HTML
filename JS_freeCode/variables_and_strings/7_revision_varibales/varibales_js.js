/**
 * mientras HTML y CSS proporcioian la estrucutra al sitio, JS aporta interactividd
 * a los sitios web, habilitando funciones completas 
 * 
 * como el manejo de entrada de usurio, aniumaciones, construcciones de aplicaciones web completas 
*/

/**
 *  TIPOS DE DATOS DE JS 
 * 
 * - numeros 
 * - numero de punto flotante 
 * - string
 * - booleano
 * - indefinido y nulo 
 * - objetos 
 * 
 * 
*/

//objeto 

let pet = {
    name: "Flufly",
    age :3,
    type: "dog"
}

//el tipo < Symbol > es un dato unico e inmutable 

//el tipo < bigInt > sirve para rpesentar un numero extremadamente largo que no puede el Number normal

//-------------------------------------
// DECLARACIOND E VARIBALES 

/**
 * 
 * para poder declarar una varibales se puede usar : 
 * - let 
 * - const 
 * 
 * la varibale < let > es mucho mas flezible y se puede modificar su contenido 
 * 
 * una varibale declarada como < const > es una constante y no puede reasignar su valor
 * 
 * 
 */


let city = "tijuana"

const estado =" baja california"

estado = "sonora"

console.log(estado) // <- este surgira un error.

