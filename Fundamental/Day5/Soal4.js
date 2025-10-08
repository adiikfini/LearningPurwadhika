/* 
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4] 
*/
arrA = [1, 2, 3];
arrB = [3, 2, 1];
function calculateArray(arrA, arrB) {
    let result = [];
    for (let index = 0; index < arrA.length; index++) {
        result[index] = arrA[index] + arrB[index];
    }
    return result;
}

console.log(calculateArray(arrA,arrB));
