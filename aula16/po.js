const readline = require("readline-sync")

const num1 = readline.question("Tell me a number: ")

function po(n1){
    const array = []
    do{
        let power = 2 ** n1
        array.push(power)
        n1--
    } while(n1>=0)
        return array

}

let res = po(num1)
console.log(res)