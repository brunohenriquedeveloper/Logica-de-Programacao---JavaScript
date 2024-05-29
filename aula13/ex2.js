let readline = require("readline-sync")

let num = readline.question("Insira um número: ")
for(let c = 1; c<=10; c++ ){

    console.log(`${num} x ${c} = ` + (num * c))
}