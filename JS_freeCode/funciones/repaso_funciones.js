
/**
 *una funcion en JS esta declarada con la palabra reservada < funcrion > los parametros no reciben ningun tipo de datos solo se declaran 
 * 
 *  ejmp:
 *      function addNumbers(x, y, z) {
            return x + y + z;
        }

 * 
 * por degecto una funcion regresa < undefined > 
 * 
 * 
*/


/**
 * 
 *      FUNCION FLECHA 
 * 
 * esta funcion es una forma mas concisa de escribir uana funcion en JS 
 * 
 * ejmp:
 * 
 *      const calculateArea = (length, width) => {
            const area = length * width;
            return `The area of the rectangle is ${area} square units.`;
        };
 * 
 * 
 * en donde esta funcion recibira 2 parametros y la informacion se guardara dentro de la constante.  
 * 
 */

const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + (amount * taxRate);
};

console.log(calculateTotal(100));

function exampleFunction() {
  return "Hello";
  return "World!";
};

let ejmp = exampleFunction();
console.log(ejmp)

const sum = (num1, num2) => num1 + num2
console.log(sum(0, 0) + num2);
