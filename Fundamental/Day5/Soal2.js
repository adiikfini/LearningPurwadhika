/* Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date” */

let arr = ["apple", "banana", "cherry", "date", "papaya", "Orange"]
function concatenating(arr) {
    if (!arr || arr.length === 0) {
        return "";
    }

    if (arr.length === 1){
        return arr[0];
    }

    const lastArr = arr[arr.length -1];//last array
    const otherArr = arr.slice(0, -1); //without last array
    const joinedOthers = otherArr.join(", ");

    return `${joinedOthers} and ${lastArr}`;
}

console.log(concatenating(arr));
