const findPaths = (i, j, n, m, count) => {
  if (i === n - 1 && j === m - 1) {
    count[0]++;
    return;
  } else if (i >= n || j >= m) return;

  findPaths(i, j + 1, n, m, count); // Right
  findPaths(i + 1, j, n, m, count); // Bottom
};

var uniquePaths = function (m, n) {
  const ans = [0];
  findPaths(0, 0, m, n, ans);
  return ans[0];
};

uniquePaths(3, 2);
