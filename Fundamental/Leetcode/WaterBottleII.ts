function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let totalDrank = numBottles;
    let currentEmpty = numBottles;
    while (currentEmpty >= numExchange) {
        currentEmpty -= numExchange;
        totalDrank++;
        currentEmpty++;
        numExchange++;
    }
    return totalDrank;
};

console.log(maxBottlesDrunk(13,6));
