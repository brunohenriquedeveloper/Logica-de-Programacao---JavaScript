let readline = require("readline-sync")
let c = 1
let nome = readline.question("Nome: ")
let soma = 0

while(c <= 4){
    let nota = readline.questionFloat(`Nota ${c}: `)
    while(nota < 0 || nota > 10){
        nota = readline.questionFloat("A nota deve ser entre 0 e 10: ")
    }
    soma += nota
    c++
}

let media = soma / 4

console.log("Media: " + media)