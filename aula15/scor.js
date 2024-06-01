const readline = require("readline-sync")

const pontos1 = []
const pontos2 = []

let team = readline.question("What's the team name? ")



for(let c1 = 1; c1 < 4; c1++){
    pontos1.push(parseInt(readline.question(`Pontos ${c1}: `)))
}

function score(n1,n2,n3){
    let media;
    media = (n1 + n2 + n3)/ 3
    media = parseInt(media)
    console.log(`The average score is ${media} `)
    return media
}
let res1 = score(pontos1[0], pontos1[1],pontos1[2] )
console.log(res1)

let team2 = readline.question("What's the other team name? ")



for(let c2 = 1; c2 < 4; c2++){
    pontos2.push(parseInt(readline.question(`Pontos ${c2}: `)))
}

let res2 = score(pontos2[0], pontos2[1], pontos2[2])
console.log(res2)

if(res1 > 100 && res2 > 100 && res1 > res2){
    console.log(`The team ${team} wins`)
} else if(res1 > 100 && res2 > 100 && res1 < res2) {
    console.log(`The team ${team2} wins`)
} else if ((res1 > 100 && res2 > 100 && res1 === res2)){
    console.log(`There was a draw`)
} else {
    console.log(`There wasn't a winner because both of the teams didn't reach at 100 points!`)
}
