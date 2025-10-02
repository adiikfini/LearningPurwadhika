const input = "ayam"

const cleanInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
const reversInput = cleanInput.split('').reverse().join('');
console.log(`input ${cleanInput.split('')}`);
console.log(`revers ${reversInput.split('')}`);


if(cleanInput === reversInput){
    console.log(`"${input}" is Palindrom`);
}else{
    console.log(`"${input}" not Palindrom`);
}

