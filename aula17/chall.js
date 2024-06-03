const arr = [2002, 1045, 6879, 8905, 4679]

function calcAve(arr){
    let sum = 0
    for(let c = 0; c < arr.length; c++){
      sum +=  arr[c]
    }
    return sum / arr.length
}


n = calcAve(arr)
console.log(n)