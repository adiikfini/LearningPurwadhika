/* Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’*/

function swapCase(randomString) {
    let swapString = '';
    for (let key of randomString) {
        if (key === key.toUpperCase()) {
            swapString = swapString + key.toLowerCase();
        }else if (key === key.toLowerCase()) {
            swapString = swapString + key.toUpperCase();
        }
    }
    return swapString;
}
console.log(swapCase('The QuiCk BrOwN Fox'));


