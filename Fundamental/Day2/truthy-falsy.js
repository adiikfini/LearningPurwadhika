/* truthy-falsy = nilai non-boolean yang dikonversi menjadi nilai boolean  */
// falsy
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

//truthy
console.log(Boolean(' '));
console.log(Boolean(10));

let input = " ";

console.log("\ncek input")
if (input == '' || input == NaN || input == 0 || input == undefined || input == null){
    console.log("input anda tidak valid")
}else {
    console.log("input anda Valid")
}

console.log("\ncek input")
if (Boolean(input) === False){
    console.log("input anda tidak valid")
}else {
    console.log("input anda Valid")
}

console.log("\ncek input")
if (!input){
    console.log("input anda tidak valid")
}else {
    console.log("input anda Valid")
}