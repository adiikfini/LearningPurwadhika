let student = {
  name: "Adi",
  program: "JCWD",
  address: "Lebak",
};

const user = new Object();
user.name = "Adi Ikfini";
user.password = "abcdefg";
user.email = "adi.ikfini@gmail.com";

const product = {
  name: "Indomie goreng",
  price: 2500,
  stock: 100,
};

console.log(product.name);
console.log(product["price"]);

//Update Object
console.log("\nmana product di ubah");
product.name = "Indomie ayam bawang";
console.log(product);

//Delete product
console.log("\nDelete product");

delete product.name;
delete product["price"];
console.log("data name dan price dihapus");

console.log(product);

//Destructuring Assigment
console.log("\nDestructuring Assigment");

{
  const product = {
    name: "kaos polis",
    price: 1000,
    size: "XXXL",
  };

  const { name, price, size } = product;
  console.log(name);
  console.log(price);
  console.log(size);
}

function Profile({ Fullname, address, email, PhoneNumber, hobby }) {}

Profile({
  Fullname: "Adi ikfini",
  address: "Lebak",
  email: "Adi@gmail.com",
  PhoneNumber: "089",
  hobby: "Nonton",
});

/* Spread Operator */

{
  const obJone = {
    name: "adi",
  };

  const obJtwo = {
    email: "adi.ikfini@gmail.com",
  };

  const objfinal = { ...obJone, ...obJtwo };

  /* Copy by Reference */
  const productMarket = {
    name: "Sawi",
    price: 1500,
    stock: 1000,
  };

  // newProductMarket hanya menyalin "alamat memori" dari productMarket,
  // bukan nilainya. Keduanya menunjuk ke objek yang sama persis.
  const newProductMarket = productMarket;

  // Mengubah properti melalui newProductMarket...
  newProductMarket.name = "Kangkung";

  // ...akan ikut mengubah productMarket asli.
  console.log("--- Copy by Reference ---");
  console.log("productMarket:", productMarket); // Output: { name: 'Kangkung', price: 1500, stock: 1000 }
  console.log("newProductMarket:", newProductMarket); // Output: { name: 'Kangkung', price: 1500, stock: 1000 }

  console.log("\n" + "=".repeat(30) + "\n");

  /* Copy by Value */
  const originalProduct = {
    name: "Sawi",
    price: 1500,
    stock: 1000,
  };

  const copiedProduct = { ...originalProduct };

  // Mengubah properti melalui copiedProduct...
  copiedProduct.name = "Kangkung";

  // ...TIDAK akan mengubah originalProduct.
  console.log("--- Copy by Value ---");
  console.log("originalProduct:", originalProduct); // Output: { name: 'Sawi', price: 1500, stock: 1000 }
  console.log("copiedProduct:", copiedProduct); // Output: { name: 'Kangkung', price: 1500, stock: 1000 }
}

