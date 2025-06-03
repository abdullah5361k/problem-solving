const kthElement = (a, b, k) => {
  // code here
  let i = 0;
  let j = 0;
  let cnt = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      cnt++, i++;
      if (cnt === k) return a[i - 1];
    } else {
      cnt++, j++;
      if (cnt === k) return b[j - 1];
    }
  }

  while (i < a.length) {
    cnt++, i++;
    if (cnt === k) return a[i - 1];
  }

  while (j < b.length) {
    cnt++, j++;
    if (cnt === k) return b[j - 1];
  }
};
