let arr1 = [1, 2, 5, 6, 7]

let arr2 = [3, 4, 6, 8, 9, 12]

let combinedArray = [...arr1, ...arr2]
let uniqueSet = new Set(combinedArray)
let uniqueArray = [...uniqueSet]
console.log(uniqueArray.sort((a,b) => a - b))
