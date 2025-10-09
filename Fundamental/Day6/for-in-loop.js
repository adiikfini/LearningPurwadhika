const product ={
    name : 'Indomilk',
    price: 700,
    weight: '70gr',
    flavour: ['Coklat', "nanas"]
};

for (const key in product) {
    if (!Object.hasOwn(product, key)) continue;
    const element = product[key];
    console.log(element);
}