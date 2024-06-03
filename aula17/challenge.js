const boj = {
    fullNameJ:  'John Smith',
    massJ: 92,
    heightJ: 1.95,
    fullNameM: 'Mark Miller',
    massM: 78,
    heightM: 1.69,

    calcBMI(m, h){
       return m / h ** 2
    },
}
const John = boj.calcBMI(boj.massJ, boj.heightJ)
console.log(John.toFixed(2))
    
const Mark = boj.calcBMI(boj.massM, boj.heightM)
console.log(Mark.toFixed(2))

if(John > Mark){
    console.log(`${boj.fullNameJ}'s BMI ${John.toFixed(2)} is higher than ${boj.fullNameM}'s BMI ${Mark.toFixed(2)}`)
} else if(John === Mark) {
console.log('John and Mark have the same BMI')
} else{
    console.log(`${boj.fullNameM}'s BMI ${Mark.toFixed(2)} is higher than ${boj.fullNameJ}'s BMI ${John.toFixed(2)}`)
}
