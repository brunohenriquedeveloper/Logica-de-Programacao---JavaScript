const readline = require("readline-sync")

n1 = readline.question("Digite um numero: ")

n1 = parseFloat(n1)

const raizQuadrada = Math.sqrt(n1)

if(Number.isInteger(Math.sqrt(n1))){
    console.log(`O número ${n1} já é um quadrado prefeito`)
} else{
    const round = Math.round(raizQuadrada)

    console.log(`O número quadrado mais proximo de ${n1} é: ` + round * round)
}









