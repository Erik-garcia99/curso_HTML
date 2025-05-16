//Sting 

let myName = "Erik"

//concatenar la cadena 
let gretting =  "hola " + myName //concatenar 

console.log(gretting)

//longitud 
console.log(gretting.length)

//acceso a caracteres, como en C o python se peude acceder mediante los indices 

console.log(gretting[0])
console.log(gretting[1])

// metodos comunes
console.log(gretting.toUpperCase()) //transofrma todo a myosculas 
console.log(gretting.toLowerCase())
console.log(gretting.indexOf("hola")) //el indice en donde ha entrado en la palabra, si no encuentra devuelve un -1
console.log(gretting.includes("erik")) //verifica si la cadena incluse la palabra que se pasa como parametro 
console.log(gretting.slice(0, 5)) // retorna los valores entre un rango de valores dentor de la cadena es como si en python hiceramos el [1:10]
console.log(gretting.replace("Erik", "mario")) //intercambia x palabra por y palabra 


//templates literals 

//est es para poder escirbir un mesnaej de vairas lineaas lo podemos hacer con las comillas invertidas 
let msesasge =`hola es es mi 

curso de JS` 

console.log(msesasge)

//pomdemos comtrar el mensaje con como en python seria el imprimri usando print(f"")

console.log(`Hola, ${myName}!`)





















