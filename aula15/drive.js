const readline = require("readline-sync")

let age

do {
    age = readline.question("What´s your age? ")
    age = parseInt(age)
     if(age === 0){
    console.log("Your age is not valid")}} while(age === 0) {
    
        const isOldEnough = age >= 18

    if(isOldEnough){
        console.log("You are able to drive")
    } else {
        const yearsLeft = 18 - age
        console.log(`You are not able to drive wait ${yearsLeft} year(s)`)
    }
    }