const bill = 60
let tip = 0

bill >= 50 && bill <= 300 ? tip = (bill * 0.15) : tip = (bill * 0.20 )

let finalv = bill + tip

console.log(`The bill was ${bill}, the tip was ${tip} and the final value is ${finalv}`)