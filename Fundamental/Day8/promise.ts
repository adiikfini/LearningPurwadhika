/* Promise

*/
const products = ['Laptop', 'Mouse', 'Monitor']

function deleteProcuxt() {
    console.log(`....Please wait`);
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (products.length > 0) {
                products.pop();
                resolve('Delete product successfull');
            }else {
                reject('Product already Empty')
            }
        }, 3000);
    })
}

function getProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products.length > 0) {
                resolve(console.log(products));
            }else{
                reject(`Product already Empty`)
            }
        }, 1000);
    })
}

deleteProcuxt()
    .then((respone) => {
        return getProduct();
    })
    .catch((error => {
        console.log(`.catch`);
        console.log(error);
    }))
    .finally(() => {
        console.log(`/finally`);
    })