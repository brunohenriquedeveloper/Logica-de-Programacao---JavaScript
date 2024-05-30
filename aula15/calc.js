const readline = require("readline-sync")

let num1 = readline.question("Informe um numero: ")
let num2 = readline.question("Informe mais um numero: ")

function somar(n1, n2){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    console.log("adição: " + (n1 + n2))
}

function subtrair(n1,n2){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    console.log("subtração: " + (n1 - n2))
}
function mult(n1,n2){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    console.log("multiplicação: " + (n1 * n2))
}
function divd(n1,n2){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    console.log("divisão: " + (n1 / n2))
}

somar(num1, num2)
subtrair(num1, num2)
mult(num1, num2)
divd(num1, num2)