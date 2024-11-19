function maximizeProfitBySellingStock(array) {
    let buy = array[0];
    let maximumProfit = 0;

    // Loop
    for(let i=1; i<array.length; i++) {
        let profit = array[i] - buy;
        if(profit > 0) {
            maximumProfit = Math.max(maximumProfit, profit);
        } else {
            buy = array[i];
        }
    }


    // return the max profit
    return maximumProfit;
}

const array = [7, 1, 5, 3, 6, 4];

console.log(maximizeProfitBySellingStock(array));