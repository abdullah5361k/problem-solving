const subsets = (i, arr, sum, k) => {
  if (i === arr.length) {
    if (sum === k) {
      return true;
    }
    return false;
  }
  if (this.subsets(i + 1, arr, sum + arr[i], k)) return true; // Yes choice
  if (this.subsets(i + 1, arr, sum, k)) return true; // No choice
  return false;
};
