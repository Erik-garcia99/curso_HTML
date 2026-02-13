/**
 * Funcion flecha:
 * 
 * en JS tenemos una declaracion de funcion muy parecida a la de cualquier lenguaje, 
 * pero tambien se tiene una segunda manera de declarar una funcion la cual recibe el
 * nombre de < funcion flecha >. 
 * 
 * veamos un ejemplo de como se crea:
 * 
*/
const greetings = (name) => {
  console.log("Hello, " + name + "!");
};

/**
 * en este caso, estamos creando una varibale constante llamada greetings, a la cual le asignamos una
 * funcion anonima. la mayoria de la sintaxis resulta familiar, a excepcion de la agregacion del elemento
 * (=>) 
 * 
 * veamos un ejemplo con el cual podemos usar un return:
*/

const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log(calculateArea(5, 3)); // 15


