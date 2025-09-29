/* variable
    Tempat menyimpan data
    ada 3 jenis
    1. var (sekarang sudah jarang digunakan)
    2. let (bisa diubah isinya)
    3. const (tidak bisa diubah isinya)

    Reles penamaan Variabel
    1. tidak boleh diawali dengan angka
    2. tidak boleh ada spasi
    3. tidak boleh menggunakan karakter khusus kecuali _ dan $
    4. tidak boleh menggunakan kata kunci yang ada di javascript
    5. penamaan variabel sebaiknya menggunakan camelCase, snake_case atau kebab-case
    6. penamaan variabel sebaiknya menggunakan bahasa inggris
    7. penamaan variabel sebaiknya menggambarkan isi dari variabel tersebut
    8. penamaan variabel sebaiknya tidak terlalu panjang dan tidak terlalu pendek
    9. penamaan variabel sebaiknya konsisten
*/ 

var name = "John Doe"; // variable string
let age = 30; // variable integer
const isMarried = false; // variable boolean

// contoh penamaan variabel
let first_name = "Jane"; // snake_case
let lastName = "Doe"; // camelCase
let FullName = first_name + " " + lastName; // Kebab-Case
let $salary = 5000; // variable
let _address = "123 Main St"; // variable
// let 1name = "Invalid"; // invalid variable
// let first name = "Invalid"; // invalid variable
// let first-name = "Invalid"; // invalid variable
// let var = "Invalid"; // invalid variable

console.log(name);
console.log(age);
console.log(isMarried);
console.log(first_name);
console.log(lastName);
console.log(FullName);
console.log($salary);
console.log(_address);

console.log("Hello, nama saya " + name + ", umur saya " + age + " tahun, status saya menikah: " + isMarried + ", alamat saya di " + _address + ", gaji saya " + $salary + " per bulan.");