function maskEmail(email){
    //la funcion no va a enmascarar la priemr letra ni la segunda. 
    let len= email.indexOf("@");
    
    let trama=email.slice(1,len-1);


    let rep= "*".repeat(len-2);
    let mask = email.replace(trama,rep)
    return mask;

}
let email="apple.pie@example.com"
console.log(maskEmail(email));

console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));





