class User {
    name;
    #email;
    constructor(_name,_email) {
        this.name = _name;
        this.#email = _email;
    }
}

const user = new User("adiikfini", "adi.ikfini@gmail.com");
console.log(user);


/* class Bank -> saldo */

class Bank {
    #saldo;
    constructor(_saldo) {
        this.#saldo = _saldo;
        Object.freeze(this);
    }

    get Show(){
        console.log(this.#saldo);
    }

    set simpanSaldo(SaldoBaru){
        if (SaldoBaru <= 0) {
            console.log('Saldo Tidak boleh kosong');
        }else{
            this.#saldo = SaldoBaru;
        }
    }

}

const nasabah1 = new Bank(1000000);
nasabah1.saldo = -100000;
console.log(nasabah1);
nasabah1.Show;
nasabah1.simpanSaldo = 1500000;
nasabah1.Show;