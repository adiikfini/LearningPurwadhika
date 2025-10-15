function numWaterBottles(numBottles: number, numExchange: number): number {
    let result:number = 0;
    result += numBottles;
    while (numBottles > 1) {
        numBottles = (numBottles / numExchange);
        console.log(numBottles);
        result += numBottles;
    }

    return Math.floor(result);
};
console.log(numWaterBottles(9,3));


function numWaterBottlesalt(numBottles: number, numExchange: number): number {
    let totalDrank = numBottles;
    let emptyBottles = numBottles;

    // Terus tukar selama botol kosong mencukupi
    while (emptyBottles >= numExchange) {
        // 1. Hitung berapa botol BARU yang bisa didapat dari penukaran
        let newBottles = Math.floor(emptyBottles / numExchange);

        // 2. Minum botol-botol baru tersebut
        totalDrank += newBottles;

        // 3. Update jumlah botol kosong:
        //    (sisa botol kosong yang tidak bisa ditukar + botol baru yang sekarang jadi kosong)
        emptyBottles = (emptyBottles % numExchange) + newBottles;
    }

    return totalDrank;
};

console.log(numWaterBottlesalt(9, 3));   // Output: 13
console.log(numWaterBottlesalt(15, 4));  // Output: 19