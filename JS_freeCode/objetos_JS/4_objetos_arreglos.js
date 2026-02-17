/**
 * 
 * ----------- como trabjas con el acceso a propiedades desde objetos y arreglos anidados en objetos -------------
 * 
 * 
 * al trabajar con JS, se pueden presnetar estrucuturas de datos complejas, que involucran objetos  anidados, arreglos dentro de objetos. estas estrucutras son ricas en datos 
 * pero hay que saber como podemos acceder a esa informacion sin comprometer datos circurlantes. 
 * 
 * para acceder a propiedades desde objetos anidados, implica usar la notacion de puntos o la notacion de corchetes, de manera similar a como se accede a propiedades de 
 * objetos simples. es necesaio encadenar estos accesos para descender a la estrucutra anidada. 
 * 
 * veamos el sigueit ejempoo
 * 
*/

let person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};


//para acceder al numero de alice el resultado deberia ser algo como: 

console.log(person.contact.phone.work);

//de igual forma se puede usar la notacion de corchetes, especialmente util cunado estos incluyen espacios o caracteres especiales 
console.log(person["contact"]["phone"]["work"]);


/**
 * ahora como se accede a los datos donde una de las propiedades del objeto tiene el valor de un arreglo, veamos
 * 
 * 
 */
person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};

console.log(person.addresses[1].city); //estamos accedinedo combinando el acceder de un arreglo y de un objeto. 


/***
 * 5
 *  ----------------  cual es la diferencia entre tipos de datos primitovos y no primitivos. --------------------------
 * 
 * estas 2 categorias de datos se comportan de manera diferente en termino de como se alamacenan en memoria y como se manejan en los programas 
 * 
 * - datos primitivos: los tipos de datos mas simples de JS, numeros, cadenas, booleanos, null. undefined, simbolos, se les concoe como primitivos porque representan valores
 * unicos no objetos 
 * 
 * estos valores son inmutables, por lo que una vez creados no puede cambiarse su valor, pero se puede reasignar un nuevo valor a la varibale. 
 * 
 * -datos no primitivos son tiepos de datos mas complejos, entre los que se incluten objetos regulares, arreglos y funciones. estos pueden contener multiples valores como 
 * propiedades o elementos. cunado se crea y se le asigna a una varibale en realizar se le asignar una referencia en memoria donde se ubica ese datos. 
 * 
 * por lo que si se le asgina a otra varibale el mismo objeto y en este se cambia un valor se cambia en todoas las varibales que contengasn esa referncia, porque estan trabajando
 * sobre la misma seccion de memoria, lo que tienen las variables es esa referncia en memoria. 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */