const searchMatrix = (matrix, target) => {
  // O(log(n*m))
  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row < matrix.length) {
    if (target === matrix[row][col]) return true;
    else if (target > matrix[row][col]) row++;
    else if (target < matrix[row][col]) col--;
  }

  return false;
};
