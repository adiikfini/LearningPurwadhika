function intToRoman(num: number): string {
    let result:string = '';
    //case M
    let getM = Math.floor(num/1000) ;
    for (let index = 0; index < getM; index++) {
        result += 'M';
    }
    //case D-C
    let tempToGetD = num % 1000 ;//sisa bagi {output:749}
    let tempOfDC = Math.floor(tempToGetD / 100);//hasil bagi {output :7}
    result += Roman(tempOfDC, "MDC");
    // case L-X
    let getLX = tempToGetD % 100; //sisa bagi {output:49}
    let tempLX = Math.floor(getLX / 10);//hasil bagi {output :4}
    result += Roman(tempLX, "CLX");
    let getVX = getLX % 10;//sisa bagi {output:9}
    //case V-I
    result += Roman(getVX, "XVI");
    function Roman( tempLX:number, roman: string) {
        //case L
        let result:string = '';
        if (tempLX === 9) { //tambahkan D jika 90
            result += roman[2] + roman[0];
        }else if (tempLX >= 5) { // jika lebih dari 50
            result += roman[1];
        }

        //case X
        if (tempLX > 5 && tempLX < 9) { //jika lebih dari 50
            for (let index = 0; index < tempLX-5; index++) {
                result += roman[2]; 
            }
        }else if (tempLX < 4) {// jika kurang dari 400
            for (let index = 0; index < tempLX; index++) {
                result += roman[2]; 
            }
        }else if (tempLX === 4){
            result += roman[2] + roman[1];
        }

        return result;
    }
    return result;
};

let num: number = 3749;
console.log(intToRoman(num)); //MMMDCCXLIX


// Int To Roman Optimized
/**
 * Mengubah angka integer menjadi string angka Romawi dengan metode Direct Lookup.
 * Ini adalah salah satu solusi yang paling efisien.
 */
function intToRomanOpz(num: number): string {
    // Siapkan "kamus" untuk setiap nilai tempat.
    // Indeks array merepresentasikan angka (0-9).
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    // Pecah angka dan langsung ambil string yang sesuai dari kamus.
    
    // 1. Ambil bagian ribuan
    const thousandStr = thousands[Math.floor(num / 1000)];
    
    // 2. Ambil bagian ratusan
    const hundredStr = hundreds[Math.floor((num % 1000) / 100)];

    // 3. Ambil bagian puluhan
    const tenStr = tens[Math.floor((num % 100) / 10)];

    // 4. Ambil bagian satuan
    const oneStr = ones[num % 10];

    // Gabungkan semuanya
    return thousandStr + hundredStr + tenStr + oneStr;
}

// Mari kita uji dengan angka yang sama
console.log(intToRomanOpz(num)); // Output: MMMDCCXLIX

let num2: number = 58;
// thousands[0] -> ""
// hundreds[0] -> ""
// tens[5] -> "L"
// ones[8] -> "VIII"
console.log(intToRomanOpz(num2)); // Output: LVIII

let num3: number = 1994;
// thousands[1] -> "M"
// hundreds[9] -> "CM"
// tens[9] -> "XC"
// ones[4] -> "IV"
console.log(intToRomanOpz(num3)); // Output: MCMXCIV

