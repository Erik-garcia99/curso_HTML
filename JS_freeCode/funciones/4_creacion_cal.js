function calculateSum(num1, num2){
    return num1 + num2;
}

function calculateDifference(num1, num2){
    return num1-num2
}

function calculateProduct(num1, num2){
    return num1*num2
}

function calculateQuotient(num1,num2){
    if(num2 == 0){
        return "Error: Division by zero"
    }
    else{
        return num1/num2
    }
}

function calculateSquare(num){
    return Math.pow(num,2)
}

console.log(calculateSum(2,5))
console.log(calculateSum(10,10))
console.log(calculateSum(5,5))

console.log(calculateDifference(22,5))
console.log(calculateDifference(12,1))
console.log(calculateDifference(17,9))

console.log(calculateProduct(13,5))

console.log(calculateQuotient(7,11))

console.log(calculateQuotient(3,0))


