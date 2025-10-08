/* Write a function to find the difference in 2 given array
b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] */

let arr1 = [1, 2, 3, 10, 4, 5];
let arr2 = [3, 4, 5, 10, 6, 7];
function  findDifferenceArray(arr1, arr2) {
    let loot = [];
    let foundatas = false;
    let foundbawah = false;
    let count = 0;
    for (let index = 0; index < arr1.length; index++) { //loop 1-5
        for (let j = 0; j < arr2.length; j++) {// 1(5)index === j jika sama antara atas atau bawah maka ketemu
            if (arr1[index] === arr2[j]) {
                foundatas = true;
            }
            if (arr2[index] === arr1[j]) {
                foundbawah = true;
            }
            
            
        }
        if (foundatas !== foundbawah) {
            if (foundatas) {
                loot[count] = arr2[index];
                count++;
                foundatas = false;
            }else if(foundbawah){
                loot[count] = arr1[index];
                count++;
                foundbawah = false;
            }
        }else{
            foundatas = false;
            foundbawah = false;
            continue;
        }
    }
    return loot;
}
console.log(findDifferenceArray(arr1, arr2));

