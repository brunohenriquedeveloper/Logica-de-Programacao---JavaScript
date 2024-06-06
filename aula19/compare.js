const arr = [2, 5, 23, 78, 97, 56, 34, 25]

let old = 0
let young = 0

    function comparisonpo(arr){
        for(c =1; c< arr.length; c++){
            if(arr[c] > arr[c-1]){
                old = arr[c]
            }
            
        }
    }

    function comparisonmin(arr){
        for(c = arr.length -1; c< arr.length; c--){
            if(arr[c] < arr[c -1]){
                young = arr[c]
                
            }
        }
    }

    comparisonpo(arr)
    comparisonmin(arr)
    const difer = old - young
    console.log(difer)
   