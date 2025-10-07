console.log("Soal1");
/* Create a function that can create a triangle pattern according to the height we provide like the
following :
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 */
function CreateATriangle(height) {
    let count = [];
    for (let index = 0; index < height; index++) {
        count[index] = index+1;
        console.log(count);
    }
}
CreateATriangle(5);


console.log("\nSoal2");
/* 
● Create a function that receiving array
as input, and this function can find
maximum value in array without
using built in method in javascript.
● Parameters : array
● Output: number
● Example input: [10, 55, 79, 32]
● Example output: 79 
*/
function MaxValueOfArray(arr) {
    let Max=0;
    for (let index = 0; index < arr.length; index++) {
        if (Max === 0) {
            Max = arr[index];
        }else if(Max < arr[index]){
            Max = arr[index];
        }
    }
    return Max;
}

console.log(MaxValueOfArray([10, 55, 79, 32]));


console.log("\nSoal3");
/* 
● Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10
● Parameters : height → triangle height
*/

function CreateATrianglearr(height) {
    let arr= [];
    let count = 0;
    for (let index = 1; index <= height; index++) {
        // console.log("loop ke" + index);
        for (let j = 0; j < index; j++) {
            count++;
            if (count < 10){
                arr[j] = "0" + count; 
            }else{
                arr[j] = String(count); 
            }
            // console.log(`\n${j} > ${count}`); 
        }
        console.log(arr);
  
    }
}
CreateATrianglearr(5);
/* ● Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz */

console.log("\nSoal4");
function ReplaceFizzBuzz(N) {
    let arr = []
    for (let index = 1; index <= N; index++) {
        if (index % 3 === 0 && index % 5 === 0){
            arr[index-1] = "FizzBuzz";
        }else if (index % 5 === 0) {
            arr[index-1] = "Buzz";
        }else if (index % 3 === 0){
            arr[index-1] = "Fizz";
        }else{
            arr[index-1] = index;
        }
    }
    return arr;
}
console.log(ReplaceFizzBuzz(15));

console.log("\nSoal5");
/* ● Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))²
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity” */
function calculateBodyMassIndex(weight, height) {
    if (height <= 0 || weight <= 0) {
        return "height and weight must be more than 0.";
    }
    const resultBody = weight / ((height/100) ** 2);
    const ManualToFixedOne = Math.round(resultBody*10)/10;
    if (ManualToFixedOne < 18.5) {
        return `resultBody = ${ManualToFixedOne} is Less Weight`;
    }else if (ManualToFixedOne < 25) {
        return `${ManualToFixedOne} is Ideal`;
    }else if (ManualToFixedOne < 30) {
        return `${ManualToFixedOne} is Over Weight`;
    }else if (ManualToFixedOne < 40) {
        return `${ManualToFixedOne} is Very Over Weight`;
    }else{
        return `${ManualToFixedOne} is Obesity`;
    }
}
console.log(calculateBodyMassIndex(89 , 169));
console.log(calculateBodyMassIndex(0 , 169));
console.log(calculateBodyMassIndex(89 , 0));


console.log("\nSoal6");
/* Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10] */
const removeAllOddNumbers = (array) => {
    let bag=[];
    let count=0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            bag[count] = array[index];
            count++;
        }
    }
    return bag;
}
console.log(removeAllOddNumbers([1,2,3,4,5,6,7,8,9,10]));


console.log("\nSoal7");

const splitAString = function (word) {
    let resultWord = [];
    let count = 0;
    let currentWord = "";
    for (let index = 0; index < word.length; index++) {
        const karakter = word[index];
        if (karakter === ' ') {
            resultWord[count] = currentWord;
            count++;
            currentWord = "";
        }else{
            currentWord = currentWord + karakter;
        }
    }
    resultWord.push(currentWord)
    return resultWord;
}
console.log(splitAString("Hello World"));
