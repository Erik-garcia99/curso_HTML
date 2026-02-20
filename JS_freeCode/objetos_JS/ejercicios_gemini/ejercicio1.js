/**
 * 
 * funcion que recibre nombre, ingredientes y tiempi, la funcion debe de regresa un ibjeto que unfluya esas propioedades y adelas totalIngredientes y nivel de dificultad
 * 
 * esto cunado se tiene arreglos con esos datos 
 * 
 * 
 */


//funcion 

function create_recipe(name, ingredents, time){
    //nombre de la receta 
    //ingredientes es un arreglo del total de ingredeintes 
    let totalIngredents = ingredents.length;
    let difficultyLevel;
    if(time <= 30){
        difficultyLevel = "easy";
    }
    else if(time <= 60){
        difficultyLevel = "meddium";
    }
    else{
        difficultyLevel = "hard";
    }

    return { name, ingredents, time, totalIngredents, difficultyLevel};
}




//veamos un ejemplo de lo que me regresa

let recetas = []

let ingredents =["tortilla", "tomate", "chile", "jamon"];

let enchiladas = create_recipe("enchiladas", ingredents, 70);

console.log(enchiladas);

recetas.push(enchiladas);





