/**
 * 
 * sintaxis de la funciones en JS 
 * 
 * las funciones en JS reciben la sigueinte sintaxis 
 * 
 * 
 * fuction Name_Function(param1, param2,...,param_n){
 * 
 *  return algo; <- solo si la funcion va a regresar algo, si no pues no se pone. 
 * }
 * 
 * un poco mas sencillo que en C ya que no es necesario inidcarle su prototipo y todo el demsade de los
 * parametros en C, pero TypeScript creo que si tendria eso y puede que sea mucho mejor ya que es necesario 
 * la declrarion de tipo 
 * 
 * al parecer como en python podemos declarar que algunas varibales ya inciadas en el prototipo 
 * como:
*/

function mystery(a, b = 3) {
  return a * b;
}
console.log(mystery(4));




