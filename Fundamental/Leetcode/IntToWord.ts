function numberToWords(num: number): string {
    if (num === 0) {
        return "Zero";
    }
    const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];

    function IntToWord(n: number): string {
        if (n === 0) {
            return "";
        } else if (n < 20) {
            return belowTwenty[n];
        } else if (n < 100) {
            const tenDigit = Math.floor(n / 10);
            const rest = n % 10;
            return tens[tenDigit] + (rest > 0 ? " " + IntToWord(rest) : "");
        } else {
            const hundredDigit = Math.floor(n / 100);
            const rest = n % 100;
            return belowTwenty[hundredDigit] + " Hundred" + (rest > 0 ? " " + IntToWord(rest) : "");
        }
    }

    let result = "";
    let i = 0; 

    while (num > 0) {
        const chunk = num % 1000;

        if (chunk > 0) {
            const chunkWords = IntToWord(chunk);
            const label = thousands[i] ? " " + thousands[i] : "";
            result = chunkWords + label + (result ? " " + result : "");
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
};

console.log(numberToWords(123));
