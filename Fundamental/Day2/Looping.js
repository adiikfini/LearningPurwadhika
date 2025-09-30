/* Looping adalah intruksi untuk mengulang suatu perintah yang dijalankan sampai kondisi terpenuhi

*/
let kondisi = 0;
//for
for(i=0; i<10 ;i++){
    console.log("hello world");
}

//while
while (kondisi<3) {
    console.log("hello world");
    kondisi++;
}

//do...while
do {
    console.log("hello world");
    kondisi++;
} while (kondisi<3);

let array_atau_string = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
//for...of
for (let item of array_atau_string) {
    console.log(item);
}

let object = {a:1, b:2, c:3, d:4};
//for...in
for (let key in object) {
    console.log(key);
}

//forEach
array_atau_string.forEach(function(item, index, array) {
    console.log(item);
});


