
const bill = [100, 20, 44]
console.log(bill)

function calTip(num1){
    if(num1 >= 50 && num1 <= 300 ){
      tip = num1 * 0.15
      
    } else {
        tip = num1 * 0.20
       
    }
    return tip
}


let tip2 = [calTip(bill[0]), calTip(bill[1]), calTip(bill[2])]
console.log(tip2)

let total = [tip2[0] + bill[0],tip2[1] + bill[1], tip2[2] + bill[2]]
console.log(total)
