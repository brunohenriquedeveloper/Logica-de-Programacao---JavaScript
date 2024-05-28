let readline = require("readline-sync")

let Sexo = readline.question("Qual o seu sexo?\n [M] Masculino\n [F] Feminino \n")

let sexoM = Sexo.toUpperCase()

switch(sexoM){
    case "F": 
        console.log("Sexo Feminino") 
        break

    case "M":
            console.log("Sexo Masculino") 
            break
        
    default: 
        console.log("Sexo invalido")
} 