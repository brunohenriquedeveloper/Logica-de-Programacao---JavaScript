const readline = require("readline-sync")

function Bmi(m, h){
   return (m / h ** 2).toFixed(2)
}

let name1 = readline.question("What´s your name? ")

let mass1 = readline.question("What´s your weight? ")

let height1 = readline.question("What´s your height? ")

let bmi1 = Bmi(mass1, height1)

console.log (name1+ ": " + bmi1)

let name2 = readline.question("What´s your name? ")

let mass2 = readline.question("What´s your weight? ")

let height2 = readline.question("What´s your height? ")

let bmi2 = Bmi(mass2, height2)

console.log (name2 + ": " + bmi2)

if(parseFloat(bmi1) > parseFloat(bmi2)) {
    console.log(`${bmi1} > ${bmi2}`)
    console.log(true)
} else if (parseFloat(bmi1) === parseFloat(bmi2)) {   console.log(`${bmi1} = ${bmi2}`)
    console.log("its the same BMI")
} else {
    console.log(`${bmi1} < ${bmi2}`)
    console.log(false)
}
