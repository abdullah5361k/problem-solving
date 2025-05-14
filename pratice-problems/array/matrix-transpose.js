const transposeOfAMatrix = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = i; j < mat.length; j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }

  return mat;
};

console.log(
  transposeOfAMatrix([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
