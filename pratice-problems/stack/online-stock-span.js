var StockSpanner = function () {
  this.stack = [];
  this.idx = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
    this.stack.pop();
  }

  let spanCount =
    this.idx -
    (this.stack.length === 0 ? -1 : this.stack[this.stack.length - 1][1]);

  this.stack.push([price, this.idx]);

  this.idx += 1;

  return spanCount;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // return 1
console.log(stockSpanner.next(80)); // return 1
console.log(stockSpanner.next(60)); // return 1
console.log(stockSpanner.next(70)); // return 2
console.log(stockSpanner.next(60)); // return 1
console.log(stockSpanner.next(75)); // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
console.log(stockSpanner.next(85)); // return 6
