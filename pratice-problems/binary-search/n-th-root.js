const nthRoot = (n, m) => {
  // code here
  let si = 0;
  let ei = m;

  while (si <= ei) {
    let mid = Math.floor((si + ei) / 2);
    let sq = Math.pow(mid, n);
    if (sq === m) return mid;
    if (sq < m) si = mid + 1;
    else ei = mid - 1;
  }

  return -1;
};
