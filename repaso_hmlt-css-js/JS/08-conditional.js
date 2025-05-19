

//los condiciones podemos agruparlos en 3 bloques 

// tenemos los if, else, if else. 

// if() se utiliza para cunado la codnicion sera verdadera 


let age = 37;

if(age == 37){
    //si la codnicin se cumple este bloque de codigo se ejecuta
    console.log("la edad es 37");
}
// si no se cumple el if se ejecuta el else
else{
    console.log("la edad es diferente de 37")
}

// se puede usar el else if 

if (age== 37){
    console.log("la edad es 37");
}
else if( age < 18){
    console.log("es menor de edad");
}
else{
    console.log("la edad no es 37");
}


// operador terniario 
// con el operador terniario podemos asignar valores a una varibale 
const massage = age == 37 ? "la edad es 37 T":"la edad no es 37 T";

console.log(massage)

// switch-case

let day = 0; 

switch(day){

    case 0 :
        console.log("el dia es lunes");
        break;

    case 1 :
        console.log("el dia es martes");
        break;
    
    case 2 :
        console.log("el dia es miercoles");
        break;

    case 3 :
        console.log("el dia es jueves");
        break;

    case 4 :
        console.log("el dia es viernes");
        break;

    case 5 :
        console.log("el dia es sabado");
        break;

    case 6 :
        console.log("el dia es domingo");
        break;

    default:
        console.log("dia incorrecto");
        break;
}








