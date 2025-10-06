//Function : Digunakan untuk menyimpan baris code. Agar baris code kita bisa reusable

/*
    1.Declaration Function
    2.Function Expression
    3.Arrow Function
*/

/* Declaration Function */
function FunctionName() {
    console.log('hello');
}

FunctionName();

/* Function Expression */
const functionName = function () {
  console.log('Hi');
};

functionName();

/* Arrow Function */
const function_name = () => {
    console.log('Hello world');
}

function_name();


//function with params
function Greeting(fullName, Address, hobby) {
    console.log(
        `Helo, ${fullName}! My Address is ${Address} and my hobby is ${hobby}`
    );
}

Greeting('\nMoh Adi ikfini M', 'Lebak', 'Ngoding');

//function with default params
function Println(Username = 'Gest', time = '00:00:00') {
    console.log(`\nhello, ${Username}! Now is ${time}`);
}

Println();
Println(undefined,'12:00:00');
Println("Adi",'12:00:00');

//function with default parameters
function PrintProduct(product1, product2, ...products) {
    console.log(product1);
    console.log(product2);
    console.log(products);
}

PrintProduct('Mangga', 'Jeruk', 'Apel', 'Semangka', 'Melon');


/* Function with return adalah function yang mengembalaikan hasil */
function Multiply(a,b) {
    return a * b;
}

let result = Multiply(11,5);
console.log(result);
