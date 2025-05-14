const sortColors = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 2) {
      arr[mid] = arr[high];
      arr[high] = 2;
      high--;
    } else if (arr[mid] === 0) {
      arr[mid] = arr[low];
      arr[low] = 0;
      mid++;
      low++;
    } else {
      mid++;
    }
  }

  return arr;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
