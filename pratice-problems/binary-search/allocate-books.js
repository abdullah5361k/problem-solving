const findPages = (arr, k) => {
  if (arr.length < k) return -1;

  let low = -Infinity;
  let high = 0;

  for (let i = 0; i < arr.length; i++) {
    low = Math.max(arr[i], low);
    high += arr[i];
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let sum = 0;
    let totalStd = 1;
    // Allocate books to std
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum > mid) {
        sum = arr[i];
        totalStd += 1;
      }
    }

    if (totalStd > k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

console.log(findPages([13, 31, 37, 45, 46, 54, 55, 63, 73, 84, 85], 9));
