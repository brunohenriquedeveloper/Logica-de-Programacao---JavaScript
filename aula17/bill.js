const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []

const total = []

for(let c = 0; c<=9; c++){

    function calTip(n1) {
    if(n1 >= 50 && n1  <= 300 ){
      tip = n1 * 0.15
      console.log(`The ${n1} tip is ${tip}`)
      
    } else {
        tip = n1 * 0.20
        console.log(`The ${n1} tip is ${tip}`)
    }
    tips.push(tip)

    total.push(bills[c] + tip)
    return tip
}
const res = calTip(bills[c])
}


console.log('TIPS: ' + tips)
console.log('TOTAL: ' + total)