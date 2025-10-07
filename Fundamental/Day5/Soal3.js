/* Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2 */
let numbers = [5, 3, 1, 7, 2, 6];
function secondSmallestNumber(numbers) {
    let bag = 0;
    for (let index = 0; index < numbers.length; index++) {
        for (let j = 0; j < numbers.length; j++) {
            //min
            if (numbers[index] > numbers[j]) {
                //swap
                bag = numbers[j];
                numbers[j] = numbers[index];
                numbers[index] = bag;
            }
        }
    }
    console.log(numbers[numbers.length-2]);
}

secondSmallestNumber(numbers);