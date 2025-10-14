function lengthOfLastWord(s: string): number {
    let arr = s.replace(/\s+/g, ' ').trim();
    let cleanArr = arr.split(" ");
    let getLastWird = cleanArr[cleanArr.length-1];
    return getLastWird.length;
};

let word = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(word));
