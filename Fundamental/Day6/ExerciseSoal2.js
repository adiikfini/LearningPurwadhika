class Product {
    constructor(_name, _price) {
        this.Name  = _name;
        this.Price = _price;
    }
}

class Transaction {
    constructor(){
        this.cart = [];
        this.Total = 0;
    }

    addProduct(Product, Quantity = 1){
        this.cart.push({products: Product, quantity: Quantity})
        this.calculateTotal(); 
    }

    calculateTotal() {
        let currentTotal = 0;
        for (const item of this.cart) {
            currentTotal += item.products.Price * item.quantity;
        }
        this.total = currentTotal;
    }

    showTransaction() {
        console.log("--- Detail Transaksi ---");
        for (const item of this.cart) {
            console.log(`${item.products.Name} x ${item.quantity} = Rp ${item.products.Price * item.quantity}`);
        }
        console.log("------------------------");
        console.log(`Total Belanja: Rp ${this.total}`);
    }
}

const Kentang = new Product("Kentang", 2000);
const Ayam = new Product("Daging Ayam 1kg", 35000);
const beras = new Product("Beras 1kg", 15000);

const transaksiTejo = new Transaction();

transaksiTejo.addProduct(Kentang, 2); 
transaksiTejo.addProduct(Ayam, 5); 
transaksiTejo.addProduct(beras, 1);

transaksiTejo.showTransaction();
