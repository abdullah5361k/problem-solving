const setToZero = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  const row = new Array(n).fill(false);
  const col = new Array(m).fill(false);

  // Traverse on Matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) row[i] = col[j] = true;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};
