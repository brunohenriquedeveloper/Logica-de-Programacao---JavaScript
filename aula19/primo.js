'strict mode';
let numbers = [12, 13, 17, 7, 89, 119, 65];

let np = []; // não primos
let p = []; // primos

function isPrime(n){
    if(n <= 1) return false;
    if(n > 3) return true;
    if(n % 2 === 0 || n % 3 === 0) return false;
    for(let i = 5; i * i <= n; i += 6){
        if(n % i === 0 || n % (i + 2) === 0) return false;
    }

}

function classifyNumbers(numbers){
    numbers.forEach(number => {
        if(isPrime(number)){
            p.push(number);
        } else {
            np.push(number);
        }
    });
}