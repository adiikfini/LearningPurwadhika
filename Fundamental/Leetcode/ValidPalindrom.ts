function isPalindrome(s: string): boolean {
    const cleanInput = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversInput = cleanInput.split('').reverse().join('');
    if(cleanInput === reversInput){
        return true;
    }

    return false;
};

let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));

