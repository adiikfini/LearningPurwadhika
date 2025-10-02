const currency = 1000;

console.log(`"Rp. ${currency},00"`);

let numberIdr = 1000
let str = String(numberIdr);
let result = "";

let count = 0;

for (let index = str.length-1; index >= 0; index--) {
    result = str[index] + result;
    count++
    if (count % 3 === 0 && index !== 0){
        result = "." + result;
    }
}

console.log(`"Rp. ${result},00"`);