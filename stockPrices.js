function stockPrices(stockData) {
  let maxProfit = 0;
  const maxProfitStock = {};

  const findMaxProfit = (stocks, minPrice) => {
    //base
    if (stocks.length === 0) {
      return;
    }

    const currStockPrice = stocks[0].price;

    if (currStockPrice < minPrice) {
      minPrice = currStockPrice;
    }

    const potentialProfit = currStockPrice - minPrice;

    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;

      maxProfitStock.name = stocks[0].name;

      maxProfitStock.maxProfit = +maxProfit.toFixed(2);
    }

    const resursiveStep = stocks.slice(1);

    findMaxProfit(resursiveStep, minPrice);
  };

  for (let i = 0; i < stockData[0].length; i++) {
    const stock = stockData[0][i];
    const minPrice = stock.price;

    const sortedStocks = stockData.map((day) => {
      return day.find((s) => s.name === stock.name);
    });

    console.log(sortedStocks);

    findMaxProfit(sortedStocks, minPrice);
  }

  return maxProfitStock;
}

module.exports = {
  stockPrices,
};
