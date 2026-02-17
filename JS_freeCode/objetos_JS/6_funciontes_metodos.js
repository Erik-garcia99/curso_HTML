/**
 * 7 
 * 
 *  --------------- diferencias entre funciones y metodos --------------
 * 
 * 
 * en JS los 2 son opciones de encapsular y reutilizar codigo, pero tiene sus diferenicas en coimo se definen, utilizan y el contecto en el que operan. 
 * 
 * - una funcion es un bloque de codigo reutilizable, utilizado para fragmentar en codigo en tareas chiquitas, una funcion se encarga de realizar ya tarea en especifico.
 * 
 * - un metodo es una funcion asociada a un objeto, se defiene como propiedades de un objeto y pueden acceder y manipular los daos del objeto. (encapsulamiento)
 * 
 * 
 */
const person = {
    name: "Bob",
    age: 30,
    sayHello: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(person.sayHello()); 

/**
 * una funcion se invoca, muentras que un metodo se llama usando la notacion de punto en el objeto al que pertenecen. 
 * 
 * otra diferencia es el contexto en que operan. las funciones tiene su propio ambito, pero no tiene una refernecia integrada a ningun objeto en particular. 
 * los metodos estan vinculadora a su objeto y pueden acceder a sus propiedades y otros metodos usando la palabra clave < this >
 * 
 * 
 */
