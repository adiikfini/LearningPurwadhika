/* Logical Operation

    - AND &&
        >ketika salah satu nilai bernilai False, maka hasil akan False
        >ketika keduanya True, maka hasil akan True
    - OR ||
        >ketika salah satu nilai True, maka hasil akan True
        >ketika kedua nilai False, maka hasil akan False
    - NOT !
        >negasi dari hasil nilai
*/

//&&
console.log("&&")
console.log(10 == '10' && 1 === '1'); // true && false -> false
console.log(10 >= 5 && 5 <= 10 && 10 >= 1); // true && true && true -> true

//||
console.log("\n||")
let nilaiAboy = 75;
let nilaiimanuel = 80;
console.log(nilaiAboy >= 70 || nilaiimanuel >= 75); //true || true ->false
console.log(nilaiimanuel > 90 || nilaiimanuel > 90);// false || false -> false


//!
console.log("\n!")
let isGraduated = false;
console.log(!isGraduated);


