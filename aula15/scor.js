const readline = require("readline-sync")

const pontos1 = []
const pontos2 = []

let team = readline.question("What's the team name? ")



for(let c1 = 1; c1 < 4; c1++){
    pontos1.push(parseInt(readline.question(`Pontos ${c1}: `)))
}

function score(n1,n2,n3){
    let media;
    media = parseInt(media)
    media = (n1 + n2 + n3)/ 3
    console.log(`The average score is ${media} `)
}
res1 = console.log(score(pontos1))