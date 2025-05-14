const rotateImage = (matrix) => {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  let low = 0;
  let hight = n - 1;

  while (low < hight) {
    for (let i = 0; i < n; i++) {
      let temp = matrix[i][low];
      matrix[i][low] = matrix[i][hight];
      matrix[i][hight] = temp;
    }

    low++;
    hight--;
  }
};

const mat = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotateImage(mat);

console.log(mat);
