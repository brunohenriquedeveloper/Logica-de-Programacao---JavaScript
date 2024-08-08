const multiplier = (a) => (b) => a * b

const double = multiplier(2) 
const triple = multiplier(3) 

console.log(double(2)(4))
console.log(triple(4))