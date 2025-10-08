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


//alt code
function FDM(arr1,arr2) {
    const difference = [];
    for (const element1 of arr1) {
        let found = false;
        for (const element2 of arr2) {
            if (element1 === element2) {
                found = true;
                break;
            }
        }
        if (!found) {
            difference.push(element1);
        }
    }

    for (const element2 of arr2) {
        let found = false;
        for (const element1 of arr1) {
            if (element2 === element1) {
                found = true;
                break;
            }
        }
        if (!found) {
            difference.push(element2);
        }
    }

    return difference;
}

//alf code with method
function findDifferenceModern(params) {
    const diff1 = arr1.filter(element => !arr2.includes(element));
    const diff2 = arr2.filter(element => !arr1.includes(element));
    return [...diff1, ...diff2];
}

console.log(findDifferenceArray(arr1, arr2)); //statis
console.log(FDM(arr1,arr2)); //dinamis
console.log(findDifferenceModern(arr1,arr2)); //dinamis
