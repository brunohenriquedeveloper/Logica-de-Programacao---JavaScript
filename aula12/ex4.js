let readline = require("readline-sync")

let c = 1

let nota = 0

do {
    nota = readline.question(`Nota ${c}: `)
    c++
  
}while(c < 6)

