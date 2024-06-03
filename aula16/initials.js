const readline = require("readline-sync")
let num1 = readline.question("Tell me a number: ")


function po2(n1){
    let power = 0
    const array = []
    do {
      power = 2 ** n1
        array.push(power)
      n1--
    } while (n1 >= 0)
        return array
}
let res = po2(num1)
console.log(res)