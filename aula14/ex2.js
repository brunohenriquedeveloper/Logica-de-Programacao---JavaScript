const readline = require("readline-sync")
let soma = 0


function apro(media){
    
    if(media >= 6){
        console.log("Aprovado")
    } else if( media >= 4){
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}

let nome = readline.question("Nome: ")

for(let c = 1; c <= 4; c++){
    let nota = readline.questionFloat(`Nota ${c}: `)
    soma += nota
}

const media = soma / 4
console.log("Média: ", media)


apro(media)


