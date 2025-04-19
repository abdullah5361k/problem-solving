const floydWarshallAlgo = (mat) => {
  const n = mat.length;

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][k] === Infinity || mat[k][j] === Infinity) continue;

        mat[i][j] = Math.min(mat[i][j], Math.min(mat[i][k], mat[k][i]));
      }
    }
  }

  return mat;
};
