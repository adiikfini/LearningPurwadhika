function ReplaceLetterA(Text) {
    let replaceText = "";
    for (let index = 0; index < Text.length; index++) {
        const element = Text[index];
        if (element == "A" || element == "a") {
            replaceText += "*"
        }else{
            replaceText += element;
        }
    }
    return replaceText;
}

console.log(ReplaceLetterA("An apple a day keeps the doctor away"));
