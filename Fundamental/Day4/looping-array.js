/* 
 Looping Array
*/

const product = ['Kaos','Celana','Sepatu'];

//statis looping
console.log("statis looping");

for (let index = 0; index <= 2; index++) {
    const element = product[index];
    console.log(element);
}

//dynamic looping array
console.log("\ndynamic looping array");

for (let index = 0; index < product.length; index++) { //hati2 dengan komparator karena array.length adalah banyak item pada array sedangkan index akses array diawali dari 0
    const element = product[index];
    console.log(element);
}


/*Looping For of : Digunakana  untuk melooping array dari index pertaman ke index terakhir*/
const fruits = ['Mangga', 'Semanggka', 'Jeruk']
console.log("\nLooping For of");

for (const element of fruits) {
    console.log(element);
}