const readline = require("readline-sync")

let n = readline.question("Me diga um numero: ")

n = parseFloat(n)

if(n > 1 && n % 2 == 0){
    console.log(`O numero ${n} e par`)
} else {
    console.log(`O numero ${n} e impar`)
}