const arr = [2, 5, 23, 78, 97, 56, 34, 25];

let old = arr[0];
let young = arr[0];

    function complus(arr){
        for(c = 1; c <= arr.length; c++){
           if(arr[c] < arr[c-1]){
            old = arr[c]
           }
            
        }
}

function cominus(arr){
    for(c = 1; c < arr.length; c++){
        if(arr[c] > arr[c-1]){
            old = arr[c]
           }
    }
}

complus(arr)
cominus(arr)

const res = old - young

console.log(old)
console.log(young)
console.log(res)
   