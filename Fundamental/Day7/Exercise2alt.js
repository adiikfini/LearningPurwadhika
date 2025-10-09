class Transaction {
    total = 0;
    carts = [];

    addToCart(product) {
        this.carts.push(product);
    }

    showTotal() {
        return this.carts.reduce(
            (previousValue, currentValue) =>
                previousValue + currentValue.price * currentValue.quantity,
            0
        );
    }

    checkout() {
        const totalTransaction = this.showTotal();
        let printOut = '';

        for (let item of this.carts) {
            printOut += `${item.name} x ${item.quantity} = Rp.${(item.price * item.quantity).toLocaleString(
                'id-ID'
            )} \n`;
        }

        printOut += `Total = Rp.${totalTransaction.toLocaleString('id-ID')}`;
        console.log(printOut);
    }
}

class Product {
    name;
    price;
    quantity;

    constructor(_name, _price, _quantity) {
        this.name = _name;
        this.price = _price;
        this.quantity = _quantity;
    }
}

const products = [
    new Product('Indomie Goreng 110gr', 2000, 0),
    new Product('Indomie Ayam Bawang 90gr', 1950, 0),
    new Product('Gulaku Murni 1kg', 18000, 0),
];

const user1 = new Transaction();
user1.addToCart({ ...products[0], quantity: 10 });
user1.addToCart({ ...products[1], quantity: 1 });

user1.checkout();