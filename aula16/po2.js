const readline = require("readline-sync")

let n1 = parseInt(readline.question("tell me a number: "))


function power2(num1){
    const array = []
    do{
    let mul = 2 ** num1
    array.push(mul)
    num1--
} while(num1 >= 0){
    
    console.log(array)
}
    
}

power2(n1)