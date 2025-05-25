const findMissingAndRepeatedValues = (grid) => {
  let n = grid.length;
  const freq = new Array(n * n + 1).fill(false);
  const ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (freq[grid[i][j]]) {
        ans.push(grid[i][j]); // Repetative numbers
      }
      freq[grid[i][j]] = true;
    }
  }

  for (let i = 1; i < freq.length; i++) {
    if (!freq[i]) ans.push(i);
  }
  return ans;
};
