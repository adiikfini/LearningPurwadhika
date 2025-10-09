class product {
    name;
    price;
    constructor(_name,_price) {
        this.name = _name;
        this.price = _price;
    }
}

class Book extends product {
    author;
    publisher;

    constructor(_name, _price, _author, _publisher) {
        super(_name, _price);
        this.author = _author;
        this.publisher = _publisher;
    }
}