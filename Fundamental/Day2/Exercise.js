let number = 4;
// ● Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number
console.log("Soal1");

if(number % 2 == 0){
    console.log(`${number} -> even number`);
}else{
    console.log(`${number} -> odd number`);
}

// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number
let A ="is a prime number"
if (number <= 1){ //validasi tidak nol dan negatif
    A ="is not a prime number";
}else{
    for(let i = 2;i<=Math.sqrt(number);i++){ //looping angka habis oleh i
        if (number % i === 0){ 
            A ="is not a prime number";
            break;
        }
    }
}
console.log("\nSoal2");

console.log(`\n${number} → ${A}`);


// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6
console.log("\nSoal3");
let bag=0;
for(let i=1; i<= number ; i++){
    bag = bag + i;
}
console.log(`\n${bag}`);

// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
bag=1;
console.log("\nSoal4");
for (let index = 1; index <= number ; index++) {
    bag = bag * index;
    console.log(bag);
}
// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

let arr = [];
if (number <= 0){
    arr = [];
}
if (number === 1){
    arr = [0];
}else{
    arr = [0,1]
}

for (let i = 2; i < number; i++) {
    const nextNum = arr[i-1] + arr[i-2];
    arr.push(nextNum);
}
console.log(arr);


