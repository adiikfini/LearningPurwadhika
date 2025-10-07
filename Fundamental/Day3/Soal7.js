/* Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’*/

let Input = "The QuiCk BrOwN Fox";
let result = "";
for (let index = 0; index < Input.length; index++) {
    let element = Input[index];
    
    if (element !== "" && element !== " ") {
        let DecChar = element.charCodeAt()
        if (DecChar >= 41 && DecChar <= 90) { //ASCII table Alfabet Uppercase
            element = String.fromCharCode(DecChar + 32);
        }else if (DecChar >= 97 && DecChar <= 122) {
            element = String.fromCharCode(DecChar - 32);
        }
    }
    result = result + element;
}

console.log(result);
