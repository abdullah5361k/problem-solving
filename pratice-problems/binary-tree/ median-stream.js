var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let index = this._binarySearch(num);
  this.arr.splice(index, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.arr.length / 2);
  if (this.arr.length % 2 === 0) {
    return (this.arr[mid - 1] + this.arr[mid]) / 2;
  }

  return this.arr[mid];
};

MedianFinder.prototype._binarySearch = function (num) {
  let left = 0,
    right = this.arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (this.arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
