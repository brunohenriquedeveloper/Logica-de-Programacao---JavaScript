"strict mode";

const T = [17, 21, 23]

function printForecast(){

    let days = 1
    for(let c = 0; c < T.length; c++){
     
         console.log(`${T[c]} ºC in ${days} days, `)
       days = days + 1
         
    }
    
  
}

printForecast(T)