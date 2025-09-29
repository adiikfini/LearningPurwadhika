/* STRING Method */
console.log("String Method");

// slice : Memotong karakter pada string
let text = "Hello new student programing";
let result = text.slice(0, 5);
console.log(result); // Hello

// .split : Memisahkan karakter pada string
let text2 = "Hello new student programing";
let result2 = text2.split(" ");
console.log(result2); // [ 'Hello', 'new', 'student', 'programing' ]

// .substring : Memotong karakter pada string
let text3 = "Hello new student programing";
let result3 = text3.substring(0, 5);
console.log(result3); // Hello   

// .toUpperCase : Mengubah karakter pada string menjadi huruf besar
let text4 = "Hello new student programing";
let result4 = text4.toUpperCase();
console.log(result4); // HELLO NEW STUDENT PROGRAMING

// .toLowerCase : Mengubah karakter pada string menjadi huruf kecil
let text5 = "Hello new student programing";
let result5 = text5.toLowerCase();
console.log(result5); // hello new student programing

// .indexOf : Mencari karakter pada string
let text6 = "Hello new student programing";
let result6 = text6.indexOf("student");
console.log(result6); // 10

// Number Method
console.log("\nNumber Method");
var numPoint = '1200.0233';
// Number() : Mengubah string menjadi number
console.log(Number(numPoint)); // 1500
// ParseInt() : Mengubah string menjadi number (bilangan bulat)
console.log(parseInt(numPoint));

// date method
console.log("\nDate Method");
let date = new Date();
console.log(date.getFullYear()); // 2024
console.log(date.getMonth() + 1); // 6 (bulan dimulai dari 0)
console.log(date.getDate()); // 10 (tanggal)
console.log(date.getDay()); // 1 (hari dimulai dari 0)
console.log(date.getHours()); // 14 (jam)
console.log(date.getMinutes()); // 30 (menit)
console.log(date.getSeconds()); // 45 (detik)
console.log(date.getMilliseconds()); // 123 (milidetik)
console.log(date.toDateString()); // Mon Jun 10 2024
console.log(date.toTimeString()); // 14:30:45 GMT+0700 (Indochina Time)
console.log(date.toISOString()); // 2024-06-10T07:30:45.123Z