/* Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx} */

function MinMaxAvg(arr) {
    let min= arr[0], max = arr[0], avgResult;
    let avg = 0;
    for (let index = 0; index < arr.length; index++) {
        //min
        if (min > arr[index]) {
            min = arr[index];
        }
        //max
        if (max < arr[index]) {
            max = arr[index];
        }
        //Avg
        avg = avg + arr[index];
    }
    avgResult = avg / arr.length;
    console.log(`Min= ${min} Max= ${max} Avg= ${avgResult.toFixed(2)}`);
    
    
}
arr = [12, 5, 23, 18, 4, 45, 32];
MinMaxAvg(arr);
