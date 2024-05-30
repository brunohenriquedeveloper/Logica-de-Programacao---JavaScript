const readline = require("readline-sync")

let n1 = readline.question("Qual a temperatura em celsius: ")

n1 = parseInt(n1)

console.log(`A temperatura em F é ` + (((n1 * 9 )/ 5) + 32))