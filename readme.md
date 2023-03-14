# maximiseProfits

Write a function called `maximiseProfits` that takes in an array of stock prices over the course of several days and returns the single most profitable stock, with the maximum profit it could make over this time frame.

- The function will take one argument: an array of arrays.
- Each nested array represents a day and contains several objects.
- Each object represents a stock and the price of that stock on that particular day.

The function should return a single object with the stock `name` and `maxProfit` that can be made by buying and selling that stock.

You can only buy and sell the stock once.

The data will always have at least two days of information and will always contain at least one stock.

Every day will have the same set of stocks and their respective prices.

Use the stockPrices.json file for data. It contains 50 days of data for 5 different stocks.

For this example we will use one stock over 4 days;

```js
const stock = [
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

maximiseProfits(stock);

/*
    {
        name : "Apple",
        maxProfit : 10.43
    }
*/
```

In this example, "Apple" is the only stock. We want to buy on day 1 at `120.25` and sell at day 3 at `130.68` before the price goes down.

This leaves us with a maxProfit of 10.43

# Advanced Challenge

Try to optimise your code. Hint: use `console.time()` and `console.timeEnd()` to get a log of how fast your code runs

```js
console.time();

maximiseProfits(stockPrices);

console.timeEnd();

// This will log to the console something like:
//  default: 0.05ms
```
