function maxProfit(prices: number[]): number {
    if (prices === null || prices.length < 2) {
        return 0;
    }

    let minPrice = prices[0]; 
    let maxProfit = 0;        

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
    
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
