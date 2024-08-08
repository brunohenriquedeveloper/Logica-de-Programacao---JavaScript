const multiplier = (a) => (b) => a * b

const double = multiplier() 
const triple = multiplier(3) 

console.log(double(2)(4))
console.log(triple(4))