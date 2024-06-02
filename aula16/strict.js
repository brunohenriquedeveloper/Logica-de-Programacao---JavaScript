const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3 

let avgKoalas = calcAverage(23, 34,)
let avgDolphins = calcAverage(85, 54, 41)

console.log(avgKoalas)
console.log(avgDolphins)

function checkWinner(num1, num2) {

    if (num1 >= 2 * num2){
        console.log(`Dolphins wins!`)
    } else if(num1 >= 2 * num2){
        console.log(`Koalas wins!`)
    } else{
        console.log(`No one wins!`)
    }
}

checkWinner(avgDolphins, avgKoalas)