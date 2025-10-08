/* Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3 */
mixedArray = ["3", 1, "string", null, false, undefined, 2];
function sumAlltheNum(mixedArray) {
    let count = 0;
    for (const index of mixedArray) {
        let dataType = typeof index;
        if (dataType === 'number') {
            count += index;
        }
    }
    return count;
}
console.log(sumAlltheNum(mixedArray));
