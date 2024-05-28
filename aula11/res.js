let readline = require("readline-sync")

console.log("Lanchonete:")
let pedido = readline.questionInt(" 10 - X tudo\n 11 - Bomba\n 12 - X Bacon\nDigite o numero da opcao que voce deseja: ")

switch(pedido){
    case 10: 
    console.log("Aqui está seu X tudo")
    break

    case 11:
        console.log("Aqui está sua Bomba")
        break

    case 12: 
        console.log("Aqui está seu X Bacon")
        break
    
    default:
        console.log("Infelizmente não temos essa opção")
}