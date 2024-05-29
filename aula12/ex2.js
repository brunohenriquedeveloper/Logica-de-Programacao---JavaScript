let readline = require("readline-sync")

let nome = readline.question("Nome: ")

let c = 1

let soma = 0

do{
    let nota = readline.questionFloat(`Nota ${c}: `)
    soma += nota
    c++
    }while(c <= 4)

        
let media = soma/4

console.log("Media: " + media.toFixed(1))
