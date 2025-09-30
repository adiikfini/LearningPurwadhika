let number = 4;
// ● Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number
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
console.log(`\n${number} → ${A}`);


// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6
let bag=0;
for(let i=1; i<= number ; i++){
    bag = bag + i;
}
console.log(`\n${bag}`);

// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
bag = 1;
let output;
while(true){
    bag = number;
    number--;
    output = bag * number;
    if(number == 0){
        break;
    }
}
console.log(`\n${output}`);

// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610