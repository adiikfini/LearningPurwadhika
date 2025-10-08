/* Write a function from the below array of number that will return sum of duplicate values. let
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40 */
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
arr2 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumOfDuplicateValues(arr) {
    const count = 0;
    for (const numStr in arr) {
        count = arr[numStr];
    }
    return count;
}

console.log(sumOfDuplicateValues(arr));
