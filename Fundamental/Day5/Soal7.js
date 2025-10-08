/* Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6] */
let maxSize = 5;
function SetMaxArray(maxSize, ...Numbers) {
    let count = 0
    let arr = [];
    if (Numbers.length === 0) {
        return [];
    }
    if (maxSize >= Numbers.length) {
        for (const element of Numbers) {
            arr[count] = element;
            if (count == (Numbers.length-1)) {
                return arr;
            }
            count++;
        }   
    }else{ 
        for (const element of Numbers) {
            if (count == maxSize) {
                return arr;
            }
            arr[count] = element;
            count++;
        } 
    }    
}

//alt code
function SetMaxArrayAlt(maxSize, ...Numbers) {
    const arr = [];
    let count = 0;
    for (const element of Numbers) {
        if (count === maxSize) {
            break;
        }
        arr[count] = element;        
        count++;
    }
    return arr;
}
console.log(SetMaxArray(maxSize, 5, 10, 24, 3, 6, 7, 8));
console.log(SetMaxArrayAlt(maxSize, 5, 10, 24, 3, 6, 7, 8));


