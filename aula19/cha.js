const n1 = [2, -3, 4, -5]
let novo = []
let res = 0
function inverse(n1) {
    for(c = 0; c < n1.length; c++){
       res = n1[c] * -1
       novo.push(res)

    }
    console.log(novo)
}

inverse(n1)
