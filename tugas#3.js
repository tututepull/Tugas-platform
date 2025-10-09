// no 1

let input = 13
let output = input + 1

for(let i=2; i<output; i++){
    if(output % i === 0){
        output++
    }
}

console.log(`bilangan prima sesudah ${input} adalah ${output}`)

// no 2

let awal = 1
let akhir = 12
let total = 0

for (let i = awal; i <= akhir; i++) {
    if (i > 1) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            total += i;
            console.log(i);
        }
    }
}
