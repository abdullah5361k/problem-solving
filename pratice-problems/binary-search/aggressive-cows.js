const aggressiveCows = (stalls, k) => {
  // your code here
  stalls.sort((a, b) => a - b);
  let low = 1;
  let high = -Infinity;
  for (let i = 0; i < stalls.length; i++) {
    high = Math.max(high, stalls[i]);
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); //
    let noOfCows = 1;
    let lastPlacedCow = stalls[0];
    for (let i = 1; i < stalls.length; i++) {
      let dist = stalls[i] - lastPlacedCow;
      if (dist >= mid) {
        lastPlacedCow = stalls[i];
        noOfCows += 1;
      }
    }

    if (noOfCows >= k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
};

aggressiveCows([1, 2, 4, 8, 9], 3);
