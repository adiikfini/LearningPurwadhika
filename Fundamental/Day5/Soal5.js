/* 
Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
 */
console.log(`manual logic`);
arr = [1, 2, 3, 4]
addItem1 = 2;
addItem2 = 5;
const addItemToArray = (arr,addItem) => {
    let found = false;
    for (let index = 0; index < arr.length; index++){
        if (addItem === arr[index]) {
            found = true;
        }
    }
    if (found) {
        return arr;
    }else{
        arr[arr.length] = addItem;
    }
    return arr;
}
console.log(addItemToArray(arr,addItem1));
console.log(addItemToArray(arr,addItem2));



//alt code adduniqueitemaddItem1 = 2;
arrAlt = [1, 2, 3, 4];
console.log(`\nresult alternatif`);
function addUniqueItem(arr,addItem) {
    if (arr.includes(addItem)) {
        return [...arr];
    }else{
        return [...arr,addItem];
    }
}
console.log(addUniqueItem(arrAlt,addItem1));
console.log(addUniqueItem(arrAlt,addItem2));

