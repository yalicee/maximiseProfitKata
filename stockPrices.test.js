const { stockPrices } = require("./stockPrices");
const stockData = require("./stockPrices.json");

describe("should take an argument of stock data (array of arrays) and return back an object showing the highest rise in stock value", () => {
  it("should return back an object", () => {
    expect(typeof stockPrices(stockData)).toBe("object");
  });
  it("should return an object with a key of name and maxProfit", () => {
    expect(Object.keys(stockPrices(stockData))).toEqual(["name", "maxProfit"]);
  });
  it("should find the max profit for an array of objects with one company stock", () => {
    const stocks = [
      [
        {
          name: "Apple",
          price: 120.25,
        },
      ],
      [
        {
          name: "Apple",
          price: 125.58,
        },
      ],
      [
        {
          name: "Apple",
          price: 130.68,
        },
      ],
      [
        {
          name: "Apple",
          price: 127.48,
        },
      ],
    ];
    const result = stockPrices(stocks);
    expect(result).toEqual({
      name: "Apple",
      maxProfit: 10.43,
    });
  });
  it("should find the max profit for an array of objects with multiple company stocks", () => {
    const stocks = [
      [
        { name: "Apple", price: 120.25 },
        { name: "Microsoft", price: 250.36 },
        { name: "Amazon", price: 1956.43 },
      ],
      [
        { name: "Apple", price: 125.58 },
        { name: "Microsoft", price: 253.12 },
        { name: "Amazon", price: 1978.63 },
      ],
      [
        { name: "Apple", price: 130.68 },
        { name: "Microsoft", price: 245.32 },
        { name: "Amazon", price: 1925.56 },
      ],
      [
        { name: "Apple", price: 127.48 },
        { name: "Microsoft", price: 252.55 },
        { name: "Amazon", price: 1989.23 },
      ],
    ];
    const result = stockPrices(stocks);
    expect(result).toEqual({ name: "Amazon", maxProfit: 63.67 });
  });
  it.only("should find the max profit for large data", () => {
    console.time();

    stockPrices(stockData);

    console.timeEnd();

    const result = stockPrices(stockData);
    expect(result).toEqual({ name: "Google", maxProfit: 59.15 });
  });
});
