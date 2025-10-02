const input = "Hello World";
const search1 = "ello W";

const output = input.replace(search1, '')
console.log(`delete some searched words: ${output}`);


let mainString = "Hello World";
let search = "ell";
let result = "";

let found = -1;

for (let index = 0; index <= mainString.length - search.length; index++) {
    let macth = true;

    for (let j = 0; j < search.length; j++) {
        if (mainString[index + j] !== search[j]) {
            macth = false;
        }
    }

    if (macth) {
        found = index;
    }
}
if (found !== -1) {
    for (let index = 0; index < mainString.length; index++) {
        if (index >= found && index < found + search.length) {
            continue
        }
        
        result += mainString[index];
    }
}else{
    result = mainString;
}

console.log(result);