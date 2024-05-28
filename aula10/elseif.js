var readline = require("readline-sync")

var n1 = readline.question("Qual sua nota 1? ")

n1 = parseFloat(n1)

var n2 = readline.question("Qual sua nota 2? ")

n2 = parseFloat(n2)

var n3 = readline.question("Qual sua nota 3? ")

n3 = parseFloat(n3)

var media = (n1 + n2 + n3)/3

console.log("MÉDIA: " + media)

if (media >= 6){
    console.log("APROVADO")
} else if( media >= 4 && media < 6){
    console.log("RECUPERAÇÃO")
} else{
    console.log("REPROVADO")
}