var readline = require("readline-sync")

var numero = readline.questionInt("informe um numero: ")

if ( numero % 2 == 0){
    console.log("O número é par")
} else {
    console.log("o número é ímpar")
}