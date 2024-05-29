let readline = require("readline-sync")

let senhacorreta = 123

for(let c = 1; c<= 3; c++ ){
let senha = readline.question("Digite Sua Senha")
if(senha == senhacorreta){
    console.log("usuario autenticado") 
    break
} else if(senha != senhacorreta) {
    console.log("senha incorreta tente novamente")
}

if(senha != senhacorreta && c == 3){
    console.log("Usuario Bloqueado")
}

}